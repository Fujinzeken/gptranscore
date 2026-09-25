import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Homepage section 3 of 6 (Coverage).
 *
 * This slot was the dark technology section; the rework keeps the slot's
 * ground and its rhyme — near-black section, one ink-2 panel with a lit ring,
 * a headered strip on top, a captioned strip below — and swaps what the panel
 * carries. The route telemetry belonged to a copy claim the home page no
 * longer makes; what this section actually has to say is the lane board, so
 * the panel now holds that: eighteen regular lanes meeting on shared hairlines
 * over the dark ground.
 *
 * The CSV gives one sentence and a placeholder — [PRIMARY LANES] — resolved
 * by the home notes into three regional corridors and by the services notes
 * into these eighteen state pairs. The notes write lanes as "WI-FL", not as a
 * direction, so pairs are joined with a dash rather than an arrow.
 */

/** Regular lanes, from the content pack's notes. */
const LANES: Array<[string, string]> = [
  ["WI", "FL"], ["WI", "MA"], ["WI", "CT"], ["WI", "NJ"],
  ["IL", "FL"], ["IL", "GA"], ["IL", "TX"],
  ["NJ", "MI"], ["NJ", "GA"], ["NJ", "SC"], ["NJ", "NC"], ["NJ", "FL"],
  ["FL", "NC"], ["FL", "GA"],
  ["GA", "OH"], ["GA", "MI"],
  ["NC", "IN"], ["KY", "TX"],
];

export function Coverage() {
  return (
    <section className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)] max-[1000px]:grid-cols-1">
          {/* Copy column. */}
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-mute-2")}
            >
              Coverage
            </p>

            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[12em]",
                "text-[clamp(26px,3.6vw,52px)] text-paper",
              )}
            >
              Ask us about your lane.
            </h2>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              PKT operates across the contiguous United States, with regular
              capacity concentrated in three corridors: Midwest to the
              Northeast, Northeast to the Southeast, and Southeast to the
              Midwest.
            </p>

            <a
              href="/services#coverage"
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(revealItem, btn, btnGhost, btnHero, "mt-9")}
            >
              Where We Run
              <ArrowRight size={17} />
            </a>
          </div>

          {/* The lane panel. Same chrome the technology panel wore: ringed
              ink-2 plate, headered strip, captioned strip. */}
          <div
            style={{ "--i": 5 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-6 col-start-7 overflow-hidden bg-ink-2",
              "ring-1 ring-rule-lit max-[1000px]:col-span-1 max-[1000px]:col-start-1",
            )}
          >
            <div className="flex items-center gap-2.5 border-b border-rule px-[clamp(18px,2.2vw,28px)] py-4">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-azure-hi" />
              <span className={cx(label, "text-paper")}>Regular Lanes</span>
            </div>

            {/* gap-px over the rule colour draws the hairlines; every cell
                paints its own ground. */}
            <div className="grid grid-cols-3 gap-px bg-rule p-px max-[560px]:grid-cols-2">
              {LANES.map(([from, to]) => (
                <div
                  key={`${from}-${to}`}
                  className="group flex items-center justify-center gap-[0.55em] bg-ink-2 px-2 py-[clamp(14px,2vh,22px)]"
                >
                  <span className="font-display text-[clamp(14px,1.3vw,19px)] font-bold tracking-[0.02em] text-paper">
                    {from}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[0.72em] text-azure"
                  >
                    &ndash;
                  </span>
                  <span className="font-display text-[clamp(14px,1.3vw,19px)] font-bold tracking-[0.02em] text-paper">
                    {to}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 border-t border-rule">
              <div className="border-r border-rule px-[clamp(18px,2.2vw,28px)] pb-[clamp(14px,2vh,20px)] pt-4">
                <p className={cx(label, "m-0 text-mute-2")}>Authority</p>
                <p className="m-0 mt-2 font-display text-[clamp(15px,1.4vw,20px)] font-bold text-paper">
                  48-state
                </p>
              </div>
              <div className="px-[clamp(18px,2.2vw,28px)] pb-[clamp(14px,2vh,20px)] pt-4">
                <p className={cx(label, "m-0 text-mute-2")}>Reach</p>
                <p className="m-0 mt-2 font-display text-[clamp(15px,1.4vw,20px)] font-bold text-paper">
                  Contiguous US
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
