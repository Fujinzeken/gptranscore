import { DispatchConsole } from "../dispatch-console";
import { Reveal, revealItem } from "../reveal";
import { cx } from "../ui";

/**
 * Technology-Driven Solutions (Shipment Solutions page).
 *
 * The centrepiece is the dispatch console, which changes interface at every
 * one of the nine steps. A first pass here plotted the nine timestamps on a
 * proportional rail, which was a chart about a process rather than the process
 * itself, and it made the page look thin next to theirs. Dispatching a load is
 * nine different jobs and it needs nine different screens.
 *
 * Light ground with a dark plate inside. The hero above is already a dark
 * plate; a dark section here would give the page no beat.
 *
 * The capability list under it was six equal cards, which was the flattest
 * thing on the page: six rectangles describing features the console two inches
 * above them already demonstrates. Making them louder would have made the
 * section flatter. They are a spec strip now, welded to the foot of the console
 * and set at footnote weight, so the demo stays the peak and the list reads as
 * the datasheet under it.
 */

const CAPABILITIES = [
  {
    title: "Live Location Sharing",
    body: "Live links with accurate ETAs, so customers stop calling you.",
  },
  {
    title: "Exceptional On-Time Delivery",
    body: "Drivers, technology and equipment aimed at one number.",
  },
  {
    title: "Advanced Geofencing",
    body: "Text or email the moment a truck arrives or leaves.",
  },
  {
    title: "Real-Time GPS Tracking",
    body: "A helicopter view of the load, with route optimization.",
  },
  {
    title: "Automatic Load Updates",
    body: "Geofenced status messages. No check calls.",
  },
  {
    title: "AI-Powered Load Planning",
    body: "Load assignments optimized for efficiency and on-time delivery.",
  },
];

export function ShipTechnology() {
  return (
    <section id="technology" className="bg-page py-[clamp(72px,11vh,140px)]">
      <Reveal>
        <header className={cx(revealItem, "mb-[clamp(30px,4.5vh,52px)] px-gut")}>
          <h2 className="type-display m-0 max-w-[13em] text-[clamp(26px,3.6vw,52px)] text-ink-text">
            One load, nine decisions, start to finish
          </h2>
          <p className="mt-5 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Advanced tracking, real-time visibility, and industry-leading
            on-time delivery, all on one platform. This is a real load moving
            through it, screen by screen.
          </p>
        </header>

        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(revealItem, "px-gut")}
        >
          <DispatchConsole />
        </div>

        {/* Welded to the console: no gap, same width, footnote weight. */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(revealItem, "px-gut")}
        >
          <dl className="m-0 grid grid-cols-3 gap-x-[clamp(20px,2.4vw,40px)] gap-y-5 border-t border-rule bg-ink px-[clamp(18px,2.4vw,32px)] py-[clamp(18px,2.2vw,26px)] max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="flex items-baseline gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-px w-3 shrink-0 bg-azure"
                />
                <div>
                  <dt className="text-[13px] font-semibold leading-[1.35] text-paper">
                    {c.title}
                  </dt>
                  <dd className="m-0 mt-1 max-w-[38ch] text-[12.5px] leading-[1.45] text-mute">
                    {c.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

      </Reveal>
    </section>
  );
}
