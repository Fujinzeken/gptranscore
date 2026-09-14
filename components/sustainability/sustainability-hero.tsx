"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Phone } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Sustainability hero.
 *
 * Prod opened with a green leaf pill ("FOR EARTH'S SAKE") over a gradient
 * headline. The pill register is banned and the gradient breaks the one-accent
 * rule, so the claim moves into the mono kicker and the headline earns its
 * emphasis the system way — accent on the final clause, azure, same as every
 * sub-page hero. The photograph is the fleet at work: the subject the
 * commitments below exist to change.
 */

const PILLARS = ["GREEN TECHNOLOGY", "ECO-DRIVING INCENTIVES", "SOLAR FLEET PLAN"];

export function SustainabilityHero() {
  const { open: openQuote } = useQuote();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/ship-hero.jpg"
        alt="A PKT Group tractor running the interstate through open country"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_48%]"
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
          <Leaf size={15} weight="bold" />
          For Earth&apos;s Sake
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Reducing Our Footprint,{" "}
          <span className="text-azure-hi">Mile After Mile</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          At PKT Group, environmental responsibility runs through green
          technology, driver incentives, and our own operations — actively
          reducing our carbon footprint and driving meaningful change in
          trucking.
        </p>

        {/* Claims the sections below have to earn, in the innovation hero's
            mono pill register. */}
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
