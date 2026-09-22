"use client";

import { ArrowRight, TruckTrailer } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useQuote } from "../quote-modal";
import { cx, label } from "../ui";

/**
 * Drop trailer service page sections (FREIGHT SERVICES — DROP TRAILER row of
 * the content pack). Copy is CSV-verbatim. The page is built around the CSV's
 * actual H1 — "Load on your schedule." — with the four-step program cycle as
 * the signature section, and the "we need" intake list carried into the
 * closing note.
 */

export function DTIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(96px,15vh,190px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Drop Trailer
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              A trailer at your dock, loading on your clock.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              A trailer sits at your facility, you load when your operation is
              ready, we collect when it&rsquo;s done — loading stops being tied
              to a driver&rsquo;s clock. For facilities where loading takes
              hours rather than minutes, this removes detention from the
              conversation and gives your warehouse team control of the
              timeline.
            </p>
          </div>

          {/* The artifact: the trailer pool itself, as a ruled readout on the
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
              <TruckTrailer size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Drop trailer</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {[
                ["Your dock", "Trailers staged on site"],
                ["Loading", "When your operation is ready"],
                ["Collection", "We come when it's done"],
                ["Detention", "Removed from the conversation"],
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
  ["Timeline", "Loading on your timeline, not the driver's clock"],
  ["Pickup", "Freight staged and ready when the truck arrives"],
  ["Dock", "Reduced congestion at your own dock"],
  ["Windows", "Predictable pickup windows"],
  ["Shifts", "Loading spread across a shift instead of one stop"],
  ["Labor", "Your warehouse staffed around your operation"],
];

export function DTIncludes() {
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
              The timeline moves to your yard.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              A drop trailer program swaps live loading for staged loading —
              the trailer waits for your operation instead of the other way
              around. These are the terms, in plain text.
            </p>
          </div>

          {/* The terms on shared hairlines — the ruled-manifest gesture. */}
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

const CYCLE: Array<{ title: string; detail: string }> = [
  {
    title: "We set the program up",
    detail:
      "How many trailers stay on site, the swap frequency and the volume the program supports.",
  },
  {
    title: "Trailers are positioned",
    detail: "Staged at your facility and available for loading.",
  },
  {
    title: "You load on your schedule",
    detail:
      "Across one shift or several — the trailer waits for your operation.",
  },
  {
    title: "We run the cycle",
    detail:
      "We collect, deliver, and return an empty on the agreed rotation.",
  },
];

/**
 * The page's signature section: the CSV's four-step "How it works" program
 * cycle. Drop trailer is a rotation, so the page shows the loop itself —
 * set up, position, load, cycle — as numbered ruled rows.
 */
export function DTProcess() {
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
            One rotation, agreed up front.
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
          {CYCLE.map(({ title, detail }, i) => (
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
    name: "Facilities where loading takes hours",
    detail:
      "Staged loading removes detention from the conversation entirely.",
  },
  {
    name: "Uneven or unpredictable loading windows",
    detail:
      "The trailer is already there when your operation is ready for it.",
  },
  {
    name: "Consistent volume on a lane",
    detail:
      "A repeating lane is what makes a trailer pool worth running.",
  },
  {
    name: "Yard or dock space to stage a trailer",
    detail: "One staged spot is all the program needs to start.",
  },
  {
    name: "Operations loading across multiple shifts",
    detail:
      "Loading spreads across shifts instead of pausing for one pickup.",
  },
];

export function DTSuits() {
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
          Built for docks that don&rsquo;t run on a driver&rsquo;s clock.
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

export function DTCrossSell() {
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
            Repeating volume on a committed lane goes dedicated; freight
            without a schedule books dry van or reefer.
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
              { label: "Dedicated", href: "/services/dedicated" },
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

export function DTQuote() {
  const { open: openQuote } = useQuote();
  return (
    <ClosingCTA
      id="quote"
      ariaLabel="Get a drop trailer program quote"
      eyebrow="Get a quote"
      headline={
        <>
          Ready to <span className="text-azure-hi">Drop In?</span>
        </>
      }
      copy="Tell us the volume, the dwell and the shift pattern — we'll confirm what the program needs and come back with a clear answer on availability."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to Freight Services"
      secondaryHref="/services"
      note="Send volume · Frequency · Dwell · Secure space · Equipment · Shift pattern"
    />
  );
}
