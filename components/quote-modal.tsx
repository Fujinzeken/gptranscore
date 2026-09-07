"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  CalendarBlank,
  ChatCircleDots,
  CheckCircle,
  MapPin,
  MapPinLine,
  X,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { btn, btnOutline, btnSolid, cx, label as labelType } from "./ui";

/**
 * Request a quote.
 *
 * Five steps rather than one long form. A shipper filling this in has to look
 * up a ZIP, a date and a weight; asking for all of it at once is what makes
 * quote forms get abandoned. Each step is a single question the person can
 * answer without leaving the page.
 *
 * Labels sit above their inputs rather than inside them. Placeholder-as-label
 * disappears the moment someone types, which strands anyone who was
 * interrupted, and screen readers get nothing to announce.
 *
 * Continue stays enabled and validates on press, instead of greying out until
 * the form is perfect. A disabled button that will not say why is the single
 * most common dead end in a multi-step form.
 */

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date";
  required?: boolean;
  options?: string[];
  textarea?: boolean;
  /** Half width on desktop, so pairs sit on one line. */
  half?: boolean;
};

type Step = {
  key: string;
  icon: Icon;
  nav: string;
  title: string;
  blurb: string;
  fields: Field[];
};

const STEPS: Step[] = [
  {
    key: "contact",
    icon: Buildings,
    nav: "Contact",
    title: "Contact information",
    blurb: "Tell us who we are quoting for.",
    fields: [
      { name: "company", label: "Company name", required: true, half: true },
      { name: "contact", label: "Contact name", required: true, half: true },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        half: true,
      },
      { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    ],
  },
  {
    key: "pickup",
    icon: MapPinLine,
    nav: "Pickup",
    title: "Where does it ship from?",
    blurb: "City and state, or a ZIP code, is enough to price a lane.",
    fields: [
      {
        name: "pickupLocation",
        label: "Pickup city, state or ZIP",
        required: true,
      },
      { name: "pickupFacility", label: "Facility or shipper name" },
    ],
  },
  {
    key: "delivery",
    icon: MapPin,
    nav: "Delivery",
    title: "Where is it going?",
    blurb: "We run the lower 48 on our own equipment.",
    fields: [
      {
        name: "deliveryLocation",
        label: "Delivery city, state or ZIP",
        required: true,
      },
      { name: "deliveryFacility", label: "Facility or receiver name" },
    ],
  },
  {
    key: "schedule",
    icon: CalendarBlank,
    nav: "Schedule",
    title: "When do you need it picked up?",
    blurb: "An approximate date is fine. We will confirm the window with you.",
    fields: [
      {
        name: "pickupDate",
        label: "Pickup date",
        type: "date",
        required: true,
        half: true,
      },
      {
        name: "flexibility",
        label: "Date flexibility",
        options: ["Exact date", "Within 2 days", "Within a week", "Flexible"],
        half: true,
      },
    ],
  },
  {
    key: "freight",
    icon: ChatCircleDots,
    nav: "Freight",
    title: "What are we hauling?",
    blurb: "The more you tell us, the tighter the quote comes back.",
    fields: [
      {
        name: "equipment",
        label: "Equipment",
        options: [
          "Dry Van",
          "Conestoga",
          "Expedited",
          "Intermodal",
          "Partial Truckload",
          "Volume LTL",
          "Air Ride",
          "Not sure yet",
        ],
        half: true,
      },
      { name: "weight", label: "Weight (lbs)", half: true },
      { name: "commodity", label: "Commodity" },
      { name: "notes", label: "Anything else we should know", textarea: true },
    ],
  },
];

type Values = Record<string, string>;

function validate(step: Step, values: Values): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const f of step.fields) {
    const v = (values[f.name] ?? "").trim();
    if (f.required && !v) {
      errors[f.name] = `${f.label} is required.`;
      continue;
    }
    if (!v) continue;
    if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      errors[f.name] = "Enter an email we can reply to.";
    }
    if (f.type === "tel" && v.replace(/\D/g, "").length < 10) {
      errors[f.name] = "Enter a phone number with at least 10 digits.";
    }
  }
  return errors;
}

