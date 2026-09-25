"use client";

import Image from "next/image";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Equipment Safety — the CSV's maintenance standard plus the maintenance
 * support the client listed in the Safety comments.
 */

const SUPPORT = [
  "Maintenance team available 24/7",
  "Trusted partner repair shops with short wait times",
  "Planned preventive maintenance service",
];

export function SafetyTrucks() {
  return (
    <section id="trucks" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Equipment Safety
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Equipment that{" "}
            <span className="text-azure">works.</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Preventive maintenance on a set schedule rather than repair when
            something fails · pre-trip and post-trip inspections on every run ·
            annual DOT inspections · defects reported and repaired before
            dispatch.
          </p>
          <ul
            style={{ "--i": 4 } as React.CSSProperties}
            className={cx(
              revealItem,
              "m-0 mt-6 flex list-none flex-wrap gap-x-8 gap-y-3 p-0",
            )}
          >
            {SUPPORT.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[clamp(14px,1.05vw,16px)] font-semibold text-ink-text"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-azure" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(revealItem, "m-0 mt-[clamp(32px,5vh,56px)]")}
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-ink max-[760px]:aspect-[4/3]">
            <Image
              src="/fleet-dock.jpg"
              alt="A PKT tractor and trailer at the loading dock"
              fill
              sizes="100vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
          <figcaption
            className={cx(
              label,
              "mt-3 flex items-center justify-between text-[9.5px] text-mute-2",
            )}
          >
            <span>PKT equipment — inspected before every run</span>
            <span>Fleetwide</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
