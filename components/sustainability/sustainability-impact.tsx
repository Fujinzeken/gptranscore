"use client";

import {
  Drop,
  Tree,
  Wind,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Measurable Environmental Impact — the year's numbers.
 *
 * Prod ran four gradient stat cards — the big-number template the system
 * bans, times four, each in its own colour. The numbers are the substance,
 * so they keep their scale but sit on one hairline lattice on the raised
 * surface, one accent, tabular numerals counting up once. Each carries the
 * comparison that makes it mean something (Olympic pools, a forest, the FUEL
 * program) instead of a gradient.
 */

const RESULTS = [
  {
    icon: Drop,
    to: 107000,
    suffix: "",
    title: "Gallons of Fuel Saved",
    body: "Every year — equivalent to 3 Olympic pools",
  },
  {
    icon: Tree,
    to: 15,
    suffix: "M",
    title: "Pounds of CO₂ Reduced",
    body: "What a Chicago forest absorbs yearly",
  },
  {
    icon: Wind,
    to: 500,
    suffix: "+",
    title: "Tractors",
    body: "Transitioning to sustainable technology",
  },
  {
    icon: Lightning,
    to: 2,
    suffix: "%",
    title: "Fleet MPG Increase",
    body: "7.26 to 7.40 via the FUEL program",
  },
];

export function SustainabilityImpact() {
  return (
    <section id="impact" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Real Results
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Measurable <span className="text-azure">Environmental Impact</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Tangible achievements from our sustainability efforts.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-px bg-line max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
          {RESULTS.map((result, i) => (
            <div
              key={result.title}
              style={{ "--i": 4 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-surface px-[clamp(20px,2.2vw,36px)] py-[clamp(28px,4vh,52px)]",
                "transition-colors duration-300 hover:bg-page",
              )}
            >
              <result.icon
                size={20}
                weight="regular"
                className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                aria-hidden="true"
              />
              <p className="m-0 mt-6 font-display text-[clamp(36px,4.6vw,68px)] font-black leading-none tracking-[-0.03em] text-ink-text tabular-nums">
                <CountUp to={result.to} suffix={result.suffix} />
              </p>
              <h3 className="font-display m-0 mt-4 text-[clamp(16px,1.4vw,20px)] font-extrabold leading-[1.2] text-ink-text">
                {result.title}
              </h3>
              <p className="m-0 mt-2 text-[clamp(13px,1vw,14.5px)] leading-[1.55] text-body-text">
                {result.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
