"use client";

import { SMS_CONSENT_TEXT } from "@/app/lib/sms-consent";
import { cx } from "./ui";

const [LEAD] = SMS_CONSENT_TEXT.split(" Learn more");

/**
 * Optional SMS consent checkbox. Unticked by default and never required to
 * submit — consent to texts can't be a condition of sending the form.
 */
export function SmsConsent({
  checked,
  onChange,
  className,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}) {
  return (
    <label className={cx("flex cursor-pointer items-start gap-3", className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-[3px] size-4 shrink-0 cursor-pointer accent-azure"
      />
      <span className="text-[12px] leading-[1.55] text-soft-text">
        {LEAD} Learn more on our{" "}
        <a
          href="/privacy"
          target="_blank"
          className="font-semibold text-azure hover:underline"
        >
          Privacy Policy Page
        </a>
        .
      </span>
    </label>
  );
}
