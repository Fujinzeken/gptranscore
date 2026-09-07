"use client";

import { useEffect, useRef, useState } from "react";
import { useQuote } from "./quote-modal";
import { btn, btnSolid, cx, label } from "./ui";

/**
 * In-page section nav.
 *
 * This page is long and covers eleven distinct topics, so the strip is doing
 * real navigation work rather than decoration. It sticks under the site nav
 * and marks where you are, which is the whole reason to keep a strip like this
 * on screen instead of leaving it at the top.
 *
 * Position is tracked with one IntersectionObserver over the section elements
 * rather than a scroll listener, so nothing runs per frame. The rootMargin
 * biases the "current" section toward the upper third of the viewport, which
 * is where a reader actually is, not where the section technically starts.
 *
 * The strip scrolls horizontally on narrow screens. Wrapping eleven links onto
 * three lines would eat the viewport it is meant to help you move around.
 */

export type SectionLink = { id: string; label: string };

export function SectionNav({ links }: { links: SectionLink[] }) {
  const { open: openQuote } = useQuote();
  const [active, setActive] = useState<string | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    const targets = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [links]);

  // Keep the marked link in view as the page moves past it.
  useEffect(() => {
    if (!active) return;
    const rail = railRef.current;
    const el = rail?.querySelector<HTMLElement>(`[data-for="${active}"]`);
    if (!rail || !el) return;
    const left = el.offsetLeft - rail.clientWidth / 2 + el.offsetWidth / 2;
    rail.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <div className="sticky top-0 z-30 border-b border-rule bg-ink-2/95 backdrop-blur-md">
      <div className="flex items-center gap-4 px-gut">
        <div
          ref={railRef}
          className="flex flex-1 items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {links.map((l) => {
            const on = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-for={l.id}
                aria-current={on ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(l.id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", `#${l.id}`);
                  }
                }}
                className={cx(
                  label,
                  "shrink-0 whitespace-nowrap px-3 py-2 transition-colors duration-200",
                  on ? "text-azure-hi" : "text-mute hover:text-paper",
                )}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={openQuote}
          className={cx(
            btn,
            btnSolid,
            "my-2 h-9 shrink-0 px-4 text-[12.5px] max-[720px]:hidden",
          )}
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
}
