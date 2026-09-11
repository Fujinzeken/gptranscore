"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, revealItem } from "../reveal";
import { cardRound, cx, label } from "../ui";

/**
 * Internal Apps — "a growing suite of purpose-built tools".
 *
 * Prod showed six app cards beside a laptop mockup of Service Connect. The
 * cards were the weak part — six near-identical panels telling you nothing
 * about the software — and the mockup froze one app while claiming six.
 *
 * So this section does what the dispatch console on the landing page does:
 * the rail is the app suite, and the panel is the app, rendered as live
 * telemetry for every entry. Six real interfaces instead of one screenshot
 * and five descriptions. It advances on its own and stops the moment a
 * pointer or focus enters, same as the dispatch console; the funnel and
 * distribution bars grow in on reveal.
 *
 * The composition: a giant ghost numeral of the active app overlaps the top
 * edge of the dark panel — depth without a shadow or gradient — and the
 * panel carries full window chrome: a header with position counter, a faint
 * 28px telemetry grid behind every mini-UI, and a mono status bar with
 * position ticks. Arrow keys move between apps.
 */

const APPS = [
  { id: "staff", n: "01", name: "Staff Connect", body: "Internal hub for news, training, and instant answers." },
  { id: "service", n: "02", name: "Service Connect", body: "Every repair, part, and invoice across shop and vendors." },
  { id: "hr", n: "03", name: "HR Connect", body: "People operations across three countries, one system." },
  { id: "recruiting", n: "04", name: "Recruiting Connect", body: "AI-powered analytics that hire the right drivers, faster." },
  { id: "afterhours", n: "05", name: "Afterhours Connect", body: "Overnight support and visibility, when it matters most." },
  { id: "safety", n: "06", name: "Safety Connect", body: "OpenRoad, Samsara, Idelic, FMCSA — in one platform." },
] as const;

type AppId = (typeof APPS)[number]["id"];

/** Staff Connect — the feed: company news and an AI answer. */
function StaffMini() {
  return (
    <div className="apps-fade space-y-3">
      <p className={cx(label, "m-0 text-[10px] text-mute")}>Today at GP Transco</p>
      {[
        { t: "Joliet shop hits 100 days without a recordable", m: "Operations · 2h ago" },
        { t: "New: winter chain law refresher is live in GP Academy", m: "Training · 5h ago" },
        { t: "Q3 town hall recording now available", m: "Company · Yesterday" },
      ].map((row) => (
        <div key={row.t} className="border-b border-rule pb-3">
          <p className="m-0 text-[14px] font-semibold leading-[1.35] text-paper">
            {row.t}
          </p>
          <p className={cx(label, "m-0 mt-1.5 text-[9.5px] text-mute-2")}>{row.m}</p>
        </div>
      ))}
      <div className="border border-azure/30 bg-azure/10 p-3">
        <p className={cx(label, "m-0 text-[9.5px] text-azure-hi")}>Ask AI</p>
        <p className="m-0 mt-2 text-[13.5px] leading-[1.5] text-paper">
          “What&apos;s the procedure for a lost seal on a loaded trailer?” →
          answered from company knowledge in 4 seconds, source attached.
        </p>
      </div>
    </div>
  );
}

/** Service Connect — the maintenance board: stats + status distribution. */
function ServiceMini() {
  const stats = [
    { l: "New Tickets", v: "2" },
    { l: "HQ Shop — Open", v: "90" },
    { l: "OTR — Open", v: "56" },
    { l: "OOS", v: "5.1%" },
  ];
  const hq = [30, 62, 44, 88, 52, 70];
  return (
    <div className="apps-fade">
      <div className="grid grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className={cx(
              "px-4 py-3.5",
              i % 2 === 0 && "border-r border-rule",
              i < 2 && "border-b border-rule",
            )}
          >
            <p className={cx(label, "m-0 text-[9.5px] text-mute")}>{s.l}</p>
            <p className="m-0 mt-1.5 font-display text-[24px] font-extrabold leading-none text-paper">
              {s.v}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-rule px-4 py-4">
        <p className={cx(label, "m-0 text-[9.5px] text-mute")}>
          HQ Shop — Status Distribution
        </p>
        <div className="mt-3 flex h-12 items-end gap-[6px]">
          {hq.map((h, n) => (
            <span
              key={n}
              className="w-full origin-bottom bg-azure/80 transition-transform duration-700 ease-[var(--ease-out-strong)] group-data-[shown=true]/reveal:scale-y-100"
              style={{
                height: `${h}%`,
                transform: "scaleY(0)",
                transitionDelay: `${300 + n * 60}ms`,
              }}
            />
          ))}
        </div>
        <p className={cx(label, "m-0 mt-4 text-[9.5px] text-mute")}>
          Every RO, part, and invoice — shop and vendor — on one board
        </p>
      </div>
    </div>
  );
}

