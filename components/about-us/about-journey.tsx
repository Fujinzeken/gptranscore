"use client";

import { useState, useId } from "react";
import {
  Sparkle,
  Trophy,
  Medal,
  CalendarBlank,
  Truck,
  CheckCircle,
  ArrowRight,
  CaretRight,
  Buildings,
  Cpu,
  ShieldCheck,
  Star,
  Flame,
} from "@phosphor-icons/react/dist/ssr";
import { JOURNEY_ERAS, Era } from "./journey-eras-data";
import { AWARDS } from "./awards-data";
import { cx, label } from "../ui";

export function AboutJourney() {
  const [activeEraId, setActiveEraId] = useState<string>("ai-decade");
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "milestones" | "awards">("overview");

  const currentEra =
    JOURNEY_ERAS.find((e) => e.id === activeEraId) || JOURNEY_ERAS[3];

  return (
    <section
      id="journey"
      className="relative isolate overflow-hidden bg-surface py-[clamp(80px,12vh,140px)] border-b border-rule"
    >
      {/* Anchor targets so both #history and #awards scroll to this unified command center */}
      <div id="history" className="absolute -top-24" aria-hidden="true" />
      <div id="awards" className="absolute -top-24" aria-hidden="true" />

      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 right-1/4 h-[500px] w-[700px] rounded-full bg-azure/5 blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 h-[400px] w-[600px] rounded-full bg-[#25318d]/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1360px] px-gut">
        {/* Section Header */}
        <div className="mx-auto max-w-[840px] text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-page/80 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            <span className={cx(label, "text-[11px] text-ink-text")}>
              2006 – 2026 • 20 YEARS OF REDEFINING TRUCKING
            </span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-ink-text">
            Our Journey & <br className="hidden sm:inline" />
            <span className="text-azure">Accomplishments</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[64ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-body-text">
            Two decades structured into four defining eras. Explore how a single
            truck evolved into an AI-powered national carrier with over 40 industry honors.
          </p>

          {/* High-Level Fleet Proof Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono font-semibold text-mute">
            <span className="flex items-center gap-1.5 bg-page px-3 py-1 rounded-full border border-rule shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-azure" />
              15 Historic Milestones
            </span>
            <span className="flex items-center gap-1.5 bg-page px-3 py-1 rounded-full border border-rule shadow-2xs">
              <Trophy size={14} weight="fill" className="text-azure" />
              40 National Awards
            </span>
            <span className="flex items-center gap-1.5 bg-page px-3 py-1 rounded-full border border-rule shadow-2xs">
              <Truck size={14} weight="fill" className="text-azure" />
              500+ Trucks • 1,800 Trailers
            </span>
          </div>
        </div>

        {/* 1. Master Era Selector Bar (4 Epochs) */}
        <div className="relative mb-8 sm:mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {JOURNEY_ERAS.map((era) => {
              const isActive = era.id === activeEraId;
              const isCurrent = era.id === "ai-decade";

              return (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => {
                    setActiveEraId(era.id);
                    setActiveSubTab("overview");
                  }}
                  className={cx(
                    "group relative flex flex-col justify-between rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-page border-azure shadow-lg shadow-azure/10 ring-2 ring-azure/20 -translate-y-1"
                      : "bg-surface hover:bg-page border-rule hover:border-azure/40 hover:-translate-y-0.5",
                  )}
                >
                  {/* Top Bar: Era Number + Date Range */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={cx(
                        "font-mono text-xs font-bold tracking-wider",
                        isActive ? "text-azure" : "text-mute group-hover:text-ink-text",
                      )}
                    >
                      ERA {era.number}
                    </span>

                    <span
                      className={cx(
                        "font-display text-[11px] font-black tracking-tight px-2 py-0.5 rounded-md",
                        isActive
                          ? "bg-azure text-white"
                          : isCurrent
                          ? "bg-azure/10 text-azure font-bold"
                          : "bg-page text-mute border border-rule",
                      )}
                    >
                      {era.range}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={cx(
                      "font-display text-[15px] sm:text-[16px] font-bold leading-snug line-clamp-2",
                      isActive ? "text-ink-text" : "text-body-text group-hover:text-ink-text",
                    )}
                  >
                    {era.title}
                  </h3>

                  {/* Micro Fleet Tag */}
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-rule/60 text-[11px] font-mono">
                    <span className={isActive ? "text-azure font-bold" : "text-mute"}>
                      {era.fleetStat}
                    </span>

                    {era.awards.length > 0 && (
                      <span className="flex items-center gap-1 text-azure">
                        <Trophy size={12} weight="fill" />
                        <span>{era.awards.length}</span>
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Bento Stage for Selected Era */}
        <div className="rounded-3xl border border-rule bg-page p-6 sm:p-10 shadow-xl relative isolate">
          {/* Era Stage Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-rule">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={cx(label, "text-azure text-xs font-bold")}>
                  ERA {currentEra.number} • {currentEra.range}
                </span>
                <span className="text-rule">•</span>
                <span className="text-xs font-semibold text-mute">
                  {currentEra.theme}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-ink-text tracking-tight">
                {currentEra.title}
              </h3>
            </div>

            {/* Subtab Segmented Switcher */}
            <div className="inline-flex items-center rounded-xl border border-rule bg-surface p-1.5 shadow-sm self-start lg:self-center">
              <button
                type="button"
                onClick={() => setActiveSubTab("overview")}
                className={cx(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
                  activeSubTab === "overview"
                    ? "bg-[#25318d] text-white shadow-sm"
                    : "text-mute hover:text-ink-text hover:bg-page",
                )}
              >
                <span>Era Overview</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab("milestones")}
                className={cx(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
                  activeSubTab === "milestones"
                    ? "bg-[#25318d] text-white shadow-sm"
                    : "text-mute hover:text-ink-text hover:bg-page",
                )}
              >
                <CalendarBlank size={15} weight="bold" />
                <span>Milestones ({currentEra.milestones.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab("awards")}
                className={cx(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer",
                  activeSubTab === "awards"
                    ? "bg-[#25318d] text-white shadow-sm"
                    : "text-mute hover:text-ink-text hover:bg-page",
                )}
              >
                <Trophy size={15} weight="bold" />
                <span>Awards ({currentEra.awards.length})</span>
              </button>
            </div>
          </div>

          {/* Stage View Content */}
          <div className="pt-8">
            {/* TAB 1: ERA OVERVIEW (Summary narrative + Key Highlight + Milestones snapshot) */}
            {activeSubTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Narrative Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-mute uppercase tracking-widest mb-2">
                      Historical Context
                    </h4>
                    <p className="text-base sm:text-lg leading-relaxed text-ink-text">
                      {currentEra.summary}
                    </p>
                  </div>

                  {/* Highlight Callout Box */}
                  <div className="rounded-2xl border border-azure/30 bg-azure/5 p-5 sm:p-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-azure text-white shadow-md">
                      <Sparkle size={20} weight="fill" />
                    </div>
                    <div>
                      <span className={cx(label, "text-azure text-[11px] font-bold")}>
                        KEY STRATEGIC PIVOT
                      </span>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-ink-text leading-snug">
                        {currentEra.keyHighlight}
                      </p>
                    </div>
                  </div>

                  {/* Era Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-rule">
                    <div className="rounded-xl border border-rule bg-surface p-4 text-center">
                      <span className="block font-display text-xl sm:text-2xl font-black text-[#25318d]">
                        {currentEra.range}
                      </span>
                      <span className="text-[11px] font-mono text-mute uppercase">
                        Years Span
                      </span>
                    </div>

                    <div className="rounded-xl border border-rule bg-surface p-4 text-center">
                      <span className="block font-display text-xl sm:text-2xl font-black text-azure">
                        {currentEra.milestones.length}
                      </span>
                      <span className="text-[11px] font-mono text-mute uppercase">
                        Milestones
                      </span>
                    </div>

                    <div className="rounded-xl border border-rule bg-surface p-4 text-center">
                      <span className="block font-display text-xl sm:text-2xl font-black text-ink-text">
                        {currentEra.awards.length}
                      </span>
                      <span className="text-[11px] font-mono text-mute uppercase">
                        Honors Won
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Milestone Timeline Snapshot (5 cols) */}
                <div className="lg:col-span-5 rounded-2xl border border-rule bg-surface p-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-rule">
                    <span className={cx(label, "text-ink-text text-xs")}>
                      TIMELINE SNAPSHOT
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveSubTab("milestones")}
                      className="text-xs font-semibold text-azure hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ArrowRight size={13} weight="bold" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {currentEra.milestones.slice(0, 4).map((m, i) => (
                      <div key={m.title + i} className="flex items-start gap-3">
                        <span className="font-display font-black text-xs text-[#25318d] bg-page border border-rule px-2 py-0.5 rounded-md shrink-0">
                          {m.year}
                        </span>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-ink-text leading-snug">
                            {m.title}
                          </p>
                          <p className="text-xs text-mute mt-0.5 line-clamp-1">
                            {m.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MILESTONES (Clean interactive cards for this era) */}
            {activeSubTab === "milestones" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentEra.milestones.map((m, idx) => (
                    <div
                      key={m.title + idx}
                      className="group relative rounded-2xl border border-rule bg-surface p-5 sm:p-6 transition-all duration-200 hover:border-azure/40 hover:bg-page hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-display text-2xl font-black text-azure tracking-tight">
                          {m.year}
                        </span>
                        <span
                          className={cx(
                            label,
                            "text-[10px] px-2 py-0.5 rounded-full border bg-page text-mute border-rule",
                          )}
                        >
                          {m.tag}
                        </span>
                      </div>

                      <h4 className="font-display text-base font-bold text-ink-text leading-snug">
                        {m.title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-body-text">
                        {m.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: AWARDS & ACCOMPLISHMENTS (Honors belonging to this specific era) */}
            {activeSubTab === "awards" && (
              <div>
                {currentEra.awards.length === 0 ? (
                  <div className="py-12 text-center rounded-2xl border border-dashed border-rule bg-surface">
                    <p className="text-base font-semibold text-ink-text">
                      Bootstrapping & Infrastructure Phase
                    </p>
                    <p className="mt-1 text-sm text-mute max-w-[45ch] mx-auto">
                      During this initial period, GP Transco was focused on building
                      its proprietary systems and driver culture before entering national industry competitions in 2018.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentEra.awards.map((award, aIdx) => (
                      <div
                        key={award.title + aIdx}
                        className="group flex items-start gap-3.5 rounded-2xl border border-rule bg-surface p-4 sm:p-5 transition-all duration-200 hover:border-azure/40 hover:bg-page hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-azure/10 text-azure group-hover:bg-azure group-hover:text-azure-ink transition-colors">
                          <Medal size={20} weight="duotone" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="font-display text-[14px] font-bold text-ink-text leading-snug group-hover:text-azure transition-colors line-clamp-2">
                            {award.title}
                          </h5>
                          <span className="mt-1.5 inline-flex items-center rounded-md bg-page px-2 py-0.5 text-[11px] font-mono font-semibold text-mute border border-rule">
                            {award.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
