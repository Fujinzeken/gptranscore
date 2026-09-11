"use client";

import Image from "next/image";
import {
  ArrowRight,
  Lightning,
  Notebook,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnHero, btnOutline, btnSolid, cardLift, cardRound, cx, label } from "../ui";

/**
 * ELITE Driver Program hero — the light editorial composition.
 *
 * Matches the Be Selective open: the page's own paper, oversized display
 * type, a bounded dark photo card, and a hairline fact strip stating the
 * four figures the page then earns. The subject is a pay program rather
 * than a scene, so the editorial register fits — and the two program pages
 * now read as one family, with the dark plates reserved for the scene-led
 * pages.
 *
 * "Am I ELITE?" routes to the pay calculator on the driver careers page —
 * the 60-second check prod describes.
 */

const FACTS = [
  { figure: "$7,400", note: "Max extra / year" },
  { figure: "2%", note: "Selection rate" },
  { figure: "13+", note: "Avg. years experience" },
  { figure: "+5.46", note: "CPM avg. — top 25%" },
];

export function EliteHero() {
  const { openApplyModal } = useDriverApply();

  return (
    <section className="relative isolate flex min-h-dvh flex-col bg-page">
      <SiteNav tone="light" />

      <div className="flex flex-1 flex-col justify-center px-gut pb-[clamp(32px,5vh,56px)] pt-[clamp(56px,10vh,120px)]">
        <div className="grid grid-cols-12 items-end gap-x-[clamp(32px,5vw,88px)] gap-y-12 max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              className={cx(
                label,
                "m-0 mb-[clamp(18px,3vh,30px)] flex items-center gap-2 text-mute-2",
              )}
            >
              <Trophy size={15} weight="bold" className="text-azure" />
              ELITE Driver Program
            </p>

            <h1
              className={cx(
                "font-display m-0 max-w-[12em] text-[clamp(36px,5.8vw,92px)]",
                "font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink-text",
              )}
            >
              Performance That{" "}
              <span className="text-azure">Delivers Results</span>
            </h1>

            <p
              className={cx(
                "mt-[clamp(20px,3vh,32px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)]",
                "leading-[1.6] text-body-text",
              )}
            >
              GP Transco&apos;s ELITE Driver Program rewards drivers for
              consistently delivering safe, efficient, and reliable service.
              When drivers succeed, customers succeed.
            </p>

            <div
              className={cx(
                "mt-[clamp(26px,4vh,44px)] flex flex-wrap gap-[11px]",
                "max-[560px]:flex-col max-[560px]:items-stretch",
              )}
            >
              <a
                href="/best-truck-driving-jobs#calculator"
                className={cx(
                  btn,
                  btnHero,
                  btnSolid,
                  "shadow-[0_12px_34px_-14px_rgba(11,143,203,0.65)] max-[560px]:justify-center",
                )}
              >
                <Lightning size={17} weight="fill" />
                Am I ELITE?
              </a>

              <button
                type="button"
                onClick={openApplyModal}
                className={cx(btn, btnHero, btnOutline, "max-[560px]:justify-center")}
              >
                Apply to Drive
                <ArrowRight size={18} />
              </button>
            </div>

            <p
              className={cx(
                label,
                "m-0 mt-6 flex items-center gap-2 text-[10px] text-mute-2",
              )}
            >
              <Notebook size={13} weight="bold" aria-hidden="true" />
              Take the 60-second check and see if you&apos;re tracking toward
              ELITE performance.
            </p>
          </div>
          {/* The one photograph, bounded. A card, not a backdrop. */}
          <div className="col-span-5 max-[1000px]:col-span-1">
            <div className={cx(cardRound, cardLift, "relative aspect-[4/5] max-[1000px]:aspect-[16/10] overflow-hidden bg-ink")}>
              <Image
                src="/case-haul.jpg"
                alt="GP Transco tractor running under an overpass on the interstate"
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent"
              />
              <p
                className={cx(
                  label,
                  "absolute bottom-0 left-0 m-0 px-[clamp(18px,2vw,26px)] pb-[clamp(16px,2vw,24px)] text-mute",
                )}
              >
                Over-the-Road — Interstate 80
              </p>
            </div>
          </div>
        </div>

        {/* The fact strip: the four figures the page spends the rest of its
            length proving. Set in the hero so the argument starts immediately. */}
        <dl className="mt-[clamp(40px,7vh,84px)] grid grid-cols-4 gap-px border border-line bg-line m-0 max-[820px]:grid-cols-2">
          {FACTS.map((fact, i) => (
            <div
              key={fact.note}
              className="flex flex-col bg-page px-[clamp(16px,2vw,30px)] py-[clamp(18px,2.6vh,30px)]"
            >
              <dd
                className={cx(
                  "font-display m-0 order-1 text-[clamp(22px,2.6vw,40px)]",
                  "font-extrabold leading-none tracking-[-0.02em] text-ink-text",
                )}
              >
                {fact.figure}
              </dd>
              <dt className={cx(label, "order-2 mt-2.5 text-mute-2")}>
                <span aria-hidden="true" className="mr-2 text-line-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {fact.note}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
