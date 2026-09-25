"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroCarousel } from "./hero-carousel";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";

// Proof strip and equipment lines from the content pack's home row.
const EQUIPMENT = [
  "Operating since 2018",
  "48-state authority",
  "Asset-based carrier",
  "2025 equipment",
  "Dry Van",
  "Refrigerated",
  "Flatbed",
];

/**
 * Direction "Manifest"
 *
 * A crossfading truck-and-highway carousel is the hero from the first frame.
 * Content sits on a scrim over it; the equipment roll runs at the foot.
 */
export function Manifest() {
  const { open: openQuote } = useQuote();
  const { openApplyModal } = useDriverApply();
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-pitch">
      <SiteNav />

      <header className="relative z-10 flex flex-1 flex-col justify-center px-gut pt-[clamp(30px,5vh,60px)]">
        <span
          className={cx(
            label,
            "mb-[clamp(14px,2vh,22px)] block text-azure-hi",
          )}
        >
          Asset-based truckload carrier · Operating since 2018
        </span>

        <h1 className="font-display m-0 max-w-[11em] text-[clamp(36px,5.6vw,84px)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-paper max-[920px]:max-[920px]:text-[clamp(32px,10vw,96px)]">
          <span className="block">Freight moved by people</span>
          <span className="block">
            who <span className="text-azure-hi">answer the phone.</span>
          </span>
        </h1>

        <p
          className={cx(
            "mt-[clamp(20px,2.8vh,30px)] max-w-[46ch] text-[clamp(14.5px,1.15vw,17px)] leading-[1.6] text-mute",
          )}
        >
          PKT is an asset-based truckload carrier running 48-state authority
          out of Rosemont, Illinois. Every load moves under our authority, our
          insurance, and our dispatch.
        </p>

        <div
          className={cx(
            "mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px]",
            "max-[920px]:flex-col max-[920px]:items-stretch",
          )}
        >
          <button
            type="button"
            onClick={openQuote}
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[920px]:justify-center cursor-pointer",
            )}
          >
            Request a Quote
            <ArrowRight size={18} />
          </button>
          <button
            type="button"
            onClick={openApplyModal}
            className={cx(
              btn,
              btnHero,
              btnGhost,
              "max-[920px]:justify-center cursor-pointer",
            )}
          >
            Drive With PKT
            <ArrowRight size={18} />
          </button>
        </div>
      </header>

      <div
        aria-label="About PKT at a glance"
        className={cx(
          "relative z-10 mt-[clamp(30px,5vh,64px)] shrink-0 overflow-hidden border-t border-rule",
        )}
      >
        {/* Duplicated once so the loop has something to roll into. */}
        <div className="flex w-max animate-roll motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {EQUIPMENT.map((item) => (
                <em
                  key={item}
                  className="whitespace-nowrap py-[15px] pr-[clamp(22px,3vw,48px)] font-mono text-[11px] font-medium uppercase not-italic tracking-[0.18em] text-[#7d90a5]"
                >
                  {item}
                </em>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Last in the DOM so its controls follow the page in tab order; the
          photo layer is absolutely positioned under everything. */}
      <HeroCarousel className="opacity-90 [filter:saturate(0.8)_contrast(1.08)_brightness(0.55)]" />
    </section>
  );
}
