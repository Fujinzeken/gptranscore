"use client";

import Image from "next/image";
import {
  ShieldCheck,
  TrendUp,
  ArrowRight,
  Crosshair,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { useQuote } from "../quote-modal";
import { btn, btnHero, btnSolid, cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

export function BrokerageStreamline() {
  const { open: openQuote } = useQuote();

  return (
    <section
      id="streamline"
      aria-label="Streamline your logistics"
      className="relative bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Background depth ambiance */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-azure/10 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Fleet Visual Frame with Telemetry Badges */}
            <div
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(revealItem, "lg:col-span-6 relative")}
            >
              <div className="relative rounded-3xl overflow-hidden border border-rule-lit bg-ink-2 shadow-2xl min-h-[440px] sm:min-h-[520px] flex items-end p-6 sm:p-8 group">
                <Image
                  src="/freight-brokerage/brokerage-streamline.webp"
                  alt="GP Transco Fleet Trucks in Terminal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "50% 30%" }}
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

                {/* Floating Top Telemetry Glass Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-ink/75 backdrop-blur-md border border-white/15 shadow-lg">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-paper">
                      99.4% On-Time Network SLA
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Card Over Image */}
                <div className="relative z-10 w-full p-5 rounded-2xl bg-ink/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-9 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center">
                      <CheckCircle size={20} weight="fill" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-paper m-0">
                        Chicagoland Top-10 Fleet Power
                      </h4>
                      <p className="text-xs text-mute m-0">
                        Asset backing eliminates spot-market vulnerability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial & Value Bento Cards */}
            <div
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "lg:col-span-6")}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink-2 border border-rule-lit text-azure-hi mb-5">
                <Crosshair size={14} weight="bold" />
                <span
                  className={cx(
                    label,
                    "text-azure-hi tracking-widest text-[11px] sm:text-xs",
                  )}
                >
                  Why Choose Brokerage
                </span>
              </div>

              {/* Headline */}
              <h2 className="type-display m-0 text-[clamp(32px,4.5vw,56px)] text-paper leading-[0.94] font-black uppercase">
                Streamline Your <span className="text-azure-hi">Logistics</span>
              </h2>

              {/* Subheading */}
              <p className="mt-5 text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-mute max-w-xl">
                GP Transco Logistics puts service and communication first. We
                bring the best freight brokerage solutions with the backing of
                our own Chicagoland top-10 over-the-road truckload fleet and
                strong relationships with a diverse set of carriers.
              </p>

              {/* 2 Feature Cards */}
              <div className="mt-8 space-y-4">
                {/* Feature 1 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-rule-lit hover:border-azure-hi/40 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="size-11 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={24} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-paper mb-1">
                        Trusted Carrier Network
                      </h3>
                      <p className="text-xs sm:text-sm text-mute leading-relaxed m-0">
                        Work with carriers that meet the highest standards. Our
                        carriers are evaluated through a strict and rigorous
                        process to ensure safety, reliability, and continuous
                        compliance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-rule-lit hover:border-azure-hi/40 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="size-11 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center flex-shrink-0">
                      <TrendUp size={24} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-paper mb-1">
                        Asset-Based Capacity
                      </h3>
                      <p className="text-xs sm:text-sm text-mute leading-relaxed m-0">
                        Our asset-based operations provide capacity solutions to
                        assist your supply chain with flexibility, surge
                        resilience, and unmatched reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={openQuote}
                  className={cx(
                    btn,
                    btnSolid,
                    btnHero,
                    "shadow-lg shadow-azure/25 cursor-pointer text-base sm:text-[15.5px] px-8",
                  )}
                >
                  Work with Us
                  <ArrowRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
