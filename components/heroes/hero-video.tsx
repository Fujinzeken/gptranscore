"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "../ui";

const BASE =
  "https://video.wixstatic.com/video/cf3294_72874997821e4f8d8dc91d764f1d201c";

/**
 * The source reel is 62s. It opens on a fade from black and repeatedly cuts
 * to a presenter addressing camera (around 27-29s, 36-38s and 54s), which
 * reads as a video that wants sound. The continuous run from 2s to 26s is
 * highway, equipment, yard and cab with nobody speaking, so we loop that
 * window and jump back rather than playing the whole reel.
 */
const CLIP_START = 2.0;
const CLIP_END = 26.0;

/** Full bleed at 1080p is a 39MB download. Pick the smallest rendition
 *  that still holds up at the width it will actually be painted. */
function pickRendition(): string {
  const width = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
  if (width <= 900) return "480p";
  if (width <= 1800) return "720p";
  return "1080p";
}

export function HeroVideo({
  className,
  poster = true,
}: {
  className?: string;
  /** The knockout copy sits behind type, where a poster would show as a
   *  static frame inside moving letters. */
  poster?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Under reduced motion the poster is the hero. Never fetch the video.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.src = `${BASE}/${pickRendition()}/mp4/file.mp4`;

    const onLoaded = () => {
      el.currentTime = CLIP_START;
      // Autoplay can still be refused; the poster stays up if it is.
      void el.play().catch(() => {});
    };
    const onTime = () => {
      if (el.currentTime >= CLIP_END || el.currentTime < CLIP_START - 0.5) {
        el.currentTime = CLIP_START;
      }
    };
    const onPlaying = () => setReady(true);

    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("playing", onPlaying);
    el.load();

    return () => {
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <video
      ref={ref}
      poster={poster ? "/hero-poster.jpg" : undefined}
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={cx("absolute inset-0 size-full object-cover", className)}
    />
  );
}
