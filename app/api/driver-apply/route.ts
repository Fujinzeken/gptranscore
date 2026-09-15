import { NextResponse } from "next/server";
import { notifyDriver } from "../../lib/telegram";

/**
 * POST /api/driver-apply
 *
 * Receives the Quick Qualification form from the driver apply modal and
 * forwards it to the Apps Script Web App, which appends a row to the
 * "Driver Applications" tab of the same spreadsheet as quote requests.
 * The Apps Script URL lives in the environment, never in the browser.
 */

const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL ?? "";

const REQUIRED = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "city",
  "state",
  "zip",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Free-text fields are capped; booleans become Yes/No for the sheet.
const TEXT_FIELDS = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "city",
  "state",
  "zip",
  "preferredContact",
  "cdlClass",
  "cdlState",
  "yearsExperience",
  "recentEmployer",
] as const;

const BOOL_FIELDS = [
  "hasMedicalCard",
  "passDrugScreen",
  "clearinghouseProhibit",
  "failedDrugTestBefore",
  "dui5y",
  "reckless5y",
  "seriousAccident12m",
  "truckAbandonment",
  "hasFelonyHistory",
  "passInspectionTest",
  "passRoadSkillsTest",
  "physicallyAble",
  "reportHonestly",
] as const;

const COUNT_FIELDS = [
  "movingViolations3y",
  "movingViolations12m",
  "majorHosViolations6m",
  "preventableAccidents3y",
  "cdlJobs12m",
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
    values[key] = typeof body[key] === "string" ? (body[key] as string).trim().slice(0, 1000) : "";
  }
  for (const key of BOOL_FIELDS) {
    values[key] = body[key] === true ? "Yes" : body[key] === false ? "No" : "";
  }
  for (const key of COUNT_FIELDS) {
    const n = body[key];
    values[key] = typeof n === "number" && Number.isFinite(n) ? String(n) : "0";
  }

  const missing = REQUIRED.filter((key) => !values[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(values.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 422 });
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

  const payload = JSON.stringify({ form: "driver", timestamp, ...values });
  console.log(
    "[driver-apply] forwarding to Apps Script:",
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
    console.error("[driver-apply] fetch to Apps Script threw:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the application service." },
      { status: 502 },
    );
  }

  const text = await res.text();
  console.log(`[driver-apply] Apps Script responded ${res.status}:`, text.slice(0, 500) || "(empty body)");

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

  // Apps Script returns HTTP 200 even when doPost throws — the script's
  // try/catch answers {"ok":false,"error":…} with a 200. Honor the body.
  let script: { ok?: boolean; error?: string } | null = null;
  try {
    script = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    console.error("[driver-apply] non-JSON body from Apps Script:", text.slice(0, 300));
    return NextResponse.json(
      { ok: false, error: "Could not record the application.", detail: text.slice(0, 300) },
      { status: 502 },
    );
  }

  if (script.ok === false) {
    console.error("[driver-apply] Apps Script reported failure:", script.error);
    return NextResponse.json(
      { ok: false, error: "Could not record the application.", detail: script.error },
      { status: 502 },
    );
  }

  // Application is safely in the sheet — fire the Telegram notification.
  // A Telegram failure never fails the request; notifyDriver logs its own errors.
  const delivered = await notifyDriver(values, timestamp);
  console.log(`[driver-apply] telegram notification ${delivered ? "sent" : "failed/skipped"}`);

  return NextResponse.json({ ok: true });
}
