import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Safety intro — the SAFETY row's opening paragraph, verbatim, with its four
 * things laid out as the index for the sections that follow.
 */

const FOUR = [
  { n: "01", name: "Drivers who are qualified to be in it", href: "#drivers" },
  { n: "02", name: "Equipment that works", href: "#trucks" },
  { n: "03", name: "Standards everyone understands", href: "#security" },
  { n: "04", name: "Running rested and within your hours", href: "#hours" },
];

export function SafetyIntro() {
  return (
    <section id="intro" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Our approach
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Good transportation should be{" "}
            <span className="text-azure">predictable.</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[62ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Safety at PKT comes down to four things: equipment that works,
            drivers who are qualified to be in it, standards everyone
            understands, and one rule that settles any argument — a load is
            never more important than running rested and within your hours.
          </p>
        </div>

        <ol className="m-0 grid list-none grid-cols-4 gap-px bg-line p-0 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
          {FOUR.map(({ n, name, href }, i) => (
            <li key={n} className="bg-surface">
              <a
                href={href}
                style={{ "--i": 4 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "group flex h-full flex-col gap-4 px-[clamp(22px,2.4vw,36px)] py-[clamp(28px,4vh,48px)]",
                  "transition-colors duration-300 hover:bg-page",
                )}
              >
                <span className={cx(label, "text-azure")}>{n}</span>
                <span className="font-display text-[clamp(18px,1.6vw,24px)] font-extrabold leading-[1.2] text-ink-text">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
