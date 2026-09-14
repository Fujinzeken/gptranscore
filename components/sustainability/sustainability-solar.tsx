"use client";

import Image from "next/image";
import { Sun } from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Powering the Future — the solar fleet plan.
 *
 * Prod ran this as a green gradient split with the highway photograph on the
 * right. The gradient is out (azure is the only accent), but the split
 * composition was right: claim on one side, the world it applies to on the
 * other. It renders as an ink plate with the one hard number — roughly 600
 * trucks — counted up as the section's moment, and the FreightWaves quote
 * kept as the mono-sourced claim it is.
 */

export function SustainabilitySolar() {
  return (
    <section id="solar" className="bg-ink">
      <Reveal>
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
          {/* Claim. */}
          <div className="flex flex-col justify-center px-gut py-[clamp(64px,10vh,130px)]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0 flex items-center gap-2", label, "text-azure-hi")}
            >
              <Sun size={15} weight="bold" />
              Renewable Energy
            </p>

            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-5 max-w-[12em]",
                "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-paper",
              )}
            >
              Powering the <span className="text-azure-hi">Future</span>
            </h2>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 max-w-[48ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              PKT Group is investing in renewable energy by planning to install
              solar panels across the fleet.
            </p>

            <div
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(revealItem, "mt-[clamp(24px,4vh,44px)]")}
            >
              <p className="m-0 flex items-baseline font-display text-[clamp(56px,8vw,120px)] font-black leading-none tracking-[-0.03em] text-azure-hi tabular-nums">
                <CountUp to={600} />
              </p>
              <p className={cx(label, "mt-3 text-mute-2")}>
                Trucks in the solar panel plan
              </p>
            </div>

            <p
              style={{ "--i": 5 } as React.CSSProperties}
              className={cx(revealItem, "mt-8 border-l-2 border-azure pl-4")}
            >
              <span className="block text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-paper">
                &ldquo;Revolutionizing sustainable trucking.&rdquo;
              </span>
              <span className={cx(label, "mt-2 block text-[9.5px] text-mute-2")}>
                — FreightWaves
              </span>
            </p>
          </div>

          {/* The world the claim applies to. */}
          <figure className="relative m-0 min-h-[420px] max-[900px]:min-h-[300px]">
            <Image
              src="/case-haul.jpg"
              alt="A PKT Group tractor running the highway through open country"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover object-[50%_45%]"
            />
            <figcaption
              className={cx(
                label,
                "absolute bottom-4 right-4 bg-ink/85 px-3 py-1.5 text-[9.5px] text-paper",
              )}
            >
              Fleetwide · Planned
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
