"use client";

import {
  ClipboardText,
  Clock,
  Heart,
  FileText,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Drivers + Hours and fatigue — two CSV blocks from the SAFETY row that had
 * no home on the page. Deliberately reuses existing grammar only: the
 * drivers block takes the two-cell hairline lattice SafetySecurity
 * established; hours and fatigue runs as the dark numbered ruled manifest
 * the service pages use, closing on the CSV's "2am" line.
 */

const DRIVER_ITEMS = [
  {
    icon: FileText,
    title: "MVR review",
    body: "Motor vehicle record reviewed at hire and after — driving history stays current, not a one-time checkbox.",
  },
  {
    icon: Heart,
    title: "Medical certification",
    body: "DOT physical and medical certification kept current, not lapsed.",
  },
  {
    icon: ClipboardText,
    title: "Drug & alcohol testing",
    body: "Per FMCSA requirements — pre-employment, random and post-accident.",
  },
  {
    icon: ShieldCheck,
    title: "Employment verification",
    body: "Previous employment verified before a driver runs their first load.",
  },
];

const HOURS_ITEMS: Array<{ name: string; detail: string }> = [
  { name: "ELDs on every truck", detail: "Hours monitored, not assumed." },
  {
    name: "Loads planned against available hours",
    detail:
      "Planned against the clock the driver actually has — rather than against optimism.",
  },
  {
    name: "Drivers shut down when they need to",
    detail: "And dispatch works around it. That's the whole point of the rule.",
  },
];

export function SafetyDrivers() {
  return (
    <section id="drivers" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Qualified Drivers
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Drivers who are{" "}
            <span className="text-azure">qualified to be in it.</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Equipment only matters if the person behind the wheel is qualified
            to be there — verified before the first load, not after.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-line max-[1000px]:grid-cols-1">
          {DRIVER_ITEMS.map((pillar, i) => (
            <div
              key={pillar.title}
              style={{ "--i": 3 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-page px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                "transition-colors duration-300 hover:bg-surface",
              )}
            >
              <pillar.icon
                size={20}
                weight="regular"
                className="text-line-strong transition-colors duration-300 group-hover:text-azure"
                aria-hidden="true"
              />
              <h3
                className={cx(
                  "font-display m-0 mt-5 max-w-[14em] text-[clamp(17px,1.5vw,22px)]",
                  "font-extrabold leading-[1.2] text-ink-text",
                )}
              >
                {pillar.title}
              </h3>
              <p className="m-0 mt-2.5 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function SafetyHours() {
  return (
    <section
      id="hours"
      className="bg-ink px-gut py-[clamp(78px,12vh,150px)] overflow-hidden"
    >
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-azure-hi")}
        >
          Hours &amp; Fatigue
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "font-display m-0 mt-5 max-w-[16em]",
            "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-paper",
          )}
        >
          A load is never more important than{" "}
          <span className="text-azure-hi">running rested.</span>
        </h2>

        <ul
          className={cx(
            revealItem,
            "m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-rule",
          )}
        >
          {HOURS_ITEMS.map(({ name, detail }, i) => (
            <li
              key={name}
              className={cx(
                "group grid grid-cols-[2.5rem_1fr] gap-x-[clamp(16px,2.5vw,40px)] border-b border-rule py-[clamp(20px,3vh,34px)] last:border-b-0",
                "transition-colors duration-300 hover:bg-ink-2",
              )}
            >
              <span className={cx(label, "text-mute-2 tabular-nums")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span
                  className={cx(
                    "font-display block font-bold tracking-[-0.02em] text-paper",
                    "text-[clamp(20px,2.2vw,32px)] leading-[1.05]",
                    "transition-transform duration-500 ease-[var(--ease-out-strong)]",
                    "group-hover:translate-x-[clamp(6px,1vw,16px)]",
                  )}
                >
                  {name}
                </span>
                <p className="m-0 mt-2 max-w-[72ch] text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-mute">
                  {detail}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(24px,3.5vh,40px)] flex items-start gap-3 max-w-[64ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
          )}
        >
          <Clock
            size={20}
            weight="bold"
            className="mt-1 shrink-0 text-azure-hi"
          />
          If a load cannot be made within a driver&rsquo;s hours, we say so at
          booking — rather than discovering it at 2am.
        </p>
      </Reveal>
    </section>
  );
}