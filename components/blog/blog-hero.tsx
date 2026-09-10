"use client";

import Image from "next/image";
import { BookOpen, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { cx, label } from "../ui";

export function BlogHero() {
  return (
    <section className="relative isolate flex min-h-[58vh] sm:min-h-[64vh] flex-col overflow-hidden bg-ink">
      {/* Background Image — Original highway truck asset */}
      <Image
        src="/blog/blog-hero.jpg"
        alt="GP Transco Fleet Highway"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-60 mix-blend-luminosity"
        style={{ objectPosition: "center 70%" }}
      />

      {/* Scrim matching unified brand design */}
      <div
        aria-hidden="true"
        className="scrim-side max-[920px]:scrim-base absolute inset-0 -z-10"
      />

      {/* Site Nav */}
      <SiteNav />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-gut py-[clamp(44px,8vh,90px)] max-w-[1360px] mx-auto w-full">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-rule-lit bg-white/[0.06] px-4 py-1.5 backdrop-blur-md self-start mb-6">
          <BookOpen size={16} weight="fill" className="text-azure-hi" />
          <span className={cx(label, "text-[11px] text-paper")}>
            PUBLICATIONS & INSIGHTS
          </span>
        </div>

        {/* Display Headline */}
        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(36px,6.2vw,92px)]",
            "font-black uppercase leading-[0.92] tracking-[-0.03em] text-paper",
          )}
        >
          Latest <span className="text-azure-hi">Publications</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[56ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-mute">
          Stay informed with expert insights on trucking technology, driver careers,
          sustainability, and industry trends from GP Transco.
        </p>
      </div>
    </section>
  );
}
