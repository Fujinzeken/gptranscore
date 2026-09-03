import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";

/**
 * Company.
 *
 * Was a centred paragraph over a decorative photo strip, which was the weakest
 * moment on the page: no real content, and the crop had lost the truck
 * entirely. Rebuilt as a single cinematic band where the photograph is the
 * section rather than a trailing garnish, with their operating principle set
 * over it.
 *
 * The crop is anchored on the tractor rather than centred, because a wide band
 * cut from a 1.4:1 source will drop the subject if left to default.
 *
 * The stat rail carries GP Transco's own published figures. They sit at the
 * foot of the band where the photograph is darkest, so they read without
 * fighting the tractor for attention.
 */

const STATS = [
  { figure: "2006", caption: "Founded" },
  { figure: "500+", caption: "Tractors" },
  { figure: "1800", caption: "Trailers" },
];

export function Company() {
  return (
    <section className="relative isolate flex min-h-[clamp(460px,62vh,660px)] items-center overflow-hidden bg-ink px-gut py-[clamp(56px,9vh,104px)]">
      <Image
        src="/bridge.jpg"
        alt="A GP Transco tractor and trailer crossing a river bridge at first light."
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
          className={cx(
            revealItem,
            "m-0 max-w-[46ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
          )}
        >
          Since our founding, GP Transco has grown from a small operation into
          one of the most respected asset-based carriers in the Midwest.
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display mb-0 mt-[clamp(20px,3vh,34px)] max-w-[15em]",
            "text-[clamp(26px,3.6vw,52px)] text-paper",
          )}
        >
          Treat customers and drivers right. Invest in technology.{" "}
          <span className="text-azure-hi">Never compromise on safety.</span>
        </h2>

        <a
          href="#"
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            btn,
            btnGhost,
            btnHero,
            "mt-[clamp(26px,4vh,44px)]",
          )}
        >
          Meet Our Leadership
          <ArrowRight size={17} />
        </a>

        <dl
          style={{ "--i": 3 } as React.CSSProperties}
          className={cx(
            revealItem,
            "m-0 mt-[clamp(34px,5vh,60px)] flex flex-wrap items-start",
            "gap-x-[clamp(24px,3.4vw,60px)] gap-y-7",
          )}
        >
          {STATS.map(({ figure, caption }, i) => (
            <div
              key={caption}
              className={cx(
                "min-w-[104px]",
                i > 0 && "border-l border-rule-lit pl-[clamp(24px,3.4vw,60px)]",
              )}
            >
              <dt className="font-display text-[clamp(30px,3.2vw,46px)] font-extrabold leading-none tracking-[-0.03em] tabular-nums text-paper">
                {figure}
              </dt>
              <dd className={cx(label, "m-0 mt-2.5 text-mute")}>{caption}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
