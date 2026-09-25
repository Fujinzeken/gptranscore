"use client";

import {
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
  Headset,
  Handshake,
  Package,
  Phone,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { SmsConsent } from "../sms-consent";
import { btn, btnHero, btnOutline, btnSolid, cx, label } from "../ui";

/**
 * Contact page (/contact — CONTACT row of the content pack). One page, four
 * routes: the left dark plate is the route selector (the dispatch-board
 * readout grammar), and the form on the right reconfigures per route —
 * quotes and ops carry phone+email, recruiting adds best-time hours,
 * vendors is email-first. Per-route posting mirrors /api/quick-apply;
 * unconfirmed phones/emails ([PHONE]/[EMAIL]/[HOURS] in the CSV) are not
 * invented — the build-requirement note is in OPEN-ITEMS. PKT uses one line,
 * (224) 666-0136, and one inbox, safety@pktgroup.net, for every route.
 */

type RouteId = "quotes" | "operations" | "recruiting" | "vendors";

const PHONE: [string, string, string] = ["Phone", "+1 (224) 666-0136", "tel:+12246660136"];
const EMAIL: [string, string, string] = ["Email", "safety@pktgroup.net", "mailto:safety@pktgroup.net"];

const ROUTES: Array<{
  id: RouteId;
  icon: typeof Package;
  title: string;
  /** Who reads it — used in the after-submit confirmation. */
  team: string;
  body: string;
  /** [term, detail, optional tel:/mailto: href]. */
  facts: Array<[string, string, string?]>;
}> = [
  {
    id: "quotes",
    icon: Package,
    title: "New freight & quotes",
    team: "quoting desk",
    body: "Tell us the lane and the pickup date — a clear answer on availability.",
    facts: [
      ["Best for", "New lanes, one-off loads"],
      PHONE,
      EMAIL,
      ["Answer", "A clear response the same day"],
    ],
  },
  {
    id: "operations",
    icon: Headset,
    title: "Existing customers & operations",
    team: "operations desk",
    body: "Active shipment? You reach the team managing it — the same people who dispatched it.",
    facts: [
      ["Best for", "Loads already moving"],
      PHONE,
      EMAIL,
      ["Dispatch", "Available around the clock, 24/7"],
    ],
  },
  {
    id: "recruiting",
    icon: SteeringWheel,
    title: "Driver recruiting",
    team: "recruiting team",
    body: "Company driver or owner-operator — two minutes on the phone, no application to start.",
    facts: [
      ["Best for", "CDL-A drivers and owner-ops"],
      PHONE,
      EMAIL,
      ["Hours", "Mon–Sat · 8 AM–5 PM CDT"],
    ],
  },
  {
    id: "vendors",
    icon: Handshake,
    title: "Vendors & general",
    team: "vendor inbox",
    body: "Partnerships, suppliers and everything that isn't a load — read by a human.",
    facts: [
      ["Best for", "Suppliers, partnerships, other"],
      PHONE,
      EMAIL,
      ["Answer", "Read and answered by a person"],
    ],
  },
];

/**
 * The exact fields each route's form renders. Switching routes resets
 * anything the new form doesn't show, and submit posts only these keys —
 * a lane typed under quotes must never leak into the recruiting or
 * operations payload as a phantom "Details" value.
 */
const EMPTY_VALUES = { name: "", email: "", phone: "", hours: "", message: "" };
type ValueKey = keyof typeof EMPTY_VALUES;

const ROUTE_FIELDS: Record<RouteId, ValueKey[]> = {
  quotes: ["name", "email", "phone", "message"],
  operations: ["name", "email", "phone", "hours", "message"],
  recruiting: ["name", "email", "phone", "hours"],
  vendors: ["name", "email", "message"],
};

const inputCls =
  "w-full rounded-xl border border-line bg-page px-4 py-3 text-[15px] text-ink-text " +
  "placeholder:text-soft-text/70 outline-none transition-colors duration-200 " +
  "focus:border-azure focus:ring-2 focus:ring-azure/20";

export function ContactForm() {
  const [routeId, setRouteId] = useState<RouteId>("quotes");
  const [values, setValues] = useState(EMPTY_VALUES);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const set =
    (k: keyof typeof values) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  async function sendIt(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!values.name || !values.email) {
      setError("Name and email are required.");
      return;
    }
    if (routeId !== "vendors" && !values.phone) {
      setError("Add a phone number — or switch to the vendors route.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          route: routeId,
          ...Object.fromEntries(
            ROUTE_FIELDS[routeId].map((k) => [k, values[k]]),
          ),
          smsConsent: ROUTE_FIELDS[routeId].includes("phone") && smsConsent,
          source: "/contact",
        }),
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

  const active = ROUTES.findIndex((r) => r.id === routeId);

return (
    <section id="routes" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-w-[1200px] mx-auto max-[1000px]:grid-cols-1">
          {/* Left: the route selector, as a dispatch readout plate. */}
          <div
            style={{ "--i": 0 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-ink p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-5">
              <Headset size={26} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Routing board</span>
            </div>

            <ul className="m-0 list-none border-t border-rule">
              {ROUTES.map((r) => {
                const on = r.id === routeId;
                const Icon = r.icon;
                return (
                  <li key={r.id} className="border-b border-rule">
                    <button
                      type="button"
                      onClick={() => {
                        setRouteId(r.id);
                        // Only name/email exist on every form — anything the
                        // previous form collected that this one doesn't show
                        // would otherwise ride along in the payload.
                        setValues((prev) => ({
                          ...EMPTY_VALUES,
                          name: prev.name,
                          email: prev.email,
                        }));
                        setStatus("idle");
                        setError("");
                      }}
                      aria-current={on ? "true" : undefined}
                      className={cx(
                        "group flex w-full cursor-pointer items-center gap-3 py-4 text-left transition-colors",
                        on ? "text-paper" : "text-mute hover:text-paper",
                      )}
                    >
                      <Icon
                        size={18}
                        weight={on ? "bold" : "regular"}
                        className={
                          on ? "text-azure-hi" : "text-mute-2 group-hover:text-azure"
                        }
                      />
                      <span className="font-display flex-1 text-[clamp(15px,1.3vw,18px)] font-bold leading-[1.15] tracking-[-0.01em]">
                        {r.title}
                      </span>
                      {on && (
                        <span className="size-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* The selected route's facts, as a ruled readout. */}
            <ul className="m-0 mt-6 list-none">
              {ROUTES[active].facts.map(([term, detail, tel]) => (
                <li
                  key={term}
                  className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 py-2.5"
                >
                  <span className={cx(label, "m-0 text-mute-2")}>{term}</span>
                  {tel ? (
                    <a
                      href={tel}
                      className="inline-flex items-center gap-2 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.5] text-paper transition-colors duration-200 hover:text-azure-hi"
                    >
                      {tel.startsWith("mailto:") ? (
                        <EnvelopeSimple size={13} weight="bold" className="text-azure-hi" />
                      ) : (
                        <Phone size={13} weight="bold" className="text-azure-hi" />
                      )}
                      {detail}
                    </a>
                  ) : (
                    <span className="text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.5] text-paper">
                      {detail}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: the form, reconfigured per route. */}
          <div className="col-span-7 max-[1000px]:col-span-1">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-start justify-center bg-surface border border-line rounded-2xl p-[clamp(28px,4vw,56px)]">
                <CheckCircle size={40} weight="bold" className="text-azure" />
                <h2 className="font-display m-0 mt-5 max-w-[14em] text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.015em] text-ink-text">
                  Sent to the right queue.
                </h2>
                <p className="m-0 mt-4 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
                  Your message lands with the{" "}
                  <strong className="text-ink-text">
                    {ROUTES[active].team}
                  </strong>{" "}
                  — not a shared inbox. Expect an answer from a person.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className={cx(btn, btnHero, btnOutline, "mt-7")}
                >
                  Send another
                </button>
              </div>
            ) : (
              <ContactFields
                route={ROUTES[active]}
                routeId={routeId}
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

        <OfficeBlock />
      </Reveal>
    </section>
  );
}

function OfficeBlock() {
  return (
    <dl
      style={{ "--i": 2 } as React.CSSProperties}
      className={cx(
        revealItem,
        "m-0 mx-auto mt-[clamp(36px,6vh,64px)] grid max-w-[1200px] grid-cols-3 gap-px bg-line border border-line",
        "max-[860px]:grid-cols-1",
      )}
    >
      <div className="bg-surface px-[clamp(20px,2.4vw,32px)] py-6">
        <dt className={cx(label, "m-0 text-soft-text")}>Office</dt>
        <dd className="m-0 mt-2 text-[15px] leading-[1.55] text-ink-text">
          PKT Transportation INC
          <br />
          9400 W Higgins Rd STE 412
          <br />
          Rosemont, IL 60018
        </dd>
      </div>
      <div className="bg-surface px-[clamp(20px,2.4vw,32px)] py-6">
        <dt className={cx(label, "m-0 text-soft-text")}>Phone &amp; email</dt>
        <dd className="m-0 mt-2 text-[15px] leading-[1.55] text-ink-text">
          <a href="tel:+12246660136" className="hover:text-azure">
            +1 (224) 666-0136
          </a>
          <br />
          <a href="mailto:safety@pktgroup.net" className="hover:text-azure">
            safety@pktgroup.net
          </a>
        </dd>
      </div>
      <div className="bg-surface px-[clamp(20px,2.4vw,32px)] py-6">
        <dt className={cx(label, "m-0 text-soft-text")}>Authority</dt>
        <dd className="m-0 mt-2 text-[15px] leading-[1.55] text-ink-text tabular-nums">
          USDOT 3188421
          <br />
          MC 132863
        </dd>
      </div>
    </dl>
  );
}

type FieldKey = "name" | "email" | "phone" | "hours" | "message";

type ContactFieldsProps = {
  route: (typeof ROUTES)[number];
  routeId: RouteId;
  values: Record<FieldKey, string>;
  set: (
    k: FieldKey,
  ) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  smsConsent: boolean;
  onSmsConsent: (checked: boolean) => void;
  error: string;
  sending: boolean;
  onSend: (e: React.FormEvent) => void;
};

function ContactFields({
  route,
  routeId,
  values,
  set,
  smsConsent,
  onSmsConsent,
  error,
  sending,
  onSend,
}: ContactFieldsProps) {
  const { open: openQuote } = useQuote();

  return (
    <form
      onSubmit={onSend}
      key={routeId}
      className="bg-surface border border-line rounded-2xl p-[clamp(24px,3.4vw,48px)]"
    >
      <p className={cx(label, "m-0 text-azure")}>{route.title}</p>
      <p className="m-0 mt-2 max-w-[54ch] text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
        {route.body}
      </p>
      {routeId === "quotes" && (
        <p className="m-0 mt-2 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
          Have the full load details?{" "}
          <button
            type="button"
            onClick={openQuote}
            className="cursor-pointer font-semibold text-azure hover:underline"
          >
            Use the full quote form
          </button>
          .
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={cx(label, "mb-2 block text-body-text")}>Name</span>
          <input
            type="text"
            value={values.name}
            onChange={set("name")}
            autoComplete="name"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={cx(label, "mb-2 block text-body-text")}>Email</span>
          <input
            type="email"
            value={values.email}
            onChange={set("email")}
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
          />
        </label>

        {routeId !== "vendors" && (
          <label className="block">
            <span className={cx(label, "mb-2 block text-body-text")}>Phone</span>
            <input
              type="tel"
              value={values.phone}
              onChange={set("phone")}
              autoComplete="tel"
              placeholder="(331) 555-0123"
              className={inputCls}
            />
          </label>
        )}

        {routeId === "quotes" && (
          <label className="block">
            <span className={cx(label, "mb-2 block text-body-text")}>
              Lane (origin → destination)
            </span>
            <input
              type="text"
              value={values.message}
              onChange={set("message")}
              placeholder="Chicago, IL → Columbus, OH"
              className={inputCls}
            />
          </label>
        )}

        {(routeId === "operations" || routeId === "recruiting") && (
          <label className="block">
            <span className={cx(label, "mb-2 block text-body-text")}>
              Best time to reach you
            </span>
            <select
              value={values.hours}
              onChange={set("hours")}
              className={cx(inputCls, "cursor-pointer")}
            >
              <option value="">Any time during business hours</option>
              <option>Morning (8 AM – 12 PM CT)</option>
              <option>Afternoon (12 PM – 5 PM CT)</option>
              <option>Evening (after 5 PM CT)</option>
            </select>
          </label>
        )}

        {routeId === "operations" && (
          <label className="block sm:col-span-2">
            <span className={cx(label, "mb-2 block text-body-text")}>
              What&rsquo;s this about?
            </span>
            <input
              type="text"
              value={values.message}
              onChange={set("message")}
              placeholder="Load or PO number, and why you&rsquo;re reaching out"
              className={inputCls}
            />
          </label>
        )}

        {routeId === "vendors" && (
          <label className="block sm:col-span-2">
            <span className={cx(label, "mb-2 block text-body-text")}>
              What&rsquo;s this about?
            </span>
            <input
              type="text"
              value={values.message}
              onChange={set("message")}
              placeholder="A sentence is plenty"
              className={inputCls}
            />
          </label>
        )}
      </div>

      {routeId !== "vendors" && (
        <SmsConsent
          checked={smsConsent}
          onChange={onSmsConsent}
          className="mt-5"
        />
      )}

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
        {routeId === "quotes" ? "Send It" : "Send to the right team"}
        <ArrowRight size={18} weight="bold" />
      </button>

      <p className="m-0 mt-4 flex items-center justify-center gap-2 text-xs font-mono text-soft-text">
        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {route.facts[route.facts.length - 1][1]}
      </p>
    </form>
  );
}