"use client";

import { ArrowRight, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, btnSolid, cardRound, cx, label } from "../ui";

/**
 * Selective About Drivers.
 *
 * Prod's version of this section was a blue gradient panel with a photograph
 * of a driver at the wheel and two buttons. The gradient and the staged
 * photo both sit outside the system, so the claim is carried by the numbers
 * themselves instead: a dark plate whose funnel ledger renders the actual
 * arithmetic — 30,000 applications, 2% hired. The applicant bar beside the
 * sliver that makes the cut *is* the argument.
 *
 * Both CTAs route to the driver careers page — the ELITE button deep-links
 * to its program section, which is where that claim is proven.
 */

export function SelectiveDrivers() {
  return (
    <section id="drivers" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-6 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0 mb-5 flex items-center gap-2", label, "text-azure-hi")}
            >
              <ShieldCheck size={15} weight="bold" />
              Selective About Drivers
            </p>

            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 max-w-[12em]",
                "text-[clamp(30px,4.2vw,60px)] font-black uppercase leading-[0.94] tracking-[-0.025em] text-paper",
              )}
            >
              Only the Very Best <span className="text-azure-hi">Make the Cut</span>
            </h2>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute",
              )}
            >
              Each year we receive about 30,000 driver applications and choose
              to hire only the very best – only about 2% of all applicants. We
              consider safety history, experience, attitude, and
              professionalism.
            </p>

            <div
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-[clamp(26px,4vh,42px)] flex flex-wrap gap-[11px]",
                "max-[560px]:flex-col max-[560px]:items-stretch",
              )}
            >
              <a
                href="/best-truck-driving-jobs"
                className={cx(btn, btnHero, btnSolid, "max-[560px]:justify-center")}
              >
                Explore Driver Careers
                <ArrowRight size={18} />
              </a>
              <a
                href="/best-truck-driving-jobs#elite"
                className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
              >
                Discover ELITE Drivers
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          {/* The funnel ledger. Two bars, drawn to scale: the whole applicant
              pool against the sliver that gets the phone call. CountUp runs
              once, then rests. */}
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
              <span className={cx(label, "text-paper")}>The Funnel</span>
              <span className={cx(label, "text-mute-2")}>Per Year</span>
            </div>

            <div className="px-[clamp(20px,2.4vw,32px)] py-[clamp(24px,3.4vh,40px)]">
              {/* Applications — the full width of the panel. */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className={cx(label, "text-mute")}>
                    Driver Applications
                  </span>
                  <span
                    className={cx(
                      "font-display text-[clamp(24px,2.6vw,36px)] font-extrabold",
                      "leading-none tracking-[-0.02em] text-paper",
                    )}
                  >
                    <CountUp to={30000} />
                  </span>
                </div>
                <div className="mt-3 h-[14px] w-full bg-rule-lit" aria-hidden="true" />
              </div>

              {/* Hired — 2% of the same width, drawn to the same scale. */}
              <div className="mt-[clamp(24px,3.4vh,40px)]">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <span className={cx(label, "text-mute")}>Hired — 2% Rate</span>
                  <span
                    className={cx(
                      "font-display text-[clamp(24px,2.6vw,36px)] font-extrabold",
                      "leading-none tracking-[-0.02em] text-azure-hi",
                    )}
                  >
                    <CountUp to={2} suffix="%" />
                    <span
                      className={cx(label, "ml-3 align-baseline text-[11px] text-mute-2")}
                    >
                      ≈ 600 DRIVERS
                    </span>
                  </span>
                </div>
                <div
                  className="mt-3 h-[14px] bg-azure"
                  style={{ width: "2%", minWidth: "14px" }}
                  aria-hidden="true"
                />
              </div>

              <p className="m-0 mt-[clamp(24px,3.4vh,40px)] border-t border-rule pt-5 text-[clamp(13.5px,1.05vw,15px)] leading-[1.6] text-mute-2">
                Considered on the record, not the résumé: safety history,
                experience, attitude, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
