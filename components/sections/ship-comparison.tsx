"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnHero, btnSolid, cx, label } from "../ui";

/**
 * PKT Group against the typical carrier (The Difference).
 *
 * Sits on a 100% light field (bg-page) to sustain the alternating light/dark
 * rhythm of the page following the dark Trailers plate above it.
 *
 * Replaces the static strikethrough wall-of-text with an executive Matchup
 * Stage: all eight operational dimensions are immediately discoverable across
 * the selector rail, with focused head-to-head contrast cards that make the
 * case with clarity and enterprise authority.
 */

type Difference = {
  num: string;
  short: string;
  category: string;
  metric: string;
  badge: string;
  theirs: {
    title: string;
    body: string;
    friction: string;
  };
  ours: {
    title: string;
    body: string;
    advantage: string;
  };
};

const DIFFERENCES: Difference[] = [
  {
    num: "01",
    short: "Tracking",
    category: "Visibility & Tracking",
    metric: "Live Satellite GPS vs. 4hr Check Calls",
    badge: "Live Telemetry",
    theirs: {
      title: "Periodic Check-Calls & Blind Transit",
      body: "Periodic updates, manual check-calls, or limited tracking visibility. Shippers spend hours chasing dispatchers while freight moves in an operational black box.",
      friction:
        "Manual phone tag, blind transit windows, delayed exception response.",
    },
    ours: {
      title: "Continuous Satellite GPS & Route Optimization",
      body: "Real-time GPS tracking with instant visibility and route optimization built directly into our proprietary OpenRoad platform. Every tractor, trailer, and checkpoint is live 24/7.",
      advantage:
        "Direct live customer tracking links, automated geofence pings, zero check calls needed.",
    },
  },
  {
    num: "02",
    short: "Updates",
    category: "Proactive Updates",
    metric: "< 15 Min Exception Alert SLA",
    badge: "Automated Push",
    theirs: {
      title: "Reactive Communication & Chasing ETAs",
      body: "Manual status updates and reactive communication. You find out a shipment is running behind schedule only when the receiver calls your warehouse team to complain.",
      friction:
        "Warehouse dock scheduling conflicts, unexpected detention fee penalties.",
    },
    ours: {
      title: "Automated Geofence Alerts (< 15 Min SLA)",
      body: "Automated status notifications triggered by geofencing the moment equipment arrives or departs. We notify you before you even think to ask.",
      advantage:
        "Zero dispatcher phone calls, automated receiver notifications, instant POD delivery.",
    },
  },
  {
    num: "03",
    short: "Tech Stack",
    category: "Technology Stack",
    metric: "Proprietary OpenRoad TMS vs. 3rd-Party",
    badge: "In-House Tech",
    theirs: {
      title: "Fragmented 3rd-Party Generic Software",
      body: "Off-the-shelf software with delayed API sync, data silos, and zero custom ERP integration depth. Systems that don't talk to each other create blind spots.",
      friction:
        "Data silos, delayed EDI handoffs, zero custom operational tooling.",
    },
    ours: {
      title: "Proprietary OpenRoad TMS & Operational AI",
      body: "In-house OpenRoad TMS and AI dispatch optimization built specifically around asset operations. Direct EDI and API integrations tailored to your ERP.",
      advantage:
        "Custom API reporting, automated bill of lading processing, predictive weather rerouting.",
    },
  },
  {
    num: "04",
    short: "Performance",
    category: "Performance Culture",
    metric: "99.2% Contract SLA vs. 86% Broker Avg",
    badge: "99.2% OTD",
    theirs: {
      title: "Lane-Dependent Inconsistency",
      body: "Performance varies drastically by terminal, regional lane, or spot market conditions. Tight spot markets trigger dropped loads and rejected tenders.",
      friction:
        "Missed retail delivery appointments, compliance fines from big-box retailers.",
    },
    ours: {
      title: "Disciplined Execution & Guaranteed SLA",
      body: "A performance-driven culture with contract-backed reliability. Our dedicated asset fleet ensures capacity remains locked even when spot markets spike.",
      advantage:
        "Guaranteed contract surge capacity, top-tier vendor scorecards across enterprise shippers.",
    },
  },
  {
    num: "05",
    short: "Drivers",
    category: "Driver Quality Program",
    metric: "$56,000+ Monthly Performance Bonus Pool",
    badge: "ELITE Program",
    theirs: {
      title: "Basic Incentives & High Driver Churn",
      body: "Generic bonus programs with fewer measurable customer-impacting standards. High turnover rates lead to disengaged, unmotivated operators.",
      friction:
        "Careless freight handling, preventable equipment breakdowns, low driver accountability.",
    },
    ours: {
      title: "ELITE Driver Program with Direct Performance Pay",
      body: "Proprietary ELITE Driver Program scoring and paying bonuses for safety, on-time delivery, and fuel efficiency. Top drivers earn an extra 5.46 CPM.",
      advantage:
        "Highly incentivized professionals who treat your freight with personal pride and care.",
    },
  },
  {
    num: "06",
    short: "Reliability",
    category: "Service Reliability",
    metric: "100% Asset-Backed vs. Double-Brokering",
    badge: "Direct Asset",
    theirs: {
      title: "Layered Brokering & Cargo Risk Exposure",
      body: "More variability and higher risk of missed expectations. When capacity tightens, loads are re-brokered through unvetted third-party carriers.",
      friction:
        "Double-brokering security risks, uninsured freight handoffs, zero direct accountability.",
    },
    ours: {
      title: "Single-Chain Asset Control & Risk Mitigation",
      body: "Built to eliminate surprises through technology and disciplined execution. Our own trucks, our own drivers, and our own terminals across the lower 48.",
      advantage:
        "Zero handoffs, 100% legal custody of cargo, total peace of mind for high-value freight.",
    },
  },
  {
    num: "07",
    short: "Experience",
    category: "Customer Experience",
    metric: "Dedicated Account Lead vs. Call Center",
    badge: "Single Contact",
    theirs: {
      title: "Call-Center Queues & Rotating Agents",
      body: "A different representative on every call. Repetitive explanations and delayed escalation during transit emergencies.",
      friction:
        "Long hold times, unresolved transit crises, impersonal call-center queues.",
    },
    ours: {
      title: "Single Point of Contact & Transparent Self-Serve",
      body: "A transparent, tech-enabled shipping experience paired with a dedicated logistics manager who knows your lanes, facilities, and requirements.",
      advantage:
        "Direct line to your logistics specialist, instantaneous self-serve docs and tracking.",
    },
  },
  {
    num: "08",
    short: "Tenure",
    category: "Driver Experience",
    metric: "13+ Years Average vs. < 6 Months Students",
    badge: "13+ Yrs Tenure",
    theirs: {
      title: "Student Drivers & High-Churn Trainees",
      body: "Carriers often reliant on drivers with under six months experience fresh from CDL school, leading to higher incident rates and dock delays.",
      friction:
        "Dock backing accidents, damaged freight, slow transit times, and HOS violations.",
    },
    ours: {
      title: "13+ Years Average Driver Experience",
      body: "Veteran highway professionals with an average of 13+ years behind the wheel. Seasoned operators who know facility protocols and mountain passes.",
      advantage:
        "Zero backing delays at docks, flawless safety record, professional conduct at receiver facilities.",
    },
  },
];

