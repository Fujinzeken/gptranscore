"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Check,
  CloudLightning,
  GasPump,
  Package,
  PhoneCall,
  Sparkle,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "./ui";

/**
 * Dispatch console.
 *
 * The point of this piece is that the interface changes at every step, because
 * dispatching a load is nine different jobs, not one screen with a progress
 * bar. Scanning the board, pricing fuel, matching a driver on hours-of-service,
 * a human signing it off, booking, running, rerouting around weather, and
 * delivering. Each step gets the panel it actually needs.
 *
 * It advances on its own so the sequence plays without being clicked, and it
 * stops the moment a pointer or keyboard focus enters, because taking control
 * away from someone who is reading is the fastest way to make a thing like
 * this annoying. Every step is also directly reachable from the rail.
 *
 * All figures are GP Transco's published simulation values, unchanged.
 */

const STEP_MS = 4200;

type StepKey =
  | "standby"
  | "selected"
  | "route"
  | "driver"
  | "review"
  | "dispatch"
  | "enroute"
  | "reroute"
  | "arrival";

const STEPS: { key: StepKey; time: string; name: string }[] = [
  { key: "standby", time: "2:00 PM", name: "Standing by" },
  { key: "selected", time: "2:04 PM", name: "Load selected" },
  { key: "route", time: "2:07 PM", name: "AI route + fuel" },
  { key: "driver", time: "2:09 PM", name: "AI driver match" },
  { key: "review", time: "2:10 PM", name: "Manager review" },
  { key: "dispatch", time: "2:11 PM", name: "Book + dispatch" },
  { key: "enroute", time: "2:14 PM", name: "En route" },
  { key: "reroute", time: "5:42 PM", name: "AI weather reroute" },
  { key: "arrival", time: "8:26 PM", name: "Arrival" },
];

const PENDING = [
  { id: "GP-482167", lane: "Joliet, IL → Louisville, KY", mi: "192 mi", lbs: "42,000 lbs", freight: "Smart home devices" },
  { id: "GP-482168", lane: "Plainfield, IL → Columbus, OH", mi: "229 mi", lbs: "21,300 lbs", freight: "Cleaning supplies" },
  { id: "GP-482193", lane: "Chicago, IL → Columbus, OH", mi: "356 mi", lbs: "38,400 lbs", freight: "Consumer electronics" },
  { id: "GP-482170", lane: "Valparaiso, IN → Philadelphia, PA", mi: "303 mi", lbs: "35,000 lbs", freight: "Machinery parts" },
];

const DRIVERS = [
  { name: "Jasmine Lee", city: "Elgin, IL", status: "Available", hos: "7h 22m", otd: "99%", safe: "9.7", mpg: "8.1", picked: true },
  { name: "Omar Khan", city: "Naperville, IL", status: "Available", hos: "4h 6m", otd: "99%", safe: "9.7", mpg: "8.1" },
  { name: "Leo Gutierrez", city: "Lisle, IL", status: "Available", hos: "7h 23m", otd: "92%", safe: "9.3", mpg: "7.2" },
  { name: "Hank Mueller", city: "Bensenville, IL", status: "On break", hos: "2h 40m", otd: "95%", safe: "8.9", mpg: "7.5" },
];


/** Planned lane, and the southern bypass the reroute swings onto. */
const PLANNED = "M 58 88 C 190 108 300 150 462 246";
const BYPASS = "M 58 88 C 190 150 300 250 462 246";

/**
 * A schematic of the lane, not a map. It changes with the step: the plan
 * appears when the route is priced, the truck runs it, the storm cell lands on
 * it, and the bypass replaces it. Drawn rather than tiled because a real map
 * here would be decoration with a licence attached.
 */
