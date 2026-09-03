"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a figure up when it scrolls into view.
 *
 * Motivated, not decorative: the number is money accumulating over a month,
 * so watching it accrue is the meaning. It runs once and rests.
 *
 * Writes through a ref rather than React state. A per-frame setState would
 * re-render the tree sixty times a second for a single text node. The server
 * renders the final value, so the figure is correct with JS disabled and for
 * anything reading the markup.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1700,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = format(to);
      return;
    }

    let raf = 0;
    let started: number | null = null;
    el.textContent = format(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const tick = (now: number) => {
          started ??= now;
          const p = Math.min((now - started) / duration, 1);
          // Matches --ease-out-strong closely enough for a numeric ramp.
          el.textContent = format(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${to.toLocaleString("en-US")}${suffix}`}
    </span>
  );
}
