"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { btn, btnHero, btnGhost, btnSolid, cx, label } from "../ui";

export function OfficeHero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      {/* Background Image */}
      <Image
        src="/office-careers/office-hero-bg1.jpg"
        alt="GP Transco modern office headquarters in Joliet, IL"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-50 mix-blend-luminosity"
        style={{ objectPosition: "50% 40%" }}
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
          Join Our Team
        </p>

        {/* Master Display Headline matching website standard */}
        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(36px,6.6vw,104px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Help build the future <br />
          <span className="text-azure-hi">of logistics</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Be part of a modern logistics company where your voice is heard and
          your contributions matter.
        </p>

        {/* Unified Brand Action Buttons */}
        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <Link
            href="#open-positions"
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            View Open Positions
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#culture"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            Discover Team Highlights
          </Link>
        </div>

        {/* Brand Trust Strip */}
        <div
          className={cx(
            label,
            "mt-[clamp(36px,5vh,56px)] pt-6 border-t border-rule-lit/60 flex flex-wrap items-center gap-x-4 gap-y-2 text-mute/80",
          )}
        >
          <span>Competitive Pay</span>
          <span className="text-rule-lit">•</span>
          <span>Full Benefits</span>
          <span className="text-rule-lit">•</span>
          <span>Growth from Within</span>
          <span className="text-rule-lit">•</span>
          <span>Open Door Policy</span>
        </div>
      </div>
    </section>
  );
}
