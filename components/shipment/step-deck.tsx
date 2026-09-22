"use client";

import { ArrowRight, Truck } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";

/**
 * Step deck service page sections (FREIGHT SERVICES — STEP DECK row of the
 * content pack). Copy is CSV-verbatim. Every equipment figure is bracketed
 * ([LENGTH], [HEIGHT], [YEAR RANGE], [MAX PAYLOAD]) and the notes column
 * confirms only the ramps, so the spec sheet renders what is confirmed —
 * two deck levels, ramps for rolling equipment — and offers full specs on
 * request. Logged in OPEN-ITEMS for confirmation.
 */

export function SDIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Step Deck
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              Height without a permit — taller freight travels legal.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              The lower deck sits closer to the road, letting taller freight
              travel legally where a flatbed would put it over height. If
              you&rsquo;ve been quoted for permits on a load, it&rsquo;s worth
              asking whether a step deck removes the need.
            </p>
          </div>

          {/* The artifact: the deck itself, as a ruled readout on the dark
              plate — every line lifted from the CSV, no invented figures. */}
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-deep p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-6">
              <Truck size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Drop deck</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {[
                ["Decks", "Two levels — upper and lower"],
                ["Lower deck", "Closer to the road, taller freight legal"],
                ["Ramps", "For rolling and driveable equipment"],
                ["Permits", "Removed under legal height"],
              ].map(([term, detail]) => (
                <li
                  key={term}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b border-rule py-4 max-[420px]:grid-cols-1 max-[420px]:gap-1"
                >
                  <span className={cx(label, "m-0 text-mute-2")}>{term}</span>
                  <span className="text-[clamp(14px,1.05vw,16px)] leading-[1.5] text-paper">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const SPECS: Array<[string, string]> = [
  ["Decks", "Two levels — an upper deck and a lower deck"],
  ["Ramps", "Available for rolling and driveable equipment"],
  ["Loading", "Ramps, crane, overhead, side or rear forklift"],
  ["Full specs", "Deck lengths, legal height, payload and year range available on request"],
];

export function SDEquipment() {
  return (
    <section id="equipment" className="bg-ink px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-mute-2")}
            >
              Equipment
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[12em]",
                "text-[clamp(26px,3.6vw,52px)] text-paper",
              )}
            >
              Two deck levels, one legal load.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Full equipment specifications — deck lengths, legal height,
              payload, year range — are available on request; send the quote
              form and we&rsquo;ll confirm the trailer details with your
              booking.
            </p>
          </div>

          {/* Spec rows on shared hairlines — the ruled-manifest gesture. */}
          <dl className="col-span-7 m-0 max-[1000px]:col-span-1">
            {SPECS.map(([term, detail], i) => (
              <div
                key={term}
                style={{ "--i": i + 2 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "grid grid-cols-[9rem_1fr] items-baseline gap-6 border-b border-rule py-7 first:border-t",
                  "max-[560px]:grid-cols-1 max-[560px]:gap-2",
                )}
              >
                <dt className={cx(label, "m-0 text-mute-2")}>{term}</dt>
                <dd className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.5] text-paper">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

/**
 * The page's signature section: the CSV's "Flatbed or step deck guidance".
 * The whole value of a step deck is a height-threshold decision, so it
 * renders as two ruled verdict cards — flatbed under the threshold, step
 * deck over it — with the send-us-dimensions close underneath.
 */
export function SDGuidance() {
  return (
    <section
      id="guidance"
      className="bg-surface border-y border-line px-gut py-[clamp(96px,15vh,190px)]"
    >
      <Reveal>
        <div className="mx-auto max-w-[1200px]">
          <p
            style={{ "--i": 0 } as React.CSSProperties}
            className={cx(label, revealItem, "m-0 text-azure")}
          >
            Flatbed or step deck?
          </p>

          <h2
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[18em]",
              "text-[clamp(26px,3.2vw,46px)] text-ink-text",
            )}
          >
            Send the dimensions and we&rsquo;ll tell you which suits the load.
          </h2>

          <div
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-[clamp(36px,5vh,64px)] grid gap-px bg-line md:grid-cols-2",
            )}
          >
            {[
              {
                verdict: "Flatbed",
                when: "Under the height threshold",
                detail:
                  "A flatbed usually works and loads more easily from the side.",
              },
              {
                verdict: "Step Deck",
                when: "Above the height threshold",
                detail: "The lower deck keeps you legal without permits.",
              },
            ].map(({ verdict, when, detail }) => (
              <div
                key={verdict}
                className="flex min-h-[clamp(200px,26vh,260px)] flex-col justify-between bg-paper p-[clamp(24px,2.6vw,40px)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-[clamp(20px,1.9vw,27px)] font-bold leading-[1.05] tracking-[-0.015em] text-ink-text">
                    {verdict}
                  </span>
                  <span className={cx(label, "text-azure")}>{when}</span>
                </div>
                <p className="m-0 mt-6 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const HAUL: Array<{ name: string; detail: string }> = [
  {
    name: "Machinery and equipment",
    detail:
      "Construction, agricultural and industrial machinery, generators and compressors, and rolling equipment suited to ramps.",
  },
  {
    name: "Tall freight",
    detail:
      "Building materials over flatbed legal height, tanks and vessels, crated equipment, manufactured structures, HVAC units.",
  },
  {
    name: "General open deck",
    detail: "Steel and metal products, and palletized freight loading from above.",
  },
];

export function SDHaul() {
  return (
    <section id="haul" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-azure")}
        >
          What we haul
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[18em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          Three freight families, one drop deck.
        </h2>

        {/* The manifest. Ruled rows, names as display type, the same
            ground-shift hover the flatbed page uses. */}
        <ul
          className={cx(
            revealItem,
            "m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-line",
          )}
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {HAUL.map(({ name, detail }, i) => (
            <li
              key={name}
              className={cx(
                "group grid grid-cols-[2.5rem_1fr] gap-x-[clamp(16px,2.5vw,40px)] border-b border-line py-[clamp(20px,3vh,34px)] last:border-b-0",
                "transition-colors duration-300 hover:bg-surface",
              )}
            >
              <span className={cx(label, "text-soft-text tabular-nums")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span
                  className={cx(
                    "font-display block font-bold tracking-[-0.02em] text-ink-text",
                    "text-[clamp(20px,2.2vw,32px)] leading-[1.05]",
                    "transition-transform duration-500 ease-[var(--ease-out-strong)]",
                    "group-hover:translate-x-[clamp(6px,1vw,16px)]",
                  )}
                >
                  {name}
                </span>
                <p className="m-0 mt-2 max-w-[72ch] text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-soft-text">
                  {detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function SDCrossSell() {
  return (
    <section
      id="cross-sell"
      className="bg-surface border-y border-line px-gut py-[clamp(96px,15vh,190px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p
            style={{ "--i": 0 } as React.CSSProperties}
            className={cx(label, revealItem, "m-0 text-azure")}
          >
            Not the right trailer?
          </p>

          <h2
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[24em]",
              "text-[clamp(26px,3.2vw,46px)] text-ink-text",
            )}
          >
            Enclosed freight books through dry van or refrigerated; oversized
            building materials go flatbed.
          </h2>
        </Reveal>

        <Reveal>
          <div
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-[clamp(36px,5vh,64px)] grid gap-px bg-line sm:grid-cols-3",
            )}
          >
            {[
              { label: "Dry Van", href: "/services/dry-van" },
              { label: "Refrigerated", href: "/services/reefer" },
              { label: "Flatbed", href: "/services/flatbed" },
            ].map(({ label: l, href }) => (
              <a
                key={l}
                href={href}
                className="group flex min-h-[clamp(200px,26vh,280px)] flex-col justify-between bg-paper p-[clamp(24px,2.6vw,40px)] transition-colors duration-300 hover:bg-azure"
              >
                <ArrowRight
                  size={24}
                  weight="bold"
                  className="self-end text-azure transition-all duration-300 group-hover:translate-x-1 group-hover:text-paper"
                />
                <span className="font-display text-[clamp(20px,1.9vw,27px)] font-bold leading-[1.05] tracking-[-0.015em] text-ink-text transition-colors duration-300 group-hover:text-paper">
                  {l}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SDQuote() {
  const { open: openQuote } = useQuote();
  return (
    <ClosingCTA
      id="quote"
      ariaLabel="Get a step deck quote"
      eyebrow="Get a quote"
      headline={
        <>
          Ready to Move <span className="text-azure-hi">Step Deck?</span>
        </>
      }
      copy="Send the dimensions and we'll tell you whether a flatbed or a step deck suits the load — and come back with a clear answer on availability."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to Freight Services"
      secondaryHref="/services"
      note="Send dimensions · Weight · ZIPs · Ramps needed"
    />
  );
}
