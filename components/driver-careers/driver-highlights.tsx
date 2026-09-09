"use client";

import { useState } from "react";
import Image from "next/image";
import {
  VideoCamera,
  Quotes,
  ArrowRight,
  CheckCircle,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Driver Highlights Section.
 *
 * Sits on a 100% light field (bg-page) following the dark DriverElite section.
 * Cohesive with the rest of the redesign (bento styling, border-line, type-display):
 * - Left: Real GP Transco driver cutout with a subtle ambient background
 * - Right: Short, high-impact copy, featured driver testimonial pill, and primary CTA
 * - Interactive modal with driver stories when clicking "View Driver Highlights"
 */

interface DriverStory {
  id: string;
  name: string;
  role: string;
  tenure: string;
  quote: string;
  highlight: string;
}

const DRIVER_STORIES: DriverStory[] = [
  {
    id: "marcus",
    name: "Marcus Washington",
    role: "OTR Company Driver",
    tenure: "3.5 Years",
    quote:
      "The pay transparency is 100% real. What they tell you during recruiting is what appears on your settlement sheet every Friday.",
    highlight: "$108,400 earned last year with top-tier ELITE bonuses",
  },
  {
    id: "carlos",
    name: "Carlos Mendez",
    role: "Midwest Regional Driver",
    tenure: "2 Years",
    quote:
      "Home every single weekend with zero pushback from dispatch. The equipment is brand new and safety genuinely comes first.",
    highlight: "Home weekly, 2,600 average miles per week",
  },
  {
    id: "sarah",
    name: "Sarah & Mike Jenkins",
    role: "Team OTR Drivers",
    tenure: "4 Years",
    quote:
      "We've driven for four carriers over 15 years. No one comes close to GP Transco in how they treat drivers like actual partners.",
    highlight: "5,200+ miles/wk in a 2025 Freightliner Cascadia",
  },
];

export function DriverHighlights() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<DriverStory>(DRIVER_STORIES[0]);

  return (
    <section
      id="highlights"
      className="bg-page py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      <Reveal>
        {/* Section Header */}
        <header
          className={cx(
            revealItem,
            "text-center max-w-[740px] mx-auto mb-[clamp(40px,6vh,64px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <VideoCamera size={14} weight="bold" />
            Meet Our Team
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Driver <span className="text-azure">Highlights</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Real stories from real drivers who chose GP Transco. Hear what life
            on the road is really like — straight from the people who live it
            every day.
          </p>
        </header>

        {/* Feature Stage: Driver Image on Left, Few Words on Right */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "max-w-[1280px] mx-auto bg-surface border border-line shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch",
          )}
        >
          {/* Left Column: Driver Cutout Image Frame (5 Cols) */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-azure/5 via-page to-azure/10 flex items-end justify-center pt-8 px-6 lg:px-8 border-b lg:border-b-0 lg:border-r border-line min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] overflow-hidden">
            {/* Subtle radial glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-azure/15 via-transparent to-transparent -z-0"
            />

            {/* Driver Image */}
            <Image
              src="/driver-highlights.png"
              alt="GP Transco Driver"
              width={700}
              height={850}
              priority
              className="relative z-10 w-auto h-[380px] sm:h-[460px] lg:h-[540px] max-w-none object-contain object-bottom drop-shadow-xl select-none pointer-events-none"
            />

            {/* Small floating badge */}
            <div className="absolute top-6 left-6 z-20 bg-surface/90 backdrop-blur-sm border border-line px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-ink-text uppercase tracking-wide">
                Verified CDL-A Driver
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Words & CTA (7 Cols) */}
          <div className="lg:col-span-7 p-[clamp(28px,4.5vw,56px)] flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 pb-3 border-b border-line mb-6">
                <span className={cx(label, "text-azure")}>
                  Real Driver Stories
                </span>
              </div>

              {/* Big, clean typography matching site style */}
              <h3 className="type-display text-[clamp(32px,3.8vw,52px)] font-black text-ink-text leading-[0.96] uppercase tracking-tight m-0 mb-4">
                Drivers Speak. <br />
                <span className="text-azure">We Listen.</span>
              </h3>

              <p className="text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-body-text max-w-[50ch] m-0 mb-6">
                From first-year drivers to seasoned veterans, our drivers share
                why they chose GP Transco — and why they stay. Pick a story and
                hear it in their own words.
              </p>

              {/* Featured Quote Callout Box */}
              <div className="bg-page border border-line p-5 rounded-xl mb-6 relative">
                <Quotes
                  size={24}
                  weight="fill"
                  className="text-azure/30 absolute top-4 right-4"
                />
                <p className="text-[14.5px] italic text-ink-text leading-relaxed m-0 pr-8">
                  &ldquo;{activeStory.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-ink-text">
                    {activeStory.name}
                  </span>
                  <span className="text-azure font-semibold">
                    {activeStory.role} · {activeStory.tenure}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-line flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={cx(btn, btnSolid, btnHero, "shadow-sm cursor-pointer")}
              >
                View Driver Highlights
                <ArrowRight size={17} />
              </button>

              <span className="font-mono text-xs text-soft-text">
                100% unscripted driver interviews
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Story Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-surface border border-line rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-page">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-azure/10 text-azure flex items-center justify-center">
                  <VideoCamera size={16} weight="bold" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-ink-text m-0">
                    Real Driver Highlights
                  </h4>
                  <p className="text-xs text-body-text m-0">
                    Straight from the road
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="size-8 rounded-full bg-line/60 hover:bg-line text-ink-text flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {DRIVER_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="bg-page border border-line p-5 rounded-xl transition-all hover:border-azure/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-sm text-ink-text">
                      {story.name}
                    </span>
                    <span className="text-xs font-mono text-azure font-semibold">
                      {story.tenure}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-soft-text mb-3">
                    {story.role}
                  </p>
                  <p className="text-sm italic text-body-text leading-relaxed m-0">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-ink-text bg-surface border border-line px-3 py-1 rounded-full">
                    <CheckCircle size={14} className="text-emerald-600" weight="fill" />
                    {story.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
