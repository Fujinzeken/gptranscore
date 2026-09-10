"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { btn, btnHero, btnGhost, btnSolid, cx, label } from "../ui";

export function BrokerageHero() {
  const { open: openQuote } = useQuote();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      {/* Background Image — Clean original from live site */}
      <Image
        src="/freight-brokerage/brokerage-hero.jpg"
        alt="GP Transco Freight Brokerage Logistics Fleet"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-60 mix-blend-luminosity"
        style={{ objectPosition: "50% 35%" }}
      />

      {/* Unified Brand Scrim matching PageHero and the rest of the site */}
      <div
        aria-hidden="true"
        className="scrim-side max-[920px]:scrim-base absolute inset-0 -z-10"
      />

      {/* Primary Site Navigation */}
      <SiteNav />

      {/* Main Hero Content Area */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-gut py-[clamp(40px,7vh,88px)]">
        {/* Eyebrow */}
        <p className={cx(label, "text-azure-hi mb-4 flex items-center gap-2")}>
          <Sparkle size={13} weight="fill" />
          GP Transco Logistics
        </p>

        {/* Master Display Headline */}
        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(36px,6.6vw,104px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Freight Brokerage <br />
          <span className="text-azure-hi">Services</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-mute">
          Done in a simple, smart, and modern way. Backed by top-tier carrier
          partnerships and our own asset-based fleet.
        </p>

        {/* Unified Brand Action Buttons */}
        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <button
            type="button"
            onClick={openQuote}
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center cursor-pointer",
            )}
          >
            Work with Us
            <ArrowRight size={18} weight="bold" />
          </button>

          <Link
            href="#streamline"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            Join Carrier Network
          </Link>
        </div>

        {/* Brand Trust Strip */}
        <div
          className={cx(
            label,
            "mt-[clamp(36px,5vh,56px)] pt-6 border-t border-rule-lit/60 flex flex-wrap items-center gap-x-4 gap-y-2 text-mute/80",
          )}
        >
          <span>Trusted Carrier Network</span>
          <span className="text-rule-lit">•</span>
          <span>Asset-Based Capacity</span>
          <span className="text-rule-lit">•</span>
          <span>Service First</span>
        </div>
      </div>
    </section>
  );
}
