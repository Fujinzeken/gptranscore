"use client";

import { Crown, Globe, Lightning } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Advanced Safety Management Tools — the partner stack.
 *
 * Prod rendered three logo tiles (Samsara / Idelic / E-SMART) with no copy,
 * which asks the reader to already know what each product does. Here each
 * partner gets a typographic wordmark (no third-party logo assets are loaded)
 * and the one line that says what it actually watches: cameras and telematics
 * (Samsara), compliance data (Idelic), and the fleetwide active-safety system
 * on the trucks themselves (E-SMART).
 *
 * The three cards are one hairline lattice — the selective page's "By the
 * Numbers" register — rather than three floating shadow boxes.
 */

const TOOLS = [
  {
    icon: Crown,
    name: "Samsara",
    kind: "AI Dash Cams & Telematics",
    body: "AI-powered dash cameras and vehicle telematics on every tractor — in-cab alerts, real-time coaching events, and hours-of-service visibility.",
    meta: "Fleetwide · All power units",
  },
  {
    icon: Globe,
    name: "Idelic",
    kind: "Safety Compliance Intelligence",
    body: "Roadside inspections, violations, citations, and FMCSA BASIC percentiles pulled into one safety intelligence platform for our compliance team.",
    meta: "Compliance · FMCSA data",
  },
  {
    icon: Lightning,
    name: "E-SMART",
    kind: "Active Safety Architecture",
    body: "Dynamic speed management, collision mitigation, and low-bridge prevention running on the truck itself — safety that acts, not just records.",
    meta: "On-vehicle · Always on",
  },
];

export function SafetyTools() {
  return (
    <section id="tools" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Advanced Safety Tools
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Advanced Safety <span className="text-azure">Management Tools</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            PKT Group partners with industry-leading safety technology
            providers to ensure the highest standards of fleet safety.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line max-[1000px]:grid-cols-1">
          {TOOLS.map((tool, i) => (
            <div
              key={tool.name}
              style={{ "--i": 4 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-surface px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                "transition-colors duration-300 hover:bg-page",
              )}
            >
              <div className="flex items-center justify-between">
                <tool.icon
                  size={20}
                  weight="regular"
                  className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                  aria-hidden="true"
                />
                <span className={cx(label, "text-line-strong")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Typographic wordmark — display type does the branding work
                  instead of loading a third-party logo asset. */}
              <p
                className={cx(
                  "font-display m-0 mt-[clamp(20px,3vh,34px)] text-[clamp(26px,2.6vw,40px)]",
                  "font-extrabold leading-none tracking-[-0.02em] text-ink-text",
                )}
              >
                {tool.name}
              </p>
              <p className={cx(label, "m-0 mt-2.5 text-azure")}>{tool.kind}</p>

              <p className="m-0 mt-4 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                {tool.body}
              </p>

              <p
                className={cx(
                  label,
                  "m-0 mt-auto pt-6 text-[9.5px] text-mute-2",
                )}
              >
                {tool.meta}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
