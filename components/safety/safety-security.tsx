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
    title: "High-Value Shipment Assignment",
    body: "High-value loads are assigned exclusively to ELITE and highly tenured drivers with top safety performance and proven decision-making.",
  },
  {
    icon: Broadcast,
    title: "Real-Time Monitoring",
    body: "State-of-the-art surveillance technology alerts our team as soon as a high-value load begins moving. Our systems ping every 2 seconds for real-time location updates — an industry rarity — providing continuous visibility and proactive response from pickup to delivery.",
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
            Shipment <span className="text-azure">Security</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            At PKT Group, shipment security starts with who we assign and how we
            monitor every move — especially for high-value and sensitive
            freight.
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
