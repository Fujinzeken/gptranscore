"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";
import { useQuote } from "../quote-modal";
import { useDriverApply } from "../driver-apply-modal";

/**
 * Closing CTA.
 *
 * Prod's close was a near-black field with the two controls stacked full
 * width in the left half and the right half empty. The dead space was the
 * tell. The copy names two audiences — freight and career — so the close is
 * two doors again, but kept to one band: headline and copy left, the quote
 * and apply controls right, the same-day guarantee as the band's mono
 * footnote. Quote and Apply open the site's own modals, like the nav does.
 */
export function SelectiveCTA() {
  const { open: openQuote } = useQuote();
  const { openApplyModal } = useDriverApply();

  return (
    <section id="contact" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,5vh,56px)] max-[1000px]:grid-cols-1">
          <div className="col-span-6 max-[1000px]:col-span-1">
            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 max-w-[13em]",
                "text-[clamp(30px,4.2vw,60px)] font-black uppercase leading-[0.94] tracking-[-0.025em] text-paper",
              )}
            >
              Ready to Move Freight or{" "}
              <span className="text-azure-hi">Grow Your Career?</span>
            </h2>
            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-[clamp(18px,2.6vh,28px)] max-w-[48ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute",
              )}
            >
              Partner with a carrier that delivers on every promise. Let&apos;s
              talk about how we can work together.
            </p>
          </div>

          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 col-start-8 max-[1000px]:col-span-1 max-[1000px]:col-start-1",
            )}
          >
            <div className="flex flex-col gap-[11px] max-[560px]:flex-row max-[560px]:flex-wrap">
              <button
                type="button"
                onClick={openQuote}
                className={cx(
                  btn,
                  btnHero,
                  btnGhost,
                  "justify-center bg-ink-2 hover:bg-[#131c28]",
                )}
              >
                Request a Quote
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={openApplyModal}
                className={cx(btn, btnHero, btnGhost, "justify-center")}
              >
                Apply to Drive
                <ArrowRight size={18} />
              </button>
            </div>

            <p
              className={cx(
                label,
                "m-0 mt-6 text-[10px] text-mute-2",
              )}
            >
              Same-Day Response Guaranteed · No Obligations
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
