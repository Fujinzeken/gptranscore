"use client";

import Image from "next/image";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Equipment Safety — what is bolted to the trucks and trailers.
 *
 * Prod headed this "Safety Features on GP Transco Trucks & Trailers" and
 * followed it with a full-width photograph. The photograph carries this
 * section: one edge-to-edge plate of the fleet with a mono caption strip,
 * and the copy states the standard the equipment exists to meet.
 */

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
        </div>

        <figure
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(revealItem, "m-0 mt-[clamp(32px,5vh,56px)]")}
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-ink max-[760px]:aspect-[4/3]">
            <Image
              src="/fleet-dock.jpg"
              alt="A PKT Group tractor and trailer at the loading dock"
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
            <span>PKT Group fleet — late-model equipment, continuously inspected</span>
            <span>Fleetwide</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
