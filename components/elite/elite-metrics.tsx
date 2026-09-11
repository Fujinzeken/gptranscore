import {
  Gauge,
  Path,
  ShieldCheck,
  Timer,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * How Drivers Earn — "Performance Metrics".
 *
 * Prod lists five scored categories. They become an indexed hairline lattice:
 * five cells, counted, each with its Phosphor mark and prod's one-line
 * definition. The mono note under the header names the scoring cadence, so
 * the section explains the mechanism without inventing UI.
 */

const METRICS = [
  {
    icon: ShieldCheck,
    title: "Safety",
    body: "Driving safely and protecting people, freight, and equipment",
  },
  {
    icon: Timer,
    title: "On-Time Delivery",
    body: "Delivering loads exactly as scheduled",
  },
  {
    icon: Gauge,
    title: "MPG & Idling",
    body: "Fuel-efficient driving and reduced unnecessary idling",
  },
  {
    icon: Path,
    title: "Route Compliance",
    body: "Following planned routes for predictability and efficiency",
  },
  {
    icon: Truck,
    title: "Home Time Score",
    body: "Maintaining agreed-upon schedules and commitments",
  },
];

export function EliteMetrics() {
  return (
    <section id="metrics" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-[clamp(24px,4vh,44px)] max-[900px]:flex-col max-[900px]:items-start">
          <div className="max-w-[760px]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute-2")}
            >
              How ELITE Drivers Earn
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-5 max-w-[14em]",
                "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              Performance <span className="text-azure">Metrics</span>
            </h2>
          </div>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "m-0 max-w-[36ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Drivers are scored on metrics that matter most to safe, reliable
            freight delivery — rolled up into one monthly ELITE score.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-px bg-line max-[1100px]:grid-cols-3 max-[680px]:grid-cols-1">
          {METRICS.map((metric, i) => {
            const Glyph = metric.icon;
            return (
              <div
                key={metric.title}
                style={{ "--i": 4 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "group flex flex-col bg-surface p-[clamp(22px,2.4vw,36px)]",
                  "transition-colors duration-300 hover:bg-page",
                )}
              >
                <div className="flex items-center justify-between">
                  <Glyph
                    size={28}
                    weight="regular"
                    className="text-azure"
                    aria-hidden="true"
                  />
                  <span
                    className={cx(
                      label,
                      "text-line-strong transition-colors duration-300 group-hover:text-azure",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={cx(
                    "font-display m-0 mt-[clamp(20px,3vh,32px)]",
                    "text-[clamp(17px,1.6vw,22px)] font-extrabold leading-[1.1] tracking-[-0.015em] text-ink-text",
                  )}
                >
                  {metric.title}
                </h3>
                <p className="m-0 mt-3 text-[clamp(13px,1vw,15px)] leading-[1.58] text-body-text">
                  {metric.body}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
