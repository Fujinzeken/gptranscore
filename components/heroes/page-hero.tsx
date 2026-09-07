"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { useQuote } from "../quote-modal";
import { btn, btnGhost, btnHero, btnSolid, cx } from "../ui";

/**
 * Sub-page hero.
 *
 * One component for every page below the homepage, so the interior of the site
 * cannot drift the way the homepage sections did before the system existed.
 *
 * Full height, matching the homepage. I had this at 70vh on the argument that
 * an interior page should surface content sooner; the client wanted the full
 * plate, and on a page whose whole pitch is the equipment, giving the
 * photograph the screen is the stronger read.
 *
 * dvh rather than vh: on mobile Safari the address bar makes vh taller than
 * what is actually visible, which crops the CTAs off the bottom.
 *
 * Two things from the live page are dropped on purpose: the eyebrow pill above
 * the headline, and the SCROLL cue at the foot. A heading carries its own
 * weight without a label, and a visitor looking at the top of a page does not
 * need to be told that scrolling exists.
 */

export function PageHero({
  title,
  blurb,
  image,
  primary = "quote",
  primaryLabel = "Ship With Us",
}: {
  /** Lead clause, then the clause that takes the accent. */
  title: [string, string];
  blurb: string;
  image: { src: string; alt: string; position?: string };
  primary?: "quote";
  primaryLabel?: string;
}) {
  const { open: openQuote } = useQuote();
  const [lead, accent] = title;

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: image.position ?? "50% 50%" }}
      />
      {/* Same scrim the homepage hero uses, so the two read as one site. */}
      <div
        aria-hidden="true"
        className="scrim-side max-[920px]:scrim-base absolute inset-0 -z-10"
      />

      <SiteNav />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-gut py-[clamp(40px,7vh,88px)]">
        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(36px,6.6vw,104px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          {lead} <span className="text-azure-hi">{accent}</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          {blurb}
        </p>

        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          {primary === "quote" ? (
            <button
              type="button"
              onClick={openQuote}
              className={cx(
                btn,
                btnHero,
                btnSolid,
                "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
              )}
            >
              {primaryLabel}
              <ArrowRight size={18} />
            </button>
          ) : null}

          <a
            href="tel:+18004605071"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            <Phone size={17} />
            (800) 460-5071
          </a>
        </div>
      </div>
    </section>
  );
}
