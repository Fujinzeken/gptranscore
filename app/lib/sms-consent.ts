/**
 * SMS consent — the checkbox wording from the original pktgroup.net forms.
 * The text is stored with every submission that ticks the box, so changing
 * it changes what future consent records say; keep the Terms page's SMS
 * section in step with it.
 */
export const SMS_CONSENT_TEXT =
  "By checking this box, I consent to receive text messages from PKT Transportation INC related to conversational purposes, appointment reminders, follow-up on cases, order confirmations, etc. You may reply STOP to opt-out at any time. For assistance reply HELP. Messages and data rates may apply. Message frequency will vary. Learn more on our Privacy Policy Page.";

/**
 * The consent record for one submission: whether the box was ticked, the
 * exact wording shown, when, and the page it was ticked on.
 */
export function smsConsentFields(
  body: Record<string, unknown>,
  req: Request,
  timestamp: string,
): Record<string, string> {
  const agreed = body.smsConsent === true;

  let source = typeof body.source === "string" ? body.source : "";
  if (!source.startsWith("/")) {
    try {
      source = new URL(req.headers.get("referer") ?? "").pathname;
    } catch {
      source = "";
    }
  }

  return {
    smsConsent: agreed ? "Yes" : "No",
    smsConsentText: agreed ? SMS_CONSENT_TEXT : "",
    smsConsentAt: agreed ? timestamp : "",
    smsConsentSource: source.slice(0, 200),
  };
}
