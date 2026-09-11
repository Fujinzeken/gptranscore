import { ArrowRight, Leaf, Lightbulb, Medal } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * In Detail — "What Makes Us Different".
 *
 * Prod's three tinted cards each ended in a mono-ish tag line ("In-House
 * Innovation", "Sustainability Focus", "Industry Leading"). Here those tags
 * become the row's footer in the system's mono label register, the cards
 * become bordered panels on the page's surface, and the OpenRoad TMS claim
 * gets the one thing prod's card lacked: a door into the page that proves it.
 */

const DIFFERENT = [
  {
    icon: Lightbulb,
    title: "OpenRoad TMS",
    body: "Our in-house developed transportation management system is a testament to our commitment of improving operations through continuous innovation.",
    tag: "In-House Innovation",
    link: { label: "Explore OpenRoad TMS", href: "/PKTGroupTechnology" },
  },
  {
    icon: Leaf,
    title: "The Environment",
    body: "Operating 500+ trucks and 1,800+ trailers, we carefully manage fuel consumption and invest in truck aerodynamics to reduce our carbon footprint.",
    tag: "Sustainability Focus",
    link: null,
  },
  {
    icon: Medal,
    title: "Modern Practices",
    body: "We understand the importance of not settling for outdated trucking industry practices. Everything we do is designed for the modern era.",
    tag: "Industry Leading",
    link: null,
  },
];

export function SelectiveDetail() {
  return (
    <section id="detail" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            In Detail
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            What Makes Us <span className="text-azure">Different</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Deep dive into our selective approach
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line max-[900px]:grid-cols-1">
          {DIFFERENT.map((item, i) => {
            const Glyph = item.icon;
            return (
              <div
                key={item.title}
                style={{ "--i": 4 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "flex flex-col bg-page p-[clamp(26px,2.8vw,44px)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <Glyph
                    size={30}
                    weight="regular"
                    className="text-azure"
                    aria-hidden="true"
                  />
                  <span className={cx(label, "text-line-strong")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={cx(
                    "font-display m-0 mt-[clamp(22px,3vh,34px)]",
                    "text-[clamp(20px,1.9vw,26px)] font-extrabold leading-[1.08] tracking-[-0.015em] text-ink-text",
                  )}
                >
                  {item.title}
                </h3>
                <p className="m-0 mt-4 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                  {item.body}
                </p>

                <p
                  className={cx(label, "m-0 mt-auto pt-7 text-azure")}
                >
                  {item.tag}
                </p>

                {item.link && (
                  <a
                    href={item.link.href}
                    className={cx(
                      label,
                      "group/link mt-3 inline-flex items-center gap-2 text-ink-text",
                      "transition-colors duration-200 hover:text-azure",
                    )}
                  >
                    {item.link.label}
                    <ArrowRight
                      size={13}
                      weight="bold"
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
