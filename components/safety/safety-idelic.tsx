"use client";

import {
  Brain,
  Users,
  GraduationCap,
  ChartBar,
  Target,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Idelic Safety Platform — the compliance intelligence layer.
 *
 * Prod followed its Idelic reel with a six-card icon grid on a lavender
 * gradient. The cards carry the substance, so they stay — rehoused on the
 * page's hairline lattice with the mono numbering register the tools
 * section established, and the reel above them (in Safety Videos) does the
 * showing while this section does the explaining.
 */

const FEATURES = [
  {
    icon: Brain,
    title: "AI-Powered Predictive Analytics",
    body: "Advanced machine learning identifies risk patterns before incidents occur.",
  },
  {
    icon: Users,
    title: "Driver Risk Identification",
    body: "Comprehensive driver profiling and risk scoring for targeted interventions.",
  },
  {
    icon: GraduationCap,
    title: "Proactive Coaching Support",
    body: "Personalized coaching programs based on individual driver performance.",
  },
  {
    icon: ChartBar,
    title: "Performance Scorecards",
    body: "Continuous monitoring with detailed performance scorecards and metrics.",
  },
  {
    icon: Target,
    title: "Optimized Workflows",
    body: "Streamlined safety compliance workflows and automated processes.",
  },
  {
    icon: ShieldCheck,
    title: "FMCSA Safety Data",
    body: "Real-time access to FMCSA safety data for proactive compliance management.",
  },
];

export function SafetyIdelic() {
  return (
    <section id="idelic" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Idelic Risk Management
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Idelic Safety <span className="text-azure">Platform</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            AI-powered predictive analytics for proactive fleet safety — every
            inspection, violation, and score in one system our compliance team
            works from daily.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              style={{ "--i": 4 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-page px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                "transition-colors duration-300 hover:bg-surface",
              )}
            >
              <div className="flex items-center justify-between">
                <feature.icon
                  size={20}
                  weight="regular"
                  className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                  aria-hidden="true"
                />
                <span className={cx(label, "text-line-strong")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className={cx(
                  "font-display m-0 mt-[clamp(18px,2.8vh,30px)] text-[clamp(17px,1.5vw,22px)]",
                  "font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-text",
                )}
              >
                {feature.title}
              </h3>
              <p className="m-0 mt-2.5 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
