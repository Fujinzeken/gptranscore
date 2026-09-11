"use client";

import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cardRound, cx, label } from "../ui";

/**
 * Performance Rewards — "Earn Up to $7,400".
 *
 * The section prod leads with money, so money is the composition: the $7,400
 * headline figure set at the display register on the left, and last month's
 * actual payout as a ledger entry on the right — $56,162 across the fleet,
 * +5.46 CPM for the top quartile. The live dot and the update footnote are
 * kept because "updated monthly" is part of the claim's credibility.
 */

export function EliteRewards() {
  return (
    <section id="rewards" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-6 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mb-5 flex items-center gap-2",
                label,
                "text-azure-hi",
              )}
            >
              <CurrencyDollar size={15} weight="bold" />
              Performance Rewards
            </p>

            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                "font-display m-0 text-[clamp(40px,5.6vw,88px)] font-black",
                "uppercase leading-[0.88] tracking-[-0.03em]",
                revealItem,
                "text-paper",
              )}
            >
              Earn Up to{" "}
              <span className="text-azure-hi">$7,400</span>
            </h2>
            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                label,
                "mt-4 text-[12px] text-mute",
              )}
            >
              Per Year Extra
            </p>

            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute",
              )}
            >
              GP Transco&apos;s ELITE Driver Program rewards drivers for
              consistently delivering safe, efficient, and reliable service.
              Drivers are scored and rewarded based on real-world performance
              metrics that directly impact customer satisfaction.
            </p>
          </div>

          {/* Last month's payout, as a ledger entry. */}
          <div
            style={{ "--i": 5 } as React.CSSProperties}
            className={cx(
              revealItem,
              cardRound,
              "col-span-6 bg-ink-2 ring-1 ring-rule overflow-hidden",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between border-b border-rule px-[clamp(20px,2.4vw,32px)] py-4">
              <span className={cx(label, "text-paper")}>
                Last Month&apos;s ELITE Payout
              </span>
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className={cx(label, "text-mute")}>Monthly</span>
              </span>
            </div>

            <div className="px-[clamp(20px,2.4vw,32px)] py-[clamp(28px,4vh,48px)]">
              <p
                className={cx(
                  "font-display m-0 text-[clamp(44px,5vw,76px)] font-black",
                  "leading-none tracking-[-0.025em] text-paper",
                )}
              >
                <CountUp to={56162} prefix="$" />
              </p>
              <p className={cx(label, "m-0 mt-3 text-mute-2")}>
                Paid to Drivers
              </p>

              <div className="mt-[clamp(24px,3.4vh,40px)] flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-[clamp(20px,3vh,32px)]">
                <p
                  className={cx(
                    "font-display m-0 text-[clamp(24px,2.6vw,36px)] font-extrabold",
                    "leading-none tracking-[-0.02em] text-azure-hi",
                  )}
                >
                  +5.46 CPM
                </p>
                <p className="m-0 max-w-[24ch] text-right text-[12.5px] leading-[1.5] text-mute-2 max-[560px]:text-left">
                  Average extra — top 25% of drivers
                </p>
              </div>

              <p className="m-0 mt-[clamp(20px,3vh,32px)] border-t border-rule pt-5 text-[clamp(13.5px,1.05vw,15px)] leading-[1.6] text-mute">
                Real money. Every month. Earned by ELITE drivers on top of
                their base pay.
              </p>
              <p className={cx(label, "m-0 mt-4 text-[10px] text-mute-2")}>
                * Updated live on a monthly basis to reflect the most recent
                payout.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
