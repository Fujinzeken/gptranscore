"use client";

import {
  ArrowRight,
  ClipboardText,
  DownloadSimple,
  Snowflake,
  Thermometer,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";

/**
 * Refrigerated service page sections (FREIGHT SERVICES — REEFER row of the
 * content pack). Copy is CSV-verbatim. Equipment placeholders ([UNIT MAKE],
 * [YEAR RANGE], [RANGE], [MONITORING METHOD], [INTERVALS]) are unresolved in
 * the structured fields, so the spec sheet renders only what the notes column
 * confirms — 2025 Great Danes, Carrier/Thermo King units, continuous and
 * start-stop modes, 24/7 road service — and offers full specs on request.
 * Logged in OPEN-ITEMS for confirmation.
 */

export function RFIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Refrigerated
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              Temperature-controlled truckload for freight that has to arrive
              at temperature.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              Reefer has less margin for error than dry van — a missed set
              point or a late appointment can cost you the load, and operations
              manages these shipments accordingly.
            </p>
          </div>

          {/* The artifact: the cold chain itself, as a ruled readout on the
              dark plate — every line lifted from the CSV, no invented figures. */}
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-deep p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-6">
              <Snowflake size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Reefer</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {[
                ["Set point", "Confirmed at booking"],
                ["Mode", "Continuous or start-stop"],
                ["Pre-cool", "Before loading"],
                ["Download", "On request"],
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
  ["Length", "53-foot reefer trailers"],
  ["Fleet", "Brand-new 2025 Great Dane reefers"],
  ["Units", "Carrier and Thermo King refrigeration"],
  ["Modes", "Continuous and start-stop (cycle)"],
  ["Roadside", "24/7 road service when a reefer faces an issue in transit"],
];

export function RFEquipment() {
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
              53&prime; reefers, kept at set point.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Full equipment specifications are available on request — send the
              quote form and we&rsquo;ll confirm the trailer details with your
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

const PROTECT: Array<{
  icon: typeof Snowflake;
  title: string;
  detail: string;
}> = [
  {
    icon: Snowflake,
    title: "Pre-cooled before loading",
    detail: "Trailers are pre-cooled before they reach the dock for loading.",
  },
  {
    icon: Thermometer,
    title: "Continuous monitoring",
    detail:
      "Temperature-controlled loads are monitored continuously through transit.",
  },
  {
    icon: DownloadSimple,
    title: "Reefer download on request",
    detail: "The reefer's temperature record is available to you on request.",
  },
  {
    icon: ClipboardText,
    title: "Driver checks in transit",
    detail: "Drivers check the reefer on a regular schedule while the load moves.",
  },
];

export function RFProtect() {
  return (
    <section
      id="protecting"
      className="bg-surface border-y border-line px-gut py-[clamp(96px,15vh,190px)]"
    >
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-azure")}
        >
          Protecting the load
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[18em]",
            "text-[clamp(26px,3.2vw,46px)] text-ink-text",
          )}
        >
          The cold chain is managed from booking to receiver.
        </h2>

        {/* Four cells on the gap-px hairline grid — the hub's step-card
            gesture, carried onto this page. */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(36px,5vh,64px)] grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {PROTECT.map(({ icon: Icon, title, detail }, i) => (
            <div key={title} className="bg-paper p-[clamp(24px,2.6vw,36px)]">
              <div
                style={{ "--i": i + 3 } as React.CSSProperties}
                className={cx(revealItem)}
              >
                <Icon size={22} weight="bold" className="text-azure" />
                <h3 className="font-display m-0 pb-2 pt-5 text-[19px] font-bold tracking-[-0.01em] text-ink-text">
                  {title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.6] text-body-text">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const HAUL: Array<{ name: string; detail: string }> = [
  {
    name: "Food & beverage",
    detail:
      "Fresh produce, dairy, packaged meat and poultry, frozen foods, temperature-controlled beverages, bakery, prepared meals.",
  },
  {
    name: "Temperature-sensitive",
    detail:
      "Floral, personal care with temperature specs, packaged goods with tolerances — freight where a range matters even without active cooling demands.",
  },
  {
    name: "Protected freight",
    detail:
      "Reefers also carry freight needing protection from freezing rather than active cooling — flag a minimum rather than a maximum at booking.",
  },
];

export function RFHaul() {
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
          Three freight families, one set point.
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

export function RFCrossSell() {
  return (
    <section
      id="cross-sell"
      className="bg-page px-gut py-[clamp(96px,15vh,190px)]"
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
            Dry freight books through dry van; oversized building materials go
            flatbed or step deck.
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
              { label: "Flatbed", href: "/services/flatbed" },
              { label: "Step Deck", href: "/services/step-deck" },
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

export function RFQuote() {
  const { open: openQuote } = useQuote();
  return (
    <ClosingCTA
      id="quote"
      ariaLabel="Get a reefer quote"
      eyebrow="Get a quote"
      headline={
        <>
          Ready to Move <span className="text-azure-hi">Reefer?</span>
        </>
      }
      copy="Send the lane and the details — we'll come back with a clear answer on availability."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to Freight Services"
      secondaryHref="/services"
      note="Send set point · Mode · Tolerances · Pre-cool · Appointments"
    />
  );
}