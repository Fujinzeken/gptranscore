import {
  ArrowUpRight,
  Brain,
  ChartLine,
  Check,
  DeviceMobile,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Software — OpenRoad TMS + Real-Time Visibility.
 *
 * Prod set this as a soft-tinted band with a floating white card for
 * OpenRoad and three rounded gradient cards for the app surfaces. The copy
 * is right; the presentation is not ours.
 *
 * Here the same story is set as a systems document on a white field: the
 * five OpenRoad capabilities are indexed hairline rows — one pixel each,
 * no boxes — the three access surfaces (driver, office, AI) share a
 * three-cell hairline lattice, and the Discover CTA is a single
 * underlined link. Software earns its place by being enumerable.
 */

const OPENROAD_FEATURES = [
  "Single, secure place to store and access customer, load, driver, truck, and trailer information",
  "Real-time load visibility for customers",
  "Automatic notifications if delays occur due to weather, breakdowns, or unexpected issues",
  "Proof of delivery (POD) and invoicing delivered within minutes after delivery",
  "Delivered-to-billed time reduced from days to minutes",
];

const SURFACES = [
  {
    icon: DeviceMobile,
    title: "Driver Mobile App",
    body: "Drivers access load information through an in-house developed mobile app, making the process of accepting a load and getting on the road extremely efficient.",
    tag: "On-the-Go Access",
  },
  {
    icon: ChartLine,
    title: "Dashboards + Operational Control",
    body: "Office staff manage fleet operations through high-visibility dashboards that quickly identify trouble spots across the system and allow teams to drill down into issues at a detailed level.",
    tag: "Full Visibility",
  },
  {
    icon: Brain,
    title: "AI-Assisted Load Planning",
    body: "Fleet managers allocate capacity using factors such as truck distance from shipper, driver availability, driver time and preference, and available hours of service. Fleet managers are assisted by AI to ensure the most optimal decisions are made — minimizing sitting trucks and improving efficiency and safety.",
    tag: "Smart Decisions",
  },
];

export function InnovationSoftware() {
  return (
    <section id="software" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        {/* Header: the claim left, the provenance right. */}
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <div className="max-w-[720px]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute-2")}
            >
              Software
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-4",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              OpenRoad TMS +{" "}
              <span className="text-azure-hi">Real-Time Visibility</span>
            </h2>
          </div>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "m-0 hidden shrink-0 pb-1 text-right",
              label,
              "text-mute-2",
            )}
          >
            In-House Built
          </p>
        </div>

        <p
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(
            revealItem,
            "m-0 mt-[clamp(28px,4vh,48px)] max-w-[68ch]",
            "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
          )}
        >
          Even in our early days, we knew that off-the-shelf transportation
          management systems wouldn&apos;t meet the demanding needs of our
          customers, employees, and leadership. That is why GP Transco built a
          custom, cloud and web-based TMS from scratch.
        </p>

        {/* The OpenRoad ledger: heading, origin paragraph, five indexed rows. */}
        <div
          style={{ "--i": 5 } as React.CSSProperties}
          className={cx(revealItem, "mt-[clamp(40px,6vh,72px)]")}
        >
          <div className="flex items-baseline justify-between gap-6">
            <h3
              className={cx(
                "font-display m-0",
                "text-[clamp(19px,2vw,28px)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-text",
              )}
            >
              OpenRoad TMS{" "}
              <span className="font-semibold text-mute-2">(In-House Built)</span>
            </h3>
            <p className={cx("m-0 hidden shrink-0 text-right", label, "text-mute-2")}>
              Built 2013 · Running Since
            </p>
          </div>
          <p className="m-0 mt-4 max-w-[70ch] text-[clamp(14.5px,1.1vw,16.5px)] leading-[1.6] text-body-text">
            In 2013, GP Transco decided to build a custom TMS to support
            operational speed, flexibility, and situational awareness. This
            system helps manage the entire lifecycle of a load — from entry to
            billing — and provides visibility to employees and customers alike.
          </p>
        </div>
<ul className="m-0 mt-[clamp(20px,3vh,32px)] list-none border-t border-rule p-0">
          {OPENROAD_FEATURES.map((feature, n) => (
            <li
              key={feature}
              style={{ "--i": 6 + n } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex items-baseline gap-[clamp(16px,2vw,28px)] border-b border-rule py-[clamp(14px,2vh,20px)]",
              )}
            >
              <span
                className={cx(
                  label,
                  "shrink-0 text-mute-2 transition-colors duration-300 group-hover:text-azure",
                )}
              >
                {String(n + 1).padStart(2, "0")}
              </span>
              <p className="m-0 flex-1 text-[clamp(14.5px,1.1vw,17px)] leading-[1.55] text-ink-text">
                {feature}
              </p>
              <Check
                size={15}
                weight="bold"
                aria-hidden="true"
                className="hidden shrink-0 self-center text-line-strong transition-colors duration-300 group-hover:text-azure min-[720px]:block"
              />
            </li>
          ))}
        </ul>

        <div
          style={{ "--i": 11 } as React.CSSProperties}
          className={cx(revealItem, "mt-[clamp(24px,3.5vh,40px)]")}
        >
          <a
            href="#apps"
            className="group inline-flex items-center gap-2 text-[clamp(14.5px,1.1vw,16.5px)] font-semibold text-ink-text underline decoration-azure decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-azure"
          >
            Discover OpenRoad TMS
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
{/* The three access surfaces: one hairline lattice, three cells. */}
        <div
          style={{ "--i": 12 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(48px,7vh,88px)] grid grid-cols-3 gap-px bg-line",
            "max-[1000px]:grid-cols-1",
          )}
        >
          {SURFACES.map((surface) => (
            <div
              key={surface.title}
              className="group flex flex-col bg-page p-[clamp(22px,2.8vw,40px)] transition-colors duration-300 hover:bg-surface"
            >
              <surface.icon
                size={24}
                weight="regular"
                className="text-ink-text transition-colors duration-300 group-hover:text-azure"
              />
              <h3
                className={cx(
                  "font-display m-0 mt-[clamp(20px,3vh,36px)]",
                  "text-[clamp(17px,1.6vw,22px)] font-bold leading-[1.2] tracking-[-0.012em] text-ink-text",
                )}
              >
                {surface.title}
              </h3>
              <p className="m-0 mt-3 text-[clamp(13px,1.05vw,15.5px)] leading-[1.58] text-body-text">
                {surface.body}
              </p>
              <p
                className={cx(
                  label,
                  "m-0 mt-auto pt-6 text-azure transition-colors duration-300 group-hover:text-ink-text",
                )}
              >
                {surface.tag}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}