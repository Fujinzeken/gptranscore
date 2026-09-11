"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { btn, btnHero, btnGhost, btnSolid, cx, label } from "../ui";

export function AboutHero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      {/* Background Image — Clean original from live site */}
      <Image
        src="/about-us/about-hero.jpg"
        alt="GP Transco Professional Fleet and Driver"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: "70% center" }}
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
          DRIVEN BY PEOPLE, POWERED BY INNOVATION
        </p>

        {/* Master Display Headline */}
        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          20 Years of Redefining <br />
          <span className="text-azure-hi">Trucking</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[54ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-mute">
          Two decades of moving freight forward through better technology,
          stronger relationships, and uncompromising standards.
        </p>

        {/* Unified Brand Action Buttons */}
        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <Link
            href="#leadership"
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center cursor-pointer",
            )}
          >
            Meet our Leadership
            <ArrowRight size={18} weight="bold" />
          </Link>

          <Link
            href="#history"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            See our History
          </Link>
        </div>

        {/* Brand Trust Strip */}
        <div
          className={cx(
            label,
            "mt-[clamp(36px,5vh,56px)] pt-6 border-t border-rule-lit/60 flex flex-wrap items-center gap-x-4 gap-y-2 text-mute/80",
          )}
        >
          <span>Founded 2006</span>
          <span className="text-rule-lit">•</span>
          <span>500+ Tractors</span>
          <span className="text-rule-lit">•</span>
          <span>1,800 Trailers</span>
        </div>
      </div>
    </section>
  );
}