/** HR Connect — three countries, one people system. */
function HrMini() {
  const rows = [
    { c: "United States", hc: "640+", m: "Hiring · Onboarding · Pay · PTO" },
    { c: "Lithuania", hc: "60+", m: "Onboarding · Pay · Time off" },
    { c: "Colombia", hc: "90+", m: "Onboarding · Pay · Benefits" },
  ];
  return (
    <div className="apps-fade">
      <p className={cx(label, "m-0 text-[10px] text-mute")}>Workforce by country</p>
      <div className="mt-4">
        {rows.map((r, i) => (
          <div
            key={r.c}
            className={cx(
              "flex items-baseline justify-between gap-4 py-3.5",
              i < rows.length - 1 && "border-b border-rule",
            )}
          >
            <div>
              <p className="m-0 text-[14.5px] font-semibold text-paper">{r.c}</p>
              <p className="m-0 mt-1 text-[12.5px] leading-[1.4] text-mute">
                {r.m}
              </p>
            </div>
            <span className="font-display text-[20px] font-extrabold leading-none text-azure-hi">
              {r.hc}
            </span>
          </div>
        ))}
      </div>
      <p className="m-0 mt-4 border-t border-rule pt-3 text-[13px] leading-[1.5] text-mute">
        Hiring through pay and time off — one workflow for a multi-country
        workforce, with a single employee record.
      </p>
    </div>
  );
}

