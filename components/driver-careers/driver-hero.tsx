import Image from "next/image";
import { ArrowRight, SteeringWheel } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { btn, btnSolid, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Driver Careers Hero Section.
 *
 * Full-height subpage hero overlaying SiteNav over a full-bleed dark photo plate,
 * matching the exact H1 display typography and structure of PageHero.
 */

const DRIVING_TYPES = ["COMPANY DRIVERS", "OWNER-OPERATORS", "48-STATE OTR"];

export function DriverHero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/demo-home/demo1.jpg"
        alt="A PKT CDL-A driver at the wheel."
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
          Drive for PKT
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Two ways to <br />
          <span className="text-azure-hi">run with us.</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Company driver positions and owner-operator lease opportunities.
          48-state OTR freight, late-model equipment, dispatch that knows your
          name.
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
          <a
            href="/careers/jobs"
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            CDL-A Jobs
            <ArrowRight size={18} />
          </a>

          <a
            href="/careers/owner-operators"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            Lease On
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
