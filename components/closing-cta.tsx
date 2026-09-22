"use client";

import type { ComponentType, ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "./reveal";
import { btn, btnSolid, btnHero, btnGhost, cx } from "./ui";

/** Phosphor icon component shape (ssr entry). */
type IconType = ComponentType<{
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}>;

/**
 * ClosingCTA — the site-standard closing call-to-action, lifted from the
 * driver careers page ("Ready to Drive With Purpose?").
 *
 * Cinematic dark plate (bg-ink) with ambient azure/emerald glows, a pill
 * eyebrow, a giant uppercase display headline with one azure accent phrase,
 * centered subcopy, centered primary + ghost actions, and a mono status note
 * with a live pulse dot.
 *
 * Pages only change the words and the buttons — the shape is fixed.
 */

export type ClosingCTAProps = {
  id?: string;
  ariaLabel?: string;
  /** Small mono eyebrow above the headline. */
  eyebrow: ReactNode;
  /** Giant uppercase headline; pass an accent via <span className="text-azure-hi">. */
  headline: ReactNode;
  /** One or two sentence subheading. */
  copy: ReactNode;
  /** Primary action. */
  primaryLabel: string;
  onPrimary: () => void;
  /** Optional ghost secondary — a link with an optional leading icon. */
  secondaryLabel?: string;
  secondaryHref?: string;
  SecondaryIcon?: IconType;
  /** Mono status note under the buttons, shown with the pulse dot. */
  note?: string;
};

export function ClosingCTA({
  id,
  ariaLabel,
  eyebrow,
  headline,
  copy,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  secondaryHref,
  SecondaryIcon = ArrowRight,
  note,
}: ClosingCTAProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className="relative isolate bg-ink py-[clamp(88px,14vh,170px)] px-gut overflow-hidden"
    >
      {/* Cinematic ambient depth glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-azure/10 blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] -z-10"
      />

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="text-center max-w-[820px] mx-auto mb-14">
            {/* Pill */}
            <div
              className={cx(
                revealItem,
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-2 border border-rule-lit text-azure-hi text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-sm",
              )}
            >
              {eyebrow}
            </div>

            {/* Headline */}
            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 text-[clamp(36px,5.8vw,76px)] text-paper leading-[0.92] font-black uppercase tracking-tight",
              )}
            >
              {headline}
            </h2>

            {/* Subheading */}
            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 text-[clamp(16px,1.25vw,19.5px)] leading-[1.65] text-mute max-w-[62ch] mx-auto",
              )}
            >
              {copy}
            </p>

            {/* Actions */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-10 flex flex-wrap items-center justify-center gap-4",
              )}
            >
              <button
                type="button"
                onClick={onPrimary}
                className={cx(
                  btn,
                  btnSolid,
                  btnHero,
                  "shadow-lg shadow-azure/25 cursor-pointer text-base sm:text-[15.5px] px-8",
                )}
              >
                {primaryLabel}
                <ArrowRight size={18} weight="bold" />
              </button>

              {secondaryLabel && secondaryHref && (
                <a
                  href={secondaryHref}
                  className={cx(
                    btn,
                    btnGhost,
                    btnHero,
                    "text-base sm:text-[15.5px] px-8 flex items-center gap-2.5",
                  )}
                >
                  <SecondaryIcon size={18} weight="bold" className="text-azure-hi" />
                  <span>{secondaryLabel}</span>
                </a>
              )}
            </div>

            {/* Status note */}
            {note && (
              <p
                style={{ "--i": 4 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "mt-4 text-xs font-mono text-mute flex items-center justify-center gap-2",
                )}
              >
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{note}</span>
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
