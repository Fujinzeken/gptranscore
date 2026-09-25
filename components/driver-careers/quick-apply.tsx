"use client";

import {
  ArrowRight,
  CheckCircle,
  Phone,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Reveal, revealItem } from "../reveal";
import { SmsConsent } from "../sms-consent";
import { btn, btnOutline, btnHero, btnSolid, cx, label } from "../ui";

/**
 * Quick apply page section (/careers/apply — CAREERS — APPLY row of the
 * content pack). Copy is CSV-verbatim. The form posts the CSV's six fields
 * to /api/quick-apply; the after-submit message carries the confirmed
 * recruiting window (Mon–Sat, 8 AM–5 PM CDT) and phone from the notes.
 */

const FACTS: Array<[string, string]> = [
  ["Questions", "Four — about a minute"],
  ["Resume", "Not needed"],
  ["Uploads", "None"],
  ["Account", "Nothing to create"],
  ["After you send it", "We call you during business hours"],
];

const inputCls =
  "w-full rounded-xl border border-line bg-page px-4 py-3 text-[15px] text-ink-text " +
  "placeholder:text-soft-text/70 outline-none transition-colors duration-200 " +
  "focus:border-azure focus:ring-2 focus:ring-azure/20";

export type ApplyingAs = "Company Driver" | "Owner-Operator";

export function QuickApply({
  initialApplyingAs = "Company Driver",
}: {
  initialApplyingAs?: ApplyingAs;
}) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    state: "",
    yearsExperience: "",
    applyingAs: initialApplyingAs as string,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const set =
    (k: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  async function sendIt(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (
      !values.firstName ||
      !values.lastName ||
      !values.phone ||
      !values.state ||
      !values.yearsExperience
    ) {
      setError("Fill in every field — they're all quick.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/quick-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, smsConsent, source: "/careers/apply" }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!res.ok || !data?.ok) {
        setError(data?.error ?? "Could not send it — try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Could not send it — check your connection and try again.");
      setStatus("error");
    }
  }

return (
    <section id="apply" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-w-[1200px] mx-auto max-[1000px]:grid-cols-1">
          {/* Left: the readout plate. */}
          <div
            style={{ "--i": 0 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-ink p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-6">
              <SteeringWheel size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Quick apply</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {FACTS.map(([term, detail]) => (
                <li
                  key={term}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b border-rule py-4 max-[420px]:grid-cols-1 max-[420px]:gap-1"
                >
                  <span className={cx(label, "m-0 text-mute-2")}>{term}</span>
                  <span className="text-[clamp(14px,1.05vw,16px)] leading-[1.5] text-paper">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: the form — or the confirmation once it's sent. */}
          <div className="col-span-7 max-[1000px]:col-span-1">
            {status === "sent" ? (
              <SentPanel />
            ) : (
              <ApplyForm
                values={values}
                set={set}
                smsConsent={smsConsent}
                onSmsConsent={setSmsConsent}
                error={error}
                sending={status === "sending"}
                onSend={sendIt}
              />
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

type ApplyFormProps = {
  values: {
    firstName: string;
    lastName: string;
    phone: string;
    state: string;
    yearsExperience: string;
    applyingAs: string;
  };
  set: (
    k: "firstName" | "lastName" | "phone" | "state" | "yearsExperience" | "applyingAs",
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  smsConsent: boolean;
  onSmsConsent: (checked: boolean) => void;
  error: string;
  sending: boolean;
  onSend: (e: React.FormEvent) => void;
};

function ApplyForm({
  values,
  set,
  smsConsent,
  onSmsConsent,
  error,
  sending,
  onSend,
}: ApplyFormProps) {
  return (
    <form
      onSubmit={onSend}
      className="bg-surface border border-line rounded-2xl p-[clamp(24px,3.4vw,48px)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {(
          [
            ["First name", "firstName", "text", "text", "given-name", ""],
            ["Last name", "lastName", "text", "text", "family-name", ""],
            ["Phone", "phone", "tel", "tel", "tel", "(331) 555-0123"],
            ["State", "state", "text", "text", "address-level1", "Illinois"],
            ["Years of CDL-A experience", "yearsExperience", "text", "text", "", "e.g. 5"],
          ] as const
        ).map(([lab, key, type, , ac, placeholder]) => (
          <label key={key} className="block">
            <span className={cx(label, "mb-2 block text-body-text")}>{lab}</span>
            <input
              type={type}
              value={values[key]}
              onChange={set(key)}
              autoComplete={ac || undefined}
              placeholder={placeholder || undefined}
              className={inputCls}
            />
          </label>
        ))}
        <label className="block">
          <span className={cx(label, "mb-2 block text-body-text")}>
            Applying as
          </span>
          <select
            value={values.applyingAs}
            onChange={set("applyingAs")}
            className={cx(inputCls, "cursor-pointer")}
          >
            <option>Company Driver</option>
            <option>Owner-Operator</option>
          </select>
        </label>
      </div>

      <SmsConsent checked={smsConsent} onChange={onSmsConsent} className="mt-5" />

      {error && (
        <p className="m-0 mt-4 text-sm font-medium text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className={cx(
          btn,
          btnHero,
          btnSolid,
          "mt-7 w-full justify-center cursor-pointer disabled:opacity-60",
        )}
      >
        {sending ? "Sending…" : "Send It"}
        <ArrowRight size={18} weight="bold" />
      </button>

      <p className="m-0 mt-4 flex items-center justify-center gap-2 text-xs font-mono text-soft-text">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Mon–Sat · 8 AM–5 PM CDT · No resume, no uploads, no account
      </p>
    </form>
  );
}

function SentPanel() {
  return (
    <div className="bg-surface border border-line rounded-2xl p-[clamp(28px,4vw,56px)] text-center">
      <CheckCircle size={40} weight="bold" className="mx-auto text-azure" />
      <h2 className="font-display m-0 mt-5 text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.015em] text-ink-text">
        It&rsquo;s in. We&rsquo;ll call you.
      </h2>
      <p className="m-0 mt-4 mx-auto max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
        We&rsquo;ll call you during business hours — Monday through Saturday,
        8 AM to 5 PM CDT. Prefer to call us?
      </p>
      <a href="tel:+12246660136" className={cx(btn, btnHero, btnOutline, "mt-7")}>
        <Phone size={17} weight="bold" />
        +1 (224) 666-0136
      </a>
    </div>
  );
}