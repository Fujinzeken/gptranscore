"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  ChartLineUp,
  Coins,
  CurrencyDollar,
  Sparkle,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Driver Pay Calculator Section.
 *
 * Sits on a cinematic dark plate (bg-ink) following the light DriverRoutes section.
 * Replicates the live site's telemetry dashboard: previous driver's calculated pay,
 * an interactive mileage/CPM slider, an SVG earnings trend graph, and the main CTA.
 */

export function DriverPayCalculator() {
  const { open: openQuote } = useQuote();

  // Interactive slider state for instant local estimation
  const [weeklyMiles, setWeeklyMiles] = useState<number>(2400);
  const [cpmRate, setCpmRate] = useState<number>(72);
  const [eliteBonus, setEliteBonus] = useState<boolean>(true);

  // Math calculation
  const totalCpm = cpmRate + (eliteBonus ? 6 : 0);
  const calculatedWeeklyPay = Math.round((weeklyMiles * totalCpm) / 100);
  const calculatedAnnualPay = Math.round(calculatedWeeklyPay * 52);

  return (
    <section
      id="calculator"
      className="relative isolate bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Background azure glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[500px] w-[900px] bg-azure/8 blur-[140px] -z-10"
      />

      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[740px] mx-auto mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure-hi mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Calculator size={14} weight="bold" />
            Driver Pay Calculator
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-paper leading-[0.94]">
            Estimate Your <span className="text-azure-hi">Potential Pay</span>{" "}
            at GP Transco
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            See how your mileage, performance, and experience can impact your
            estimated annual earnings — in under a minute.
          </p>
        </header>

        {/* Telemetry Dashboard Container */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(revealItem, "max-w-[1280px] mx-auto space-y-6")}
        >
          {/* Top Panel: Previous Driver's Submission Callout */}
          <div className="bg-ink-2 border border-rule p-[clamp(24px,3.5vw,40px)] relative overflow-hidden">
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-rule mb-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-azure-hi uppercase tracking-wider">
                  THE PREVIOUS DRIVER&apos;S CALCULATED PAY WAS:
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-mute">
                <span className="px-2.5 py-1 bg-ink border border-rule rounded-full">
                  Mileage: 2,450/wk
                </span>
                <span className="px-2.5 py-1 bg-ink border border-rule rounded-full">
                  ELITE Score: 81%
                </span>
              </div>
            </div>

            {/* 3 Metric Displays */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="bg-ink/70 border border-rule p-5">
                <span className="font-mono text-xs font-bold text-mute block mb-1 uppercase">
                  FINAL CPM
                </span>
                <span className="font-display text-[clamp(36px,4vw,52px)] font-black text-paper leading-none tabular-nums">
                  70{" "}
                  <span className="text-xs font-mono font-bold text-azure-hi">
                    CPM
                  </span>
                </span>
              </div>

              <div className="bg-ink/70 border border-rule p-5">
                <span className="font-mono text-xs font-bold text-mute block mb-1 uppercase">
                  ELITE SCORE
                </span>
                <span className="font-display text-[clamp(36px,4vw,52px)] font-black text-paper leading-none tabular-nums">
                  81
                  <span className="text-xs font-mono font-bold text-azure-hi">
                    %
                  </span>
                </span>
              </div>

              <div className="bg-azure/15 border border-azure/40 p-5">
                <span className="font-mono text-xs font-bold text-azure-hi block mb-1 uppercase">
                  ANNUAL PAY
                </span>
                <span className="font-display text-[clamp(36px,4vw,52px)] font-black text-azure-hi leading-none tabular-nums">
                  ${calculatedAnnualPay.toLocaleString()}
                </span>
              </div>
            </div>
            <p className="text-[12px] text-mute mt-4 m-0 font-mono">
              * These are real numbers from another driver&apos;s submission —
              calculate your own below.
            </p>
          </div>

          {/* Interactive Calculator Controls Panel */}
          <div className="bg-ink-2 border border-rule p-[clamp(24px,3.5vw,40px)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-display text-xl font-bold text-paper m-0 flex items-center gap-2">
                <Coins size={20} className="text-azure-hi" />
                Customize Your Estimate
              </h3>

              {/* Weekly Miles Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-paper mb-2">
                  <span>Weekly Miles Goal</span>
                  <span className="font-mono text-azure-hi text-sm">
                    {weeklyMiles.toLocaleString()} miles/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="3200"
                  step="50"
                  value={weeklyMiles}
                  onChange={(e) => setWeeklyMiles(Number(e.target.value))}
                  className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-azure"
                />
              </div>

              {/* Base CPM Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-paper mb-2">
                  <span>Base Rate (Experience Level)</span>
                  <span className="font-mono text-azure-hi text-sm">
                    {cpmRate} CPM
                  </span>
                </div>
                <input
                  type="range"
                  min="65"
                  max="80"
                  step="1"
                  value={cpmRate}
                  onChange={(e) => setCpmRate(Number(e.target.value))}
                  className="w-full h-2 bg-ink rounded-lg appearance-none cursor-pointer accent-azure"
                />
              </div>

              {/* ELITE Bonus Checkbox Toggle */}
              <div className="flex items-center justify-between bg-ink border border-rule p-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="eliteToggle"
                    checked={eliteBonus}
                    onChange={(e) => setEliteBonus(e.target.checked)}
                    className="size-4 rounded accent-azure cursor-pointer"
                  />
                  <label
                    htmlFor="eliteToggle"
                    className="text-xs font-semibold text-paper cursor-pointer select-none"
                  >
                    Include ELITE Driver Performance Bonus (+6 CPM)
                  </label>
                </div>
                <span className="font-mono text-xs font-bold text-azure-hi">
                  +6 CPM
                </span>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-ink border border-rule-lit p-6 flex flex-col justify-between h-full">
              <div>
                <span className={cx(label, "text-azure-hi block mb-2")}>
                  Estimated Earnings
                </span>
                <p className="font-display text-[clamp(40px,4.5vw,60px)] font-black text-paper leading-none tabular-nums m-0">
                  ${calculatedAnnualPay.toLocaleString()}
                  <span className="text-xs font-mono text-mute block mt-1 font-normal">
                    / YEAR PROJECTED W2
                  </span>
                </p>
                <div className="mt-4 pt-4 border-t border-rule flex justify-between text-xs font-mono">
                  <span className="text-mute">Weekly Average:</span>
                  <span className="text-paper font-bold">
                    ${calculatedWeeklyPay.toLocaleString()}/wk
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={openQuote}
                className={cx(
                  btn,
                  btnSolid,
                  btnHero,
                  "w-full justify-center mt-6 shadow-md",
                )}
              >
                Calculate My Exact Pay
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* SVG Trend Graph Panel */}
          <div className="bg-ink-2 border border-rule p-6">
            <div className="flex items-center justify-between pb-4 border-b border-rule mb-4">
              <span
                className={cx(label, "text-azure-hi flex items-center gap-2")}
              >
                <ChartLineUp size={16} weight="bold" />
                Recent Driver Estimates Trend
              </span>
              <span className="font-mono text-xs text-mute font-bold">
                AVG: $100,065/yr
              </span>
            </div>

            {/* Crisp SVG Sparkline */}
            <div className="h-[120px] w-full relative">
              <svg
                viewBox="0 0 1000 120"
                className="w-full h-full preserve-3d"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0b8fcb" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0b8fcb" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M0,70 Q100,60 200,30 T400,65 T600,20 T800,75 T1000,30 L1000,120 L0,120 Z"
                  fill="url(#chartGrad)"
                />
                {/* Line stroke */}
                <path
                  d="M0,70 Q100,60 200,30 T400,65 T600,20 T800,75 T1000,30"
                  fill="none"
                  stroke="#0b8fcb"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <p className="text-center text-[11px] font-mono text-mute mt-2 m-0">
              * Estimated annual pay from the last 40 driver submissions.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
