"use client";

import Image from "next/image";
import { ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnSolid, btnOutline, btnHero, cx, label } from "../ui";

/**
 * ELITE Drivers Section.
 *
 * Light field (bg-page) following the dark ShipSustainability plate.
 *
 * Split layout: left column carries the editorial argument + stat +
 * two CTAs. Right column is a full-bleed driver portrait that bleeds
 * to the section edge — same device as the live site but tightened
 * to the design system's hard edges and type scale.
 */
export function ShipEliteDrivers() {
  return (
    <section
      id="drivers"
      className="bg-page overflow-hidden"
    >
      <div className="grid grid-cols-12 min-h-[640px]">
        {/* Left: Editorial column */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-gut py-[clamp(72px,11vh,130px)]">
          <Reveal>
            <p
              className={cx(
                revealItem,
                label,
                "text-azure mb-4 flex items-center gap-2",
              )}
            >
              <Star size={13} weight="fill" />
              Driver Excellence
            </p>

            <h2
              className={cx(
                revealItem,
                "type-display m-0 text-[clamp(34px,5vw,68px)] text-ink-text leading-[0.94]",
              )}
              style={{ "--i": 1 } as React.CSSProperties}
            >
              <span className="text-azure">ELITE</span> Drivers
            </h2>

            <div
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(revealItem, "mt-6 space-y-4 max-w-[52ch]")}
            >
              <p className="text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-body-text m-0">
                In order to provide our customers with the best service possible,
                an asset-based carrier must have elite drivers. Each year, the GP
                Transco Management Team runs an extensive satisfaction survey
                among our drivers and compares the results to the national
                average.
              </p>
              <p className="text-[clamp(15px,1.15vw,17px)] leading-[1.65] text-body-text m-0">
                This helps us understand how our drivers feel when performing
                their work, and gives us insight into what we can do to increase
                their level of satisfaction. This leads to improved service for
                our customers.
              </p>
            </div>

            {/* Stat */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-8 border border-line bg-surface p-5 flex items-start gap-4",
              )}
            >
              <span className="font-display text-[clamp(36px,4.5vw,52px)] font-black text-ink-text leading-none tabular-nums">
                13
              </span>
              <div className="pt-1">
                <p className="font-display font-bold text-[15px] text-ink-text m-0">
                  Average Years of Experience
                </p>
                <p className="text-[13px] text-body-text mt-0.5 m-0">
                  Our drivers bring decades of expertise to every load
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(revealItem, "mt-8 flex flex-wrap gap-3")}
            >
              <a
                href="/driver-careers"
                className={cx(btn, btnSolid, btnHero)}
              >
                Discover ELITE Drivers
                <ArrowRight size={17} />
              </a>
              <a
                href="/driver-careers#apply"
                className={cx(btn, btnOutline, btnHero)}
              >
                Drive with Us
                <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: Full-bleed driver portrait */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 relative min-h-[420px] lg:min-h-0 bg-[#0d1a28]">
          {/* We use fleet-dock.jpg as a stand-in until a driver portrait is added to /public */}
          <Image
            src="/fleet-dock.jpg"
            alt="PKT Group ELITE driver"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          {/* Scrim so text above doesn't fight the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-page via-transparent to-transparent lg:block hidden"
          />
          {/* Azure accent line on left edge when photo is right-side */}
          <div
            aria-hidden="true"
            className="absolute left-0 inset-y-0 w-[3px] bg-azure hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
