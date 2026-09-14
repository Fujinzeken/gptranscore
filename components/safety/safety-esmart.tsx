"use client";

import {
  ShieldCheck,
  Lightning,
  Gauge,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * E-SMART Speed Management — the on-truck active-safety system.
 *
 * Prod put the two headline outcomes on a big purple gradient slab and the
 * four benefits on white cards. The outcomes keep their slab — it is the
 * section's one moment — but it renders as the ink plate with tabular
 * numerals counting up, and the benefits become a two-column hairline
 * lattice instead of floating shadow boxes.
 */

const STATS = [
  {
    value: 50,
    suffix: "%",
    title: "Reduction in Speed-Related Incidents",
    body: "Significant improvement in fleet safety performance",
  },
  {
    value: 92,
    suffix: "%",
    title: "Decrease in Bridge Collisions",
    body: "Low-clearance bridge collision prevention",
  },
];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Enhanced Safety Performance",
    body: "E-SMART leads to a 50% reduction in speed-related incidents and accidents, and a 92% decrease in low-clearance bridge collisions, significantly improving fleet safety.",
  },
  {
    icon: Lightning,
    title: "Operational Efficiency",
    body: "The system allows PKT Group to remotely set and manage vehicle speeds across various zones throughout North America, eliminating the need for manual adjustments and reducing downtime.",
  },
  {
    icon: Gauge,
    title: "Fuel Savings",
    body: "By proactively managing speeds, E-SMART improves fuel efficiency, passing the savings to our customers and reducing the environmental footprint.",
  },
  {
    icon: MapPin,
    title: "Real-Time Fleet Management",
    body: "E-SMART's customer portal provides live vehicle tracking, route visibility, and speed setting controls, enabling smarter, more agile fleet operations.",
  },
];

export function SafetyEsmart() {
  return (
    <section id="esmart" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            E-SMART Technology
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            E-SMART Speed <span className="text-azure">Management</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            GPS-based intelligent vehicle control for enhanced fleet safety —
            running on every truck, always on.
          </p>
        </div>

        {/* The outcomes — one ink plate, two counted numbers. */}
        <div
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(32px,5vh,56px)] grid grid-cols-2 bg-ink max-[760px]:grid-cols-1",
          )}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.title}
              className={cx(
                "px-[clamp(24px,3.4vw,56px)] py-[clamp(34px,5vh,64px)]",
                i === 1 && "border-l border-rule max-[760px]:border-l-0 max-[760px]:border-t",
              )}
            >
              <p className="m-0 flex items-baseline font-display text-[clamp(56px,8vw,120px)] font-black leading-none tracking-[-0.03em] text-azure-hi tabular-nums">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <h3 className="font-display m-0 mt-5 text-[clamp(17px,1.5vw,22px)] font-extrabold leading-[1.2] text-paper">
                {stat.title}
              </h3>
              <p className="m-0 mt-2 text-[clamp(13px,1vw,15px)] leading-[1.55] text-mute">
                {stat.body}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits — two-column hairline lattice. */}
        <div className="grid grid-cols-2 gap-px bg-line max-[1000px]:grid-cols-1">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              style={{ "--i": 5 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-surface px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                "transition-colors duration-300 hover:bg-page",
              )}
            >
              <benefit.icon
                size={20}
                weight="regular"
                className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                aria-hidden="true"
              />
              <h3
                className={cx(
                  "font-display m-0 mt-5 text-[clamp(17px,1.5vw,22px)]",
                  "font-extrabold leading-[1.2] text-ink-text",
                )}
              >
                {benefit.title}
              </h3>
              <p className="m-0 mt-2.5 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
