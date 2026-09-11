import {
  ArrowUpRight,
  Lightning,
  Monitor,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Hardware Excellence — the equipment story.
 *
 * Prod stacked this as rounded tinted boxes: a highlights card with a
 * gradient CTA, two spec cards, and a full-bleed blue gradient banner for
 * the fleet-age stat. The copy is right; the presentation is not ours.
 *
 * Here the section runs as one instrument panel on a white field: the
 * Cascadia highlights are indexed hairline rows (the same spec-sheet
 * register as the capabilities index), the two powertrain systems share a
 * two-cell hairline lattice, and the fleet-age claim — prod's loudest
 * gradient — is re-set as a quiet dark band where the numeral itself is
 * the only decoration. Hardware earns attention by being specified, not
 * by glowing.
 */

const HIGHLIGHTS = [
  {
    title: "Aerodynamics",
    body: "Advanced aerodynamics designed to boost fuel efficiency.",
  },
  {
    title: "Serviceability",
    body: "Smart exterior design that improves basic vehicle servicing and increases uptime.",
  },
  {
    title: "Safety",
    body: "Safety features such as collision mitigation and lane departure assist.",
  },
];

const SYSTEMS = [
  {
    icon: Lightning,
    title: "Detroit Integrated Powertrain (IDP)",
    body: "The Detroit Integrated Powertrain (IDP) is engineered to work together as a single unit for optimal drivetrain efficiency. It integrates fuel-efficient DD15 and DD13 engines with technologically advanced DT12 on-highway transmissions and engineered axles for efficient performance.",
    tag: "Optimal Efficiency",
  },
  {
    icon: Monitor,
    title: "Connected Vehicle Services",
    body: "The Detroit Connect suite of connected vehicle services supports performance monitoring and empowers smarter business decisions by providing ongoing performance data.",
    tag: "Real-Time Data",
  },
];

export function InnovationHardware() {
  return (
    <section id="hardware" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        {/* Header: claim left, the machine it is about right. */}
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <div className="max-w-[720px]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute-2")}
            >
              Hardware Excellence
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-4",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              Top-of-the-line equipment built for{" "}
              <span className="text-azure-hi">efficiency &amp; safety</span>
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
            Freightliner Cascadia
          </p>
        </div>

        <p
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(
            revealItem,
            "m-0 mt-[clamp(24px,3.5vh,40px)] max-w-[62ch]",
            "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
          )}
        >
          GP Transco operates modern equipment designed to maximize uptime,
          efficiency, and driver comfort. Our fleet is built around the
          Freightliner Cascadia — one of the most advanced on-highway trucks
          Freightliner has offered.
        </p>

        {/* The Cascadia: indexed highlight rows on the left, the integrated
            systems sharing a hairline lattice on the right. */}
        <div className="mt-[clamp(40px,6vh,72px)] grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,5vh,56px)] max-[1000px]:grid-cols-1">
          <div
            style={{ "--i": 5 } as React.CSSProperties}
            className={cx(revealItem, "col-span-5 max-[1000px]:col-span-1")}
          >
            <p className={cx("m-0", label, "text-ink-text")}>
              Freightliner Cascadia Highlights
            </p>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {HIGHLIGHTS.map((h, n) => (
                <div
                  key={h.title}
                  className="group flex items-baseline gap-5 py-[clamp(16px,2.2vh,24px)]"
                >
                  <span
                    className={cx(
                      label,
                      "shrink-0 text-mute-2 transition-colors duration-300 group-hover:text-azure",
                    )}
                  >
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display m-0 text-[clamp(15px,1.35vw,19px)] font-bold leading-[1.22] tracking-[-0.01em] text-ink-text">
                      {h.title}
                    </h3>
                    <p className="m-0 mt-1.5 text-[clamp(13px,1.05vw,15.5px)] leading-[1.55] text-body-text">
                      {h.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://www.freightliner.com/trucks/cascadia/"
              target="_blank"
              rel="noreferrer"
              className={cx(
                label,
                "group mt-7 inline-flex items-center gap-2 border-b border-azure pb-1 text-azure",
                "transition-colors duration-200 hover:border-ink-text hover:text-ink-text",
              )}
            >
              Cascadia 3D Walkthrough
              <ArrowUpRight
                size={13}
                weight="bold"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div
            style={{ "--i": 6 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-7 max-[1000px]:col-span-1",
              "grid grid-cols-2 gap-px bg-line max-[720px]:grid-cols-1",
            )}
          >
            {SYSTEMS.map((sys) => (
              <div
                key={sys.title}
                className="group flex flex-col bg-surface p-[clamp(20px,2.6vw,36px)] transition-colors duration-300 hover:bg-page"
              >
                <sys.icon
                  size={24}
                  weight="regular"
                  className="text-ink-text transition-colors duration-300 group-hover:text-azure"
                />
                <h3 className="font-display m-0 mt-[clamp(20px,3vh,36px)] text-[clamp(16px,1.5vw,21px)] font-bold leading-[1.2] tracking-[-0.01em] text-ink-text">
                  {sys.title}
                </h3>
                <p className="m-0 mt-3 text-[clamp(13px,1.05vw,15.5px)] leading-[1.58] text-body-text">
                  {sys.body}
                </p>
                <p
                  className={cx(
                    label,
                    "m-0 mt-auto pt-6 text-azure transition-colors duration-300 group-hover:text-ink-text",
                  )}
                >
                  {sys.tag}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The fleet-age claim. Prod set this on a gradient banner; the
            dark band holds it here, the numeral doing the arguing. */}
        <div
          style={{ "--i": 7 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(48px,7vh,88px)] bg-ink px-[clamp(28px,4vw,72px)] py-[clamp(40px,6vh,72px)]",
            "grid grid-cols-12 items-center gap-x-[clamp(32px,5vw,88px)] gap-y-6 max-[900px]:grid-cols-1",
          )}
        >
          <div className="col-span-5 max-[900px]:col-span-1">
            <p
              className={cx(
                "font-display m-0 leading-[0.9] tracking-[-0.035em]",
                "text-[clamp(52px,7.5vw,120px)] font-extrabold text-paper",
              )}
            >
              Under <span className="text-azure-hi">2</span> Years
            </p>
            <p
              className={cx(
                "m-0 mt-4 border-t border-rule-lit pt-4",
                label,
                "text-mute",
              )}
            >
              Average Fleet Age
            </p>
          </div>
          <p
            className={cx(
              "m-0 col-span-6 col-start-7 max-w-[52ch]",
              "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              "max-[900px]:col-span-1 max-[900px]:col-start-1",
            )}
          >
            GP Transco maintains one of the youngest fleets in the industry —
            ensuring drivers operate the latest safety technology,
            fuel-efficient powertrains, and modern cab amenities on every
            mile.
          </p>
        </div>
      </Reveal>
    </section>
  );
}