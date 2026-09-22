"use client";

import { ArrowRight, Cpu } from "@phosphor-icons/react/dist/ssr";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Closing CTA — the page's last word.
 *
 * Prod closed on a purple gradient slab: "Safety First. Always." with two
 * buttons. The claim keeps its poster voice on the ink plate with an azure
 * glow; "Ship With Us" starts the quote flow and the secondary button hands
 * off to the technology page, which is where the systems named above live.
 */

export function SafetyCta() {
  const { open: openQuote } = useQuote();

  return (
    <section className="relative isolate overflow-hidden bg-ink px-gut py-[clamp(90px,14vh,170px)] text-center">
      {/* Azure glow — the one decorative move, replacing prod's purple gradient. */}
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
        Safety First. <span className="text-azure-hi">Always.</span>
      </h2>

      <p className="mx-auto mt-[clamp(18px,2.6vh,28px)] max-w-[56ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
        At PKT Group, safety isn&apos;t just a priority — it&apos;s a core value
        that drives every decision we make. From advanced technology to
        comprehensive training, we&apos;re committed to protecting our drivers,
        customers, and communities.
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
          Ship With Us
          <ArrowRight size={18} />
        </button>

        <a
          href="/pktgrouptechnology"
          className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
        >
          <Cpu size={17} />
          Discover PKT Group Technology
        </a>
      </div>

      <p className={cx(label, "mt-[clamp(28px,4vh,44px)] text-[9.5px] text-mute-2")}>
        PKT Group · Fleet Safety
      </p>
    </section>
  );
}

