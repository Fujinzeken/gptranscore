"use client";

import {
  Lightning,
  FileText,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Headquarters Sustainability — what the Joliet office does itself.
 *
 * Prod ran three pastel cards with a paragraph apiece. The initiatives are
 * simple statements, not stories, so they become full-width numbered rows on
 * hairline rules — claim and one line of detail each — a different structure
 * from the pillar lattice above and no fourth surface anywhere.
 */

const INITIATIVES = [
  {
    icon: Lightning,
    title: "EV Charging Stations",
    body: "Free electric-vehicle charging at headquarters, so cleaner commuting is the easy choice for our staff.",
  },
  {
    icon: FileText,
    title: "Paper-Free Operations",
    body: "A paperless office across every department — digital by default, waste by exception.",
  },
  {
    icon: GraduationCap,
    title: "Driver Training Programs",
    body: "In-office training on environmentally efficient operation, with emphasis on fuel-saving techniques.",
  },
];

export function SustainabilityHq() {
  return (
    <section id="headquarters" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            At the Office
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Headquarters <span className="text-azure">Sustainability</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Leading by example in our Joliet office operations.
          </p>
        </div>

        {INITIATIVES.map((initiative, i) => (
          <div
            key={initiative.title}
            style={{ "--i": 4 + i } as React.CSSProperties}
            className={cx(
              revealItem,
              "group grid grid-cols-[auto_1fr_1.4fr] items-baseline gap-x-[clamp(20px,3vw,56px)]",
              "py-[clamp(26px,4vh,44px)]",
              i < INITIATIVES.length - 1 && "border-b border-rule",
              "max-[820px]:grid-cols-[auto_1fr] max-[820px]:gap-y-3",
            )}
          >
            <span className={cx(label, "text-line-strong")}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="font-display m-0 flex items-center gap-3 text-[clamp(17px,1.5vw,22px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink-text">
              <initiative.icon
                size={19}
                weight="regular"
                className="shrink-0 text-line-strong transition-colors duration-300 group-hover:text-azure"
                aria-hidden="true"
              />
              {initiative.title}
            </h3>

            <p className="m-0 max-w-[52ch] text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text max-[820px]:col-start-2">
              {initiative.body}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
