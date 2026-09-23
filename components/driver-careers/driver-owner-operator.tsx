"use client";

import {
  ArrowRight,
  Handshake,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnOutline, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Owner-operator section ("Two ways to run with us").
 *
 * Sits between the dark equipment plate and the route selection on a
 * surface field, breaking the dark→light rhythm with a ruled two-card
 * choice: company driver or owner-operator. The owner-operator card is
 * the featured dark plate — your truck, our authority and freight.
 */

type Way = {
  icon: typeof SteeringWheel;
  name: string;
  tag: string;
  featured?: boolean;
  points: string[];
  cta: { label: string; href?: string; apply?: boolean };
};

const WAYS: Way[] = [
  {
    icon: SteeringWheel,
    name: "Company Driver",
    tag: "Our trucks",
    points: [
      "Late-model Freightliners, maintained by us",
      "Up to 83 CPM with an annual raise",
      "Home daily or weekly by route choice",
    ],
    cta: { label: "See the pay", href: "#calculator" },
  },
  {
    icon: Handshake,
    name: "Owner-Operator",
    tag: "Your truck",
    featured: true,
    points: [
      "Your truck, our authority and insurance",
      "Our freight — steady lanes, not broker boards",
      "Settlements that arrive when we said they would",
    ],
    cta: { label: "Apply to Drive", apply: true },
  },
];

export function DriverOwnerOperator() {
  const { openApplyModal } = useDriverApply();

  return (
    <section
      id="owner-operator"
      className="bg-surface border-y border-line py-[clamp(78px,12vh,150px)] px-gut"
    >
      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[740px] mx-auto mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Handshake size={14} weight="bold" />
            Owner-operator
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Run it <span className="text-azure">your way</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Dispatch knows who you are, what you drive and where you live.
            48-state authority, steady freight, and settlements that arrive when
            we said they would — company driver or owner-operator.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "grid gap-px bg-line max-w-[1280px] mx-auto md:grid-cols-2",
          )}
        >
          {WAYS.map(({ icon: Icon, name, tag, featured, points, cta }) => (
            <div
              key={name}
              className={cx(
                "flex min-h-[clamp(280px,34vh,380px)] flex-col justify-between p-[clamp(24px,3vw,44px)]",
                featured ? "bg-ink" : "bg-paper",
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-line">
                  <span
                    className={cx(
                      label,
                      "flex items-center gap-2",
                      featured ? "text-azure-hi" : "text-azure",
                    )}
                  >
                    <Icon size={18} weight="bold" />
                    {tag}
                  </span>
                  {featured && (
                    <span className="font-mono text-xs font-semibold text-azure-hi bg-azure/10 px-3 py-1 rounded-full">
                      Steady freight
                    </span>
                  )}
                </div>

                <h3
                  className={cx(
                    "font-display mt-5 mb-4 text-[clamp(24px,2.8vw,36px)] font-bold leading-snug",
                    featured ? "text-paper" : "text-ink-text",
                  )}
                >
                  {name}
                </h3>

                <ul className="m-0 list-none">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 py-2.5 border-b border-line last:border-b-0"
                    >
                      <ArrowRight
                        size={15}
                        weight="bold"
                        className={cx(
                          "mt-1 shrink-0",
                          featured ? "text-azure-hi" : "text-azure",
                        )}
                      />
                      <span
                        className={cx(
                          "text-[clamp(14px,1.05vw,15.5px)] leading-[1.55]",
                          featured ? "text-mute" : "text-body-text",
                        )}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                {cta.apply ? (
                  <button
                    type="button"
                    onClick={openApplyModal}
                    className={cx(btn, btnSolid, btnHero, "cursor-pointer")}
                  >
                    {cta.label}
                    <ArrowRight size={17} weight="bold" />
                  </button>
                ) : (
                  <a href={cta.href} className={cx(btn, btnOutline, btnHero)}>
                    {cta.label}
                    <ArrowRight size={17} weight="bold" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
