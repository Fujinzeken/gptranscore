import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Homepage section 5 of 6 (Safety).
 *
 * Reworks the dark cinematic band slot: photograph is the section, copy sits
 * in the scrim. The band already carried a safety line, so the ground, the
 * crop and the scrim hold as they were — only what is said over them changes.
 *
 * The old stat rail (founded / tractors / trailers) came out with the rework:
 * those were the previous brand's published figures and none of them appear in
 * the home content pack, which gives this section one sentence and no stats.
 * Copy is CSV-verbatim; the CTA is the CSV's own section link.
 */

export function Safety() {
  return (
    <section className="relative isolate flex min-h-[clamp(460px,62vh,660px)] items-center overflow-hidden bg-ink px-gut py-[clamp(56px,9vh,104px)]">
      <Image
        src="/demo-home/demo3.jpg"
        alt="A PKT tractor and trailer crossing a river bridge at first light."
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[58%_56%]"
      />
      {/* Reads left, so the scrim is heaviest there and clears by the tractor. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,11,17,0.94)_0%,rgba(7,11,17,0.82)_34%,rgba(7,11,17,0.34)_62%,rgba(7,11,17,0.12)_100%)]"
      />

      <Reveal className="w-full">
        <p
          className={cx(label, revealItem, "m-0 text-mute")}
          style={{ "--i": 0 } as React.CSSProperties}
        >
          Safety
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display mb-0 mt-[clamp(20px,3vh,34px)] max-w-[15em]",
            "text-[clamp(26px,3.6vw,52px)] text-paper",
          )}
        >
          Safety built into every mile.
        </h2>

        <p
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "m-0 mt-[clamp(18px,2.8vh,30px)] max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
          )}
        >
          Properly maintained equipment, qualified drivers, clear operating
          standards, and one basic rule: a load is never more important than
          running rested and within your hours.
        </p>

        <a
          href="/safety"
          style={{ "--i": 3 } as React.CSSProperties}
          className={cx(
            revealItem,
            btn,
            btnGhost,
            btnHero,
            "mt-[clamp(26px,4vh,44px)]",
          )}
        >
          How We Approach Safety
          <ArrowRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}
