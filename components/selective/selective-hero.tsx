"use client";

import Image from "next/image";
import { ArrowRight, Notebook } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnSolid, btnOutline, btnHero, cx, label } from "../ui";

/**
 * Be Selective hero — a new composition, deliberately not the dark plate.
 *
 * Every other sub-page opens on a full-height ink photograph, so a fifth one
 * in a row would start to read as wallpaper. This page's subject is a
 * standard — selectivity — rather than a scene, so the hero is editorial
 * instead: the page's own paper, oversized display type, and a hairline fact
 * strip that states the four numbers the page then has to earn. The one
 * photograph is a cutout driver portrait floating directly on the page's
 * paper — no card, border, or shadow — so the image blends seamlessly into
 * the screen with no visible edge.
 */

const FACTS = [
  { figure: "30,000", note: "Applications / year" },
  { figure: "2%", note: "Hire rate" },
  { figure: "500+", note: "Trucks" },
  { figure: "50M+", note: "Miles / year" },
];

export function SelectiveHero() {
  const { open: openQuote } = useQuote();
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
              <Notebook size={15} weight="bold" className="text-azure" />
              Be Selective — Our Philosophy
            </p>

            <h1
              className={cx(
                "font-display m-0 max-w-[12em] text-[clamp(36px,5.8vw,92px)]",
                "font-black uppercase leading-[0.9] tracking-[-0.03em] text-ink-text",
              )}
            >
              What Does It Mean to{" "}
              <span className="text-azure">Be Selective?</span>
            </h1>

            <p
              className={cx(
                "mt-[clamp(20px,3vh,32px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)]",
                "leading-[1.6] text-body-text",
              )}
            >
              Learn about all the ways that we at GP Transco are intentional
              with our operations, staff, drivers, and more.
            </p>

            <div
              className={cx(
                "mt-[clamp(26px,4vh,44px)] flex flex-wrap gap-[11px]",
                "max-[560px]:flex-col max-[560px]:items-stretch",
              )}
            >
              <button
                type="button"
                onClick={openQuote}
                className={cx(
                  btn,
                  btnHero,
                  btnSolid,
                  "shadow-[0_12px_34px_-14px_rgba(11,143,203,0.65)] max-[560px]:justify-center",
                )}
              >
                Ship With Us
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={openApplyModal}
                className={cx(btn, btnHero, btnOutline, "max-[560px]:justify-center")}
              >
                Join Our Team
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          {/* The one photograph, unbounded. The transparent cutout floats
              directly on the page's own paper — no plate, border, or shadow,
              so nothing shows the user where the image begins or ends. */}
          <div className="relative col-span-5 self-end max-[1000px]:col-span-1">
            <div className="relative aspect-[4/5] max-[1000px]:aspect-[16/10]">
              <Image
                src="/driver-highlight.png"
                alt="A GP Transco driver in company gear, arms crossed"
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 40vw"
                className="object-contain object-bottom"
              />
            </div>
            <p
              className={cx(
                label,
                "m-0 text-right text-mute-2",
              )}
            >
              The 2% — A GP Transco Driver
            </p>
          </div>
        </div>

        {/* The fact strip: the four claims this page spends the rest of its
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
