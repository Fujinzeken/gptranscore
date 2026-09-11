"use client";

import Image from "next/image";
import { ArrowRight, Cpu, Phone } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Innovation hero.
 *
 * Same register as every sub-page hero: full-height ink plate, full-bleed
 * photograph under the side scrim, display headline with the accent on the
 * final clause. The prod page opened with an icon pill ("Technology Leader")
 * above the headline; that is the kicker the system bans, so the page opens
 * with the same mono label the driver hero uses instead.
 *
 * The prod headline's accent clause was set in a cyan-to-teal gradient. Here
 * it is flat azure-hi, because the accent colour is the accent colour.
 *
 * The photograph is the bridge at dusk: infrastructure carrying load. The
 * technology page should point at the same physical world the software runs,
 * not at an abstract circuit board.
 */

const PILLARS = ["IN-HOUSE TMS", "AI ROUTING", "REAL-TIME VISIBILITY"];

export function InnovationHero() {
  const { open: openQuote } = useQuote();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/bridge.jpg"
        alt="Freight crossing a bridge at dusk, lit by the trailer's azure markers"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_38%]"
      />
      <div
        aria-hidden="true"
        className="scrim-side max-[920px]:scrim-base absolute inset-0 -z-10"
      />

      <SiteNav />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-gut py-[clamp(40px,7vh,88px)]">
        <p
          className={cx(
            label,
            "text-azure-hi mb-4 flex items-center gap-2 tracking-[0.16em]",
          )}
        >
          <Cpu size={15} weight="bold" />
          In-House Technology
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Technology That Keeps Freight Moving{" "}
          <span className="text-azure-hi">Smarter, Faster, Safer</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Systems we build and run ourselves — dispatch, routing, visibility —
          so nothing between a load and its delivery waits on someone else&apos;s
          software.
        </p>

        {/* Pillars, in the driver hero's mono pill register. These are claims
            the page then has to earn section by section. */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {PILLARS.map((pillar) => (
            <span
              key={pillar}
              className="border border-rule-lit bg-ink-2/80 px-3.5 py-1.5 font-mono text-[11.5px] font-bold text-paper tracking-[0.14em] rounded-full"
            >
              {pillar}
            </span>
          ))}
        </div>

        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <button
            type="button"
            onClick={openQuote}
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            Ship With Us
            <ArrowRight size={18} />
          </button>

          <a
            href="tel:+18004605071"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            <Phone size={17} />
            (800) 460-5071
          </a>
        </div>
      </div>
    </section>
  );
}