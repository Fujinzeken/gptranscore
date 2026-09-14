"use client";

import {
  Bell,
  PhoneCall,
  Warning,
  CloudLightning,
  Buildings,
  Users,
  Clock,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Weather Intelligence & Severe Weather Operations.
 *
 * Prod buried this under paragraphs. The system is simple — detect weather
 * near a truck, alert the driver, escalate to a company-wide mode — so the
 * section says exactly that: one intro line, three numbered blocks, terse
 * cells instead of prose. The facts (20 miles, 2 hours, Samsara, HOS) stay;
 * the sentences around them go.
 */

const BLOCKS = [
  {
    icon: Bell,
    num: "01",
    title: "Driver Alerts",
    lead: "A truck within 20 miles of severe weather triggers two alerts, automatically:",
    cells: [
      {
        icon: Warning,
        title: "Real-Time Alert",
        body: "Pushed to the driver through Samsara",
      },
      {
        icon: PhoneCall,
        title: "AI Voice Call",
        body: "Explains the situation and gives specific guidance — adjusted for HOS and duty status",
      },
    ],
  },
  {
    icon: CloudLightning,
    num: "02",
    title: "Severe Weather Mode",
    lead: "For widespread events, PKT Connect activates the whole company:",
    cells: [
      { icon: Buildings, title: "Every department", body: "Notified immediately" },
      { icon: Users, title: "One operation", body: "Coordinated weather mode fleet-wide" },
      { icon: Clock, title: "Every 2 hours", body: "Safety and Operations coordination calls" },
    ],
  },
  {
    icon: CheckCircle,
    num: "03",
    title: "Continuous Monitoring",
    lead: "Active for the duration of the event:",
    cells: [
      { icon: CheckCircle, title: "Conditions", body: "Monitored as they change" },
      { icon: CheckCircle, title: "Decisions", body: "Centralized across Safety and Operations" },
      { icon: CheckCircle, title: "Communication", body: "Clear and consistent, drivers to leadership" },
    ],
  },
];

export function SafetyWeather() {
  return (
    <section id="weather" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-azure-hi")}
          >
            Weather Intelligence
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-paper",
            )}
          >
            Weather Intelligence &amp;{" "}
            <span className="text-azure-hi">Severe Weather Operations</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[56ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
            )}
          >
            Live weather data runs inside our in-house OpenRoad TMS, watching
            every active route — so the fleet moves before the weather does,
            not into it.
          </p>
        </div>

        {BLOCKS.map((block, bi) => (
          <div
            key={block.num}
            className={cx(
              "grid grid-cols-[1fr_2fr] gap-x-[clamp(24px,3vw,56px)] py-[clamp(32px,5vh,60px)]",
              bi < BLOCKS.length - 1 && "border-b border-rule",
              "max-[900px]:grid-cols-1 max-[900px]:gap-y-8",
            )}
          >
            {/* Block head — number, icon, title. */}
            <div
              style={{ "--i": 4 + bi * 2 } as React.CSSProperties}
              className={cx(revealItem, "flex gap-4")}
            >
              <span className={cx(label, "mt-1 text-mute-2")}>{block.num}</span>
              <div>
                <span className="flex h-10 w-10 items-center justify-center bg-azure/15 text-azure-hi">
                  <block.icon size={19} weight="regular" aria-hidden="true" />
                </span>
                <h3 className="font-display m-0 mt-4 text-[clamp(19px,1.9vw,28px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-paper">
                  {block.title}
                </h3>
                <p className="m-0 mt-3 max-w-[30ch] text-[clamp(13px,1vw,15px)] leading-[1.55] text-mute">
                  {block.lead}
                </p>
              </div>
            </div>

            {/* Cells — the detail, as terse tiles on a hairline lattice. */}
            <div
              className={cx(
                "grid content-start gap-px self-center bg-rule",
                block.cells.length === 2
                  ? "grid-cols-2 max-[560px]:grid-cols-1"
                  : "grid-cols-3 max-[760px]:grid-cols-1",
              )}
            >
              {block.cells.map((cell, ci) => (
                <div
                  key={cell.title}
                  style={{ "--i": 5 + bi * 2 + ci } as React.CSSProperties}
                  className={cx(
                    revealItem,
                    "flex flex-col bg-ink px-[clamp(16px,1.8vw,26px)] py-[clamp(18px,2.6vh,30px)]",
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <cell.icon size={16} weight="bold" className="shrink-0 text-azure-hi" aria-hidden="true" />
                    <h4 className="font-display m-0 text-[clamp(14px,1.2vw,17px)] font-bold text-paper">
                      {cell.title}
                    </h4>
                  </div>
                  <p className="m-0 mt-2.5 text-[clamp(13px,1vw,14.5px)] leading-[1.55] text-mute">
                    {cell.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

