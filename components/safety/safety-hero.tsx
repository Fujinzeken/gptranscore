"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Phone } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Safety hero.
 *
 * Same register as every sub-page hero: full-height ink plate, full-bleed
 * photograph under the side scrim, display headline with the accent on the
 * final clause. The prod page opened with a lavender icon pill ("Safety
 * Leader") above a headline that said the company name; the icon pill is the
 * register the system bans and the company name is already in the nav, so
 * this opens with the mono kicker and a claim instead.
 *
 * The photograph is a tractor at work on the interstate — the environment
 * the safety system operates in, and the subject the whole page protects.
 * The three mono pills state the claims the sections below have to earn.
 */

const PILLARS = ["AI-POWERED MONITORING", "E-SMART ACTIVE SAFETY", "TOP CSA SCORES"];

export function SafetyHero() {
  const { open: openQuote } = useQuote();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/case-haul.jpg"
        alt="A PKT Group tractor running under an overpass on the interstate"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_42%]"
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
          <ShieldCheck size={15} weight="bold" />
          Fleet Safety
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Safety Is Built Into{" "}
          <span className="text-azure-hi">Every Mile We Run</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Safety is at the core of everything we do. From advanced AI-powered
          monitoring to comprehensive driver training, PKT Group employs
          industry-leading safety practices to protect our drivers, cargo, and
          the public.
        </p>

        {/* Pillars, in the innovation hero's mono pill register. Claims the
            page then has to prove section by section. */}
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
