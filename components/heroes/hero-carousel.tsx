"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "@phosphor-icons/react/dist/ssr";
import { cx } from "../ui";

type Slide = { src: string; alt: string; position: string };

const SLIDES: Slide[] = [
  {
    src: "/trucks/highway-dusk.jpg",
    alt: "Semi trucks running an interstate through farmland at dusk.",
    position: "62% 60%",
  },
  {
    src: "/trucks/reefer-desert.jpg",
    alt: "A tractor with a refrigerated trailer parked at a desert truck stop at sunrise.",
    position: "55% 70%",
  },
  {
    src: "/trucks/flatbed-kenworth.jpg",
    alt: "A Kenworth tractor hauling a loaded flatbed on a wet highway.",
    position: "45% 55%",
  },
  {
    src: "/trucks/highway-dry-van.jpg",
    alt: "A tractor pulling a dry van trailer on an open highway below storm clouds.",
    position: "38% 62%",
  },
  {
    src: "/trucks/interstate-aerial.jpg",
    alt: "Aerial view of trucks on a divided interstate through Midwest farmland.",
    position: "55% 60%",
  },
];

const INTERVAL_MS = 6500;

/**
 * Full-bleed background carousel for the home hero. Slides crossfade with a
 * slow drift; the controls sit outside the aria-hidden image layer so they
 * stay reachable. Under reduced motion it holds the first frame and only
 * changes when a control is used.
 */
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function subscribeVisibility(cb: () => void) {
  document.addEventListener("visibilitychange", cb);
  return () => document.removeEventListener("visibilitychange", cb);
}

export function HeroCarousel({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
  const hidden = useSyncExternalStore(
    subscribeVisibility,
    () => document.hidden,
    () => false,
  );

  const go = (next: number) => {
    if (next === active) return;
    setPrev(active);
    setActive(next);
  };

  useEffect(() => {
    if (paused || hidden || reduced) return;
    const id = window.setTimeout(() => {
      setPrev(active);
      setActive((active + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, hidden, reduced]);

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        {SLIDES.map((slide, i) => {
          const on = i === active;
          return (
            <div
              key={slide.src}
              className={cx(
                "absolute inset-0 transition-opacity duration-[1400ms] ease-[var(--ease-iris)]",
                on ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectPosition: slide.position }}
                className={cx(
                  "object-cover",
                  (on || i === prev) && !reduced && "animate-drift",
                  className,
                )}
              />
            </div>
          );
        })}
        <div className="scrim-side absolute inset-0 max-[920px]:scrim-base" />
      </div>

      <div
        role="group"
        aria-label="Background photos"
        className="absolute bottom-[clamp(64px,9vh,92px)] right-[var(--gut)] z-20 flex items-center gap-2 max-[920px]:hidden"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show photo ${i + 1}: ${slide.alt}`}
            aria-current={i === active ? "true" : undefined}
            className="group grid h-6 cursor-pointer place-items-center px-0.5"
          >
            <span
              className={cx(
                "block h-[3px] rounded-full transition-all duration-500",
                i === active
                  ? "w-9 bg-azure-hi"
                  : "w-4 bg-white/35 group-hover:bg-white/70",
              )}
            />
          </button>
        ))}
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play background photos" : "Pause background photos"}
            className="ml-2 grid size-7 cursor-pointer place-items-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white"
          >
            {paused ? <Play size={12} weight="fill" /> : <Pause size={12} weight="fill" />}
          </button>
        )}
      </div>
    </>
  );
}
