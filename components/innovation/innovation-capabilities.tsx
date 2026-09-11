import {
  Bell,
  Brain,
  CalendarCheck,
  ChartBar,
  Crosshair,
  FileText,
  MapPin,
  PaperPlaneTilt,
  Phone,
  ShieldCheck,
  Users,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Technology at-a-Glance — the capabilities index.
 *
 * Prod rendered the twelve capabilities as twelve rounded white cards with
 * coloured icon chips — a grid of boxes that read as icons first, content
 * second, and blurred together completely by the third column. The copy is
 * right; the presentation is not ours.
 *
 * Here the same twelve capabilities are set as a spec sheet: a single
 * hairline-ruled field (gap-px over the rule colour, so every internal
 * border is one pixel of the same hairline that rules the rest of the
 * page), each cell carrying a mono index, a thin-stroke icon, and the prod
 * copy. Nothing floats, nothing casts a shadow — the grid is the surface.
 * The index numbers turn a marketing grid into an inventory: twelve
 * systems, counted, all running today.
 */

const CAPABILITIES = [
  {
    icon: Bell,
    title: "Automatic Load Status Updates",
    body: "Real-time load progress updates without manual follow-ups.",
  },
  {
    icon: FileText,
    title: "Historical Load Data",
    body: "Access past shipment history for better planning and performance visibility.",
  },
  {
    icon: ChartBar,
    title: "Driver Activity Reports",
    body: "Track driver activity to improve operational clarity and consistency.",
  },
  {
    icon: Brain,
    title: "Fleet Safety AI",
    body: "Technology built to support safer fleet performance and proactive decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Truck Safety Features",
    body: "Modern safety features built into our equipment to protect drivers and the public.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking on Trucks and Trailers",
    body: "Live visibility into equipment location and movement.",
  },
  {
    icon: PaperPlaneTilt,
    title: "Customer Active Loads Map",
    body: "Customers can view active freight in real time.",
  },
  {
    icon: Users,
    title: "Outstanding Drivers",
    body: "Visibility into driver performance and operational excellence.",
  },
  {
    icon: Crosshair,
    title: "Route Optimization",
    body: "Smarter routing to improve efficiency and reliability.",
  },
  {
    icon: Phone,
    title: "One-Point Contact for Customers",
    body: "Clear, streamlined communication and accountability.",
  },
  {
    icon: CalendarCheck,
    title: "Load Planning in Advance",
    body: "Forward planning to reduce disruption and improve service reliability.",
  },
  {
    icon: Warning,
    title: "Sitting Truck Alerts",
    body: "Identify idle capacity and reduce wasted time.",
  },
];

export function InnovationCapabilities() {
  return (
    <section id="capabilities" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        {/* Section header: count on the right, claim on the left. */}
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <div>
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute")}
            >
              Technology at-a-Glance
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-4",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              Real-time visibility and control across{" "}
              <span className="text-azure-hi">the entire operation</span>
            </h2>
          </div>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 hidden shrink-0 text-right",
              "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-none tracking-[-0.025em] text-line-strong",
              "max-[720px]:hidden",
            )}
          >
            12
          </p>
        </div>

        {/* The spec sheet: one hairline field, twelve indexed cells. */}
        <div className="grid grid-cols-4 gap-px bg-rule max-[1000px]:grid-cols-3 max-[720px]:grid-cols-2 max-[480px]:grid-cols-1">
          {CAPABILITIES.map((cap, n) => (
            <div
              key={cap.title}
              style={{ "--i": 4 + n } as React.CSSProperties}
              className={cx(
                revealItem,
                "group bg-page p-[clamp(18px,2.4vw,32px)]",
                "transition-colors duration-300 hover:bg-surface",
              )}
            >
              <div className="flex items-start justify-between">
                <span
                  className={cx(
                    label,
                    "text-mute-2 transition-colors duration-300 group-hover:text-azure-hi",
                  )}
                >
                  {String(n + 1).padStart(2, "0")}
                </span>
                <cap.icon
                  size={22}
                  weight="regular"
                  className="mt-0.5 text-ink-text transition-colors duration-300 group-hover:text-azure-hi"
                />
              </div>
              <h3 className="font-display m-0 mt-[clamp(20px,3vh,36px)] text-[clamp(15px,1.35vw,19px)] font-bold leading-[1.22] tracking-[-0.01em] text-ink-text">
                {cap.title}
              </h3>
              <p className="m-0 mt-2 text-[clamp(13px,1.05vw,15.5px)] leading-[1.55] text-body-text">
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}