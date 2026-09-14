"use client";

import {
  CheckCircle,
  FileText,
  GraduationCap,
  MapTrifold,
  Sparkle,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cardRound, cx, label } from "../ui";

/**
 * Safety Connect — the in-house platform.
 *
 * Prod showed a laptop screenshot of the real product, which told you the
 * software exists without showing it working. So the dashboard here is
 * rendered live, the way the landing page's dispatch console and the
 * innovation page's internal apps are: the stat tiles count up on entry, the
 * FMCSA BASIC bars grow toward their DOT thresholds once the Reveal fires,
 * and the data-source chips read like a connection strip.
 *
 * Below the panel: "What it connects to" (the five upstream systems, as a
 * checked integration lattice) and the six capabilities as icon cards. The
 * panel sits on the section's ink plate with window chrome — header, counter,
 * and a mono status bar — matching the internal-apps board register.
 */

const FLEET = [
  { l: "Active Drivers", v: 530 },
  { l: "Tractors", v: 573 },
  { l: "Trailers", v: 1776 },
];

/** BASIC score vs its DOT threshold — the width is the score, the tick the
 *  regulatory line. Both render from data, so a score update is one edit. */
const BASICS = [
  { name: "Unsafe Driving", score: 28, threshold: 65 },
  { name: "Crash Indicator", score: 19, threshold: 65 },
  { name: "Hours of Service", score: 41, threshold: 65 },
  { name: "Vehicle Maint.", score: 52, threshold: 80 },
  { name: "Controlled Subst.", score: 0, threshold: 80 },
];

const SOURCES = ["OpenRoad TMS", "Samsara", "Idelic", "Luma", "FMCSA"];

const CONNECTIONS = [
  {
    name: "OpenRoad TMS",
    body: "Drivers, tractors, trailers, loads, accidents, notes and documents",
  },
  {
    name: "Samsara",
    body: "Live truck locations, dashcam safety events, HOS, and crash footage pulls",
  },
  {
    name: "Idelic",
    body: "Roadside inspections, violations, citations and FMCSA BASIC percentiles",
  },
  {
    name: "Luma Brighter Learning",
    body: "Driver training assignments, completions and scores",
  },
  {
    name: "FMCSA",
    body: "Carrier profile, crash and inspection records",
  },
];

const FEATURES = [
  {
    icon: FileText,
    title: "Fleet-Wide Dashboard",
    body: "BASIC threshold status, accident trends, year-over-year comparison, training and cost-of-risk widgets in one view.",
  },
  {
    icon: Sparkle,
    title: "AI Executive Summary",
    body: "A board-level safety briefing generated over a rolling 12-month window, exportable to PDF.",
  },
  {
    icon: Users,
    title: "Driver Safety Profiles",
    body: "A safety score built from accidents, violations, training and pre-employment MVR/PSP history, with an AI summary of safety notes.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Gradebook",
    body: "Training completions, overdue tracking and an automated weekly report email.",
  },
  {
    icon: MapTrifold,
    title: "Incident Heat Map",
    body: "Accidents and violations mapped by location alongside live fleet positions.",
  },
  {
    icon: Sparkle,
    title: "Ask Claude",
    body: "Natural-language Q&A across the entire safety dataset, plus automated weekly data-accuracy checks.",
  },
];

