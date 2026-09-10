"use client";

import { useState, useRef, useEffect } from "react";
import {
  Trophy,
  SquaresFour,
  ClockCounterClockwise,
  CaretLeft,
  CaretRight,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import { AWARDS, Award } from "./awards-data";
import { cx, label } from "../ui";

export function AboutAwards() {
  const [viewMode, setViewMode] = useState<"timeline" | "grid">("timeline");
  const railRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragDistance = useRef(0);

  // Group awards by year
  const groupedByYear = AWARDS.reduce<Record<string, Award[]>>((acc, award) => {
    const yearKey = award.year.split("-")[0];
    if (!acc[yearKey]) acc[yearKey] = [];
    acc[yearKey].push(award);
    return acc;
  }, {});

  // Sorted year keys descending (most recent first) or ascending as in original (2018 -> 2026)
  const years = Object.keys(groupedByYear).sort(
    (a, b) => parseInt(a, 10) - parseInt(b, 10),
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!railRef.current) return;
    isDragging.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - railRef.current.offsetLeft;
    scrollLeftStart.current = railRef.current.scrollLeft;
    railRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !railRef.current) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    dragDistance.current = Math.abs(walk);
    railRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging.current || !railRef.current) return;
    isDragging.current = false;
    railRef.current.style.cursor = "grab";
  };

  const scroll = (direction: "left" | "right") => {
    if (!railRef.current) return;
    const offset = direction === "left" ? -380 : 380;
    railRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="awards"
      className="relative isolate overflow-hidden bg-page py-[clamp(80px,12vh,140px)] border-b border-rule"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[700px] rounded-full bg-azure/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1360px] px-gut">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center mb-10 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface/80 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            <span className={cx(label, "text-[11px] text-ink-text")}>
              RECOGNITION
            </span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-ink-text">
            Awards & <span className="text-azure">Accomplishments</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[62ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-body-text">
            Recognized by industry leaders for safety, service, and workplace
            excellence across two decades.
          </p>
        </div>

        {/* View Switcher Toggle (Desktop) */}
        <div className="hidden md:flex justify-center mb-10">
          <div className="inline-flex items-center rounded-xl border border-rule bg-surface p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={cx(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
                viewMode === "grid"
                  ? "bg-[#25318d] text-white shadow-sm"
                  : "text-mute hover:text-ink-text hover:bg-page",
              )}
            >
              <SquaresFour size={16} weight="bold" />
              <span>Grid View</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("timeline")}
              className={cx(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
                viewMode === "timeline"
                  ? "bg-[#25318d] text-white shadow-sm"
                  : "text-mute hover:text-ink-text hover:bg-page",
              )}
            >
              <ClockCounterClockwise size={16} weight="bold" />
              <span>Timeline View</span>
            </button>
          </div>
        </div>

        {/* Mobile View / Grid Mode View */}
        <div
          className={cx(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6",
            viewMode === "timeline" ? "md:hidden" : "",
          )}
        >
          {AWARDS.map((award, idx) => (
            <div
              key={award.title + idx}
              className="group relative flex items-start gap-4 rounded-2xl border border-rule bg-surface p-6 shadow-sm transition-all duration-300 hover:border-azure/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-azure/10 text-azure group-hover:bg-azure group-hover:text-azure-ink transition-colors duration-200">
                <Medal size={22} weight="duotone" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[15px] font-bold leading-snug text-ink-text group-hover:text-azure transition-colors">
                  {award.title}
                </h3>
                <span className="mt-2 inline-flex items-center rounded-md bg-page px-2 py-0.5 text-xs font-mono font-semibold text-mute border border-rule">
                  {award.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline View (Desktop only, as shown in Screenshots) */}
        {viewMode === "timeline" && (
          <div className="relative hidden md:block">
            {/* Guide hint */}
            <div className="flex items-center justify-center gap-2 mb-6 text-mute text-xs font-medium">
              <CaretLeft size={14} weight="bold" className="animate-pulse text-azure" />
              <span>Drag or scroll horizontally to explore by year</span>
              <CaretRight size={14} weight="bold" className="animate-pulse text-azure" />
            </div>

            {/* Horizontal Timeline Connector Bar */}
            <div
              aria-hidden="true"
              className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#25318d] to-transparent z-0"
            />

            {/* Horizontal Scrollable Rail */}
            <div
              ref={railRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: "grab", scrollbarWidth: "thin" }}
              className="overflow-x-auto pb-8 pt-2 select-none"
            >
              <div className="flex gap-6 min-w-max px-8">
                {years.map((year) => (
                  <div
                    key={year}
                    className="flex flex-col items-center w-[240px] shrink-0"
                  >
                    {/* Year Circular Badge */}
                    <div className="relative mb-6 z-10">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25318d] text-white shadow-lg shadow-[#25318d]/30 border-4 border-page">
                        <span className="font-display font-black text-lg">
                          {year}
                        </span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#25318d]" />
                    </div>

                    {/* Column Stack of Awards for this Year */}
                    <div className="space-y-3 w-full">
                      {groupedByYear[year].map((award, aIdx) => (
                        <div
                          key={award.title + aIdx}
                          className="group relative rounded-xl border border-rule bg-surface p-4 shadow-sm transition-all duration-300 hover:border-azure/40 hover:shadow-md hover:-translate-y-0.5"
                        >
                          <div className="flex items-start gap-3">
                            <Medal
                              size={18}
                              weight="duotone"
                              className="text-azure shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                            />
                            <p className="text-[13.5px] font-semibold text-ink-text leading-snug">
                              {award.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
