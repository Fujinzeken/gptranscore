import {
  MapPin,
  Clock,
  Users,
  Timer,
  Truck,
  Warning,
  CloudRain,
  CurrencyDollar,
  CheckCircle,
  ArrowRight,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * AI at-a-Glance — the in-house AI story.
 *
 * Prod ran this as a long dark gradient run: pill badges, a laptop mock of
 * the planner, and rounded charcoal cards for the challenge and solution.
 * The copy is right; the presentation is not ours.
 *
 * Here the section is a single dark field in the page's hairline system:
 * the planning problem is enumerated as indexed hairline rows (six inputs
 * every planner must reconcile), and the answer sits across from it as a
 * two-column claim — challenge counted on the left, solution argued on the
 * right. The Azure accents and the mono registers carry the "live system"
 * feel prod got from screenshots, without a single floating panel.
 */

const CHALLENGE = [
  "Driver location and availability",
  "Load requirements",
  "Hours of Service (HOS) compliance",
  "Driver performance metrics",
  "Live traffic conditions",
  "Weather conditions and delays",
];

const CONSIDERS = [
  { icon: MapPin, title: "Closest available driver" },
  { icon: Clock, title: "Available Hours of Service" },
  { icon: Users, title: "Driver hometime considerations" },
  { icon: Timer, title: "Time required to load and unload" },
  { icon: Truck, title: "LIVE vs. DROP determination" },
  {
    icon: Clock,
    title: "Historical average loading/unloading time by facility",
  },
  { icon: Warning, title: 'Whether the shipment is time-sensitive ("HOT")' },
  { icon: CloudRain, title: "Weather risks and delay potential" },
  { icon: CurrencyDollar, title: "Gross profit per hour" },
];

const IMPACT = [
  {
    title: "For Customers",
    items: [
      "More reliable planning decisions",
      "Improved on-time performance",
      "Fewer disruptions caused by weather or poor driver fit",
    ],
  },
  {
    title: "For Drivers",
    items: [
      "Smarter load recommendations",
      "Better alignment with hours and hometime",
      "Reduced guesswork and operational stress",
    ],
  },
];

const CAPABILITIES = [
  "Planning is currently performed one shipment at a time",
  "The system provides recommendations but does not automatically assign loads",
  "Multi-day planning is not yet enabled",
];

const ROAD = [
  "Multi-day and full-week driver planning",
  "Fully automated, AI-powered shipment assignment",
  "Incorporation of driver preferences",
  "Integration of ELITE Score data into planning recommendations",
  "Self-learning machine-learning models that continuously improve decisions",
];

export function InnovationAI() {
  return (
    <section id="ai" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        {/* Header: claim left, the fact of it right. */}
        <div className="flex items-end justify-between gap-6 border-b border-rule-lit pb-[clamp(24px,4vh,44px)]">
          <div className="max-w-[820px]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute")}
            >
              In-House AI Technology
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-4",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-paper",
              )}
            >
              AI at a <span className="text-azure-hi">Glance</span>
            </h2>
            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-4",
                "text-[clamp(16px,1.6vw,24px)] font-bold leading-[1.25] tracking-[-0.01em] text-mute",
              )}
            >
              Built in-house to solve real-world logistics problems
            </p>
          </div>
          <p
            style={{ "--i": 4 } as React.CSSProperties}
            className={cx(
              revealItem,
              "m-0 hidden shrink-0 pb-1 text-right",
              label,
              "text-mute",
            )}
          >
            Planning · AI-Powered
          </p>
        </div>

        <div className="mt-[clamp(32px,5vh,56px)] grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(32px,5vh,56px)]">
          {/* The claim. */}
          <div className="col-span-5 max-[900px]:col-span-12">
            <p
              style={{ "--i": 5 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 max-w-[46ch]",
                "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              At GP Transco, artificial intelligence is not a buzzword — it is
              a practical tool built to solve one of the most complex
              challenges in trucking:{" "}
              <span className="font-semibold text-azure-hi">planning</span>.
            </p>
            <p
              style={{ "--i": 6 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mt-5 max-w-[46ch]",
                "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Planning shipments across a national fleet requires evaluating
              dozens of constantly changing variables. To solve this, GP
              Transco developed its own in-house, AI-powered planning
              technology designed specifically for real-world transportation
              operations.
            </p>
          </div>
{/* The challenge, counted: six inputs every planner reconciles. */}
          <div className="col-span-7 max-[900px]:col-span-12">
            <p
              style={{ "--i": 7 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute")}
            >
              The Challenge — Modern Shipment Planning
            </p>
            <p
              style={{ "--i": 8 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mt-4 max-w-[52ch]",
                "text-[clamp(14.5px,1.1vw,16.5px)] leading-[1.6] text-mute",
              )}
            >
              Planning is a highly complex, ever-changing process. For every
              shipment, planners must reference multiple tools and data
              sources, including:
            </p>
            <ul className="m-0 mt-6 list-none border-t border-rule-lit p-0">
              {CHALLENGE.map((item, n) => (
                <li
                  key={item}
                  style={{ "--i": 9 + n } as React.CSSProperties}
                  className={cx(
                    revealItem,
                    "group flex items-baseline gap-[clamp(16px,2vw,28px)] border-b border-rule-lit py-[clamp(12px,1.8vh,18px)]",
                  )}
                >
                  <span
                    className={cx(
                      label,
                      "shrink-0 text-mute transition-colors duration-300 group-hover:text-azure-hi",
                    )}
                  >
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <p className="m-0 flex-1 text-[clamp(14.5px,1.1vw,17px)] leading-[1.55] text-paper">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
{/* The solution. Prod set this in a rounded charcoal card; here it is
            argued typographically — the heading carries the weight, the rule
            above it marks the turn from problem to answer. */}
        <div
          style={{ "--i": 15 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(48px,7vh,88px)] border-t border-azure/40 pt-[clamp(28px,4vh,48px)]",
            "grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-6",
          )}
        >
          <h3
            className={cx(
              "font-display m-0 col-span-5 max-[900px]:col-span-12",
              "text-[clamp(22px,2.6vw,36px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-paper",
            )}
          >
            Our AI-Powered Driver Shipment Planner
          </h3>
          <div className="col-span-6 col-start-7 max-[900px]:col-span-12 max-[900px]:col-start-1">
            <p className="m-0 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
              GP Transco built an in-house, AI-powered Driver Shipment Planner
              to unify critical planning inputs into a single intelligent
              system.
            </p>
            <p className="m-0 mt-5 max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
              Instead of manually cross-checking multiple tools, the system
              analyzes operational data in real time and recommends the best
              driver-to-shipment{" "}
              <span className="font-semibold text-paper">match</span>.
            </p>
          </div>
        </div>

        {/* WHAT THE AI CONSIDERS — the nine inputs, as a 3-column hairline lattice.
             Prod used glowing icon tiles; here each consideration is an indexed
             cell with a single line icon, the hover moving the index to azure. */}
        <div className="mt-[clamp(48px,7vh,88px)]">
          <p
            style={{ "--i": 16 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute")}
          >
            How It Works
          </p>
          <h3
            style={{ "--i": 17 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-4",
              "text-[clamp(22px,2.6vw,36px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-paper",
            )}
          >
            What the AI <span className="text-azure-hi">Considers</span>
          </h3>
          <div className="mt-[clamp(28px,4vh,48px)] grid grid-cols-3 gap-px bg-rule-lit max-[1000px]:grid-cols-2 max-[680px]:grid-cols-1">
            {CONSIDERS.map((item, n) => (
              <div
                key={item.title}
                style={{ "--i": 18 + n } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "group flex flex-col bg-ink p-[clamp(20px,2.4vw,32px)] transition-colors duration-300 hover:bg-ink-2",
                )}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <item.icon
                    size={20}
                    weight="regular"
                    aria-hidden="true"
                    className="text-azure-hi"
                  />
                  <span
                    className={cx(
                      label,
                      "text-mute transition-colors duration-300 group-hover:text-azure-hi",
                    )}
                  >
                    {String(n + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="m-0 mt-6 text-[clamp(14.5px,1.1vw,17px)] font-semibold leading-[1.4] text-paper">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{ "--i": 27 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display mx-auto mt-[clamp(32px,5vh,56px)] m-0 max-w-[62ch] text-center",
              "text-[clamp(17px,1.7vw,24px)] font-bold leading-[1.35] text-paper",
            )}
          >
            This allows planners to make faster, more informed decisions while
            balancing service reliability, driver needs, and profitability.
          </p>
        </div>

        {/* WHY THIS MATTERS — two audiences, side by side. */}
        <div className="mt-[clamp(48px,7vh,88px)]">
          <p
            style={{ "--i": 28 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute")}
          >
            Impact
          </p>
          <h3
            style={{ "--i": 29 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-4",
              "text-[clamp(22px,2.6vw,36px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-paper",
            )}
          >
            Why This Matters
          </h3>
          <div className="mt-[clamp(28px,4vh,48px)] grid grid-cols-2 gap-px bg-rule-lit max-[820px]:grid-cols-1">
            {IMPACT.map((panel, n) => (
              <div
                key={panel.title}
                style={{ "--i": 30 + n } as React.CSSProperties}
                className={cx(revealItem, "bg-ink p-[clamp(22px,2.8vw,40px)]")}
              >
                <h4 className="font-display m-0 text-[clamp(18px,1.8vw,25px)] font-extrabold tracking-[-0.015em] text-paper">
                  {panel.title}
                </h4>
                <ul className="m-0 mt-6 list-none space-y-4 p-0">
                  {panel.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-mute"
                    >
                      <CheckCircle
                        size={18}
                        weight="regular"
                        aria-hidden="true"
                        className="mt-[2px] shrink-0 text-azure-hi"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* TRANSPARENCY — capabilities & limitations, stated plainly. */}
        <div className="mt-[clamp(48px,7vh,88px)]">
          <p
            style={{ "--i": 32 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute")}
          >
            Transparency
          </p>
          <h3
            style={{ "--i": 33 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-4",
              "text-[clamp(22px,2.6vw,36px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-paper",
            )}
          >
            Current Capabilities &amp; Limitations
          </h3>
          <div
            style={{ "--i": 34 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-[clamp(28px,4vh,48px)] border border-rule-lit p-[clamp(22px,2.8vw,40px)]",
            )}
          >
            <p className="m-0 max-w-[56ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-paper">
              GP Transco is transparent about the maturity of its AI systems.
            </p>
            <ul className="m-0 mt-6 list-none space-y-4 p-0">
              {CAPABILITIES.map((item, n) => (
                <li
                  key={item}
                  style={{ "--i": 35 + n } as React.CSSProperties}
                  className={cx(
                    revealItem,
                    "flex items-start gap-3 text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-mute",
                  )}
                >
                  <CheckCircle
                    size={18}
                    weight="regular"
                    aria-hidden="true"
                    className="mt-[2px] shrink-0 text-azure-hi"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FUTURE — the road ahead, arrows marking forward motion. */}
        <div className="mt-[clamp(48px,7vh,88px)]">
          <p
            style={{ "--i": 38 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute")}
          >
            Future
          </p>
          <h3
            style={{ "--i": 39 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-4",
              "text-[clamp(22px,2.6vw,36px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-paper",
            )}
          >
            The Road Ahead
          </h3>
          <ul
            style={{ "--i": 40 } as React.CSSProperties}
            className={cx(
              revealItem,
              "m-0 mt-[clamp(28px,4vh,48px)] list-none border border-rule-lit p-[clamp(22px,2.8vw,40px)]",
            )}
          >
            {ROAD.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-b border-rule-lit py-4 text-[clamp(14.5px,1.1vw,16.5px)] leading-[1.55] text-paper last:border-b-0 last:pb-0 first:pt-0"
              >
                <ArrowRight
                  size={18}
                  weight="bold"
                  aria-hidden="true"
                  className="mt-[2px] shrink-0 text-azure-hi"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CLOSING STATEMENT — the section's last word, centered. */}
        <div
          style={{ "--i": 41 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mx-auto mt-[clamp(48px,7vh,88px)] max-w-[860px] border border-rule-lit px-[clamp(24px,3.5vw,64px)] py-[clamp(36px,6vh,72px)] text-center",
          )}
        >
          <Brain
            size={36}
            weight="regular"
            aria-hidden="true"
            className="mx-auto text-azure-hi"
          />
          <p className="m-0 mt-6 text-[clamp(15px,1.25vw,19px)] leading-[1.6] text-mute">
            This technology is built internally by GP Transco, for GP Transco —
            designed around the realities of running a high-performance
            trucking operation.
          </p>
          <p
            className={cx(
              "font-display m-0 mt-6",
              "text-[clamp(19px,2.2vw,30px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-azure-hi",
            )}
          >
            It is not theoretical AI. It is AI that plans trucks, drivers, and
            freight every day.
          </p>
        </div>
      </Reveal>
    </section>
  );
}