export function SafetyConnect() {
  return (
    <section
      id="connect"
      className="bg-ink px-gut py-[clamp(78px,12vh,150px)] text-paper"
    >
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-azure-hi")}
          >
            Built In-House
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em]",
            )}
          >
            Safety <span className="text-azure-hi">Connect</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
            )}
          >
            A single web platform that pulls every safety data source PKT Group
            uses into one place — so our safety team works from one system
            instead of six.
          </p>
        </div>

        {/* The dashboard, rendered live rather than screenshotted. Window
            chrome matches the internal-apps board on the innovation page. */}
        <div
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(revealItem, "relative mt-[clamp(32px,5vh,60px)]")}
        >
          <div
            className={cx(
              cardRound,
              "overflow-hidden border border-rule-lit bg-ink-2",
            )}
          >
            <div className="flex items-center justify-between gap-4 border-b border-rule px-[clamp(18px,2.2vw,28px)] py-4">
              <span className={cx(label, "text-paper")}>Safety Connect</span>
              <span
                className={cx(
                  label,
                  "hidden text-[10px] text-mute-2 lg:block",
                )}
              >
                PKT Group · Safety &amp; Compliance
              </span>
              <span
                className={cx(
                  label,
                  "flex items-center gap-2 text-[10px] text-mute",
                )}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                All sources synced
              </span>
            </div>

            <div
              className="px-[clamp(16px,2vw,28px)] py-[clamp(18px,2.4vw,28px)]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0 1px, transparent 1px 28px)",
              }}
            >
              {/* Connection strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={cx(label, "text-[9.5px] text-azure-hi")}>
                  Live data connections
                </span>
                {SOURCES.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-rule bg-ink px-2.5 py-1 text-[11px] font-medium text-mute"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Fleet stat tiles */}
              <div className="mt-5 grid grid-cols-3 gap-px bg-rule max-[720px]:grid-cols-1">
                {FLEET.map((f) => (
                  <div
                    key={f.l}
                    className="bg-ink-2 px-[clamp(14px,1.6vw,22px)] py-[clamp(14px,1.8vh,20px)]"
                  >
                    <p className={cx(label, "m-0 text-[9.5px] text-mute-2")}>
                      {f.l}
                    </p>
                    <p
                      className={cx(
                        "font-display m-0 mt-1.5 text-[clamp(22px,2.4vw,34px)]",
                        "font-extrabold leading-none tracking-[-0.02em] text-paper",
                      )}
                    >
                      <CountUp to={f.v} />
                    </p>
                  </div>
                ))}
              </div>

              {/* FMCSA BASIC status — each bar grows to its score; the
                  hairline tick is the DOT threshold the score sits against. */}
              <p className={cx(label, "m-0 mt-6 text-[9.5px] text-mute-2")}>
                FMCSA BASIC status vs. DOT threshold
              </p>
              <div className="mt-3 grid grid-cols-5 gap-4 max-[1000px]:grid-cols-3 max-[560px]:grid-cols-2 max-[400px]:grid-cols-1">
                {BASICS.map((b) => (
                  <div key={b.name}>
                    <p className="m-0 text-[12px] font-semibold leading-tight text-paper">
                      {b.name}
                    </p>
                    <p
                      className={cx(
                        "font-display m-0 mt-1 text-[18px] font-extrabold leading-none",
                        b.score >= b.threshold
                          ? "text-red-400"
                          : "text-emerald-400",
                      )}
                    >
                      {b.score}%
                    </p>
                    <div className="relative mt-2 h-1 rounded-full bg-rule">
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-0 rounded-full bg-azure transition-[width] duration-[1200ms] ease-[var(--ease-out-strong)] group-data-[shown=true]/reveal:w-[var(--w)]"
                        style={{ "--w": `${b.score}%` } as React.CSSProperties}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-[-3px] h-[7px] w-px bg-paper/50"
                        style={{ left: `${b.threshold}%` }}
                      />
                    </div>
                    <p
                      className={cx(label, "m-0 mt-1.5 text-[8.5px] text-mute-2")}
                    >
                      Threshold {b.threshold}%
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-rule px-[clamp(18px,2.2vw,28px)] py-2.5">
              <span className={cx(label, "font-mono text-[9px] text-mute")}>
                Synced OpenRoad · Samsara · Idelic · Luma · FMCSA — nightly
                reconciliation, 0 errors
              </span>
              <span className={cx(label, "font-mono text-[9px] text-mute-2")}>
                PKT Group Internal
              </span>
            </div>
          </div>
        </div>

        {/* What it connects to — the five upstream systems, one checked
            integration lattice. */}
        <div className="mt-[clamp(48px,8vh,96px)]">
          <h3
            style={{ "--i": 5 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 text-[clamp(22px,2.6vw,38px)]",
              "font-extrabold leading-[1.05] tracking-[-0.02em] text-paper",
            )}
          >
            What it connects to
          </h3>
          <div className="mt-8 grid grid-cols-3 gap-x-[clamp(24px,3vw,48px)] gap-y-8 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
            {CONNECTIONS.map((c, i) => (
              <div
                key={c.name}
                style={{ "--i": 6 + i } as React.CSSProperties}
                className={cx(revealItem, "flex gap-3")}
              >
                <CheckCircle
                  size={20}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-azure-hi"
                  aria-hidden="true"
                />
                <div>
                  <p className="m-0 text-[15.5px] font-bold leading-[1.3] text-paper">
                    {c.name}
                  </p>
                  <p className="m-0 mt-1 text-[13.5px] leading-[1.55] text-mute">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities — six icon cards on one lattice, same register as the
            tools section above but inverted for ink. */}
        <div className="mt-[clamp(48px,8vh,96px)] grid grid-cols-3 gap-px bg-rule max-[1000px]:grid-cols-1">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              style={{ "--i": 12 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-ink px-[clamp(22px,2.4vw,36px)] py-[clamp(26px,3.6vh,44px)]",
                "transition-colors duration-300 hover:bg-ink-2",
              )}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-azure/15 text-azure-hi">
                <f.icon size={21} weight="regular" aria-hidden="true" />
              </span>
              <h4
                className={cx(
                  "font-display m-0 mt-5 text-[clamp(16px,1.3vw,20px)]",
                  "font-bold leading-[1.2] text-paper",
                )}
              >
                {f.title}
              </h4>
              <p className="m-0 mt-2.5 text-[13.5px] leading-[1.6] text-mute">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

