"use client";

import {
  ArrowRight,
  ChartBar,
  Crown,
  Lightning,
  ShieldCheck,
  Timer,
  Gauge,
  Path,
  Flame,
  Truck,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label, btn, btnSolid, btnHero, btnGhost } from "../ui";

/**
 * ELITE Program Section.
 *
 * Dark plate (bg-ink) following the light DriverBenefits section.
 * Split layout: left narrative + payout stats, right phone-frame score dashboard.
 * Each score category has an animated progress bar that fills on reveal.
 */

interface ScoreCategory {
  icon: typeof ShieldCheck;
  name: string;
  goal: string;
  value: string;
  percent: number;
  status: "green" | "yellow" | "red";
  change: string;
}

const SCORE_CATEGORIES: ScoreCategory[] = [
  {
    icon: ShieldCheck,
    name: "Idelic Safety Score",
    goal: "Goal: 70 % or less",
    value: "44%",
    percent: 56,
    status: "green",
    change: "No change",
  },
  {
    icon: Timer,
    name: "Home Time Score",
    goal: "Goal: 0 days or more",
    value: "3 days",
    percent: 100,
    status: "green",
    change: "No change",
  },
  {
    icon: Gauge,
    name: "MPG",
    goal: "Goal: 7.5 mpg or more",
    value: "8.52 mpg",
    percent: 85,
    status: "green",
    change: "No change",
  },
  {
    icon: Path,
    name: "Route Compliance & Fueling",
    goal: "Goal: 95 % or more",
    value: "100%",
    percent: 100,
    status: "green",
    change: "No change",
  },
  {
    icon: Flame,
    name: "Idling",
    goal: "Goal: 35 % or less",
    value: "16.52%",
    percent: 47,
    status: "yellow",
    change: "▲ 0.7% today",
  },
  {
    icon: Truck,
    name: "On-Time Delivery",
    goal: "Goal: 95 % or more",
    value: "100%",
    percent: 100,
    status: "green",
    change: "No change",
  },
  {
    icon: Warning,
    name: "Infractions",
    goal: "Goal: 0",
    value: "0 / 0.0%",
    percent: 0,
    status: "green",
    change: "",
  },
];

const statusColor: Record<string, string> = {
  green: "bg-emerald-400",
  yellow: "bg-amber-400",
  red: "bg-red-400",
};

const statusBarBg: Record<string, string> = {
  green: "bg-emerald-400/20",
  yellow: "bg-amber-400/20",
  red: "bg-red-400/20",
};

const statusBarFill: Record<string, string> = {
  green: "bg-emerald-400",
  yellow: "bg-amber-400",
  red: "bg-red-400",
};

