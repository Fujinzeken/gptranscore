import Image from "next/image";
import { Reveal, revealItem } from "../reveal";
import { cx } from "../ui";

/**
 * "Why companies choose PKT Group"
 *
 * Was six filled cells floating in a gap grid, which was the last container
 * layout left on a page otherwise built from plates, hairlines and bled edges.
 * The gaps were the problem: six rectangles with air around them read as a
 * template no matter how the spans are arranged.
 *
 * Now one machined slab. Zero gap, so cells meet on shared 1px rules and the
 * whole thing reads as a single divided panel rather than as tiles. It runs
 * full bleed, so the photograph reaches the viewport edge like every other
 * image on the page instead of sitting politely inside a gutter.
 *
 * The azure cell touches its neighbours edge to edge, which makes the accent
 * one panel of the slab rather than a highlight swatch floating in space.
 *
 * Icons are gone. Six decorative glyphs, one per cell, were the clearest
 * template tell left on the page, and cell size carries the hierarchy without
 * them.
 *
 * Seven pieces of content, seven cells, twelve grid units, no filler.
 */

/**
 * Homepage section 1 of 6 (Capacity). The other five CSV items are separate
 * homepage sections, not tiles in this bento — they get their own sections.
 */

type Reason = {
  title: string;
  body: string;
  tone?: "azure";
};

const CAPACITY: Reason = {
  title: "One carrier. One authority. One team accountable.",
  body: "When PKT commits to your freight, our operations team stays responsible for it from pickup through delivery. Loads accepted by PKT move under our authority and dispatch, kept with us rather than passed to another carrier. When you call about a shipment, you are talking to the team managing it.",
  tone: "azure",
};

export function WhyGP() {
  return (
    /* No bottom padding: the bento slab butts straight onto the next section,
       so no bare page-gray band opens up between two full-bleed plates. */
    <section className="bg-page pt-[clamp(72px,11vh,150px)]">
      <Reveal>
        <header
          className={cx(revealItem, "mb-[clamp(30px,4.5vh,50px)] px-gut")}
        >
          <h2 className="type-display m-0 max-w-[13em] text-[clamp(26px,3.6vw,52px)] text-ink-text">
            Why companies choose PKT
          </h2>
          <p className="mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Built on reliability, powered by innovation, and committed to your
            success.
          </p>
        </header>

        {/* gap-px over the line colour is what draws the rules: every cell
            paints its own ground, and the 1px it does not cover becomes the
            division. Nothing to double up at the seams. */}
        <div className="grid grid-cols-4 gap-px border-y border-line bg-line max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
          <figure
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "relative col-span-2 row-span-2 m-0 min-h-[400px] overflow-hidden bg-line",
              "max-[860px]:row-span-1 max-[860px]:aspect-[16/10] max-[860px]:min-h-0",
              "max-[560px]:col-span-1",
            )}
          >
            <Image
              src="/fleet-dock.jpg"
              alt="PKT tractors and dry vans backed into the loading dock."
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className="object-cover object-[52%_58%]"
            />
          </figure>

          <article
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              CAPACITY.tone === "azure" ? "bg-azure" : "bg-surface",
              "col-span-2 row-span-2 flex flex-col justify-center gap-3 p-[clamp(22px,2.2vw,36px)]",
              "min-h-[400px] max-[860px]:row-span-1 max-[860px]:min-h-0 max-[860px]:py-[clamp(28px,4vh,48px)]",
              "max-[560px]:col-span-1 max-[560px]:min-h-[150px]",
            )}
          >
            <h3
              className={cx(
                "font-display m-0 max-w-[16em] text-[clamp(22px,2.4vw,36px)] font-bold tracking-[-0.015em]",
                CAPACITY.tone === "azure" ? "text-azure-ink" : "text-ink-text",
              )}
            >
              {CAPACITY.title}
            </h3>
            <p
              className={cx(
                "m-0 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62]",
                CAPACITY.tone === "azure" ? "text-azure-ink" : "text-body-text",
              )}
            >
              {CAPACITY.body}
            </p>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
