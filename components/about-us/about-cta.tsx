"use client";

import Link from "next/link";
import { ArrowRight, Sparkle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { useQuote } from "../quote-modal";
import { btn, btnHero, btnGhost, btnSolid, cx, label } from "../ui";

export function AboutCTA() {
  const { open: openQuote } = useQuote();

  return (
    <section
      aria-label="Ready to partner with GP Transco"
      className="relative isolate overflow-hidden bg-ink py-[clamp(80px,12vh,140px)]"
    >
      {/* Subtle grid pattern texture from screenshot 4 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.25) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient azure lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-azure/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[920px] px-gut text-center">
        {/* Eyebrow */}
        <p className={cx(label, "text-azure-hi mb-5 flex items-center justify-center gap-2")}>
          <Sparkle size={13} weight="fill" />
          START YOUR JOURNEY WITH GP TRANSCO
        </p>

        {/* Display Headline */}
        <h2 className="font-display text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.94] tracking-[-0.03em] text-paper">
          Ready to move freight <br className="hidden sm:inline" />
          or grow your career?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[55ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-mute">
          Partner with a carrier that delivers on every promise. Let&apos;s talk about
          how we can work together.
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="mx-auto mt-10 flex max-w-[440px] flex-col gap-3.5 sm:gap-4">
          <button
            type="button"
            onClick={openQuote}
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "w-full justify-center shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] cursor-pointer",
            )}
          >
            <span>Request a Quote</span>
            <ArrowRight size={18} weight="bold" />
          </button>

          <Link
            href="/best-truck-driving-jobs"
            className={cx(
              btn,
              btnHero,
              btnGhost,
              "w-full justify-center hover:border-azure hover:text-azure-hi",
            )}
          >
            <span>Apply to Drive</span>
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>

        {/* Trust Guarantee Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono font-medium text-mute/80">
          <ShieldCheck size={16} weight="fill" className="text-azure-hi" />
          <span>Same-day response guaranteed • No obligations</span>
        </div>
      </div>
    </section>
  );
}
