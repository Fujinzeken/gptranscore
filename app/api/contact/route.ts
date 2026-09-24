import { NextResponse } from "next/server";
import { notifyContact } from "../../lib/telegram";

/**
 * POST /api/contact
 *
 * Receives the routed contact form from /contact. The CSV's build
 * requirement is separate addresses per audience, so the payload carries a
 * `route` id — quotes / operations / recruiting / vendors — which travels to
 * the Apps Script row (form "contact") and into the Telegram alert, which
 * spells the route out rather than echoing the id.
 *
 * Sheet side: all four routes currently land in one tab. The per-route tabs
 * are the Apps Script change tracked in OPEN-ITEMS; the wire format already
 * carries what that split needs (the `route` tag on every row).
 *
 * Apps Script URL lives in the environment, never in the browser.
 * Telegram mirrors /api/quick-apply: convenience channel, never fails the
 * request.
 */

const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL ?? "";

const ROUTES = ["quotes", "operations", "recruiting", "vendors"] as const;

const TEXT_FIELDS = [
  "route",
  "name",
  "email",
  "phone",
  "hours",
  "message",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s()+.-]{7,20}$/;

export async function POST(req: Request) {
  if (!WEBAPP_URL) {
    return NextResponse.json(
      { ok: false, error: "Contact service is not configured." },
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
      typeof body[key] === "string" ? (body[key] as string).trim().slice(0, 1000) : "";
  }

  // Route, name and email are required on every route; phone is required on
  // all but the vendors route (email-first by design).
  const required = ["route", "name", "email", ...(values.route === "vendors" ? [] : ["phone"])];
  const missing = required.filter((key) => !values[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 422 },
    );
  }

  if (!ROUTES.includes(values.route as (typeof ROUTES)[number])) {
    return NextResponse.json({ ok: false, error: "Invalid route." }, { status: 422 });
  }
  if (!EMAIL_RE.test(values.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 422 });
  }
  if (values.phone && !PHONE_RE.test(values.phone)) {
    return NextResponse.json({ ok: false, error: "Invalid phone." }, { status: 422 });
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

  const payload = JSON.stringify({ form: "contact", timestamp, ...values });
  console.log(
    "[contact] forwarding to Apps Script:",
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
    console.error("[contact] fetch to Apps Script threw:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the contact service." },
      { status: 502 },
    );
  }

  const text = await res.text();
  console.log(
    `[contact] Apps Script responded ${res.status}:`,
    text.slice(0, 500) || "(empty body)",
  );

  if (!res.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Could not record the message.",
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
    console.error("[contact] non-JSON body from Apps Script:", text.slice(0, 300));
    return NextResponse.json(
      { ok: false, error: "Could not record the message.", detail: text.slice(0, 300) },
      { status: 502 },
    );
  }

  if (script.ok === false) {
    console.error("[contact] Apps Script reported failure:", script.error);
    return NextResponse.json(
      { ok: false, error: "Could not record the message.", detail: script.error },
      { status: 502 },
    );
  }

  // Message is safely in the sheet — fire the Telegram notification.
  const delivered = await notifyContact(values, timestamp);
  console.log(`[contact] telegram notification ${delivered ? "sent" : "failed/skipped"}`);

  return NextResponse.json({ ok: true });
}
