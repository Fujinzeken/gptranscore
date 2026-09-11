import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * The award — CCJ Innovator of the Year, 2026.
 *
 * Prod ran this as a full-bleed blue gradient banner: award logo left,
 * badge pill and two paragraphs right. The gradient is banned in this
 * system, and the floating logo PNG would be the only raster on the page —
 * so the lockup is set typographically instead: "CCJ" at the display
 * register, holding the whole left column the way the logo did, with the
 * award line mono-set beneath a hairline.
 *
 * The right column carries the prod copy at the standard two-register
 * rhythm, and closes on the line that earns the section: not part of the
 * industry evolution — driving it. That line is the section's accent.
 */

export function InnovationAward() {
  return (
    <section id="award" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)]">
          {/* The typographic lockup. */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 max-[1000px]:col-span-12",
            )}
          >
            <p
              className={cx(
                "font-display m-0 leading-[0.82] tracking-[-0.04em]",
                "text-[clamp(96px,13vw,210px)] font-extrabold text-paper",
              )}
            >
              CCJ
            </p>
            <div className="mt-6 border-t border-rule-lit pt-4">
              <p className={cx("m-0", label, "text-azure-hi")}>
                2026 · Innovator of the Year
              </p>
              <p
                className={cx(
                  "m-0 mt-2 text-[clamp(12px,0.95vw,14px)] leading-[1.5] text-mute",
                )}
              >
                Commercial Carrier Journal — one of the highest honors in the
                industry.
              </p>
            </div>
          </div>

          {/* The claim and its evidence. */}
          <div className="col-span-6 col-start-7 max-[1000px]:col-span-12 max-[1000px]:col-start-1">
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-paper",
              )}
            >
              Leading the future of trucking technology
            </h2>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mt-7 max-w-[52ch]",
                "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              In 2026, GP Transco was named CCJ Innovator of the Year — one of
              the highest honors in the industry — by Commercial Carrier
              Journal for groundbreaking advancements in artificial intelligence
              and logistics optimization.
            </p>

            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mt-5 max-w-[52ch]",
                "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              The award recognizes our cutting-edge AI-driven tools that
              supercharge planning efficiency, automate load-matching, reduce
              planner workload, and eliminate errors — proving once again that
              GP Transco isn&apos;t just part of the industry evolution,{" "}
              <span className="font-semibold text-paper">
                we&apos;re driving it.
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}