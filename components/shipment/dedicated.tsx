"use client";

import { ArrowRight, Handshake } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";

/**
 * Dedicated service page sections (FREIGHT SERVICES — DEDICATED row of the
 * content pack). Copy is CSV-verbatim. No equipment or pricing figures exist
 * in the row, so nothing is invented — the page sells the commitment
 * structure (same trucks, same drivers, rates agreed for the term) and the
 * four-step program process, with the CSV's "also tell us" list carried
 * into the closing note.
 */

export function DDIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Dedicated
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              Same trucks, same drivers, week after week.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              Trucks committed to your lanes, running on a schedule, with the
              same drivers who learn your docks, receivers and appointment
              windows. For freight moving weekly, this replaces sourcing
              capacity each time with capacity that is already yours.
            </p>
          </div>

          {/* The artifact: the commitment itself, as a ruled readout on the
              dark plate — every line lifted from the CSV. */}
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-deep p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-6">
              <Handshake size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Dedicated</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {[
                ["Drivers", "Same drivers on your lane week to week"],
                ["Facility", "They learn your docks and receivers"],
                ["Capacity", "Committed ahead, not sourced weekly"],
                ["Rates", "Agreed for the term, not the spot market"],
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

const GETS: Array<[string, string]> = [
  ["Drivers", "Same drivers on your lane, week to week"],
  ["Familiarity", "Drivers who know your facility and requirements"],
  ["Capacity", "Committed ahead rather than sourced weekly"],
  ["Transit", "Predictable transit on a schedule you set"],
  ["Contact", "One operations contact for the program"],
  ["Rates", "Agreed for the term rather than moving with the spot market"],
];

export function DDIncludes() {
  return (
    <section id="includes" className="bg-ink px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-mute-2")}
            >
              What you get
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[12em]",
                "text-[clamp(26px,3.6vw,52px)] text-paper",
              )}
            >
              Capacity that is already yours.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Dedicated is a commitment in both directions — you commit the
              volume, we commit the trucks, the drivers and the rates. These
              are the terms, in plain text.
            </p>
          </div>

          {/* The commitments on shared hairlines — the ruled-manifest gesture. */}
          <dl className="col-span-7 m-0 max-[1000px]:col-span-1">
            {GETS.map(([term, detail], i) => (
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

const STEPS: Array<{ title: string; detail: string }> = [
  {
    title: "Tell us the operation",
    detail:
      "The lane, volume, schedules, commodity, weight, equipment and term.",
  },
  {
    title: "We review what we can commit to",
    detail:
      "You get a clear answer rather than a commitment we'd renegotiate later.",
  },
  {
    title: "It's agreed in writing",
    detail:
      "Rates, term, volume and service commitments agreed before the first load moves.",
  },
  {
    title: "It runs",
    detail:
      "Same trucks, same drivers, one operations contact — and expected variability, dwell expectations and receiver-specific requirements handled on intake.",
  },
];

/**
 * The page's signature section: the CSV's four-step "How it works" process.
 * A dedicated program is a commitment decision, so the page walks the
 * decision itself — tell, review, sign, run — as numbered ruled rows.
 */
export function DDProcess() {
  return (
    <section
      id="process"
      className="bg-surface border-y border-line px-gut py-[clamp(96px,15vh,190px)]"
    >
      <Reveal>
        <div className="mx-auto max-w-[1200px]">
          <p
            style={{ "--i": 0 } as React.CSSProperties}
            className={cx(label, revealItem, "m-0 text-azure")}
          >
            How it works
          </p>

          <h2
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[18em]",
              "text-[clamp(26px,3.2vw,46px)] text-ink-text",
            )}
          >
            A clear answer, then it&rsquo;s in writing.
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <ol
          className={cx(
            revealItem,
            "mx-auto max-w-[1200px] m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-line",
          )}
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {STEPS.map(({ title, detail }, i) => (
            <li
              key={title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-[clamp(16px,2.5vw,40px)] border-b border-line py-[clamp(20px,3vh,34px)] last:border-b-0 md:grid-cols-[2.5rem_16rem_1fr]"
            >
              <span className={cx(label, "text-azure tabular-nums")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[clamp(19px,1.9vw,26px)] font-bold leading-[1.1] tracking-[-0.015em] text-ink-text">
                {title}
              </h3>
              <p className="m-0 col-start-2 max-w-[64ch] text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-soft-text md:col-start-auto md:mt-0 mt-2">
                {detail}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

const SUITS: Array<{ name: string; detail: string }> = [
  {
    name: "Consistent volume on a repeating lane",
    detail:
      "Freight that moves weekly is where committed capacity beats sourcing every load.",
  },
  {
    name: "Freight where driver familiarity matters",
    detail:
      "Tight docks, specific receivers, facilities where knowing the routine matters.",
  },
  {
    name: "Appointment-sensitive freight",
    detail:
      "Loads that live or die on hitting the window, run by drivers who already know it.",
  },
  {
    name: "Retail replenishment on a fixed schedule",
    detail:
      "Stores and DCs that need the truck on the same days, every week.",
  },
  {
    name: "Manufacturing freight on a production schedule",
    detail:
      "Lines that cannot wait on spot availability — the capacity is already yours.",
  },
];

export function DDSuits() {
  return (
    <section id="suits" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-azure")}
        >
          Who it suits
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[18em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          Built for freight that repeats.
        </h2>

        {/* The manifest. Ruled rows, the same ground-shift hover as the
            other service pages. */}
        <ul
          className={cx(
            revealItem,
            "m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-line",
          )}
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {SUITS.map(({ name, detail }, i) => (
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

export function DDCrossSell() {
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
            Not the right program?
          </p>

          <h2
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[24em]",
              "text-[clamp(26px,3.2vw,46px)] text-ink-text",
            )}
          >
            Freight without a repeating lane books dry van or flatbed; loading
            without a driver&rsquo;s clock books drop trailer.
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
              { label: "Drop Trailer", href: "/services/drop-trailer" },
              { label: "Dry Van", href: "/services/dry-van" },
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

export function DDQuote() {
  const { open: openQuote } = useQuote();
  return (
    <ClosingCTA
      id="quote"
      ariaLabel="Get a dedicated program quote"
      eyebrow="Get a quote"
      headline={
        <>
          Ready to Go <span className="text-azure-hi">Dedicated?</span>
        </>
      }
      copy="Tell us the lane, the volume and the term — we'll review what PKT can commit to and give you a clear answer, in writing."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to Freight Services"
      secondaryHref="/services"
      note="Send lane · Volume · Schedule · Term · Dwell · Equipment"
    />
  );
}
