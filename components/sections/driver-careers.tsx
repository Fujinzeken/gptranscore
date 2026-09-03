import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { CountUp } from "../count-up";
import { btn, btnSolid, btnOutline, btnHero, cx, label } from "../ui";

/**
 * Driver careers.
 *
 * Sections three and four are both text-plus-visual splits, which is the cap,
 * so this one cannot be another. It is a statement plus a single artifact
 * instead: headline, then one object carrying the whole argument.
 *
 * That object is the payout. Every carrier claims to pay well; PKT Group
 * publishes what it actually paid last month, so the money is the strongest
 * thing on the page for a driver and it gets to be the visual. The ELITE
 * metrics sit beside it as the inputs that produce it, which is the real
 * causal story: drive well, earn more.
 *
 * The panel wears their existing brand navy. It is the one place that colour
 * appears, used as a surface rather than an accent, so azure stays the single
 * accent across the page.
 *
 * Figures are PKT Group's own published numbers, not illustrative.
 */

const SCORE = [
  { metric: "Fuel efficiency", value: "8.2 MPG" },
  { metric: "Idle time", value: "Under 15%" },
  { metric: "On-time delivery", value: "99.2%" },
];

const PILLARS = [
  "Competitive Pay",
  "Full Benefits",
  "Modern Equipment",
  "ELITE Culture",
];

export function DriverCareers() {
  return (
    <section className="bg-page px-gut py-[clamp(72px,11vh,140px)]">
      <Reveal>
        <h2
          className={cx(
            revealItem,
            "type-display m-0 max-w-[14em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          More than a job. A career with support.
        </h2>

        <p
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-5 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
          )}
        >
          Join a carrier that invests in your success with industry-leading pay,
          full benefits, top-tier equipment, and a performance-driven ELITE
          culture.
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
              Last month&rsquo;s ELITE payout
            </p>

            <p className="font-display m-0 mt-4 text-[clamp(46px,7.6vw,112px)] font-extrabold leading-[0.92] tracking-[-0.035em] tabular-nums text-azure-hi">
              <CountUp to={56162} prefix="$" />
            </p>

            <p className="m-0 mt-4 text-[clamp(16px,1.3vw,19px)] leading-[1.5] text-white">
              paid to drivers, on top of base pay
            </p>

            <p className="m-0 mt-7 max-w-[46ch] text-[15px] leading-[1.6] text-mute">
              The top 25% of drivers earned an extra{" "}
              <span className="font-semibold text-white">5.46 CPM</span> on
              average through ELITE.
            </p>
          </div>

          {/* The inputs that produce the payout. */}
          <dl className="col-span-4 col-start-9 m-0 self-end max-[820px]:col-span-1 max-[820px]:col-start-1">
            <p className={cx(label, "m-0 mb-1 text-mute")}>
              ELITE driver score
            </p>
            {SCORE.map(({ metric, value }) => (
              <div
                key={metric}
                className="flex items-baseline justify-between gap-4 border-b border-white/15 py-3.5 last:border-b-0"
              >
                <dt className="text-[14.5px] leading-[1.4] text-mute">
                  {metric}
                </dt>
                <dd className="font-display m-0 text-[clamp(17px,1.5vw,21px)] font-bold tabular-nums text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          style={{ "--i": 3 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(26px,3.6vh,44px)] flex flex-wrap gap-2",
          )}
        >
          {PILLARS.map((p) => (
            <span
              key={p}
              className={cx(
                label,
                "rounded-full border border-line-strong px-3.5 py-2 text-body-text",
              )}
            >
              {p}
            </span>
          ))}
        </div>

        <div
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(28px,4vh,48px)] flex flex-wrap gap-3",
          )}
        >
          <a href="#" className={cx(btn, btnSolid, btnHero)}>
            Apply to Drive
            <ArrowRight size={17} />
          </a>
          <a href="#" className={cx(btn, btnOutline, btnHero)}>
            View Driver Benefits
          </a>
        </div>
      </Reveal>
    </section>
  );
}
