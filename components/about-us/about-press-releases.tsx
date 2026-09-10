"use client";

import { useState, useRef, useEffect } from "react";
import {
  Newspaper,
  CaretLeft,
  CaretRight,
  CurrencyDollar,
  Trophy,
  ShieldCheck,
  Cpu,
  Buildings,
  ChartLineUp,
  HandHeart,
  UsersThree,
  X,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import { PRESS_RELEASES, PressRelease } from "./press-releases-data";
import { cx, label, btn, btnGhost, btnSolid } from "../ui";

function getCategoryIcon(pr: PressRelease) {
  const text = (pr.title + " " + pr.description).toLowerCase();
  if (text.includes("innovator") || text.includes("award") || text.includes("recognized") || text.includes("best trucking")) {
    return Trophy;
  }
  if (text.includes("safety") || text.includes("esmart")) {
    return ShieldCheck;
  }
  if (text.includes("trafficking") || text.includes("humanitarian")) {
    return HandHeart;
  }
  if (text.includes("women") || text.includes("diversity") || text.includes("inclusion")) {
    return UsersThree;
  }
  if (text.includes("inc.") || text.includes("growth") || text.includes("ranking")) {
    return ChartLineUp;
  }
  if (text.includes("ai") || text.includes("technology") || text.includes("tms")) {
    return Cpu;
  }
  if (text.includes("pay") || text.includes("earning") || text.includes("compensation")) {
    return CurrencyDollar;
  }
  return Buildings;
}

export function AboutPressReleases() {
  const [activeModal, setActiveModal] = useState<PressRelease | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragDistance = useRef(0);

  const checkScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    const cardWidth = 340;
    const idx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(idx, PRESS_RELEASES.length - 1));
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    if (!railRef.current) return;
    const offset = direction === "left" ? -400 : 400;
    railRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

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

  const handleCardClick = (pr: PressRelease) => {
    if (dragDistance.current > 5) return;
    setActiveModal(pr);
  };

  return (
    <section
      id="press-releases"
      className="relative isolate overflow-hidden bg-ink py-[clamp(80px,12vh,140px)] border-b border-rule-lit"
    >
      {/* Dynamic Brand Ambient Lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-0 left-1/3 h-[500px] w-[700px] rounded-full bg-azure/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-azure/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-12 px-gut">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rule-lit bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-hi animate-pulse" />
            <span className={cx(label, "text-[11px] text-paper")}>NEWSROOM</span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-paper">
            Press <span className="text-azure-hi">Releases</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
            The latest news, technological milestones, and achievements from GP Transco.
          </p>
        </div>

        {/* Carousel Rail */}
        <div className="relative">
          <div
            ref={railRef}
            onScroll={checkScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: "grab", scrollbarWidth: "none" }}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-gut [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none"
          >
            {PRESS_RELEASES.map((pr, idx) => {
              const Icon = getCategoryIcon(pr);
              return (
                <div
                  key={pr.title + idx}
                  onClick={() => handleCardClick(pr)}
                  className="group relative flex w-[82vw] sm:w-[360px] md:w-[380px] shrink-0 flex-col justify-between rounded-2xl border border-rule-lit bg-ink-2/90 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-azure/60 hover:bg-white/[0.06] hover:-translate-y-1 cursor-pointer shadow-lg"
                >
                  <div>
                    {/* Category Icon & Date */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-azure/15 text-azure-hi border border-azure/20 group-hover:bg-azure group-hover:text-azure-ink transition-colors duration-200">
                        <Icon size={22} weight="duotone" />
                      </div>
                      <span className={cx(label, "text-[11px] text-mute/80")}>
                        {pr.date}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-[17px] sm:text-[18px] font-bold leading-snug text-paper transition-colors duration-200 group-hover:text-azure-hi line-clamp-3">
                      {pr.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 text-[13.5px] leading-relaxed text-mute line-clamp-3">
                      {pr.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 flex items-center gap-2 pt-4 border-t border-rule-lit/50 text-[13px] font-semibold text-azure-hi group-hover:text-paper transition-colors">
                    <Newspaper size={16} weight="bold" />
                    <span>Read Release</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4 px-gut">
            <button
              type="button"
              aria-label="Previous releases"
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              className={cx(
                "flex h-11 w-11 items-center justify-center rounded-full border border-rule-lit bg-white/[0.04] text-paper transition-all",
                canScrollLeft
                  ? "hover:bg-white/[0.1] hover:border-azure active:scale-95 cursor-pointer"
                  : "opacity-30 cursor-not-allowed",
              )}
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {PRESS_RELEASES.slice(0, 6).map((_, idx) => (
                <span
                  key={idx}
                  className={cx(
                    "h-1.5 rounded-full transition-all duration-300",
                    currentIndex === idx
                      ? "w-6 bg-azure-hi"
                      : "w-1.5 bg-rule-lit",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next releases"
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              className={cx(
                "flex h-11 w-11 items-center justify-center rounded-full border border-rule-lit bg-white/[0.04] text-paper transition-all",
                canScrollRight
                  ? "hover:bg-white/[0.1] hover:border-azure active:scale-95 cursor-pointer"
                  : "opacity-30 cursor-not-allowed",
              )}
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Full Modal Viewer for Press Release Content */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-rule-lit bg-ink p-6 sm:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-rule-lit bg-white/[0.05] text-mute hover:text-paper hover:bg-white/[0.1] transition-all cursor-pointer"
            >
              <X size={18} weight="bold" />
            </button>

            {/* Date Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rule-lit bg-white/[0.04] px-3.5 py-1 mb-4">
              <span className={cx(label, "text-[11px] text-azure-hi")}>
                {activeModal.date}
              </span>
            </div>

            {/* Modal Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight text-paper">
              {activeModal.title}
            </h3>

            {/* Description Subtitle */}
            <p className="mt-3 text-base font-medium text-azure-hi/90 leading-relaxed border-b border-rule-lit/60 pb-5">
              {activeModal.description}
            </p>

            {/* Full Body Text */}
            <div className="mt-6 whitespace-pre-line text-sm sm:text-base leading-relaxed text-mute font-normal space-y-4">
              {activeModal.body || activeModal.description}
            </div>

            {/* Modal Footer Link */}
            {activeModal.url && (
              <div className="mt-8 pt-6 border-t border-rule-lit/60 flex justify-between items-center flex-wrap gap-4">
                <a
                  href={activeModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(
                    btn,
                    btnGhost,
                    "h-10 px-4 text-[13px] gap-2 hover:text-azure-hi",
                  )}
                >
                  <span>Official Wire Release</span>
                  <ArrowSquareOut size={16} weight="bold" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className={cx(btn, btnSolid, "h-10 px-5 text-[13px] cursor-pointer")}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