const DETAIL_LINKS = [
  { label: "ELITE Driver Program", href: "/EliteDriverProgram" },
  { label: "PKT Group Technology", href: "/PKTGroupTechnology" },
];

export function ShipComparison() {
  const { open: openQuote } = useQuote();
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = useCallback(() => {
    setActiveIdx((i) => (i - 1 + DIFFERENCES.length) % DIFFERENCES.length);
  }, []);

  const next = useCallback(() => {
    setActiveIdx((i) => (i + 1) % DIFFERENCES.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const active = DIFFERENCES[activeIdx];

  return (
    <section id="difference" className="bg-page py-[clamp(72px,11vh,140px)]">
      <Reveal>
        <header
          className={cx(revealItem, "mb-[clamp(30px,4.5vh,52px)] px-gut")}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
            <div>
              <h2 className="type-display m-0 max-w-[14em] text-[clamp(26px,3.6vw,52px)] text-ink-text">
                PKT Group against{" "}
                <span className="text-azure">the typical carrier</span>
              </h2>
              <p className="mt-4 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
                Technology-forward visibility, performance-first execution, and
                a driver program built to deliver consistent service. Here is
                how our asset model breaks from broker norms.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-surface border border-line px-4 py-2.5">
                <p className={cx(label, "text-soft-text m-0")}>Contract SLA</p>
                <p className="font-mono text-base font-bold text-ink-text m-0 mt-0.5">
                  99.2% OTD
                </p>
              </div>
              <div className="bg-surface border border-line px-4 py-2.5">
                <p className={cx(label, "text-soft-text m-0")}>
                  Fleet Ownership
                </p>
                <p className="font-mono text-base font-bold text-azure m-0 mt-0.5">
                  100% Assets
                </p>
              </div>
            </div>
          </div>
        </header>

        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(revealItem, "px-gut")}
        >
          {/* 8-Dimension Selector Rail */}
          <div
            role="tablist"
            aria-label="Comparison dimensions"
            className="bg-surface border border-line border-b-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex divide-x divide-line">
              {DIFFERENCES.map((d, i) => {
                const on = i === activeIdx;
                return (
                  <button
                    key={d.num}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActiveIdx(i)}
                    className={cx(
                      "group/tab flex-1 min-w-[125px] px-3.5 py-3 text-left transition-colors duration-200",
                      on
                        ? "bg-page border-b-2 border-azure"
                        : "bg-surface hover:bg-[#fafbfd]",
                    )}
                  >
                    <span
                      className={cx(
                        label,
                        "block transition-colors duration-200",
                        on ? "text-azure font-bold" : "text-soft-text",
                      )}
                    >
                      {d.num}
                    </span>
                    <span
                      className={cx(
                        "block truncate text-[12.5px] font-bold mt-0.5 transition-colors duration-200",
                        on
                          ? "text-ink-text"
                          : "text-body-text group-hover/tab:text-ink-text",
                      )}
                    >
                      {d.short}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Matchup Stage Box */}
          <div className="bg-surface border border-line p-[clamp(20px,3.2vw,44px)] shadow-sm">
            {/* Top Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-line">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 bg-azure/10 text-azure font-bold border border-azure/30">
                  {active.num} / 08
                </span>
                <h3 className="type-display text-[clamp(20px,2.2vw,28px)] text-ink-text m-0">
                  {active.category}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className={cx(label, "text-body-text hidden sm:inline")}>
                  Metric:{" "}
                  <strong className="text-ink-text font-mono font-semibold">
                    {active.metric}
                  </strong>
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous difference"
                    className="size-8 rounded-full border border-line-strong text-ink-text flex items-center justify-center hover:bg-page active:scale-95 transition-all"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next difference"
                    className="size-8 rounded-full border border-line-strong text-ink-text flex items-center justify-center hover:bg-page active:scale-95 transition-all"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* The Dual Matchup Cards (Typical Carrier vs. PKT Group) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-7">
              {/* Typical Carrier Card */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-[clamp(20px,2.5vw,32px)] flex flex-col justify-between relative">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#cbd5e1]" />
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={cx(
                        label,
                        "text-[#64748b] flex items-center gap-1.5",
                      )}
                    >
                      <span className="flex size-3.5 items-center justify-center rounded-full bg-[#e2e8f0] text-[#64748b]">
                        <X size={10} weight="bold" />
                      </span>
                      The Typical Carrier / Broker
                    </span>
                    <span className={cx(label, "text-[#94a3b8]")}>
                      Industry Default
                    </span>
                  </div>

                  <h4 className="font-display text-[clamp(17px,1.5vw,22px)] font-bold text-[#334155] m-0 mb-2.5">
                    {active.theirs.title}
                  </h4>
                  <p className="text-[14.5px] leading-[1.6] text-[#64748b] m-0">
                    {active.theirs.body}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#e2e8f0] text-xs text-[#64748b]">
                  <span className="font-semibold text-[#475569]">
                    Operating Friction:
                  </span>
                  <span className="ml-1 text-[#64748b]">
                    {active.theirs.friction}
                  </span>
                </div>
              </div>

              {/* PKT Group Card */}
              <div className="bg-surface border-2 border-azure p-[clamp(20px,2.5vw,32px)] flex flex-col justify-between relative shadow-sm">
                <div className="absolute top-0 left-0 w-2 h-full bg-azure" />
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={cx(
                        label,
                        "text-azure flex items-center gap-1.5 font-bold",
                      )}
                    >
                      <span className="flex size-3.5 items-center justify-center rounded-full bg-azure text-azure-ink">
                        <Check size={10} weight="bold" />
                      </span>
                      PKT Group Enterprise Standard
                    </span>
                    <span className="font-mono text-xs text-azure-ink bg-azure px-2.5 py-0.5 rounded-full font-bold">
                      {active.badge}
                    </span>
                  </div>

                  <h4 className="font-display text-[clamp(17px,1.5vw,22px)] font-bold text-ink-text m-0 mb-2.5">
                    {active.ours.title}
                  </h4>
                  <p className="text-[14.5px] leading-[1.62] text-body-text m-0">
                    {active.ours.body}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-line text-xs text-ink-text">
                  <span className="font-bold text-azure">SLA Advantage:</span>
                  <span className="ml-1 text-body-text">
                    {active.ours.advantage}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Stepper & Action Controls */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-5 border-t border-line">
              <div className="flex items-center gap-2">
                <span className={cx(label, "text-soft-text")}>Index:</span>
                <div className="flex items-center gap-1.5">
                  {DIFFERENCES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Jump to difference ${i + 1}`}
                      onClick={() => setActiveIdx(i)}
                      className={cx(
                        "size-2 rounded-full transition-all duration-200",
                        i === activeIdx
                          ? "bg-azure w-5"
                          : "bg-line-strong hover:bg-soft-text",
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {DETAIL_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure transition-colors duration-200 hover:text-ink-text"
                  >
                    {l.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}

                <button
                  type="button"
                  onClick={openQuote}
                  className={cx(
                    btn,
                    btnSolid,
                    "h-10 px-5 text-[13px] font-bold shadow-sm",
                  )}
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
