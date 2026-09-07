import Image from "next/image";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { QuoteButton } from "../quote-button";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Two trailer types, one carrier.
 *
 * Their version centres everything and sets the two trailers as equal cards on
 * white. The argument here is a genuine either/or, so the section is built as
 * one spread split down the middle: two columns meeting on a single rule. The
 * split is the "two types"; the rule they share is the "one carrier".
 *
 * Dark ground with the product shots on white plates. Both trailer images ship
 * as RGB PNGs with a baked white background and no alpha, so they cannot float
 * on ink without showing their own rectangle. Giving each one a white plate
 * turns that constraint into a lightbox, which is how equipment photography
 * wants to be shown anyway.
 */

const TRAILERS = [
  {
    spec: "53″ air-ride fleet",
    name: "Dry Van",
    img: "/dry-van.png",
    alt: "A PKT Group 53 inch air-ride dry van trailer.",
    points: [
      "Ideal for palletized, packaged and consumer goods: food, retail, paper, packaging and general dry freight.",
      "Late-model 53″ air-ride trailers, swept clean and inspected before every load for damage-free delivery.",
      "Nationwide dry van capacity planned in advance, so your lanes stay covered through seasonal peaks.",
    ],
  },
  {
    spec: "Rolling-tarp flatbed",
    name: "Conestoga",
    img: "/conestoga.png",
    alt: "A PKT Group Conestoga rolling-tarp flatbed trailer.",
    points: [
      "Weather protection with flatbed-style side and top loading on every shipment.",
      "Perfect for machinery, building materials, steel and oversized project freight.",
      "No tarping delays, so loading and unloading is faster and safer at every stop.",
    ],
  },
];

export function ShipTrailers() {
  return (
    <section id="trailers" className="bg-ink py-[clamp(72px,11vh,140px)]">
      <Reveal>
        <header className={cx(revealItem, "mb-[clamp(34px,5vh,60px)] px-gut")}>
          <h2 className="type-display m-0 max-w-[14em] text-[clamp(26px,3.6vw,52px)] text-paper">
            Two trailer types.{" "}
            <span className="text-azure-hi">One carrier.</span>
          </h2>
          <p className="mt-5 max-w-[62ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            We run both dry van and Conestoga trailers, every one of them
            GPS-tracked, so your dry freight and your open-deck freight move
            with the same team, the same technology, and the same on-time
            standard.
          </p>
        </header>

        {/* One rule down the middle: the split is the argument. */}
        <div className="grid grid-cols-2 gap-px bg-rule max-[820px]:grid-cols-1">
          {TRAILERS.map((t, i) => (
            <article
              key={t.name}
              style={{ "--i": i + 1 } as React.CSSProperties}
              className={cx(revealItem, "bg-ink px-gut py-[clamp(26px,3.4vw,44px)]")}
            >
              {/* The plate the product shot needs, used as a lightbox. */}
              <div className="relative aspect-[3/1] w-full overflow-hidden bg-white">
                <Image
                  src={t.img}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>

              <p className={cx(label, "m-0 mt-7 text-azure-hi")}>{t.spec}</p>
              <h3 className="type-display m-0 mt-2.5 text-[clamp(24px,2.8vw,38px)] text-paper">
                {t.name}
              </h3>

              <ul className="m-0 mt-6 grid list-none gap-3.5 p-0">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check
                      size={15}
                      weight="bold"
                      aria-hidden="true"
                      className="mt-[5px] shrink-0 text-azure-hi"
                    />
                    <span className="max-w-[46ch] text-[14.5px] leading-[1.55] text-mute">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* The point of running both: one call, not two vendors. */}
        <div
          style={{ "--i": 3 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(30px,4.5vh,54px)] px-gut",
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-rule pt-[clamp(26px,3.6vh,42px)]">
            <p className="m-0 max-w-[62ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-paper">
              Mixed freight, seasonal swings, or a project load that won&rsquo;t
              fit a van? One phone call covers both divisions, with the same
              tracking, geofencing and dedicated point of contact on every
              shipment.
            </p>
            <QuoteButton className={cx(btn, btnSolid, btnHero)}>
              Get a Quote
              <ArrowRight size={17} />
            </QuoteButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
