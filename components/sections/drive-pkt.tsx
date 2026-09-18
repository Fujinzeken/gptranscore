import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";
import { ApplyButton } from "./cta-buttons";

/**
 * Homepage section 6 of 6 (Drive PKT).
 *
 * Reworks the ruled-columns slot. First pass kept the newspaper-index bones —
 * two display titles under a heavy rule — but the cells were half-empty
 * rectangles and the CTA hung off the bottom left, so the lower half of the
 * section did no work.
 *
 * Now the two ways are doors: each cell is the link itself, title set at full
 * column width with the arrow riding the corner, and the cell lifts to its
 * own white surface on hover — the same hover ground-shift the manifest rows
 * in section two use, so the gesture is a rhyme and not a new trick. The CSV
 * names exactly two ways, so there are two doors and no filler.
 *
 * Copy is CSV-verbatim: the sentence above the rule, the two names below it.
 */

const WAYS = ["Company drivers", "Owner-operators"];

export function DrivePKT() {
  return (
    <section className="border-t border-line bg-page px-gut py-[clamp(66px,10vh,128px)]">
      <Reveal>
        <p
          className={cx(label, revealItem, "m-0 text-body-text")}
          style={{ "--i": 0 } as React.CSSProperties}
        >
          Drive PKT
        </p>

        <h2
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[13em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          Two ways to run with us.
        </h2>

        <p
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-5 max-w-[54ch] text-[clamp(15px,1.1vw,17px)] leading-[1.62] text-body-text",
          )}
        >
          Dispatch knows who you are, what you drive and where you live.
          48-state authority, steady freight, and settlements that arrive when
          we said they would.
        </p>

        {/* The two doors. Full height, each one the link, hairline between. */}
        <div className="mt-[clamp(30px,4.4vh,52px)] grid grid-cols-2 border-t-2 border-ink-text max-[820px]:grid-cols-1">
          {WAYS.map((way, i) => (
            <ApplyButton
              key={way}
              style={{ "--i": i + 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "group/way relative flex min-h-[clamp(180px,26vh,260px)] flex-col justify-between text-left",
                "py-[clamp(22px,3.4vh,40px)] cursor-pointer",
                "transition-colors duration-300 hover:bg-surface",
                i > 0 &&
                  "border-l border-line pl-[clamp(24px,3vw,52px)] max-[820px]:border-l-0 max-[820px]:border-t",
                i === 0 && "pr-[clamp(24px,3vw,52px)]",
              )}
            >
              <span className={cx(label, "text-soft-text")}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="flex items-end justify-between gap-6">
                <span className="font-display m-0 text-[clamp(26px,3.2vw,48px)] font-bold leading-[1.02] tracking-[-0.02em] text-ink-text">
                  {way}
                </span>
                <ArrowUpRight
                  size={30}
                  className={cx(
                    "shrink-0 text-azure transition-transform duration-500 ease-[var(--ease-out-strong)]",
                    "group-hover/way:translate-x-1 group-hover/way:-translate-y-1",
                  )}
                />
              </span>
            </ApplyButton>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