function LaneView({ step }: { step: StepKey }) {
  const planned = ["route", "driver", "review", "dispatch", "enroute", "reroute", "arrival"].includes(step);
  const running = ["enroute", "reroute", "arrival"].includes(step);
  const storm = step === "reroute";
  const bypass = step === "reroute" || step === "arrival";
  const progress = step === "enroute" ? 0.42 : step === "reroute" ? 0.72 : step === "arrival" ? 1 : 0;

  return (
    <div className="relative h-full min-h-[300px] bg-ink-2 p-5">
      <span className={cx(label, "absolute right-5 top-5 text-mute")}>
        356 mi
      </span>

      <svg viewBox="0 0 520 340" className="h-full w-full" role="img"
        aria-label="Schematic of the Chicago to Columbus lane, showing the planned route, the storm cell, and the southern bypass.">
        <path d={PLANNED} fill="none" stroke="var(--color-rule-lit)" strokeWidth="2" strokeDasharray="5 7" />

        {planned ? (
          <path
            d={bypass ? BYPASS : PLANNED}
            pathLength={1}
            fill="none"
            stroke="var(--color-azure)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 - (running ? progress : 1) }}
            className="transition-[stroke-dashoffset,d] duration-700 ease-[var(--ease-out-strong)]"
          />
        ) : null}

        {storm ? (
          <g>
            <circle cx="352" cy="186" r="46" fill="#e06c5a" opacity="0.16" />
            <circle cx="352" cy="186" r="46" fill="none" stroke="#e06c5a" strokeWidth="1.5" strokeDasharray="4 5" />
            <circle cx="352" cy="186" r="9" fill="#e06c5a" />
          </g>
        ) : null}

        {planned ? (
          <g>
            <circle cx="243" cy="139" r="6" fill="var(--color-ink-2)" stroke="var(--color-azure-hi)" strokeWidth="2" />
          </g>
        ) : null}

        <circle cx="58" cy="88" r="7" fill="var(--color-azure-hi)" />
        <circle cx="462" cy="246" r="7" fill={step === "arrival" ? "var(--color-azure-hi)" : "var(--color-mute-2)"} />

        {running ? (
          <g
            style={{ offsetPath: `path("${bypass ? BYPASS : PLANNED}")`, offsetRotate: "0deg", offsetDistance: `${progress * 100}%` }}
            className="transition-[offset-distance] duration-700 ease-[var(--ease-out-strong)]"
          >
            <circle r="13" fill="var(--color-azure)" opacity="0.25" />
            <circle r="7" fill="var(--color-azure-hi)" stroke="var(--color-ink-2)" strokeWidth="2" />
          </g>
        ) : null}
      </svg>

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
        <span className={cx(label, "text-mute")}>Chicago, IL</span>
        <span className={cx(label, step === "arrival" ? "text-azure-hi" : "text-mute")}>
          Columbus, OH
        </span>
      </div>
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3">{children}</div>;
}

function Row({
  k,
  v,
  strong,
}: {
  k: string;
  v: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-rule py-2.5 last:border-b-0">
      <span className="text-[13px] text-mute">{k}</span>
      <span
        className={cx(
          "text-right text-[13.5px] tabular-nums",
          strong ? "font-semibold text-azure-hi" : "text-paper",
        )}
      >
        {v}
      </span>
    </div>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-ink-2 p-4">
      <p className={cx(label, "m-0 text-mute")}>{k}</p>
      <p className="font-display m-0 mt-2 text-[clamp(18px,1.8vw,24px)] font-bold tabular-nums leading-none text-paper">
        {v}
      </p>
    </div>
  );
}

function Done({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[13.5px] leading-[1.45] text-paper">
      <span className="mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full bg-azure">
        <Check size={11} weight="bold" className="text-azure-ink" />
      </span>
      {children}
    </li>
  );
}

function StepPanel({ step }: { step: StepKey }) {
  switch (step) {
    case "standby":
      return (
        <Panel>
          <div className="flex items-center gap-2.5">
            <Sparkle size={17} className="shrink-0 text-azure-hi" />
            <p className="m-0 text-[13.5px] text-mute">
              AI scanning 50 pending loads for the best match
            </p>
          </div>
          <ul className="m-0 grid list-none gap-px bg-rule p-0">
            {PENDING.map((l) => (
              <li key={l.id} className="bg-ink-2 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className={cx(label, "text-azure-hi")}>{l.id}</span>
                  <span className="text-[12.5px] text-mute">{l.freight}</span>
                </div>
                <p className="m-0 mt-2 text-[13.5px] font-medium text-paper">
                  {l.lane}
                </p>
                <p className="m-0 mt-1 text-[12.5px] tabular-nums text-mute">
                  {l.mi} · {l.lbs}
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      );

    case "selected":
      return (
        <Panel>
          <div className="flex items-center gap-2.5">
            <Package size={17} className="shrink-0 text-azure-hi" />
            <span className={cx(label, "text-paper")}>Load selected</span>
          </div>
          <div className="bg-ink-2 p-5">
            <Row k="Load" v="GP-482193" strong />
            <Row k="Lane" v="Chicago, IL → Columbus, OH" />
            <Row k="Freight" v="Consumer electronics" />
            <Row k="Weight" v="38,400 lbs" />
            <Row k="Equipment" v="Dry van" />
          </div>
        </Panel>
      );

    case "route":
      return (
        <Panel>
          <div className="grid grid-cols-2 gap-px bg-rule">
            <Metric k="Distance" v="356 mi" />
            <Metric k="Drive time" v="5h 32m" />
            <Metric k="ETA (planned)" v="8:14 PM" />
            <Metric k="Fuel stops" v="1 optimized" />
          </div>
          <div className="flex items-start gap-3 border-l-2 border-azure bg-ink-2 p-4">
            <GasPump size={18} className="mt-px shrink-0 text-azure-hi" />
            <div>
              <p className="m-0 text-[13.5px] font-semibold text-paper">
                Optimized fuel plan
              </p>
              <p className="m-0 mt-1.5 text-[13px] leading-[1.5] text-mute">
                $3.29/gal at the I-69 travel center. Estimated cost $412, for a
                four minute detour.
              </p>
            </div>
          </div>
        </Panel>
      );

    case "driver":
      return (
        <Panel>
          <ul className="m-0 grid list-none gap-px bg-rule p-0">
            {DRIVERS.map((d) => (
              <li
                key={d.name}
                className={cx(
                  "p-4",
                  d.picked ? "bg-azure/15 ring-1 ring-inset ring-azure" : "bg-ink-2",
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
                  <span className="text-[14px] font-semibold text-paper">
                    {d.name}
                  </span>
                  <span
                    className={cx(
                      label,
                      d.status === "Available" ? "text-azure-hi" : "text-mute",
                    )}
                  >
                    {d.status} · {d.city}
                  </span>
                </div>
                <dl className="m-0 mt-3 grid grid-cols-4 gap-3">
                  {[
                    ["HOS", d.hos],
                    ["On-time", d.otd],
                    ["Safety", d.safe],
                    ["MPG", d.mpg],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className={cx(label, "text-mute")}>{k}</dt>
                      <dd className="m-0 mt-1 text-[13.5px] font-semibold tabular-nums text-paper">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </Panel>
      );

    case "review":
      return (
        <Panel>
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-2 text-[13px] font-bold text-azure-hi">
              DJ
            </span>
            <div>
              <p className="m-0 text-[14px] font-semibold text-paper">David J.</p>
              <p className={cx(label, "m-0 mt-0.5 text-mute")}>
                Operations manager, planning
              </p>
            </div>
            <span className={cx(label, "ml-auto text-azure-hi")}>Reviewing</span>
          </div>
          <ul className="m-0 grid list-none gap-2.5 bg-ink-2 p-5">
            <Done>Driver hours-of-service compliant for this lane</Done>
            <Done>Equipment match confirmed, dry van</Done>
            <Done>Customer service history verified</Done>
            <Done>Route and fuel plan optimized</Done>
          </ul>
          <p className="m-0 text-[13px] leading-[1.5] text-mute">
            A person signs off before anything is booked. The automation
            proposes; it does not dispatch on its own.
          </p>
        </Panel>
      );

    case "dispatch":
      return (
        <Panel>
          <ul className="m-0 grid list-none gap-2.5 bg-ink-2 p-5">
            <Done>Booked with the customer</Done>
            <Done>Pickup window confirmed</Done>
            <Done>Rate confirmation sent</Done>
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cx(label, "bg-azure px-3 py-1.5 text-azure-ink")}>
              Booked
            </span>
            <span className={cx(label, "bg-ink-2 px-3 py-1.5 text-azure-hi")}>
              Pushed to driver app
            </span>
          </div>
          <div className="mx-auto w-full max-w-[280px] bg-ink-2 p-4">
            <p className={cx(label, "m-0 text-mute")}>New assignment</p>
            <Row k="Load" v="GP-482193" strong />
            <Row k="Pickup" v="Chicago, IL" />
            <Row k="Delivery" v="Columbus, OH" />
            <Row k="Driver" v="Jasmine Lee" />
          </div>
        </Panel>
      );

    case "enroute":
      return (
        <Panel>
          <div className="flex items-center gap-3">
            <Truck size={20} className="shrink-0 text-azure-hi" />
            <span className={cx(label, "text-paper")}>In transit</span>
            <span className="ml-auto text-[13px] tabular-nums text-mute">
              356 mi total
            </span>
          </div>
          <div className="bg-ink-2 p-5">
            <Row k="Driver" v="Jasmine Lee" />
            <Row k="Lane" v="Chicago, IL → Columbus, OH" />
            <Row k="ETA" v="8:14 PM" strong />
            <Row k="Geofence alerts" v="Armed at both ends" />
          </div>
          <p className="m-0 text-[13px] leading-[1.5] text-mute">
            The customer has a live location link from this point. Nobody has to
            place a check call.
          </p>
        </Panel>
      );

    case "reroute":
      return (
        <Panel>
          <div className="flex items-start gap-3 border-l-2 border-[#e06c5a] bg-ink-2 p-4">
            <CloudLightning size={20} className="mt-px shrink-0 text-[#f08b7a]" />
            <div>
              <p className="m-0 text-[13.5px] font-semibold text-paper">
                Severe weather detected
              </p>
              <p className="m-0 mt-1 text-[13px] leading-[1.5] text-mute">
                Storm cell on the current route path, near the Indiana and Ohio
                border.
              </p>
            </div>
          </div>
          <ul className="m-0 grid list-none gap-2.5 bg-ink-2 p-5">
            <Done>Storm cell detected on the current route</Done>
            <Done>Safer alternate calculated, southern bypass</Done>
            <Done>Automated advisory call placed to the driver</Done>
          </ul>
          <div className="flex items-start gap-3 bg-ink-2 p-4">
            <PhoneCall size={18} className="mt-px shrink-0 text-azure-hi" />
            <p className="m-0 text-[13px] italic leading-[1.55] text-mute">
              “Heads up, severe weather ahead on your current route. I have
              calculated a safer alternate through a southern bypass. Your new
              ETA is twelve minutes later.”
            </p>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-l-2 border-azure bg-ink-2 p-4">
            <span className="text-[13.5px] text-mute">Updated ETA</span>
            <span className="text-[15px] font-semibold tabular-nums text-azure-hi">
              8:26 PM, twelve minutes later
            </span>
          </div>
        </Panel>
      );

    case "arrival":
      return (
        <Panel>
          <ul className="m-0 grid list-none gap-2.5 bg-ink-2 p-5">
            <Done>Arrived at the receiver, Columbus OH, dock 14</Done>
            <Done>Unloading started, estimated empty in 32 minutes</Done>
          </ul>
          <div className="grid gap-px bg-rule">
            <div className="bg-ink-2 p-4">
              <p className={cx(label, "m-0 text-mute")}>Operations notified</p>
              <p className="m-0 mt-1.5 text-[13px] leading-[1.5] text-mute">
                Unloading started at the Meridian Electronics DC, dock 14.
                Driver on site.
              </p>
            </div>
            <div className="bg-ink-2 p-4">
              <p className={cx(label, "m-0 text-mute")}>Customer notified</p>
              <p className="m-0 mt-1.5 text-[13px] leading-[1.5] text-mute">
                Shipment GP-482193 is being unloaded. Estimated empty in 32
                minutes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-l-2 border-azure bg-azure/15 p-4">
            <Check size={18} weight="bold" className="shrink-0 text-azure-hi" />
            <p className="m-0 text-[14px] font-semibold text-paper">
              Delivered on time, GP-482193
            </p>
          </div>
        </Panel>
      );
  }
}

export function DispatchConsole() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(
      () => setI((n) => (n + 1) % STEPS.length),
      STEP_MS,
    );
    return () => window.clearTimeout(t);
  }, [i, paused]);

  const onKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setI((n) => Math.min(STEPS.length - 1, n + 1));
    if (e.key === "ArrowLeft") setI((n) => Math.max(0, n - 1));
  }, []);

  const step = STEPS[i];

  return (
    <div
      className="bg-ink"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => !reduced.current && setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onKeyDown={onKey}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-rule px-[clamp(18px,2.4vw,32px)] py-4">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-hi opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-hi" />
        </span>
        <span className={cx(label, "text-paper")}>Live dispatch</span>
        <span className="text-[13px] text-mute">
          Load GP-482193, Chicago to Columbus
        </span>
        <span
          className={cx(label, "ml-auto tabular-nums text-azure-hi")}
          aria-live="polite"
        >
          {step.time} · {step.name}
        </span>
      </div>

      {/* Panel and lane change together, the way they do in a real console. */}
      <div className="grid grid-cols-[minmax(0,440px)_1fr] gap-px bg-rule max-[860px]:grid-cols-1">
        <div className="bg-ink px-[clamp(18px,2.4vw,28px)] py-[clamp(20px,2.6vw,28px)]">
          {/* Fixed floor so the plate does not jump as panels change height. */}
          <div className="min-h-[430px] max-[860px]:min-h-0">
            <StepPanel step={step.key} />
          </div>
        </div>
        <LaneView step={step.key} />
      </div>

      {/* The rail. Every step is reachable, not just watchable. */}
      <div
        role="tablist"
        aria-label="Dispatch steps"
        className="flex gap-px overflow-x-auto border-t border-rule bg-rule [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {STEPS.map((s, n) => {
          const on = n === i;
          const done = n < i;
          return (
            <button
              key={s.key}
              role="tab"
              aria-selected={on}
              onClick={() => setI(n)}
              className={cx(
                "group/step relative min-w-[112px] flex-1 bg-ink px-3 py-3.5 text-left transition-colors duration-200",
                on ? "bg-ink-2" : "hover:bg-ink-2",
              )}
            >
              <span className="flex items-center gap-2">
                <span
                  className={cx(
                    "flex size-[15px] shrink-0 items-center justify-center rounded-full text-[9px]",
                    on
                      ? "bg-azure-hi text-azure-ink"
                      : done
                        ? "bg-azure text-azure-ink"
                        : "bg-rule-lit text-mute",
                  )}
                >
                  {done ? <Check size={9} weight="bold" /> : n + 1}
                </span>
                <span
                  className={cx(
                    label,
                    "tabular-nums",
                    on ? "text-azure-hi" : "text-mute",
                  )}
                >
                  {s.time}
                </span>
              </span>
              <span
                className={cx(
                  "mt-2 block text-[12.5px] leading-[1.3]",
                  on ? "font-semibold text-paper" : "text-mute",
                )}
              >
                {s.name}
              </span>

              {on && !paused ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-azure-hi"
                  style={{ animation: `stepfill ${STEP_MS}ms linear forwards` }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <style>{`@keyframes stepfill{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </div>
  );
}