const QuoteContext = createContext<{ open: () => void } | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal open={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteContext.Provider>
  );
}

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  const headingId = useId();

  const step = STEPS[index];
  const isLast = index === STEPS.length - 1;

  useEffect(() => {
    if (!open) return;
    restoreTo.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    // Land on the first field, not on the close button.
    const t = window.setTimeout(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>("input, select, textarea")
        ?.focus();
    }, 60);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
      restoreTo.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      // Focus stays inside the dialog while it owns the screen.
      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function set(name: string, v: string) {
    setValues((prev) => ({ ...prev, [name]: v }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function advance() {
    const found = validate(step, values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const firstBad = step.fields.find((f) => found[f.name]);
      if (firstBad) {
        dialogRef.current
          ?.querySelector<HTMLElement>(`[name="${firstBad.name}"]`)
          ?.focus();
      }
      return;
    }
    if (isLast) {
      setSent(true);
      return;
    }
    setIndex((i) => i + 1);
  }

  function reset() {
    setIndex(0);
    setValues({});
    setErrors({});
    setSent(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto bg-ink-text/70 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className={cx(
          "relative w-full max-w-[720px] bg-surface shadow-[0_40px_100px_-30px_rgba(10,18,28,0.7)]",
          "animate-[rise_0.28s_var(--ease-out-strong)_forwards] opacity-0",
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full text-soft-text transition-colors duration-200 hover:bg-page hover:text-ink-text"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="px-[clamp(24px,4vw,52px)] py-[clamp(44px,7vh,72px)] text-center">
            <CheckCircle
              size={44}
              weight="light"
              aria-hidden="true"
              className="mx-auto text-azure"
            />
            <h2
              id={headingId}
              className="type-display m-0 mt-6 text-[clamp(24px,3vw,36px)] text-ink-text"
            >
              Quote request sent
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[15.5px] leading-[1.6] text-body-text">
              Same-day response guaranteed. We will come back to{" "}
              <span className="font-semibold text-ink-text">
                {values.email || "your email"}
              </span>{" "}
              with pricing and available capacity.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className={cx(btn, btnSolid, "h-12 px-6 text-sm")}
              >
                Done
              </button>
              <button
                type="button"
                onClick={reset}
                className={cx(btn, btnOutline, "h-12 px-6 text-sm")}
              >
                Request another
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="border-b border-line px-[clamp(20px,3vw,40px)] pb-5 pt-[clamp(24px,3vw,34px)]">
              <ol className="m-0 flex list-none items-start justify-between gap-2 p-0">
                {STEPS.map((s, i) => {
                  const Glyph = s.icon;
                  const done = i < index;
                  const current = i === index;
                  return (
                    <li
                      key={s.key}
                      className="flex min-w-0 flex-1 flex-col items-center gap-2"
                      aria-current={current ? "step" : undefined}
                    >
                      <span
                        className={cx(
                          "flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                          current
                            ? "bg-azure text-white"
                            : done
                              ? "bg-azure/15 text-azure"
                              : "bg-page text-soft-text",
                        )}
                      >
                        <Glyph size={19} weight={current ? "fill" : "regular"} />
                      </span>
                      <span
                        className={cx(
                          labelType,
                          "truncate text-center",
                          current ? "text-ink-text" : "text-body-text",
                          "max-[520px]:hidden",
                        )}
                      >
                        {s.nav}
                      </span>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-4 h-[3px] w-full bg-line">
                <div
                  className="h-full bg-azure transition-[width] duration-500 ease-[var(--ease-out-strong)]"
                  style={{ width: `${((index + 1) / STEPS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="px-[clamp(20px,3vw,40px)] py-[clamp(24px,3.4vw,38px)]">
              <h2
                id={headingId}
                className="type-display m-0 text-[clamp(21px,2.4vw,30px)] text-ink-text"
              >
                {step.title}
              </h2>
              <p className="m-0 mt-2.5 max-w-[54ch] text-[14.5px] leading-[1.55] text-body-text">
                {step.blurb}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 max-[560px]:grid-cols-1">
                {step.fields.map((f) => {
                  const id = `q-${f.name}`;
                  const err = errors[f.name];
                  const control =
                    "w-full border bg-surface px-3.5 text-[15px] text-ink-text " +
                    "transition-colors duration-200 placeholder:text-soft-text " +
                    "focus:border-azure focus:outline-none";
                  return (
                    <div
                      key={f.name}
                      className={cx(
                        f.half ? "col-span-1" : "col-span-2",
                        "max-[560px]:col-span-1",
                      )}
                    >
                      <label
                        htmlFor={id}
                        className={cx(labelType, "block text-body-text")}
                      >
                        {f.label}
                        {f.required ? (
                          <span aria-hidden="true" className="text-azure">
                            {" *"}
                          </span>
                        ) : null}
                      </label>

                      {f.options ? (
                        <select
                          id={id}
                          name={f.name}
                          value={values[f.name] ?? ""}
                          onChange={(e) => set(f.name, e.target.value)}
                          aria-invalid={err ? true : undefined}
                          aria-describedby={err ? `${id}-err` : undefined}
                          className={cx(
                            control,
                            "mt-2 h-12",
                            err ? "border-[#c0392b]" : "border-line-strong",
                          )}
                        >
                          <option value="">Select</option>
                          {f.options.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      ) : f.textarea ? (
                        <textarea
                          id={id}
                          name={f.name}
                          rows={3}
                          value={values[f.name] ?? ""}
                          onChange={(e) => set(f.name, e.target.value)}
                          aria-invalid={err ? true : undefined}
                          aria-describedby={err ? `${id}-err` : undefined}
                          className={cx(
                            control,
                            "mt-2 resize-y py-3 leading-[1.5]",
                            err ? "border-[#c0392b]" : "border-line-strong",
                          )}
                        />
                      ) : (
                        <input
                          id={id}
                          name={f.name}
                          type={f.type ?? "text"}
                          value={values[f.name] ?? ""}
                          onChange={(e) => set(f.name, e.target.value)}
                          aria-invalid={err ? true : undefined}
                          aria-describedby={err ? `${id}-err` : undefined}
                          className={cx(
                            control,
                            "mt-2 h-12",
                            err ? "border-[#c0392b]" : "border-line-strong",
                          )}
                        />
                      )}

                      {err ? (
                        <p
                          id={`${id}-err`}
                          className="m-0 mt-2 text-[13px] leading-[1.4] text-[#c0392b]"
                        >
                          {err}
                        </p>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-line px-[clamp(20px,3vw,40px)] py-5">
              <button
                type="button"
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className={cx(
                  btn,
                  "h-11 px-4 text-[14px] font-medium text-body-text",
                  "disabled:pointer-events-none disabled:opacity-0",
                  "hover:text-ink-text",
                )}
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <div className="flex items-center gap-4">
                <span className={cx(labelType, "text-body-text max-[420px]:hidden")}>
                  Step {index + 1} of {STEPS.length}
                </span>
                <button
                  type="button"
                  onClick={advance}
                  className={cx(btn, btnSolid, "h-12 px-6 text-sm")}
                >
                  {isLast ? "Send request" : "Continue"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
