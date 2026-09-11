import { Cpu, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Philosophy — "Being Selective in Every Way".
 *
 * Prod set three icon-topped cards (Office Staff / Technology / Partnerships)
 * in soft shadows. Here the same three claims become an indexed hairline
 * lattice: counted, ruled, equal. The copy is prod's, verbatim. Hover lifts
 * nothing — it just lights the index and the ground, the system's own way of
 * pointing without decoration.
 */

const PILLARS = [
  {
    icon: UsersThree,
    title: "Office Staff",
    body: "Our diverse office staff consists of some of the most experienced and passionate professionals in the industry – individuals who are excited to help us lead by example.",
  },
  {
    icon: Cpu,
    title: "Technology",
    body: "We continuously evaluate our tools and invest in the most future-proof, advanced technologies. OpenRoad TMS is our testament to continuous innovation.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    body: "Strategic partnerships with Samsara, Love's, CCJ, Smart-Trucking, and Freightliner create seamless operations with unique purposes.",
  },
];

export function SelectivePhilosophy() {
  return (
    <section id="philosophy" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        {/* Header: standard left-aligned heading block, hairline beneath. */}
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Our Philosophy
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Being Selective in <span className="text-azure">Every Way</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Could it mean not settling for outdated industry practices? Or
            hiring only the absolute best? Here&apos;s what selective means to
            us.
          </p>
        </div>

        {/* The three claims, as an indexed hairline lattice. */}
        <div className="grid grid-cols-3 gap-px bg-line max-[900px]:grid-cols-1">
          {PILLARS.map((pillar, i) => {
            const Glyph = pillar.icon;
            return (
              <div
                key={pillar.title}
                style={{ "--i": 4 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "group flex flex-col bg-surface p-[clamp(26px,2.8vw,44px)]",
                  "transition-colors duration-300 hover:bg-page",
                )}
              >
                <div className="flex items-center justify-between">
                  <Glyph
                    size={30}
                    weight="regular"
                    className="text-azure"
                    aria-hidden="true"
                  />
                  <span
                    className={cx(
                      label,
                      "text-line-strong transition-colors duration-300 group-hover:text-azure",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={cx(
                    "font-display m-0 mt-[clamp(22px,3vh,34px)]",
                    "text-[clamp(20px,1.9vw,26px)] font-extrabold leading-[1.08] tracking-[-0.015em] text-ink-text",
                  )}
                >
                  {pillar.title}
                </h3>
                <p className="m-0 mt-4 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
