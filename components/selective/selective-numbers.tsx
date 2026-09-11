"use client";

import { Target } from "@phosphor-icons/react/dist/ssr";
import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * By the Numbers — "The Proof is in the Results".
 *
 * Prod rendered these four figures as four separately gradient-filled cards,
 * which fights the section's own point: the numbers carry the weight, the
 * boxes shouldn't. Here they are one hairline lattice, counted up once on
 * entry, azure figures on the page's paper — the same register the fact
 * strip in the hero promised, now paid off.
 */

const RESULTS = [
  { to: 30000, label: "Driver Applications", note: "Received yearly" },
  { to: 2, suffix: "%", label: "Hire Rate", note: "Only the best make the cut" },
  { to: 50, suffix: "M+", label: "Miles Driven", note: "Each year with state-of-the-art equipment" },
  { to: 500, suffix: "+", label: "Trucks", note: "Modern, efficient fleet" },
];

export function SelectiveNumbers() {
  return (
    <section id="numbers" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            By the Numbers
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            The Proof Is in the <span className="text-azure">Results</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Our selective approach delivers exceptional outcomes
          </p>
        </div>

        <div className="grid grid-cols-4 gap-px bg-line max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
          {RESULTS.map((result, i) => (
            <div
              key={result.label}
              style={{ "--i": 4 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-surface px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                "transition-colors duration-300 hover:bg-page",
              )}
            >
              <div className="flex items-center justify-between">
                <Target
                  size={20}
                  weight="regular"
                  className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                  aria-hidden="true"
                />
                <span className={cx(label, "text-line-strong")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p
                className={cx(
                  "font-display m-0 mt-[clamp(20px,3vh,34px)] text-[clamp(30px,3.4vw,52px)]",
                  "font-extrabold leading-none tracking-[-0.025em] text-azure",
                )}
              >
                <CountUp to={result.to} suffix={result.suffix ?? ""} />
              </p>
              <h3
                className={cx(
                  "font-display m-0 mt-3 text-[clamp(15px,1.2vw,18px)]",
                  "font-bold leading-[1.2] text-ink-text",
                )}
              >
                {result.label}
              </h3>
              <p className="m-0 mt-2 text-[clamp(12.5px,0.95vw,14px)] leading-[1.55] text-body-text">
                {result.note}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
