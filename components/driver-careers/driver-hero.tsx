"use client";

import Image from "next/image";
import { ArrowRight, PhoneCall, SteeringWheel } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Driver Careers Hero Section.
 *
 * Full-height subpage hero overlaying SiteNav over a full-bleed dark photo plate,
 * matching the exact H1 display typography and structure of PageHero.
 */

const DRIVING_TYPES = ["LOCAL", "SHORT-HAUL", "REGIONAL", "OTR"];

export function DriverHero() {
  const { open: openQuote } = useQuote();
  const { openApplyModal } = useDriverApply();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/fleet-dock.jpg"
        alt="PKT Group CDL-A driver next to late-model Freightliner Cascadia"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[65%_35%]"
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
          <SteeringWheel size={15} weight="bold" />
          Drive With Purpose
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(36px,6.6vw,104px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          CDL-A Driving Jobs <br />
          Built Around <span className="text-azure-hi">How You Want to Drive</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Up to 83 CPM · Home Daily, Weekly or Every 2–3 Weeks · Late-Model Freightliners
        </p>

        {/* Route Type Pills */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {DRIVING_TYPES.map((type) => (
            <span
              key={type}
              className="border border-rule-lit bg-ink-2/80 px-3.5 py-1.5 font-mono text-[11.5px] font-bold text-paper tracking-[0.14em] rounded-full"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <button
            type="button"
            onClick={openApplyModal}
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            Find Jobs That Fit Me
            <ArrowRight size={18} />
          </button>

          <a
            href="tel:8005550199"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            <PhoneCall size={17} />
            Talk to a Recruiter
          </a>
        </div>
      </div>
    </section>
  );
}
