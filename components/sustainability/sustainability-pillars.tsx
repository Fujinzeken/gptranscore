"use client";

import { Sun, Lightning, Globe } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Investment in Sustainability — the three strategic pillars.
 *
 * Prod ran these as three rounded icon-cards with a paragraph each — the
 * same-size icon + heading + text card grid the system bans. The substance
 * is three parallel commitments, so they keep that shape but rehouse on the
 * hairline lattice with the mono numbering register the safety page
 * established, and the copy cuts to what each commitment actually is.
 */

const PILLARS = [
  {
    icon: Sun,
    title: "Green Technology",
    body: "Environmentally-friendly technology across the entire fleet — cutting our carbon footprint and improving fuel efficiency.",
  },
  {
    icon: Lightning,
    title: "Eco-Driving Incentives",
    body: "Drivers are rewarded for fuel-efficient practices and eco-friendly operation behind the wheel.",
  },
  {
    icon: Globe,
    title: "On-Road & In-Office",
    body: "Green operations in the cab and at headquarters: less waste, better energy efficiency, active recycling.",
  },
];

export function SustainabilityPillars() {
  return (
    <section id="approach" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Our Strategic Approach
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Investment in <span className="text-azure">Sustainability</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Three pillars driving our environmental transformation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line max-[1000px]:grid-cols-1">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              style={{ "--i": 4 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-page px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                "transition-colors duration-300 hover:bg-surface",
              )}
            >
              <div className="flex items-center justify-between">
                <pillar.icon
                  size={20}
                  weight="regular"
                  className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                  aria-hidden="true"
                />
                <span className={cx(label, "text-line-strong")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className={cx(
                  "font-display m-0 mt-[clamp(18px,2.8vh,30px)] text-[clamp(17px,1.5vw,22px)]",
                  "font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-text",
                )}
              >
                {pillar.title}
              </h3>
              <p className="m-0 mt-2.5 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
