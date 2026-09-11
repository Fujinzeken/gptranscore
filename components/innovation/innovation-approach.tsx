import { Reveal, revealItem } from "../reveal";
import { cx } from "../ui";

/**
 * Approach — "Built to Lead".
 *
 * The prod section was a centred kicker pill, a centred headline, and two
 * long grey paragraphs in a single wide column. That is the editorial
 * opposite of the system: centred pages read as brochures, and the kicker
 * pill is banned outright.
 *
 * This section is pure type on the Field surface — no cards, no metrics, no
 * device, because the paragraph is the point and the founders' argument
 * deserves more space than a grid would give it. Left-weighted, measured to
 * 68ch, with the two paragraphs set at different sizes so the first reads as
 * the claim and the second as the evidence.
 */

export function InnovationApproach() {
  return (
    <section id="approach" className="bg-page px-gut pb-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(32px,5vh,56px)]">
          <h2
            className={cx(
              revealItem,
              "font-display m-0 col-span-12",
              "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Built to lead — not to play catch-up
          </h2>

          <p
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-7 col-start-5 m-0 max-w-[68ch]",
              "text-[clamp(16px,1.35vw,20px)] font-medium leading-[1.55] text-ink-text",
              "max-[1000px]:col-span-12 max-[1000px]:col-start-1",
            )}
          >
            Our founders came to transportation from technology-driven
            industries — aviation, finance, software, IT — and recognized from
            the beginning that trucking could operate with the same modern
            standards as the most innovative industries in the world.
          </p>

          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-8 col-start-5 m-0 max-w-[68ch]",
              "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              "max-[1000px]:col-span-12 max-[1000px]:col-start-1",
            )}
          >
            Technological development doesn&apos;t just improve operations. It
            strengthens company culture, improves efficiency, and helps attract
            talent to an industry that too often struggles with reputation and
            prestige. Our in-house technology improves communication with
            drivers and customers, and lets us adapt to market changes — or
            solve challenges — before they become problems.
          </p>
        </div>
      </Reveal>
    </section>
  );
}