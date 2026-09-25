"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";

/**
 * Dry Van service page sections (FREIGHT SERVICES — DRY VAN row of the
 * content pack). Copy is CSV-verbatim; the equipment spec placeholders
 * ([YEAR RANGE], [SUSPENSION], [LOADING METHODS]) are unresolved, so the
 * equipment section renders only what the notes confirm — 53' swing-door
 * trailers, brand-new fleet, FCFS facilities loading in about two hours —
 * and offers the full spec sheet on request rather than inventing figures.
 */

export function DVIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Dry Van
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              53&prime; enclosed capacity for freight that travels at ambient
              temperature.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              Full truckload across the contiguous US, including OTR and
              recurring lanes.
            </p>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              One load or weekly volume, you get a clear answer on
              availability.
            </p>
          </div>

          {/* The artifact: the trailer itself, on the dark plate — the same
              claim-then-object structure the homepage Communication section
              uses, since that is the page's own rhyme. */}
          <div
            style={{ "--i": 4 } as React.CSSProperties}
            className={cx(
              revealItem,
              "relative col-span-5 min-h-[clamp(260px,28vw,380px)] overflow-hidden bg-deep",
              "max-[1000px]:col-span-1",
            )}
          >
            <Image
              src="/trucks/dry-van-dock.jpg"
              alt="A 53-foot dry van with its swing doors open at a dock, loaded with wrapped pallets."
              fill
              sizes="(max-width: 1000px) 100vw, 40vw"
              className="object-cover object-[60%_50%]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const SPECS: Array<[string, string]> = [
  ["Length", "53-foot enclosed trailer"],
  ["Doors", "Swing doors"],
  ["Fleet age", "Brand-new trailers"],
  ["Freight", "Palletized and floor-loaded"],
  [
    "Loading",
    "First-come, first-served facilities — typically loaded and on the road in about 2 hours",
  ],
];

export function DVEquipment() {
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
              53&prime; dry vans, kept new.
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

const HAUL: Array<{ name: string; detail: string }> = [
  {
    name: "Consumer & retail",
    detail:
      "Packaged consumer products, retail merchandise, household goods, cleaning and personal care, e-commerce and DC freight.",
  },
  {
    name: "Food & beverage",
    detail:
      "Canned and bottled products, dry foods, beverages, packaged ingredients, shelf-stable goods.",
  },
  {
    name: "Manufacturing & industrial",
    detail:
      "Finished goods, industrial components, machinery parts, packaged tools, plastics, rubber.",
  },
  {
    name: "Automotive",
    detail:
      "Parts, components, packaged replacements, tires, manufacturing supplies.",
  },
  {
    name: "Paper & packaging",
    detail: "Paper products, cartons, packaging materials, printed goods.",
  },
  {
    name: "Electronics & appliances",
    detail:
      "Consumer electronics, appliances, electrical components, technology products — high-value freight subject to approval and insurance requirements.",
  },
  {
    name: "Building products",
    detail:
      "Packaged hardware, flooring, fixtures, interior finishing materials.",
  },
];

export function DVHaul() {
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
          Seven freight families, one trailer.
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

export function DVCrossSell() {
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
            Temperature-controlled food books through refrigerated; oversized
            building materials go flatbed.
          </h2>

          <p
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-5 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Same dispatch, same clear answer on availability — just different
            equipment.
          </p>
        </Reveal>

        {/* Service cards on the gap-px hairline grid — the vocabulary the rest
            of the site uses for sibling links. Full-width row so the cards
            get real presence instead of fighting a tall headline. */}
        <Reveal>
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-[clamp(36px,5vh,64px)] grid gap-px bg-line sm:grid-cols-2",
            )}
          >
            {[
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

export function DVQuote() {
  const { open: openQuote } = useQuote();
  return (
    <ClosingCTA
      id="quote"
      ariaLabel="Get a dry van quote"
      eyebrow="Get a quote"
      headline={
        <>
          Ready to Move <span className="text-azure-hi">Dry Van?</span>
        </>
      }
      copy="One load or weekly volume, you get a clear answer on availability — send the lane and the details and we'll come back with it."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to Freight Services"
      secondaryHref="/services"
      note="Send ZIPs · Pickup date · Commodity · Appointments"
    />
  );
}

