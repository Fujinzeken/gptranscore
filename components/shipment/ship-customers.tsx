"use client";

import { Handshake } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Customers / Trusted Partners Section.
 *
 * Light field (bg-page) following the dark ShipSupport section,
 * maintaining the strict alternating light/dark rhythm.
 *
 * Displays enterprise shippers that trust GP Transco in a machined
 * 20-client matrix sharing 1px hairlines.
 */

interface Partner {
  name: string;
  tagline?: string;
}

const PARTNERS: Partner[] = [
  { name: "Electrolux" },
  { name: "Snap-on" },
  { name: "Menards" },
  { name: "Graphic Packaging" },
  { name: "Kroger" },
  { name: "Pella" },
  { name: "Verizon" },
  { name: "Lexmark" },
  { name: "General Mills" },
  { name: "Meijer" },
  { name: "Novolex" },
  { name: "HP" },
  { name: "GE Appliances" },
  { name: "PaperWorks" },
  { name: "BAE Systems" },
  { name: "Whirlpool" },
  { name: "Cintas" },
  { name: "thyssenkrupp" },
  { name: "Nestlé" },
  { name: "Dunlop / Falken" },
];

export function ShipCustomers() {
  return (
    <section
      id="customers"
      className="bg-page py-[clamp(78px,12vh,150px)] px-gut"
    >
      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[720px] mx-auto mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Handshake size={14} weight="bold" />
            Trusted Partners
          </p>

          <h2 className="type-display m-0 text-[clamp(28px,4.2vw,56px)] text-ink-text leading-[0.96]">
            Trusted by <span className="text-azure">Leading Companies</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Partnered with industry leaders for reliable freight solutions
          </p>
        </header>

        {/* Machined 20-Partner Matrix */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "border border-line bg-line grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px shadow-sm max-w-[1280px] mx-auto",
          )}
        >
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="bg-surface h-[110px] sm:h-[125px] flex flex-col items-center justify-center p-4 text-center transition-colors duration-200 hover:bg-[#fafbfd] group/item"
            >
              <span className="font-display text-[clamp(15px,1.25vw,19px)] font-extrabold tracking-tight text-[#46596f] group-hover/item:text-ink-text transition-colors duration-200">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
