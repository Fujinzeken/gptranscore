import { NextResponse } from "next/server";
import { notifyDriver } from "../../lib/telegram";

/**
 * POST /api/quick-apply
 *
 * Receives the Quick Apply form from /careers/apply — the CSV's six fields,
 * nothing more — and forwards it to the same Apps Script Web App used by the
 * full driver application, tagged form "driver" with quick: true so the row
 * lands in the same "Driver Applications" tab with the reduced field set
 * (columns the quick form doesn't carry stay blank).
 *
 * Telegram notification mirrors /api/driver-apply: convenience channel,
 * never fails the request.
 */

const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL ?? "";

const REQUIRED = [
  "firstName",
  "lastName",
  "phone",
  "state",
  "yearsExperience",
  "applyingAs",
] as const;

const TEXT_FIELDS = [
  "firstName",
  "lastName",
  "phone",
  "state",
  "yearsExperience",
  "applyingAs",
] as const;

export async function POST(req: Request) {
  if (!WEBAPP_URL) {
    return NextResponse.json(
      { ok: false, error: "Application service is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const key of TEXT_FIELDS) {
    values[key] =
      typeof body[key] === "string" ? (body[key] as string).trim().slice(0, 200) : "";
  }

  const missing = REQUIRED.filter((key) => !values[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 422 },
    );
  }

  if (!/^[\d\s()+.-]{7,20}$/.test(values.phone)) {
    return NextResponse.json({ ok: false, error: "Invalid phone." }, { status: 422 });
  }

  if (!["Company Driver", "Owner-Operator"].includes(values.applyingAs)) {
    return NextResponse.json({ ok: false, error: "Invalid driver type." }, { status: 422 });
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  const payload = JSON.stringify({ form: "driver", quick: true, timestamp, ...values });
  console.log(
    "[quick-apply] forwarding to Apps Script:",
    WEBAPP_URL.replace(/\/macros\/s\/[^/]+/, "/macros/s/<id>"),
    `(payload ${payload.length} chars)`,
  );

  let res: Response;
  try {
    res = await fetch(WEBAPP_URL, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: payload,
    });
  } catch (err) {
    console.error("[quick-apply] fetch to Apps Script threw:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the application service." },
      { status: 502 },
    );
  }

  const text = await res.text();
  console.log(
    `[quick-apply] Apps Script responded ${res.status}:`,
    text.slice(0, 500) || "(empty body)",
  );

  if (!res.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Could not record the application.",
        detail: text.slice(0, 300) || `Apps Script returned HTTP ${res.status}`,
      },
      { status: 502 },
    );
  }

  // Apps Script returns HTTP 200 even when doPost throws — honor the body.
  let script: { ok?: boolean; error?: string } | null = null;
  try {
    script = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    console.error("[quick-apply] non-JSON body from Apps Script:", text.slice(0, 300));
    return NextResponse.json(
      { ok: false, error: "Could not record the application.", detail: text.slice(0, 300) },
      { status: 502 },
    );
  }

  if (script.ok === false) {
    console.error("[quick-apply] Apps Script reported failure:", script.error);
    return NextResponse.json(
      { ok: false, error: "Could not record the application.", detail: script.error },
      { status: 502 },
    );
  }

  const delivered = await notifyDriver(values, timestamp);
  console.log(`[quick-apply] telegram notification ${delivered ? "sent" : "failed/skipped"}`);

  return NextResponse.json({ ok: true });
}