export function DriverElite() {
  return (
    <section
      id="elite"
      className="relative isolate bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Background glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] bg-azure/6 blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[600px] bg-azure/5 blur-[140px] -z-10"
      />

      <Reveal>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Narrative + Payout */}
          <div className="lg:col-span-5 space-y-8">
            <header className={revealItem}>
              <p
                className={cx(
                  label,
                  "text-azure-hi mb-3 flex items-center gap-2",
                )}
              >
                <Crown size={14} weight="fill" />
                Performance Rewards
              </p>

              <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-paper leading-[0.94]">
                ELITE{" "}
                <span className="text-azure-hi">Program</span>
              </h2>

              <p className="mt-5 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute max-w-[440px]">
                Get rewarded for safety, efficiency, on-time delivery, and route
                compliance — up to{" "}
                <strong className="text-paper font-semibold">
                  $7,400/year
                </strong>{" "}
                extra on top of your base pay.
              </p>
            </header>

            {/* Payout Callout Card */}
            <div
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "bg-ink-2 border border-rule p-6 relative overflow-hidden",
              )}
            >
              {/* Accent bar */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-azure via-azure/60 to-transparent"
              />

              <div className="flex items-center gap-2 mb-4">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-mute uppercase tracking-wider">
                  Last Month&apos;s ELITE Payout
                </span>
              </div>

              <div className="flex items-end gap-5 flex-wrap">
                <div>
                  <span className="font-display text-[clamp(36px,4vw,52px)] font-black text-paper leading-none tabular-nums">
                    $56,162
                  </span>
                  <span className="block text-xs text-mute mt-1 font-mono">
                    paid to drivers
                  </span>
                </div>

                <div className="bg-azure/15 border border-azure/40 px-3 py-2 mb-1">
                  <span className="font-display text-lg font-black text-azure-hi leading-none">
                    +5.46{" "}
                    <span className="text-[10px] font-mono font-bold">CPM</span>
                  </span>
                  <span className="block text-[10px] text-azure-hi/80 font-mono mt-0.5">
                    avg — top 25% of drivers
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-mute mt-4 m-0 font-mono italic">
                * Real money, every month. Updated live on a monthly basis.
              </p>
            </div>

            {/* CTAs */}
            <div
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(revealItem, "flex flex-wrap gap-3")}
            >
              <a
                href="#calculator"
                className={cx(btn, btnSolid, btnHero)}
              >
                <Lightning size={17} weight="fill" />
                Am I ELITE?
              </a>
              <a
                href="#overview"
                className={cx(btn, btnGhost, btnHero)}
              >
                Learn More
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT: Phone-Frame Score Dashboard */}
          <div
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "lg:col-span-7 flex justify-center lg:justify-end",
            )}
          >
            {/* Phone shell */}
            <div className="relative w-full max-w-[420px]">
              {/* Phone frame */}
              <div className="bg-[#0f1520] border border-rule rounded-[28px] p-3 shadow-2xl shadow-black/40">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-1.5 pb-3">
                  <span className="font-mono text-[11px] text-mute font-medium">
                    2:46
                  </span>
                  <div className="w-[80px] h-[22px] bg-ink rounded-full" />
                  <div className="flex items-center gap-1.5 text-mute">
                    <ChartBar size={12} />
                    <span className="text-[11px]">●●●</span>
                  </div>
                </div>

                {/* Inner screen */}
                <div className="bg-ink-2 rounded-[18px] overflow-hidden">
                  {/* App header */}
                  <div className="px-5 py-4 border-b border-rule">
                    <div className="flex items-center justify-between">
                      <span className="text-mute text-sm">←</span>
                      <span className="font-display text-sm font-bold text-paper">
                        Your ELITE Score
                      </span>
                      <span className="text-mute text-sm">⋮</span>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 mt-3 text-xs font-semibold">
                      <span className="text-paper border-b-2 border-azure pb-2">
                        Current
                      </span>
                      <span className="text-mute pb-2">Monthly</span>
                      <span className="text-mute pb-2">Annual</span>
                    </div>
                  </div>

                  {/* Score summary */}
                  <div className="px-5 py-4 border-b border-rule flex items-center justify-between">
                    <span className="text-xs text-mute font-semibold">
                      July
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-mute">Score:</span>
                      <span className="font-display text-sm font-bold text-azure-hi">
                        84.67 / 100
                      </span>
                    </div>
                  </div>

                  {/* Score Categories */}
                  <div className="divide-y divide-rule">
                    {SCORE_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <div key={cat.name} className="px-5 py-3.5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <span className="text-[13px] font-semibold text-paper leading-tight block">
                                {cat.name}
                              </span>
                              <span className="text-[10.5px] text-mute block mt-0.5">
                                {cat.goal}
                              </span>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="text-[13px] font-bold text-paper">
                                {cat.value}
                              </span>
                              {cat.change && (
                                <span className="text-[10px] text-mute block mt-0.5">
                                  — {cat.change}
                                </span>
                              )}
                            </div>
                          </div>
                          {/* Progress bar */}
                          <div
                            className={cx(
                              "mt-2 h-[5px] rounded-full overflow-hidden",
                              statusBarBg[cat.status],
                            )}
                          >
                            <div
                              className={cx(
                                "h-full rounded-full transition-all duration-1000 ease-out",
                                "group-data-[shown=true]/reveal:w-[var(--pct)]",
                                "w-0",
                                statusBarFill[cat.status],
                              )}
                              style={
                                {
                                  "--pct": `${cat.percent}%`,
                                } as React.CSSProperties
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom safe area */}
                  <div className="h-5" />
                </div>
              </div>

              {/* Floating ambient badge */}
              <div className="absolute -top-4 -right-4 bg-azure text-azure-ink px-4 py-2 rounded-full shadow-lg shadow-azure/20 z-10">
                <span className="font-display text-sm font-black">
                  +$7,400
                </span>
                <span className="text-[9px] font-mono font-bold block text-azure-ink/70">
                  /YEAR EXTRA
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
