"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { HeroVideo } from "./hero-video";
import { SiteNav } from "../site-nav";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";
import { usePrefersReducedMotion } from "../use-reduced-motion";

// GP Transco's published equipment and service list.
const EQUIPMENT = [
  "Dry Van",
  "Conestoga",
  "Expedited",
  "Intermodal",
  "Partial Truckload",
  "Volume LTL",
  "Air Ride",
  "Guaranteed Delivery",
];

const BLADES = 8;
const OPEN_AT = 1900; // hold on the closed state long enough to read it
const SETTLE_AT = 4100;

type Stage = 0 | 1 | 2; // closed -> opening -> open

/**
 * Direction "Manifest"
 *
 * Opens closed: the only moving image is inside the second line of the
 * headline, so the freight runs through the words. The knockout is a
 * multiply blend rather than background-clip, because background-clip
 * cannot take a video. Black multiplied over footage stays black, and
 * white letters multiply to the footage itself.
 *
 * Then the aperture swivels open, the footage takes the full frame, and
 * the headline rolls over to Lane One's copy. The sequence resolves into
 * that composition rather than living somewhere else.
 */
export function Manifest() {
  const reduced = usePrefersReducedMotion();
  const [played, setPlayed] = useState<Stage>(0);

  // Reduced motion lands on the resolved composition without the sequence.
  const stage: Stage = reduced ? 2 : played;

  useEffect(() => {
    if (reduced) return;
    const open = window.setTimeout(() => setPlayed(1), OPEN_AT);
    const settle = window.setTimeout(() => setPlayed(2), SETTLE_AT);
    return () => {
      window.clearTimeout(open);
      window.clearTimeout(settle);
    };
  }, [reduced]);

  const opening = stage >= 1;

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-pitch">
      {/* The full frame, held behind the aperture until it opens. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden transition-[clip-path,transform] duration-[3000ms] ease-[var(--ease-iris)]"
        style={{
          clipPath: opening
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
          // the swivel: the frame rotates into place as the iris widens
          transform: opening
            ? "rotate(0deg) scale(1)"
            : "rotate(-7deg) scale(1.25)",
        }}
      >
        <HeroVideo
          poster={false}
          className="scale-[1.04] object-[62%_52%] opacity-90 [filter:saturate(0.72)_contrast(1.1)_brightness(0.5)]"
        />
        <div
          className={cx(
            "scrim-side absolute inset-0 transition-opacity duration-[1200ms] max-[920px]:scrim-base",
            stage === 2 ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      {/* Blade seams. Cheap, but they give the opening a mechanical read
          rather than a plain circular wipe. */}
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-0 z-[2] grid place-items-center",
          "transition-opacity duration-[2400ms]",
          opening ? "opacity-0" : "opacity-100",
        )}
      >
        {Array.from({ length: BLADES }, (_, i) => (
          <div
            key={i}
            className="col-start-1 row-start-1 h-[190vmax] w-px bg-gradient-to-b from-transparent via-azure/25 to-transparent transition-transform duration-[3000ms] ease-[var(--ease-iris)]"
            style={{
              transform: `rotate(${(i * 180) / BLADES + (opening ? 24 : 0)}deg)`,
            }}
          />
        ))}
      </div>

      {/* The aperture ring, sized to the opening and gone once it settles. */}
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute left-1/2 top-1/2 z-[3] aspect-square w-[140vmax]",
          "-translate-x-1/2 -translate-y-1/2 rounded-full border border-azure/40",
          "transition-[transform,opacity] duration-[3000ms] ease-[var(--ease-iris)]",
          opening ? "scale-100 opacity-0" : "scale-0 opacity-100",
        )}
      />

      <SiteNav />

      <header className="relative z-10 flex flex-1 flex-col justify-center px-gut pt-[clamp(30px,5vh,60px)]">
        <span
          className={cx(
            label,
            "mb-[clamp(14px,2vh,22px)] block text-azure-hi transition-opacity duration-700",
            stage === 2 ? "opacity-100" : "opacity-0",
          )}
        >
          Asset-based truckload carrier
        </span>

        <h1 className="font-display m-0 text-[clamp(44px,8.7vw,132px)] font-black uppercase leading-[0.85] tracking-[-0.03em] text-paper max-[920px]:max-[920px]:text-[clamp(32px,11.4vw,120px)]">
          {/* Both lines roll like a departure board: the closed copy runs up
              and out while the open copy arrives from below. */}
          <Roller stage={stage} delay={0}>
            <span className="block whitespace-nowrap">One carrier.</span>
            <span className="block whitespace-nowrap">Our trucks.</span>
          </Roller>

          <Roller stage={stage} delay={90}>
            {/* closed: the letterform window */}
            <span className="relative isolate block bg-[linear-gradient(115deg,#0b8fcb_0%,#6fd0f0_38%,#1aa5da_62%,#0b8fcb_100%)]">
              <HeroVideo
                poster={false}
                className="z-0 [filter:saturate(1.3)_contrast(1.04)_brightness(1.6)]"
              />
              {/* The clip opens on an underpass, so raw footage inside the
                  letters reads as mud at exactly the moment the line has to
                  land. mix-blend-color keeps the movement but takes its hue
                  from the brand, so the words run blue on every frame. */}
              <span
                aria-hidden="true"
                className="absolute inset-0 z-[1] bg-[linear-gradient(115deg,#0b8fcb_0%,#6fd0f0_42%,#1aa5da_68%,#0b8fcb_100%)] mix-blend-color"
              />
              <span className="relative z-10 block whitespace-nowrap bg-pitch text-white mix-blend-multiply">
                Zero handoffs.
              </span>
            </span>
            {/* open: Lane One's line */}
            <span className="block whitespace-nowrap text-azure-hi">
              Your deadline.
            </span>
          </Roller>
        </h1>

        <p
          className={cx(
            "mt-[clamp(20px,2.8vh,30px)] max-w-[46ch] text-[clamp(14.5px,1.15vw,17px)] leading-[1.6] text-mute",
            "transition-opacity duration-700 delay-100",
            stage === 2 ? "opacity-100" : "opacity-0",
          )}
        >
          An asset-based carrier running its own fleet, its own drivers, and its
          own technology across the lower 48.
        </p>

        <div
          className={cx(
            "mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] transition-opacity duration-700 delay-200",
            "max-[920px]:flex-col max-[920px]:items-stretch",
            stage === 2 ? "opacity-100" : "opacity-0",
          )}
        >
          <a
            href="#"
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[920px]:justify-center",
            )}
          >
            Request a Quote
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className={cx(btn, btnHero, btnGhost, "max-[920px]:justify-center")}
          >
            Apply to Drive
            <ArrowRight size={18} />
          </a>
        </div>
      </header>

      <div
        aria-label="Equipment and services"
        className={cx(
          "relative z-10 mt-[clamp(30px,5vh,64px)] shrink-0 overflow-hidden border-t border-rule",
          "transition-opacity duration-700 delay-300",
          stage === 2 ? "opacity-100" : "opacity-0",
        )}
      >
        {/* Duplicated once so the loop has something to roll into. */}
        <div className="flex w-max animate-roll motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {EQUIPMENT.map((item) => (
                <em
                  key={item}
                  className="whitespace-nowrap py-[15px] pr-[clamp(22px,3vw,48px)] font-mono text-[11px] font-medium uppercase not-italic tracking-[0.18em] text-[#7d90a5]"
                >
                  {item}
                </em>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Two stacked lines in a mask. Rolls to the second once the iris opens. */
function Roller({
  stage,
  delay,
  children,
}: {
  stage: Stage;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <span className="block h-[0.85em] overflow-hidden">
      <span
        className="block transition-transform duration-[2250ms] ease-[var(--ease-out-strong)]"
        style={{
          transform: stage >= 1 ? "translateY(-50%)" : "translateY(0)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
