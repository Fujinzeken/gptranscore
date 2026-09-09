"use client";

import {
  ArrowRight,
  Phone,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnSolid, btnHero, btnGhost, cx } from "../ui";

/**
 * Driver Careers Closing CTA Section.
 *
 * Cinematic dark plate (bg-ink) concluding the /best-truck-driving-jobs page.
 * Sits after the light DriverManagers section and flows seamlessly into SiteFooter.
 */

export function DriverCTA() {
  const { open: openQuote } = useQuote();
  const { openApplyModal } = useDriverApply();

  return (
    <section
      id="apply"
      aria-label="Apply to drive"
      className="relative isolate bg-ink py-[clamp(88px,14vh,170px)] px-gut overflow-hidden"
    >
      {/* Cinematic ambient depth glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-azure/10 blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] -z-10"
      />

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          {/* Main Command Center */}
          <div className="text-center max-w-[820px] mx-auto mb-14">
            {/* Pill */}
            <div
              className={cx(
                revealItem,
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-2 border border-rule-lit text-azure-hi text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-sm",
              )}
            >
              <Sparkle size={14} weight="bold" />
              Take the Next Step in Your Career
            </div>

            {/* Headline */}
            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 text-[clamp(36px,5.8vw,76px)] text-paper leading-[0.92] font-black uppercase tracking-tight",
              )}
            >
              Ready to Drive With{" "}
              <span className="text-azure-hi">Purpose?</span>
            </h2>

            {/* Subheading */}
            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 text-[clamp(16px,1.25vw,19.5px)] leading-[1.65] text-mute max-w-[62ch] mx-auto",
              )}
            >
              Join a team that values your skills, respects your time, and rewards
              your performance. Apply today and become part of the GP Transco
              family.
            </p>

            {/* Actions */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-10 flex flex-wrap items-center justify-center gap-4",
              )}
            >
              {/* Primary Apply Button */}
              <button
                type="button"
                onClick={openApplyModal}
                className={cx(
                  btn,
                  btnSolid,
                  btnHero,
                  "shadow-lg shadow-azure/25 cursor-pointer text-base sm:text-[15.5px] px-8",
                )}
              >
                Apply to Drive
                <ArrowRight size={18} weight="bold" />
              </button>

              {/* Direct Recruiter Line */}
              <a
                href="tel:7082988281"
                className={cx(
                  btn,
                  btnGhost,
                  btnHero,
                  "text-base sm:text-[15.5px] px-8 flex items-center gap-2.5",
                )}
              >
                <Phone size={18} weight="bold" className="text-azure-hi" />
                <span>(708) 298-8281</span>
              </a>
            </div>

            {/* Recruiter Hours Note */}
            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 text-xs font-mono text-mute flex items-center justify-center gap-2",
              )}
            >
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Recruiting Team Active Mon–Fri · Direct Human Response</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
