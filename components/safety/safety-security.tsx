"use client";

import { UserCheck, Broadcast } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Shipment Security — high-value freight.
 *
 * Prod gave this two pastel cards on a pink gradient. Two genuinely
 * different claims (who drives it, who watches it) earn the two-cell
 * hairline lattice instead, on the Raised surface the pages before it
 * established.
 */

const PILLARS = [
  {
    icon: UserCheck,
    title: "Secured to the FMCSA standard",
    body: "Freight is secured to the FMCSA standard — the same rulebook every load is held to, no exceptions.",
  },
  {
    icon: Broadcast,
    title: "Temperature-controlled monitoring",
    body: "Temperature-controlled loads are monitored per refrigerated service standards, from set point to delivery.",
  },
];

export function SafetySecurity() {
  return (
    <section id="security" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Shipment Security
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Cargo, secured to{" "}
            <span className="text-azure">standard.</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Freight secured to the FMCSA standard, and temperature-controlled
            loads monitored per refrigerated service standards — the load
            arrives the way it left the dock.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-line max-[1000px]:grid-cols-1">
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
              <pillar.icon
                size={20}
                weight="regular"
                className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                aria-hidden="true"
              />
              <h3
                className={cx(
                  "font-display m-0 mt-5 max-w-[14em] text-[clamp(17px,1.5vw,22px)]",
                  "font-extrabold leading-[1.2] text-ink-text",
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
