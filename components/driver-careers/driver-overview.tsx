"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChartLineUp,
  Coins,
  Headset,
  Heart,
  ShieldCheck,
  TrendUp,
  Trophy,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Driver Overview Section ("Why Drivers Choose Us").
 *
 * Light field (bg-page) following the dark DriverHero plate.
 * Rebuilt as an Asymmetric Driver Earnings & Value Bento Stage rather than
 * a uniform grid of identical cards.
 */

export function DriverOverview() {
  const { open: openQuote } = useQuote();
  const [selectedPayTab, setSelectedPayTab] = useState<"first" | "elite">("first");

  return (
    <section
      id="overview"
      className="bg-page py-[clamp(78px,12vh,150px)] px-gut"
    >
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
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Heart size={14} weight="bold" />
            Why Choose GP Transco
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Why Drivers <span className="text-azure">Choose Us</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Competitive pay, modern equipment, and a management team that actually cares about you.
          </p>
        </header>

        {/* Asymmetric Bento Stage */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "grid grid-cols-12 gap-6 max-w-[1280px] mx-auto items-stretch",
          )}
        >
          {/* Main Hero Bento Card: Driver Pay & Salary Comparison (7 Cols) */}
          <div className="col-span-12 lg:col-span-7 bg-surface border border-line p-[clamp(28px,4vw,48px)] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-line">
                <span className={cx(label, "text-azure flex items-center gap-2")}>
                  <Coins size={18} weight="bold" />
                  Industry-Leading Earning Power
                </span>
                <span className="font-mono text-xs font-semibold text-azure bg-azure/10 px-3 py-1 rounded-full">
                  Verified W2 Earnings
                </span>
              </div>

              <h3 className="font-display text-[clamp(24px,2.8vw,36px)] font-bold text-ink-text mt-5 mb-3 leading-snug">
                Earn well above the national average
              </h3>
              <p className="text-[15px] leading-[1.65] text-body-text m-0 max-w-[54ch]">
                First-year drivers at GP Transco earn <strong className="text-ink-text">$80,000 to $110,000</strong> annually — nearly double the national average CDL-A salary of $54,320. Plus, receive an automatic <strong className="text-azure">+1 CPM raise every single year</strong>.
              </p>

              {/* Salary Comparison Bar Visual */}
              <div className="mt-8 bg-page border border-line p-5 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-ink-text">GP Transco First-Year Driver</span>
                    <span className="text-azure font-mono font-bold">$80,000 – $110,000/yr</span>
                  </div>
                  <div className="h-3 w-full bg-line rounded-full overflow-hidden">
                    <div className="h-full bg-azure rounded-full w-[92%] transition-all duration-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-body-text mb-1.5">
                    <span>National Average CDL-A Salary</span>
                    <span className="font-mono">$54,320/yr</span>
                  </div>
                  <div className="h-2.5 w-full bg-line rounded-full overflow-hidden">
                    <div className="h-full bg-soft-text/40 rounded-full w-[52%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-ink-text">
                <TrendUp size={16} className="text-azure" weight="bold" />
                <span>+1 CPM Guaranteed Annual Raise</span>
              </div>
              <span className="text-xs text-body-text">No caps on experience earnings</span>
            </div>
          </div>

          {/* Secondary Stacked Bento Columns (5 Cols) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            {/* Card A: ELITE Driver Score Program */}
            <div className="bg-surface border border-line p-[clamp(24px,3vw,36px)] flex-1 flex flex-col justify-between shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={cx(label, "text-azure flex items-center gap-1.5 mb-2")}>
                    <Trophy size={16} weight="bold" />
                    Performance Bonus
                  </span>
                  <h4 className="font-display text-xl font-bold text-ink-text m-0">
                    ELITE Driver Program
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-azure bg-azure/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  +$7,400 / yr
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-body-text m-0">
                Earn up to <strong className="text-ink-text">$7,400 extra per year</strong> through our transparent, performance-based driver score program evaluating safety and fuel efficiency.
              </p>
            </div>

            {/* Card B: Equipment & Rest */}
            <div className="bg-surface border border-line p-[clamp(24px,3vw,36px)] flex-1 flex flex-col justify-between shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={cx(label, "text-azure flex items-center gap-1.5 mb-2")}>
                    <Truck size={16} weight="bold" />
                    Late-Model Fleet
                  </span>
                  <h4 className="font-display text-xl font-bold text-ink-text m-0">
                    1.5 Year Average Fleet Age
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-ink-text bg-page border border-line px-2.5 py-1 rounded-full whitespace-nowrap">
                  Cascadias Only
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-body-text m-0">
                Drive clean, late-model Freightliner Cascadias specced with luxury sleeper cabs, APU solar power, and collision avoidance technology.
              </p>
            </div>

            {/* Card C: Respect & Dedicated Support */}
            <div className="bg-surface border border-line p-[clamp(24px,3vw,36px)] flex-1 flex flex-col justify-between shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={cx(label, "text-azure flex items-center gap-1.5 mb-2")}>
                    <Headset size={16} weight="bold" />
                    Driver-First Support
                  </span>
                  <h4 className="font-display text-xl font-bold text-ink-text m-0">
                    24/7 Dedicated Managers
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-azure bg-azure/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  1-on-1 Contact
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-body-text m-0">
                You are assigned a dedicated manager who knows your facility preferences, home time goals, and lane choices — treating you with total respect.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(revealItem, "mt-12 flex justify-center")}
        >
          <button
            type="button"
            onClick={openQuote}
            className={cx(btn, btnSolid, btnHero, "shadow-md")}
          >
            Start Your Application
            <ArrowRight size={17} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
