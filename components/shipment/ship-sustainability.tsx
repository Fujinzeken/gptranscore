"use client";

import {
  ArrowRight,
  Drop,
  Leaf,
  Sun,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";

/**
 * Sustainability & Running Green Section.
 *
 * Sits on a cinematic dark plate (bg-ink) to complete the alternating
 * light/dark rhythm following the light ShipFeatures section.
 *
 * Details PKT Group's Scope 3 emissions reductions, cab solar array,
 * and verified 107K gallon fuel savings.
 */

const METRICS = [
  {
    icon: Drop,
    stat: "107K",
    unit: "Gallons of Diesel Saved",
    subtext:
      "The equivalent of 3 Olympic swimming pools of fuel saved every year.",
  },
  {
    icon: Wind,
    stat: "15M",
    unit: "Pounds of CO₂ Reduced",
    subtext: "Matching the yearly carbon absorption of a Chicago-sized forest.",
  },
];

const INITIATIVES = [
  {
    title: "Roof-Mounted Cab Solar",
    desc: "Auxiliary power units run on solar battery banks, driving engine idle time below 15%.",
  },
  {
    title: "ELITE Driver Fuel Bonus",
    desc: "Direct driver cash incentives for smooth acceleration and optimal fuel conservation.",
  },
  {
    title: "Aerodynamic Late-Model Fleet",
    desc: "Averaging 8.2 MPG across our Cascadias — outperforming the 6.5 MPG industry average.",
  },
];

export function ShipSustainability() {
  const { open: openQuote } = useQuote();

  return (
    <section
      id="sustainability"
      className="relative isolate overflow-hidden bg-ink py-[clamp(78px,12vh,150px)] px-gut"
    >
      {/* Subtle emerald/azure environmental glow in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-azure/10 blur-[140px] -z-10"
      />

      <Reveal>
        <header className={cx(revealItem, "mb-[clamp(36px,5.5vh,64px)]")}>
          <p
            className={cx(label, "text-azure-hi mb-3 flex items-center gap-2")}
          >
            <Leaf size={15} weight="fill" className="text-azure-hi" />
            Scope 3 Sustainability Leadership
          </p>
          <h2 className="type-display m-0 max-w-[14em] text-[clamp(28px,3.8vw,54px)] text-paper">
            Committed to <span className="text-azure-hi">running green</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            Since 2022, our fleet fuel bonus program and efficiency initiatives
            have driven verified environmental impact — cutting fuel consumption
            and Scope 3 greenhouse gas emissions across every lane we run.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,72px)] gap-y-12 items-center">
          {/* Left Column: Engineered Solar Architecture Callout */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-12 lg:col-span-5 bg-ink-2 border border-rule p-[clamp(26px,3.4vw,44px)] flex flex-col justify-between relative",
            )}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rule">
                <span
                  className={cx(
                    label,
                    "text-azure-hi flex items-center gap-1.5",
                  )}
                >
                  <Sun size={17} weight="bold" className="text-azure-hi" />
                  Solar Fleet Architecture
                </span>
                <span className="font-mono text-xs text-mute font-semibold">
                  EPA SmartWay
                </span>
              </div>

              <h3 className="font-display text-[clamp(20px,2vw,26px)] font-bold text-paper mt-5 mb-3 leading-snug">
                Solar-Equipped Highway Tractors
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-mute m-0">
                Every new Freightliner Cascadia in our fleet is fitted with
                roof-mounted flexible solar panels. Solar energy charges
                auxiliary battery banks, allowing drivers to power cab climate
                controls and electronics during 10-hour rest breaks without
                idling the diesel engine.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-rule space-y-3">
              {INITIATIVES.map((init) => (
                <div key={init.title} className="text-xs">
                  <span className="font-bold text-paper">{init.title}:</span>{" "}
                  <span className="text-mute">{init.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quantitative Impact & Action */}
          <div className="col-span-12 lg:col-span-7">
            <h3
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 text-[clamp(24px,3vw,38px)] text-paper",
              )}
            >
              Every mile, greener
            </h3>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-mute max-w-[56ch]",
              )}
            >
              Our commitment to sustainability isn&rsquo;t corporate talk.
              Through smarter AI routing that minimizes empty deadhead miles,
              driver speed-governing, and late-model fuel-efficient tractors, we
              have turned environmental responsibility into auditable results
              for our customers&rsquo; ESG reports.
            </p>

            {/* Impact Metric Cards */}
            <div
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4",
              )}
            >
              {METRICS.map((m) => {
                const Glyph = m.icon;
                return (
                  <div
                    key={m.unit}
                    className="bg-ink-2/90 border border-rule-lit p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="size-9 rounded-full bg-azure/15 text-azure-hi flex items-center justify-center mb-3">
                        <Glyph size={18} weight="bold" />
                      </div>
                      <p className="font-display text-[clamp(32px,3.8vw,48px)] font-black text-paper leading-none tabular-nums m-0">
                        {m.stat}
                      </p>
                      <p className="font-display text-[14.5px] font-bold text-azure-hi mt-1 mb-2">
                        {m.unit}
                      </p>
                    </div>
                    <p className="text-xs leading-[1.55] text-mute m-0 pt-2 border-t border-rule">
                      {m.subtext}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div
              style={{ "--i": 5 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-8 flex flex-wrap items-center gap-4",
              )}
            >
              <a href="/sustainability" className={cx(btn, btnGhost, btnHero)}>
                Our Sustainability
                <ArrowRight size={17} />
              </a>

              <button
                type="button"
                onClick={openQuote}
                className={cx(btn, btnSolid, btnHero, "shadow-sm")}
              >
                Ship Sustainable Freight
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
