"use client";

import { ArrowRight, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Closing CTA — the page's last word.
 *
 * Prod closed twice: a "Connect With Us" card trio (phone, address, quote)
 * and then a green gradient slab ("Let's Haul Together") repeating the same
 * actions. One closer does both — the claim in the poster voice on the ink
 * plate with the azure glow, the contact details as the mono footer line
 * beneath the buttons.
 */

export function SustainabilityCta() {
  const { open: openQuote } = useQuote();

  return (
    <section className="relative isolate overflow-hidden bg-ink px-gut py-[clamp(90px,14vh,170px)] text-center">
      {/* Azure glow — the one decorative move, replacing prod's green gradient. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 115%, rgba(11,143,203,0.35), transparent 70%)",
        }}
      />

      <h2
        className={cx(
          "font-display m-0 mx-auto max-w-[14em] text-[clamp(34px,5vw,76px)]",
          "font-black uppercase leading-[0.92] tracking-[-0.03em] text-paper",
        )}
      >
        Let&apos;s Haul <span className="text-azure-hi">Together</span>
      </h2>

      <p className="mx-auto mt-[clamp(18px,2.6vh,28px)] max-w-[54ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
        Partner with PKT Group and be part of the sustainable logistics
        revolution — reducing emissions, lowering costs, and driving
        environmental change across the industry.
      </p>

      <div className="mt-[clamp(28px,4vh,44px)] flex flex-wrap justify-center gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
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
          Request a Quote
          <ArrowRight size={18} />
        </button>

        <a
          href="tel:+18004605071"
          className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
        >
          <Phone size={17} />
          Call Us Now
        </a>
      </div>

      <p
        className={cx(
          label,
          "mt-[clamp(28px,4vh,44px)] flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9.5px] text-mute-2",
        )}
      >
        <span className="flex items-center gap-1.5">
          <Phone size={12} weight="bold" />
          (800) 460-5071
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} weight="bold" />
          3200 Channahon Rd, Joliet, IL 60436
        </span>
        <span>Serving the nation sustainably</span>
      </p>
    </section>
  );
}
