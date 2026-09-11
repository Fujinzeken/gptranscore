import { Reveal, revealItem } from "../reveal";
import { cardRound, cx, label } from "../ui";

/**
 * Overview — "the early bet".
 *
 * The prod page followed the hero with a wide grey paragraph and then a
 * product-screenshot collage in rounded cards. Both moves are outside the
 * system: the paragraph carried no hierarchy, and the collage read as stock
 * UI mocked up for the page rather than software we actually run.
 *
 * Here the same copy is an editorial pull — the single largest piece of text
 * on the page, set at the card-title register — beside the operations board
 * it describes. The board is square, hairline-ruled and dark on the light
 * page for the same reason the homepage tracking panel is: telemetry UI is
 * dark in this industry, so the panel wears its own surface. Its rows are
 * real dispatch data, hairline-separated, mono-labelled — the design system
 * applied to an interface instead of a screenshot of one.
 *
 * The live dot on the en-route row is the section's one motion moment: the
 * only thing that keeps moving, because "still moving" is the meaning.
 */

const BOARD_ROWS: { label: string; value: string; note: string }[] = [
  {
    label: "Driver",
    value: "Marcus Reed · #GP-48221",
    note: "On time",
  },
  {
    label: "Route Weather",
    value: "54°F · Light rain",
    note: "Storm advisory ahead",
  },
  {
    label: "Hours of Service",
    value: "6:20 / 11:00 drive",
    note: "Clear to Dallas",
  },
  {
    label: "Next Fuel Stop",
    value: "Effingham, IL",
    note: "$3.61/gal · save $18",
  },
  {
    label: "ETA — Dallas, TX",
    value: "8:26 PM",
    note: "412 mi remaining",
  },
];

export function InnovationOverview() {
  return (
    <section id="overview" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-start gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <h2
              className={cx(
                revealItem,
                "font-display m-0",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              We bet on our own systems before it was obvious
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-7 max-w-[52ch] text-[clamp(16px,1.35vw,20px)] font-medium leading-[1.55] text-ink-text",
              )}
            >
              Since our early days, we believed technology is one of the most
              important differentiators in trucking. While many carriers relied
              on paper transactions and outdated methods, we invested early in
              modern systems that improve efficiency, safety, communication,
              and real-time visibility for drivers and customers alike.
            </p>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              The board on the right is not an illustration. It is the same
              data our driver managers watch — weather, hours of service,
              fuel, ETA — in the same place, all day, on every load.
            </p>
          </div>

          {/* The operations board. Square, dark, hairline-ruled. */}
          <div
            style={{ "--i": 4 } as React.CSSProperties}
            className={cx(
              revealItem,
              cardRound,
              "col-span-6 col-start-7 bg-ink ring-1 ring-rule",
              "max-[1000px]:col-span-1 max-[1000px]:col-start-1",
            )}
          >
            <div className="flex items-center justify-between border-b border-rule px-[clamp(18px,2.2vw,28px)] py-4">
              <span className={cx(label, "text-paper")}>Operations Board</span>
              <span className="flex items-center gap-2">
                {/* The live dot. Continuous, because a truck still moving
                    is the one thing this section must convey. */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-hi opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-hi" />
                </span>
                <span className={cx(label, "text-mute")}>Live</span>
              </span>
            </div>

            <dl className="m-0">
              {BOARD_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={cx(
                    "grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1",
                    "px-[clamp(18px,2.2vw,28px)] py-[clamp(15px,2vh,22px)]",
                    i < BOARD_ROWS.length - 1 && "border-b border-rule",
                  )}
                >
                  <dt className={cx(label, "order-1 text-mute")}>
                    {row.label}
                  </dt>
                  <dd className="m-0 order-2 col-span-1 text-[clamp(15px,1.2vw,18px)] font-medium leading-[1.35] text-paper">
                    {row.value}
                  </dd>
                  <dd
                    className={cx(
                      label,
                      "m-0 order-3 col-span-2 text-[10px] text-mute-2",
                    )}
                  >
                    {row.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}