"use client";

import { useEffect, useRef } from "react";
import { cx } from "./ui";

/**
 * Scroll reveal via IntersectionObserver rather than a scroll listener, so
 * nothing runs per frame. The observer disconnects after the first pass:
 * content that has already been read should not re-animate on the way back
 * up. Children stagger off --i, set by the caller.
 */
export function Reveal({
  className,
  children,
  amount = 0.2,
}: {
  className?: string;
  children: React.ReactNode;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.shown = "true";
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.shown = "true";
        io.disconnect();
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return (
    <div ref={ref} data-shown="false" className={cx("group/reveal", className)}>
      {children}
    </div>
  );
}

/** Opacity and lift, gated on the parent Reveal and delayed by --i. */
export const revealItem =
  "translate-y-4 opacity-0 transition-[opacity,transform] duration-700 " +
  "ease-[var(--ease-out-strong)] [transition-delay:calc(var(--i,0)*80ms)] " +
  "group-data-[shown=true]/reveal:translate-y-0 " +
  "group-data-[shown=true]/reveal:opacity-100";
