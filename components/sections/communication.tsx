import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnOutline, btnHero, cx, label } from "../ui";
import { QuoteButton } from "./cta-buttons";

/**
 * Homepage section 4 of 6 (Communication).
 *
 * Reworks the slot that carried the driver-payout statement: light section,
 * headline over one dark artifact panel. The structure was already right for
 * this content — a claim, then a single object that proves it — so the panel
 * swaps what it carries. The payout figure becomes the response time, which
 * the content pack's notes give as one to five minutes; the open-items doc is
 * the source, so the figure is confirmed data, not a placeholder.
 *
 * Copy is CSV-verbatim, split across the section: the direct-line sentence in
 * the column, the miss-an-appointment sentence on the panel with the figure.
 */

export function Communication() {
  return (
    <section className="bg-page px-gut py-[clamp(72px,11vh,140px)]">
      <Reveal>
        <p
          className={cx(label, revealItem, "m-0 text-body-text")}
          style={{ "--i": 0 } as React.CSSProperties}
        >
          Communication
        </p>

        <h2
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          Communication shouldn&rsquo;t be the hard part.
        </h2>

        <p
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-5 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
          )}
        >
          Freight changes, appointments move, weather happens. You get a direct
          line to the person managing your shipment.
        </p>

        {/* The artifact. One object carrying the argument. */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(34px,5vh,60px)] grid grid-cols-12 gap-x-[clamp(28px,4vw,72px)] gap-y-10",
            "bg-deep p-[clamp(24px,3.4vw,52px)] max-[820px]:grid-cols-1",
          )}
        >
          <div className="col-span-7 max-[820px]:col-span-1">
            <p className={cx(label, "m-0 text-mute")}>
              If a truck is going to miss an appointment
            </p>

            <p className="font-display m-0 mt-4 text-[clamp(46px,7.6vw,112px)] font-extrabold leading-[0.92] tracking-[-0.035em] tabular-nums text-azure-hi">
              1&ndash;5 min
            </p>

            <p className="m-0 mt-4 text-[clamp(16px,1.3vw,19px)] leading-[1.5] text-white">
              you hear it from us within that window
            </p>
          </div>

          <dl className="col-span-4 col-start-9 m-0 self-end max-[820px]:col-span-1 max-[820px]:col-start-1">
            <p className={cx(label, "m-0 mb-1 text-mute")}>What you get</p>
            {["The new ETA", "What we are doing about it"].map((row) => (
              <div
                key={row}
                className="flex items-baseline justify-between gap-4 border-b border-white/15 py-3.5 last:border-b-0"
              >
                <dt className="text-[14.5px] leading-[1.4] text-mute">{row}</dt>
                <dd aria-hidden="true" className="m-0 text-[15px] font-bold leading-[1.6] text-azure-hi">
                  ✓
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          style={{ "--i": 3 } as React.CSSProperties}
          className={cx(revealItem, "mt-[clamp(28px,4vh,48px)] flex flex-wrap gap-3")}
        >
          <QuoteButton
            className={cx(btn, btnOutline, btnHero, "cursor-pointer")}
          >
            Talk to Our Team
            <ArrowRight size={17} />
          </QuoteButton>
        </div>
      </Reveal>
    </section>
  );
}
