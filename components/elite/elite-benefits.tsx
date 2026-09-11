import { CheckCircle, Medal } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Driver Benefits — the program's five guarantees as a bordered ledger.
 *
 * Prod rendered a bullet list. A ledger of five rows, check-marked and
 * hairline-separated, reads as terms of an agreement rather than marketing
 * bullets — which is the register a pay program should use.
 */

const BENEFITS = [
  "Monthly bonus payouts based on ELITE score",
  "Transparent scoring — drivers always know where they stand",
  "Performance-based earning potential",
  "Recognition within the driver community",
  "Access to exclusive driver perks and rewards",
];

export function EliteBenefits() {
  return (
    <section id="benefits" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0 mb-5 flex items-center gap-2", label, "text-mute-2")}
            >
              <Medal size={15} weight="bold" className="text-azure" />
              Driver Benefits
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 max-w-[12em]",
                "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              Program Benefits <span className="text-azure">for Drivers</span>
            </h2>
          </div>

          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-6 col-start-7 border border-line bg-surface",
              "max-[1000px]:col-span-1 max-[1000px]:col-start-1",
            )}
          >
            <dl className="m-0">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit}
                  className={cx(
                    "flex items-center gap-4 px-[clamp(20px,2.4vw,32px)] py-[clamp(16px,2.2vh,24px)]",
                    i < BENEFITS.length - 1 && "border-b border-line",
                  )}
                >
                  <CheckCircle
                    size={20}
                    weight="regular"
                    className="shrink-0 text-azure"
                    aria-hidden="true"
                  />
                  <dd className="m-0 text-[clamp(14.5px,1.15vw,17px)] font-medium leading-[1.45] text-ink-text">
                    {benefit}
                  </dd>
                  <dt
                    className={cx(label, "m-0 ml-auto shrink-0 text-[10px] text-line-strong")}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
