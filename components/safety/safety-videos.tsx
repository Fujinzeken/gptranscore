"use client";

import { useEffect, useRef } from "react";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Safety videos — the footage prod shipped.
 *
 * Prod's Safety page ran three video blocks pulled from Base44 storage:
 * a full-width Samsara reel, a six-card grid of Samsara feature clips
 * (looping, muted, autoplay), and a full-width Idelic reel. The URLs are
 * hard-coded in the prod route chunk, not in the HTML.
 *
 * The register changes, the footage doesn't: instead of rounded shadow
 * cards on a dark gradient, the clips sit in the page's hairline lattice —
 * one edge-to-edge slab per feature reel and a six-cell divided grid for
 * the features. Each clip plays only while on screen, so eight videos
 * don't fight for the decoder the moment the page loads.
 */

const BASE =
  "https://base44.app/api/apps/697397129479384615d1047c/files/public/697397129479384615d1047c";

const SAMSARA_REEL = `${BASE}/f39182708_video_1771804324831.mp4`;
const IDELIC_REEL = `${BASE}/614d47212_video_1771804323932.mp4`;

const FEATURES = [
  {
    title: "AI-Powered Safe Habits",
    body: "Using AI, we empower drivers to build safe habits.",
    src: `${BASE}/fe8825707_video_1771804310757.mp4`,
  },
  {
    title: "Risk Detection",
    body: "We detect risks to protect our drivers and the public.",
    src: `${BASE}/1df30addd_video_1771804323458.mp4`,
  },
  {
    title: "Real-Time Tracking",
    body: "We track tractors and trailers in real time.",
    src: `${BASE}/1559f5f01_video_1771804323621.mp4`,
  },
  {
    title: "Incident Prevention",
    body: "We prevent incidents with real-time alerts.",
    src: `${BASE}/9a65bc4d7_video_1771804323463.mp4`,
  },
  {
    title: "Distraction Prevention",
    body: "We prevent driver distractions in real time.",
    src: `${BASE}/596495291_video_1771804323934.mp4`,
  },
  {
    title: "Harsh Driving Detection",
    body: "We detect harsh driving before it becomes an issue.",
    src: `${BASE}/11a2eca0c_video_1771804323762.mp4`,
  },
];

/**
 * One looping clip. Autoplay rules require muted + playsInline. An
 * IntersectionObserver gates play/pause so off-screen videos stay idle.
 */
function Clip({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay refusal — the first frame still shows */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      aria-label={title}
      className="h-full w-full object-cover"
    />
  );
}

/** Full-width feature reel with a mono source credit. */
function Reel({ src, source, title }: { src: string; source: string; title: string }) {
  return (
    <figure className="m-0">
      <div className="aspect-video w-full overflow-hidden bg-ink">
        <Clip src={src} title={title} />
      </div>
      <figcaption
        className={cx(label, "flex items-center justify-between py-2.5 text-mute-2")}
      >
        <span>{title}</span>
        <span>Source: {source}</span>
      </figcaption>
    </figure>
  );
}

export function SafetyVideos() {
  return (
    <section id="videos" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Safety In Motion
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[16em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Watch the System <span className="text-azure">Work</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            Real footage from the cameras and telematics running on every
            tractor — the same feeds our safety team watches, recorded on
            PKT Group roads.
          </p>
        </div>

        {/* Samsara feature reel */}
        <div
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(revealItem, "pt-[clamp(24px,4vh,44px)]")}
        >
          <Reel
            src={SAMSARA_REEL}
            source="Samsara"
            title="AI dash cameras and telematics on every tractor"
          />
        </div>

        {/* Six feature clips on the hairline lattice */}
        <div className="mt-[clamp(28px,4.5vh,52px)] grid grid-cols-3 gap-px bg-line max-[1000px]:grid-cols-1">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              style={{ "--i": 5 + i } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-surface transition-colors duration-300 hover:bg-page",
              )}
            >
              <div className="aspect-video w-full overflow-hidden bg-ink">
                <Clip src={feature.src} title={feature.title} />
              </div>
              <div className="flex flex-1 flex-col px-[clamp(18px,2vw,28px)] py-[clamp(18px,2.6vh,30px)]">
                <p
                  className={cx(
                    "font-display m-0 text-[clamp(17px,1.5vw,22px)]",
                    "font-extrabold leading-tight tracking-[-0.02em] text-ink-text",
                  )}
                >
                  {feature.title}
                </p>
                <p className="m-0 mt-2 text-[clamp(13px,1vw,15px)] leading-[1.55] text-body-text">
                  {feature.body}
                </p>
                <p
                  className={cx(label, "m-0 mt-auto pt-4 text-[9.5px] text-mute-2")}
                >
                  {String(i + 1).padStart(2, "0")} · Samsara
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Idelic feature reel */}
        <div
          style={{ "--i": 11 } as React.CSSProperties}
          className={cx(revealItem, "mt-[clamp(28px,4.5vh,52px)]")}
        >
          <Reel
            src={IDELIC_REEL}
            source="Idelic"
            title="40 billion miles of data behind our safety record"
          />
        </div>
      </Reveal>
    </section>
  );
}
