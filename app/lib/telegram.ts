/**
 * Shared Telegram notification helper.
 *
 * Sends a lead notification to the configured contact chat via the Bot API.
 * Both lead routes (quote / driver-apply) call this after the row has been
 * recorded in Google Sheets.
 *
 * Env vars (in .env / .env.local, server-side only):
 *   TELEGRAM_BOT_TOKEN       - token from @BotFather
 *   TELEGRAM_CONTACT_CHAT_ID - chat/group id that receives the notifications
 *
 * Design rule: Telegram is a convenience channel — if it fails, the lead is
 * already safe in the sheet, so the helper never throws and callers return
 * success to the browser regardless. Failures are only logged.
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? "";
const CHAT_ID = process.env.TELEGRAM_CONTACT_CHAT_ID ?? "";

/** Escape user-supplied text for Telegram's HTML parse mode. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Renders a "Label: value" line only when the value is non-empty. */
function line(label: string, value: string): string {
  return value ? `<b>${esc(label)}:</b> ${esc(value)}\n` : "";
}

export async function sendTelegramMessage(html: string): Promise<boolean> {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.warn(
      "[telegram] TELEGRAM_BOT_TOKEN / TELEGRAM_CONTACT_CHAT_ID not set — notification skipped.",
    );
    return false;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: html,
        parse_mode: "HTML",
        link_preview_options: { is_disabled: true },
      }),
      signal: AbortSignal.timeout(10_000),
    });

    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; description?: string }
      | null;

    if (!res.ok || !data?.ok) {
      console.error(
        `[telegram] sendMessage failed (${res.status}):`,
        data?.description ?? "(no body)",
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error("[telegram] sendMessage threw:", err);
    return false;
  }
}

/** Builds and sends the quote-request notification. */
export function notifyQuote(values: Record<string, string>, timestamp: string): Promise<boolean> {
  const html =
    `🚚 <b>New Quote Request</b>\n\n` +
    line("Company", values.company) +
    line("Contact", values.contact) +
    line("Phone", values.phone) +
    line("Email", values.email) +
    line("Pickup", values.pickupLocation) +
    line("Pickup Facility", values.pickupFacility) +
    line("Delivery", values.deliveryLocation) +
    line("Delivery Facility", values.deliveryFacility) +
    line("Pickup Date", values.pickupDate) +
    line("Flexibility", values.flexibility) +
    line("Equipment", values.equipment) +
    line("Weight", values.weight) +
    line("Commodity", values.commodity) +
    line("Notes", values.notes) +
    `\n<i>Received ${esc(timestamp)} CT</i>`;

  return sendTelegramMessage(html);
}

/** Builds and sends the driver-application notification. */
export function notifyDriver(values: Record<string, string>, timestamp: string): Promise<boolean> {
  const html =
    `🚛 <b>New Driver Application</b>\n\n` +
    line("Name", `${values.firstName} ${values.lastName}`) +
    line("Phone", values.phone) +
    line("Email", values.email) +
    line("Location", `${values.city}, ${values.state} ${values.zip}`) +
    line("Preferred Contact", values.preferredContact) +
    line("CDL Class", values.cdlClass) +
    line("CDL State", values.cdlState) +
    line("Experience", values.yearsExperience) +
    line("Recent Employer", values.recentEmployer) +
    line("Medical Card", values.hasMedicalCard) +
    line("Pass Drug Screen", values.passDrugScreen) +
    line("DUI/DWI (5y)", values.dui5y) +
    line("Moving Violations (3y)", values.movingViolations3y) +
    line("Preventable Accidents (3y)", values.preventableAccidents3y) +
    `\n<i>Received ${esc(timestamp)} CT</i>`;

  return sendTelegramMessage(html);
}