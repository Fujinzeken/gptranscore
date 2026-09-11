"use client";

import {
  ArrowRight,
  CheckCircle,
  Gear,
  Timer,
  Truck,
  UserCheck,
  Watch,
} from "@phosphor-icons/react/dist/ssr";
import { useDriverApply } from "../driver-apply-modal";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Customer Impact — why shippers should care, then the close.
 *
 * Prod's five customer-outcome cards become a hairline lattice, prod copy
 * verbatim. The closing statement sits wide beneath the lattice, and the
 * final band — "Elite Drivers Deliver Elite Service" — carries the page's
 * last controls.
 */

const IMPACT = [
  {
    icon: Timer,
    title: "On-Time Incentives",
    body: "ELITE drivers are financially incentivized to deliver on-time, every time",
  },
  {
    icon: CheckCircle,
    title: "Safety-First Approach",
    body: "Safety-based scoring reduces incidents, delays, and service disruptions",
  },
  {
    icon: Watch,
    title: "Predictable Transit",
    body: "Route compliance improves transit time consistency and shipment predictability",
  },
  {
    icon: Gear,
    title: "Smooth Operations",
    body: "Fuel-efficient driving leads to smoother operations and fewer mechanical interruptions",
  },
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    body: "Stable home-time scheduling reduces driver turnover, keeping experienced drivers on customer freight",
  },
];

export function EliteImpact() {
  const { openApplyModal } = useDriverApply();

  return (
    <section id="impact" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Customer Impact
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[20em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Why the ELITE Driver Program{" "}
            <span className="text-azure">Matters to Customers</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Driver performance directly translates to customer service outcomes
          </p>
        </div>
        {/* The five customer outcomes, as an indexed hairline lattice. */}
        <div className="grid grid-cols-3 gap-px bg-line max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
          {IMPACT.map((item, i) => {
            const Glyph = item.icon;
            return (
              <div
                key={item.title}
                style={{ "--i": 4 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "group flex flex-col bg-surface p-[clamp(24px,2.6vw,40px)]",
                  "transition-colors duration-300 hover:bg-page",
                )}
              >
                <div className="flex items-center justify-between">
                  <Glyph size={28} weight="regular" className="text-azure" aria-hidden="true" />
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
                    "text-[clamp(18px,1.7vw,24px)] font-extrabold leading-[1.1] tracking-[-0.015em] text-ink-text",
                  )}
                >
                  {item.title}
                </h3>
                <p className="m-0 mt-3 text-[clamp(13px,1vw,15px)] leading-[1.58] text-body-text">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        <p
          style={{ "--i": 9 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mx-auto mt-[clamp(40px,6vh,72px)] max-w-[68ch] border-t border-rule pt-[clamp(24px,4vh,40px)]",
            "text-center text-[clamp(16px,1.35vw,20px)] font-medium leading-[1.55] text-ink-text",
          )}
        >
          Because our drivers are rewarded for elite performance, our customers
          experience fewer surprises, higher on-time delivery rates, and more
          dependable service.
        </p>

        {/* Closing band — the page's last word on the dark register. */}
        <div
          style={{ "--i": 10 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(48px,7vh,88px)] bg-ink px-[clamp(28px,4vw,72px)] py-[clamp(40px,6vh,72px)]",
            "grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-8 max-[900px]:grid-cols-1",
          )}
        >
          <div className="col-span-7 max-[900px]:col-span-1">
            <div className="flex items-center gap-2 text-azure-hi">
              <Truck size={17} weight="bold" aria-hidden="true" />
              <span className={cx(label)}>ELITE Driver Program</span>
            </div>
            <h3
              className={cx(
                "font-display m-0 mt-4 max-w-[14em]",
                "text-[clamp(26px,3.2vw,46px)] font-extrabold leading-[1.0] tracking-[-0.025em] text-paper",
              )}
            >
              Elite Drivers Deliver{" "}
              <span className="text-azure-hi">Elite Service</span>
            </h3>
            <p className="m-0 mt-5 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
              The ELITE Driver Program aligns driver incentives with customer
              expectations — safety, reliability, and consistency.
            </p>
          </div>

          <div className="col-span-4 col-start-9 max-[900px]:col-span-1 max-[900px]:col-start-1">
            <div className="flex flex-col gap-[11px] max-[560px]:flex-row max-[560px]:flex-wrap">
              <button
                type="button"
                onClick={openApplyModal}
                className={cx(btn, btnHero, btnGhost, "justify-center bg-ink-2 hover:bg-[#131c28]")}
              >
                Apply to Drive
                <ArrowRight size={18} />
              </button>
              <a
                href="/best-truck-driving-jobs#elite"
                className={cx(btn, btnHero, btnGhost, "justify-center")}
              >
                Explore the Program
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
