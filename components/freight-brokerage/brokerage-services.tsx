"use client";

import { useState } from "react";
import {
  Truck,
  Cube,
  Warehouse,
  Lightning,
  Target,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

const EQUIPMENT_SPECS = [
  {
    name: "53' Dry Van",
    spec: "Air-ride suspension, food-grade clean, e-track securement, GPS tracked",
  },
  {
    name: "Refrigerated / Reefer",
    spec: "Multi-temp precision (-20°F to 70°F), continuous remote temperature telemetry",
  },
  {
    name: "Flatbed & Step Deck",
    spec: "Heavy haul, strapped/tarped equipment, side-kit & oversized capabilities",
  },
  {
    name: "Lift-Gate & Specialized",
    spec: "Ground-level loading, residential/job-site delivery, high-value freight protection",
  },
];

export function BrokerageServices() {
  const { open: openQuote } = useQuote();
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);

  return (
    <section
      id="logistics-services"
      className="relative bg-page py-[clamp(78px,12vh,140px)] px-gut overflow-hidden"
    >
      {/* Subtle brand ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-azure/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          {/* Section Header */}
          <header
            className={cx(
              revealItem,
              "text-center max-w-[780px] mx-auto mb-[clamp(44px,6.5vh,64px)]",
            )}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-azure/10 border border-azure/20 mb-5">
              <span className="size-2 rounded-full bg-azure animate-pulse" />
              <span
                className={cx(
                  label,
                  "text-azure tracking-widest text-[11px] sm:text-xs",
                )}
              >
                Comprehensive Solutions
              </span>
            </div>

            <h2 className="type-display m-0 text-[clamp(32px,4.5vw,58px)] text-ink-text leading-[0.94]">
              Logistics Services{" "}
              <span className="text-azure">For Every Need</span>
            </h2>

            <p className="mt-4 text-[clamp(15px,1.15vw,18px)] leading-[1.62] text-body-text max-w-2xl mx-auto">
              Whether dry van, reefer, flatbed, lift-gate, or any other
              service—we have the freight brokerage solutions to fit your
              specific needs.
            </p>
          </header>

          {/* Bento Grid: Row 1 (7 cols + 5 cols) */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6",
            )}
          >
            {/* Card 1: Logistics Services (Hero Interactive Tile - 7 Cols) */}
            <div className="lg:col-span-7 group bg-surface border border-line rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-13 rounded-2xl bg-azure/10 text-azure flex items-center justify-center group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                    <Truck size={26} weight="bold" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-page border border-line text-[11px] font-mono uppercase tracking-wider text-mute">
                    Full Truckload & LTL
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-ink-text mb-3 leading-snug group-hover:text-azure transition-colors">
                  Logistics Services
                </h3>

                <p className="text-[14.5px] leading-relaxed text-body-text mb-6">
                  Whether it&apos;s dry van, reefer, flatbed, lift-gate, or any
                  other service that you&apos;re looking for, we have the freight
                  brokerage services to fit your specific needs.
                </p>

                {/* Interactive Mode Filter Tabs */}
                <div className="pt-2 pb-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-2.5">
                    Select Equipment Mode
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {EQUIPMENT_SPECS.map((item, idx) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setActiveSpecIndex(idx)}
                        className={cx(
                          "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border",
                          activeSpecIndex === idx
                            ? "bg-azure text-white border-azure shadow-sm shadow-azure/25"
                            : "bg-page border-line text-ink-text hover:border-azure/40 hover:text-azure",
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  {/* Active Spec Highlight Box */}
                  <div className="mt-3.5 p-3.5 rounded-xl bg-page border border-line/80 flex items-start gap-2.5">
                    <CheckCircle
                      size={17}
                      weight="fill"
                      className="text-azure flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-body-text leading-relaxed">
                      {EQUIPMENT_SPECS[activeSpecIndex].spec}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between mt-4">
                <span className="text-xs font-mono text-mute">
                  Guaranteed capacity on demand
                </span>
                <button
                  type="button"
                  onClick={openQuote}
                  className="inline-flex items-center gap-1.5 text-azure text-sm font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Request Rate</span>
                  <ArrowRight size={15} weight="bold" />
                </button>
              </div>
            </div>

            {/* Card 2: Asset-Based Capacity (5 Cols) */}
            <div className="lg:col-span-5 group bg-surface border border-line rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-13 rounded-2xl bg-azure/10 text-azure flex items-center justify-center group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                    <Cube size={26} weight="bold" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-page border border-line text-[11px] font-mono uppercase tracking-wider text-mute">
                    Fleet Synergy
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-ink-text mb-3 leading-snug group-hover:text-azure transition-colors">
                  Asset-Based Capacity
                </h3>

                <p className="text-[14.5px] leading-relaxed text-body-text mb-6">
                  Our asset-based company and operations provide capacity
                  solutions to assist your supply chain with unmatched
                  flexibility, reliability, and surge support.
                </p>

                {/* Metric Strip */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-page border border-line/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-mute font-mono">Chicagoland Fleet:</span>
                    <span className="font-bold text-ink-text">Top-10 Carrier Backing</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-mute font-mono">Fleet Size:</span>
                    <span className="font-bold text-azure">700+ Power Units</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-mute font-mono">Carrier Vetting:</span>
                    <span className="font-bold text-emerald-600">Top 15% Verified</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between mt-6">
                <span className="text-xs font-mono text-mute">
                  Direct equipment access
                </span>
                <button
                  type="button"
                  onClick={openQuote}
                  className="inline-flex items-center gap-1.5 text-azure text-sm font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Book Capacity</span>
                  <ArrowRight size={15} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Bento Grid: Row 2 (3 equal columns) */}
          <div
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            )}
          >
            {/* Card 3: Warehousing & Distribution */}
            <div className="group bg-surface border border-line rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="size-13 rounded-2xl bg-azure/10 text-azure flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                  <Warehouse size={26} weight="bold" />
                </div>

                <h3 className="text-xl font-bold text-ink-text mb-2.5 leading-snug group-hover:text-azure transition-colors">
                  Warehousing & Distribution
                </h3>

                <p className="text-sm leading-relaxed text-body-text mb-5">
                  Flexible warehousing and distribution services that meet your
                  business needs across major freight corridors.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Cross-Docking
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Short & Long-Term
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Yard Staging
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs font-mono text-mute">Rapid turnarounds</span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="text-azure group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>

            {/* Card 4: Expedited Services */}
            <div className="group bg-surface border border-line rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="size-13 rounded-2xl bg-azure/10 text-azure flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                  <Lightning size={26} weight="bold" />
                </div>

                <h3 className="text-xl font-bold text-ink-text mb-2.5 leading-snug group-hover:text-azure transition-colors">
                  Expedited Services
                </h3>

                <p className="text-sm leading-relaxed text-body-text mb-5">
                  We understand the meaning of urgency — therefore we offer same
                  day and next day deliveries with team-driver execution.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Same-Day & Next-Day
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Team Drivers
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Guaranteed Windows
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs font-mono text-mute">24/7 Hotline</span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="text-azure group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>

            {/* Card 5: Optimized & Dedicated */}
            <div className="group bg-surface border border-line rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="size-13 rounded-2xl bg-azure/10 text-azure flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                  <Target size={26} weight="bold" />
                </div>

                <h3 className="text-xl font-bold text-ink-text mb-2.5 leading-snug group-hover:text-azure transition-colors">
                  Optimized & Dedicated
                </h3>

                <p className="text-sm leading-relaxed text-body-text mb-5">
                  We optimize our operations to best fit your operations; no
                  cookie-cutter approach to our work.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Dedicated Account Lead
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Custom Route SOPs
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-page border border-line text-[11px] font-medium text-body-text">
                    Tailored Reporting
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs font-mono text-mute">Custom fit</span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="text-azure group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
