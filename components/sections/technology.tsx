import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Technology platform.
 *
 * The only section on the page with a real product to show, so the product
 * carries it rather than another photograph or another run of type.
 *
 * The tracking panel is dark on a light page deliberately: telemetry and
 * mapping UI is dark everywhere in this industry, so the panel is wearing its
 * own surface rather than breaking the page theme. It also rhymes with the
 * hero and gives the light run of sections a value break.
 *
 * The route draws once on scroll-in and rests at the current position. It is
 * not a perpetual loop. The only thing that keeps moving is the live dot,
 * which is the one element where continuous motion is actually the meaning.
 */

const ROUTE = "M 26 160 C 150 160 196 66 322 88 S 470 56 574 46";

/** How far along the route the load currently sits. */
const PROGRESS = "62%";

const CAPABILITIES = [
  "Utilizing state-of-the-art AI",
  "Real-time ETA insights",
  "Smart routing and planning",
  "Proactive exception alerts",
];

export function Technology() {
  return (
    <section className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)] max-[1000px]:grid-cols-1">
          {/* Copy sits narrower than the panel: the product is the point. */}
          <div className="col-span-5 max-[1000px]:col-span-1">
            <h2
              className={cx(
                revealItem,
                "type-display m-0 max-w-[11em]",
                "text-[clamp(26px,3.6vw,52px)] text-paper",
              )}
            >
              Advanced technology, real visibility
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Our proprietary technology stack gives you complete control and
              visibility over your supply chain.
            </p>

            <ul
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(revealItem, "m-0 mt-8 list-none space-y-3.5 p-0")}
            >
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="flex items-baseline gap-3.5 text-[15.5px] leading-[1.5] text-paper"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.62em] h-px w-4 shrink-0 bg-azure"
                  />
                  {c}
                </li>
              ))}
            </ul>

            <a
              href="#"
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(revealItem, btn, btnGhost, btnHero, "mt-9")}
            >
              Explore Technology
              <ArrowRight size={17} />
            </a>
          </div>

          <div
            style={{ "--i": 5 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-6 col-start-7 overflow-hidden bg-ink-2",
              "ring-1 ring-rule-lit max-[1000px]:col-span-1 max-[1000px]:col-start-1",
            )}
          >
            <div className="flex items-center gap-2.5 border-b border-rule px-[clamp(18px,2.2vw,28px)] py-4">
              <span className="relative flex h-2 w-2 shrink-0">
                {/* Continuous only here: "live" is the one claim on this page
                    that motion is genuinely expressing. */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-hi opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-hi" />
              </span>
              <span className={cx(label, "text-paper")}>
                Real-Time GPS Tracking
              </span>
            </div>

            <div className="px-[clamp(18px,2.2vw,28px)] pb-2 pt-[clamp(14px,2vh,22px)]">
              {/* Wrapper matches the svg box exactly, so the label percentages
                  below map straight onto viewBox coordinates. */}
              <div className="relative">
                <svg
                  viewBox="0 0 600 200"
                  className="block w-full overflow-visible"
                  role="img"
                  aria-label="Route progress: the load has passed the Mississippi River Bridge and is 45 miles from the next checkpoint."
                >
                  {/* Full route, dimmed: the distance still to run. */}
                  <path
                    d={ROUTE}
                    fill="none"
                    stroke="var(--color-rule-lit)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="3 7"
                  />
                  {/* Distance covered, drawn on reveal. */}
                  <path
                    d={ROUTE}
                    pathLength={100}
                    fill="none"
                    stroke="var(--color-azure)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="62 100"
                    className={cx(
                      "[stroke-dashoffset:62] transition-[stroke-dashoffset]",
                      "duration-[1700ms] ease-[var(--ease-out-strong)] [transition-delay:220ms]",
                      "group-data-[shown=true]/reveal:[stroke-dashoffset:0]",
                    )}
                  />
                  {/* Endpoints stay unnamed: inventing a city pair would imply a
                    specific shipment that is not ours to claim. */}
                  <circle cx="26" cy="160" r="4" fill="var(--color-mute-2)" />
                  <circle cx="574" cy="46" r="4" fill="var(--color-mute-2)" />

                  {/* The load rides the same path, so it scales with the svg. */}
                  <g
                    style={
                      {
                        offsetPath: `path("${ROUTE}")`,
                        offsetRotate: "0deg",
                        "--progress": PROGRESS,
                      } as React.CSSProperties
                    }
                    className={cx(
                      "[offset-distance:0%] transition-[offset-distance]",
                      "duration-[1700ms] ease-[var(--ease-out-strong)] [transition-delay:220ms]",
                      "group-data-[shown=true]/reveal:[offset-distance:var(--progress)]",
                    )}
                  >
                    <circle r="11" fill="var(--color-azure)" opacity="0.22" />
                    <circle
                      r="5.5"
                      fill="var(--color-azure-hi)"
                      stroke="var(--color-ink-2)"
                      strokeWidth="2"
                    />
                  </g>
                </svg>

                {/* Dot centres: 26/600 and 574/600 across, 160/200 and
                    46/200 down. Pickup sits below its dot, delivery above,
                    so neither crosses the route. */}
                <span
                  className={cx(
                    label,
                    "pointer-events-none absolute left-[4.3%] top-[84%] text-mute",
                  )}
                >
                  Pickup
                </span>
                <span
                  className={cx(
                    label,
                    "pointer-events-none absolute right-[4.3%] top-[7%] text-mute",
                  )}
                >
                  Delivery
                </span>
              </div>
            </div>

            <dl className="m-0 grid grid-cols-2 border-t border-rule">
              <div className="border-r border-rule px-[clamp(18px,2.2vw,28px)] py-[clamp(16px,2.4vh,24px)]">
                <dt className={cx(label, "text-mute")}>Current Location</dt>
                <dd className="m-0 mt-2 text-[clamp(15px,1.2vw,18px)] font-medium leading-[1.35] text-paper">
                  Mississippi River Bridge
                </dd>
              </div>
              <div className="px-[clamp(18px,2.2vw,28px)] py-[clamp(16px,2.4vh,24px)]">
                <dt className={cx(label, "text-mute")}>Next Checkpoint</dt>
                <dd className="m-0 mt-2 text-[clamp(15px,1.2vw,18px)] font-medium leading-[1.35] text-paper">
                  45 miles
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
