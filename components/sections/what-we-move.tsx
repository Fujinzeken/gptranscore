import Image from "next/image";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Homepage section 2 of 6 (What we move).
 *
 * The CSV gives exactly one sentence and six proper names — no per-item
 * marketing blurbs, and inventing them is off-limits. So the section is built
 * around that restraint: the sentence carries the argument in the right
 * column, and the six names become the column's own display type — a ruled
 * manifest, index, name, nothing else. What the rows lack in copy they gain
 * in scale.
 *
 * The photograph anchors the left edge and bleeds off it, the same spread
 * gesture the old case-study section used, with the equipment list running
 * down its right.
 */

const EQUIPMENT = [
  "Dry Van",
  "Refrigerated",
  "Flatbed",
  "Step Deck",
  "Dedicated",
  "Drop Trailer",
];

export function WhatWeMove() {
  return (
    <section className="overflow-hidden border-b border-line bg-page">
      <Reveal>
        <div className="grid grid-cols-12 items-stretch max-[900px]:grid-cols-1">
        {/* Bleeds to the left viewport edge, like every spread image on the page. */}
        <figure
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "relative col-span-4 m-0 -ml-[var(--gut)] min-h-[clamp(460px,52vw,620px)] overflow-hidden bg-line",
            "max-[900px]:col-span-1 max-[900px]:-mr-[var(--gut)] max-[900px]:aspect-[16/11] max-[900px]:min-h-0",
          )}
        >
          <Image
            src="/case-haul.jpg"
            alt="A PKT driver at the wheel of a company Freightliner Cascadia."
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="object-cover object-[64%_38%]"
          />
        </figure>

        <div className="col-span-8 self-center px-gut py-[clamp(44px,7vh,90px)] max-[900px]:col-span-1">
          <p className={cx(label, "m-0 text-body-text")}>What we move</p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[15em] text-[clamp(26px,3.2vw,44px)] text-ink-text",
            )}
          >
            Truckload capacity built around your freight.
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-5 max-w-[54ch] text-[clamp(15px,1.1vw,17px)] leading-[1.62] text-body-text",
            )}
          >
            Dry van, refrigerated, flatbed and step deck equipment, plus
            dedicated and drop trailer programs.
          </p>

          {/* The manifest. Six rows, hairline-ruled, names as display type. */}
          <ul
            className={cx(
              revealItem,
              "m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-line",
            )}
            style={{ "--i": 4 } as React.CSSProperties}
          >
            {EQUIPMENT.map((name, i) => (
              <li
                key={name}
                className={cx(
                  "group flex items-baseline gap-[clamp(20px,3vw,56px)]",
                  "border-b border-line py-[clamp(14px,1.9vh,22px)] last:border-b-0",
                  "transition-colors duration-300 hover:bg-surface",
                )}
              >
                <span
                  className={cx(
                    label,
                    "w-[2ch] shrink-0 text-soft-text tabular-nums",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cx(
                    "font-display font-bold tracking-[-0.02em] text-ink-text",
                    "text-[clamp(22px,2.6vw,38px)] leading-[1.05]",
                    "transition-transform duration-500 ease-[var(--ease-out-strong)]",
                    "group-hover:translate-x-[clamp(6px,1vw,16px)]",
                  )}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <p
            style={{ "--i": 5 } as React.CSSProperties}
            className={cx(
              revealItem,
              "pt-[clamp(20px,3vh,32px)] text-[clamp(15px,1.1vw,17px)] leading-[1.62] text-body-text",
            )}
          >
            48-state authority means we run your freight where it needs to go.
          </p>
        </div>
        </div>
      </Reveal>
    </section>
  );
}