/** Recruiting Connect — the driver funnel, with bars that grow in. */
function RecruitingMini() {
  const funnel = [
    { l: "Applications", v: "1,240", pct: 100 },
    { l: "Qualified", v: "486", pct: 72 },
    { l: "In onboarding", v: "138", pct: 46 },
    { l: "Hired — 90 days", v: "112", pct: 30 },
  ];
  return (
    <div className="apps-fade">
      <p className={cx(label, "m-0 text-[10px] text-mute")}>
        Driver pipeline — trailing 90 days
      </p>
      <div className="mt-4 space-y-3.5">
        {funnel.map((f, i) => (
          <div key={f.l}>
            <div className="flex items-baseline justify-between">
              <p className="m-0 text-[13.5px] font-medium text-paper">{f.l}</p>
              <p className="m-0 font-display text-[15px] font-extrabold text-azure-hi">
                {f.v}
              </p>
            </div>
            <div className="mt-1.5 h-2 bg-ink-2 ring-1 ring-rule">
              <span
                className="block h-full origin-left bg-azure transition-transform duration-700 ease-[var(--ease-out-strong)] group-data-[shown=true]/reveal:scale-x-100"
                style={{
                  width: `${f.pct}%`,
                  transform: "scaleX(0)",
                  transitionDelay: `${300 + i * 90}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="m-0 mt-5 border-t border-rule pt-3 text-[13px] leading-[1.5] text-mute">
        AI scores applications against the profiles of drivers who stay — so
        recruiters spend their time on the right conversations.
      </p>
    </div>
  );
}

/** Afterhours Connect — the overnight queue, live. */
function AfterhoursMini() {
  const queue = [
    { t: "02:14", w: "Driver check call — Omaha, NE", s: "Resolved" },
    { t: "02:41", w: "Reefer alarm — unit 7312", s: "Dispatched" },
    { t: "03:07", w: "Customer ETA request — GP-482167", s: "Answered" },
    { t: "03:52", w: "Weather hold — I-80 westbound", s: "Monitoring" },
  ];
  return (
    <div className="apps-fade">
      <div className="flex items-center justify-between">
        <p className={cx(label, "m-0 text-[10px] text-mute")}>Overnight queue</p>
        <p
          className={cx(
            label,
            "m-0 flex items-center gap-1.5 text-[9.5px] text-azure-hi",
          )}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-hi opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-azure-hi" />
          </span>
          Night shift live
        </p>
      </div>
      <div className="mt-3">
        {queue.map((q, i) => (
          <div
            key={q.t}
            className={cx(
              "flex items-baseline justify-between gap-4 py-3",
              i < queue.length - 1 && "border-b border-rule",
            )}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-mute-2">{q.t}</span>
              <span className="text-[13.5px] font-medium leading-[1.3] text-paper">
                {q.w}
              </span>
            </div>
            <span className="shrink-0 text-[11px] font-semibold text-mute">
              {q.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Safety Connect — every source, one platform. */
function SafetyMini() {
  const sources = [
    { n: "OpenRoad", d: "Driver behavior · coaching" },
    { n: "Samsara", d: "Telematics · dash cams" },
    { n: "Idelic", d: "Event data · risk scoring" },
    { n: "FMCSA", d: "Compliance · CSA scores" },
  ];
  return (
    <div className="apps-fade">
      <p className={cx(label, "m-0 text-[10px] text-mute")}>Connected sources</p>
      <div className="mt-3">
        {sources.map((s, i) => (
          <div
            key={s.n}
            className={cx(
              "flex items-center justify-between gap-4 py-3.5",
              i < sources.length - 1 && "border-b border-rule",
            )}
          >
            <div>
              <p className="m-0 text-[14px] font-semibold text-paper">{s.n}</p>
              <p className="m-0 mt-0.5 text-[12.5px] text-mute">{s.d}</p>
            </div>
            <span className={cx(label, "flex shrink-0 items-center gap-1.5 text-[9.5px] text-azure-hi")}>
              <span className="h-1.5 w-1.5 rounded-full bg-azure-hi" />
              Synced
            </span>
          </div>
        ))}
      </div>
      <p className="m-0 mt-4 border-t border-rule pt-3 text-[13px] leading-[1.5] text-mute">
        Every safety signal, normalized into one platform — so nothing waits
        on a login to a fourth portal.
      </p>
    </div>
  );
}

const MINIS: Record<AppId, () => React.ReactElement> = {
  staff: StaffMini,
  service: ServiceMini,
  hr: HrMini,
  recruiting: RecruitingMini,
  afterhours: AfterhoursMini,
  safety: SafetyMini,
};

/** One line of mono telemetry per app, set in the panel's status bar. */
const STATUS: Record<AppId, string> = {
  staff: "FEED SYNCED · 14:02:11 CST",
  service: "90 HQ · 56 OTR OPEN · OOS 5.1%",
  hr: "3 COUNTRIES · 790+ RECORDS",
  recruiting: "1,240 APPS · 112 HIRED / 90D",
  afterhours: "NIGHT SHIFT ACTIVE · 4 IN QUEUE",
  safety: "4 SOURCES · ALL SYNCED",
};

export function InnovationApps() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(
      () => setI((n) => (n + 1) % APPS.length),
      4600,
    );
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [i, paused]);

  const active = APPS[i];
  const Mini = MINIS[active.id];

  return (
    <section id="apps" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(32px,5vh,56px)]">
          <h2
            className={cx(
              revealItem,
              "font-display m-0 col-span-7",
              "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              "max-[1000px]:col-span-12",
            )}
          >
            A growing suite of{" "}
            <span className="text-azure-hi">purpose-built tools</span>
          </h2>

          <p
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 col-start-8 m-0 self-end max-w-[46ch]",
              "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              "max-[1000px]:col-span-12 max-[1000px]:col-start-1",
            )}
          >
            Each app was created by the team that uses it — built to solve real
            workflows across GP Transco, not bought to approximate them.
          </p>

          {/* The app console. Rail is the suite; panel is the app. */}
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-12 grid grid-cols-12 gap-x-[clamp(24px,3vw,48px)] gap-y-8",
              "max-[900px]:grid-cols-1",
            )}
          >
            {/* Rail: the suite, as tabs. */}
            <div
              role="tablist"
              aria-label="Internal apps"
              className="col-span-5 max-[900px]:col-span-1"
              onPointerEnter={() => setPaused(true)}
              onPointerLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                  e.preventDefault();
                  setI((n) => (n + 1) % APPS.length);
                } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  setI((n) => (n - 1 + APPS.length) % APPS.length);
                }
              }}
            >
              {APPS.map((app, n) => {
                const on = n === i;
                return (
                  <button
                    key={app.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setI(n)}
                    className={cx(
                      "group/app relative block w-full border-l-2 py-4 pl-[clamp(16px,1.8vw,26px)] pr-4 text-left transition-colors duration-200",
                      on
                        ? "border-azure bg-ink/[0.03]"
                        : "border-transparent hover:border-rule hover:bg-ink/[0.02]",
                    )}
                  >
                    <span className="flex items-baseline gap-3">
                      <span
                        className={cx(
                          label,
                          "tabular-nums",
                          on ? "text-azure" : "text-mute-2",
                        )}
                      >
                        {app.n}
                      </span>
                      <span
                        className={cx(
                          "font-display text-[clamp(16px,1.5vw,21px)] font-bold leading-[1.2]",
                          on ? "text-ink-text" : "text-body-text",
                        )}
                      >
                        {app.name}
                      </span>
                    </span>
                    <span
                      className={cx(
                        "mt-1.5 block max-w-[44ch] pl-[calc(1.6em+12px)] text-[clamp(13px,1vw,15px)] leading-[1.5]",
                        on ? "text-body-text" : "text-mute-2",
                      )}
                    >
                      {app.body}
                    </span>

                    {on && !paused ? (
                      <span
                        aria-hidden="true"
                        className="absolute -left-[2px] top-0 h-full w-[2px] origin-top bg-azure"
                        style={{
                          animation: "appsfill 4600ms linear forwards",
                        }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
{/* Panel: the app itself. The ghost numeral overlapping the top edge
                gives the plate depth without a shadow or a gradient. */}
            <div className="relative col-span-7 max-[900px]:col-span-1">
              <span
                aria-hidden="true"
                className={cx(
                  "font-display pointer-events-none absolute -top-[0.58em] right-[-6px] z-0 hidden select-none leading-none",
                  "text-[clamp(120px,14vw,210px)] font-extrabold tracking-[-0.04em] text-ink/10",
                  "max-[900px]:hidden",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={cx(cardRound, "relative z-10 bg-ink ring-1 ring-rule overflow-hidden")}>
                <div className="flex items-center justify-between gap-4 border-b border-rule px-[clamp(18px,2.2vw,28px)] py-4">
                  <span className={cx(label, "text-paper")}>{active.name}</span>
                  <span
                    className={cx(
                      label,
                      "hidden text-[10px] text-mute-2 lg:block",
                    )}
                  >
                    GP Transco · Internal
                  </span>
                  <span className={cx(label, "text-[10px] text-mute")}>
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <div
                  key={active.id}
                  className="apps-fade px-[clamp(16px,2vw,28px)] py-[clamp(18px,2.4vw,28px)]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0 1px, transparent 1px 28px)",
                  }}
                >
                  <Mini />
                </div>
                {/* Status bar: one line of mono telemetry + position ticks. */}
                <div className="flex items-center justify-between border-t border-rule px-[clamp(18px,2.2vw,28px)] py-2.5">
                  <span
                    className={cx(label, "font-mono text-[9px] text-mute")}
                  >
                    {STATUS[active.id]}
                  </span>
                  <span aria-hidden="true" className="flex gap-1">
                    {APPS.map((app, n) => (
                      <span
                        key={app.id}
                        className={cx(
                          "h-[3px] w-[3px] rounded-full",
                          n === i ? "bg-azure-hi" : "bg-rule",
                        )}
                      />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
<style>{`@keyframes appsfill{from{transform:scaleY(0)}to{transform:scaleY(1)}}
.apps-fade{animation:appsfade .45s var(--ease-out-strong)}
@keyframes appsfade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </Reveal>
    </section>
  );
}