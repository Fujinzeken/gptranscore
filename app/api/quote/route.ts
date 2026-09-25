import { NextResponse } from "next/server";
import { notifyQuote } from "../../lib/telegram";
import { smsConsentFields } from "../../lib/sms-consent";

/**
 * POST /api/quote
 *
 * Receives the quote request from the modal, validates it, then forwards it to
 * the Google Apps Script Web App bound to the leads spreadsheet. The Apps
 * Script URL lives in the environment so it is never shipped to the browser.
 *
 * The Apps Script (deployed as a Web App, access: "anyone") accepts this JSON
 * payload and appends one formatted row to the sheet:
 *
 *   function doPost(e) {
 *     const data = JSON.parse(e.postData.contents);
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
 *     sheet.appendRow([data.timestamp, data.company, ...]);
 *     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 */

const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL ?? "";

const REQUIRED = ["company", "contact", "email", "phone", "pickupLocation", "deliveryLocation", "pickupDate"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  if (!WEBAPP_URL) {
    return NextResponse.json(
      { ok: false, error: "Quote service is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  // Only known fields are forwarded, stringified — never pass raw input on.
  const fields = [
    "company",
    "contact",
    "email",
    "phone",
    "pickupLocation",
    "pickupFacility",
    "deliveryLocation",
    "deliveryFacility",
    "pickupDate",
    "flexibility",
    "equipment",
    "weight",
    "commodity",
    "notes",
  ];

  const values: Record<string, string> = {};
  for (const key of fields) {
    values[key] = typeof body[key] === "string" ? (body[key] as string).trim().slice(0, 2000) : "";
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

  // Central Time matches the sales team's wall clock; same format as the sheet.
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  Object.assign(values, smsConsentFields(body, req, timestamp));

  // Apps Script answers redirects with 302, so follow them.
  // Content-Type is text/plain to avoid the Apps Script pre-flight CORS preambles.
  const payload = JSON.stringify({ form: "quote", timestamp, ...values });
  console.log("[quote] forwarding to Apps Script:", WEBAPP_URL.replace(/\/macros\/s\/[^/]+/, "/macros/s/<id>"));
  console.log("[quote] payload:", payload);

  let res: Response;
  try {
    res = await fetch(WEBAPP_URL, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: payload,
    });
  } catch (err) {
    // Network/DNS failure reaching Apps Script itself.
    console.error("[quote] fetch to Apps Script threw:", err);
    return NextResponse.json(
      { ok: false, error: "Could not reach the quote service." },
      { status: 502 },
    );
  }

  const text = await res.text();
  console.log(`[quote] Apps Script responded ${res.status}:`, text.slice(0, 500) || "(empty body)");

  if (!res.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Could not record the quote request.",
        // Surfaced in the dev overlay so the failure is visible without the terminal.
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
    // Non-JSON 200 body is suspicious (login page, HTML error) — treat as failure.
    console.error("[quote] non-JSON body from Apps Script:", text.slice(0, 300));
    return NextResponse.json(
      { ok: false, error: "Could not record the quote request.", detail: text.slice(0, 300) },
      { status: 502 },
    );
  }

  if (script.ok === false) {
    console.error("[quote] Apps Script reported failure:", script.error);
    return NextResponse.json(
      { ok: false, error: "Could not record the quote request.", detail: script.error },
      { status: 502 },
    );
  }

  // Lead is safely in the sheet — fire the Telegram notification. A Telegram
  // failure must never fail the request (the sheet is the source of truth);
  // notifyQuote swallows and logs its own errors.
  const delivered = await notifyQuote(values, timestamp);
  console.log(`[quote] telegram notification ${delivered ? "sent" : "failed/skipped"}`);

  return NextResponse.json({ ok: true });
}
