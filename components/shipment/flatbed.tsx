"use client";

import { ArrowRight, ArrowsOut } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";

/**
 * Flatbed service page sections (FREIGHT SERVICES — FLATBED row of the
 * content pack). Copy is CSV-verbatim. The equipment row is all placeholders
 * ([LENGTH], [MATERIAL], [YEAR RANGE], [HEIGHT], [MAX PAYLOAD]) and the
 * securement kit is partly bracketed, so specs render only what the notes
 * column confirms — 48'/53' 2025 trailers, aluminum available, headracks,
 * team flatbed, full tarped loads, permitted oversize with escorts — and
 * offer full specs on request. RGN / multi-axle heavy haul stays excluded per
 * the body copy. Logged in OPEN-ITEMS for confirmation.
 */

export function FBIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Flatbed
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              Open deck capacity for freight loading from the side, rear or
              overhead.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              Open deck work comes down to securement, and securement comes
              down to the driver — ours handle their own and know what a
              receiver will accept before the truck leaves.
            </p>
          </div>

          {/* The artifact: the open deck itself, as a ruled readout on the
              dark plate — same claim-then-object structure as the reefer
              intro, every line lifted from the CSV, no invented figures. */}
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-deep p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-6">
              <ArrowsOut size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Open deck</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {[
                ["Loading", "Side, rear or overhead"],
                ["Trailers", "48' and 53' 2025 models"],
                ["Headrack", "Stores securement equipment"],
                ["Securement", "Handled by our drivers, FMCSA standard"],
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
  ["Length", "48' and 53' flatbeds"],
  ["Model year", "2025 trailers"],
  ["Build", "Aluminum trailers available"],
  ["Headrack", "For storing and collecting securement equipment"],
  ["Team drivers", "Team flatbed for direct deliveries"],
];

export function FBEquipment() {
  return (
    <section
      id="equipment"
      className="bg-ink px-gut py-[clamp(96px,15vh,190px)]"
    >
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
              Open decks, ready to load from any side.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Full equipment specifications — deck height, payload, tarp types
              — are available on request; send the quote form and
              we&rsquo;ll confirm the trailer details with your booking.
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

const KIT: Array<[string, string]> = [
  ["Standard", "Every load secured to the FMCSA standard"],
  ["Tarps", "Full tarped loads handled"],
  ["Dunnage", "As the load requires"],
];

export function FBSecurement() {
  return (
    <section
      id="securement"
      className="bg-surface border-y border-line px-gut py-[clamp(96px,15vh,190px)]"
    >
      <Reveal>
        <div className="mx-auto grid max-w-[1200px] gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-azure")}
            >
              Securement
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.2vw,46px)] text-ink-text",
              )}
            >
              It arrives the way it left the dock.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[48ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              Securement is where open deck work is won or lost, so the kit
              rides with the truck and the driver owns it — secured to the
              FMCSA standard, dunnage as required.
            </p>
          </div>

          <dl className="m-0">
            {KIT.map(([term, detail], i) => (
              <div
                key={term}
                style={{ "--i": i + 3 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "grid grid-cols-[9rem_1fr] items-baseline gap-6 border-b border-line py-6 first:border-t",
                  "max-[560px]:grid-cols-1 max-[560px]:gap-2",
                )}
              >
                <dt className={cx(label, "m-0 text-soft-text")}>{term}</dt>
                <dd className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.5] text-ink-text">
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

const HAUL: Array<{ name: string; detail: string }> = [
  {
    name: "Building & construction",
    detail:
      "Lumber and treated wood, roofing, drywall and board, pipe and conduit, precast concrete, packaged supplies.",
  },
  {
    name: "Steel & metals",
    detail: "Plate and sheet, structural steel and beams, rebar, fabrications.",
  },
  {
    name: "Machinery & equipment",
    detail:
      "Industrial, agricultural and construction equipment within legal dimensions, manufacturing equipment.",
  },
  {
    name: "Other",
    detail:
      "Crated oversized freight, tanks and vessels within legal dimensions, utility products.",
  },
];

export function FBHaul() {
  return (
    <section id="haul" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-body-text")}
        >
          What we haul
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          Four freight families, one open deck.
        </h2>

        {/* The manifest. Ruled rows, names as display type, the same
            ground-shift hover the homepage equipment list uses. */}
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

export function FBDimensions() {
  return (
    <section
      id="dimensions"
      className="bg-ink px-gut py-[clamp(96px,15vh,190px)]"
    >
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-mute-2")}
            >
              Dimensions
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[12em]",
                "text-[clamp(26px,3.6vw,52px)] text-paper",
              )}
            >
              Legal loads move direct. Over that, we route it.
            </h2>
          </div>

          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "max-w-[56ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Freight within legal width, height and weight moves without a
              permit. Beyond that, it requires permits and routing — send the
              dimensions and weight and we&rsquo;ll confirm what&rsquo;s
              possible.
            </p>
            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 max-w-[56ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              For permitted oversize flatbed loads, we arrange the permits and
              escorts as part of the move.
            </p>
            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 max-w-[56ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Freight requiring RGN or multi-axle heavy haul sits outside our
              capability — send it anyway and we&rsquo;ll point you to a
              carrier who handles it.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FBCrossSell() {
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
            Temperature-controlled food books through refrigerated; enclosed
            palletized freight books through dry van.
          </h2>
        </Reveal>

        <Reveal>
          <div
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-[clamp(36px,5vh,64px)] grid gap-px bg-line sm:grid-cols-2",
            )}
          >
            {[
              { label: "Dry Van", href: "/services/dry-van" },
              { label: "Refrigerated", href: "/services/reefer" },
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

export function FBQuote() {
  const { open: openQuote } = useQuote();
  return (
    <ClosingCTA
      id="quote"
      ariaLabel="Get a flatbed quote"
      eyebrow="Get a quote"
      headline={
        <>
          Ready to Move <span className="text-azure-hi">Flatbed?</span>
        </>
      }
      copy="Send the lane and the details — we'll come back with a clear answer on availability."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to Freight Services"
      secondaryHref="/services"
      note="Send dimensions · Weight · ZIPs · Loading method"
    />
  );
}