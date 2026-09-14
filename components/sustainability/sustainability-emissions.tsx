"use client";

import { Truck } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Emissions Comparison — 60 modern trucks vs one from 1988.
 *
 * Prod made this point with a grid of sixty emoji trucks and a punchline.
 * The device is genuinely good — a number you can see rather than read — so
 * it stays, rebuilt in the system's register: the "60" headline carries the
 * count (users shouldn't have to count), sixty Phosphor trucks on the page
 * field rise in one staggered wave, and the punchline carries the emphasis
 * the system way, one oversized azure word instead of a green emoji headline.
 */

const COUNT = 60;

export function SustainabilityEmissions() {
  return (
    <section
      id="emissions"
      className="bg-page px-gut py-[clamp(78px,12vh,150px)]"
    >
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Emissions Comparison
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            How Far the <span className="text-azure">Equipment</span> Has Come
          </h2>
        </div>

        {/* The fleet — sixty trucks, one staggered wave. */}
        <div
          aria-hidden="true"
          className="mt-[clamp(36px,6vh,72px)] grid grid-cols-10 gap-y-[clamp(18px,3vh,34px)] max-[760px]:grid-cols-6"
        >
          {Array.from({ length: COUNT }, (_, i) => (
            <div
              key={i}
              style={{ "--i": 3 + i } as React.CSSProperties}
              className={cx(revealItem, "flex justify-center")}
            >
              <Truck
                size={38}
                weight="regular"
                className="text-azure/55 max-[760px]:h-[26px] max-[760px]:w-[26px]"
              />
            </div>
          ))}
        </div>

        {/* The punchline. */}
        <p
          style={{ "--i": 64 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mx-auto mt-[clamp(36px,6vh,72px)] max-w-[30em] text-center",
            "text-[clamp(16px,1.3vw,20px)] leading-[1.5] text-body-text",
          )}
        >
          <span
            className="font-display text-[clamp(34px,4vw,56px)] font-black tracking-[-0.02em] text-azure align-middle"
          >
            Sixty
          </span>{" "}
          of these trucks would be needed to produce the emissions of{" "}
          <span className="font-display text-[clamp(34px,4vw,56px)] font-black tracking-[-0.02em] text-azure align-middle">
            one
          </span>{" "}
          truck back in 1988.
        </p>
      </Reveal>
    </section>
  );
}
