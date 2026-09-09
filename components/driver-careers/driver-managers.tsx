"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  CaretLeft,
  CaretRight,
  ShieldCheck,
  PhoneCall,
  X,
  Quotes,
  CheckCircle,
  Medal,
  IdentificationBadge,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnSolid, btnHero, btnOutline, cx, label } from "../ui";

/**
 * Driver Managers Section ("Meet Our Driver Managers").
 *
 * Sits on a 100% light field (bg-page) following the dark DriverTransparency section.
 * Features an interactive Manager Spotlight Showcase:
 * - 5 Manager Selector pills across the top
 * - High-res cut-out portrait of the active Driver Manager on the left
 * - Impactful profile, key pillars, and "Read Full Bio" CTA on the right
 * - Complete biographical modal with rich history, military service, and driver-first philosophy
 */

interface Manager {
  id: string;
  name: string;
  shortName: string;
  title: string;
  badge: string;
  image: string;
  intro: string;
  highlights: string[];
  bio: string[];
}

const MANAGERS: Manager[] = [
  {
    id: "jonathon",
    name: "Jonathon Schultz",
    shortName: "Jonathon",
    title: "Driver Manager",
    badge: "12-Year U.S. Army Veteran",
    image: "/managers/jonathon.png",
    intro:
      "A 12-year U.S. Army veteran, Jon brings military-grade discipline and a partnership mindset to dispatch. He treats every driver as a true teammate — built on trust, straight talk, and accountability that runs both ways.",
    highlights: [
      "12 Years U.S. Army Leadership",
      "5 Years Fleet Dispatch & Breakdown Support",
      "Driver Partnership & Mileage Optimization",
    ],
    bio: [
      "With 12 years of service in the U.S. Army, Jon developed the discipline, leadership, and problem-solving skills that continue to shape his career in the trucking industry. He began his transportation career five years ago in a breakdown department, where he gained valuable experience supporting drivers during critical situations. From there, he advanced into a Driver Manager role with his previous carrier and is now entering his third year with GP Transco.",
      "Jon's success as a Driver Manager is built on the strong relationships he develops with his drivers. He believes that drivers and Driver Managers are true partners, and that success is achieved through consistent communication, mutual accountability, and trust. He invests time in coaching each driver to embrace the GP way while fostering open communication throughout the workday.",
      "Taking a driver-first approach, Jon focuses on each driver's individual goals and works to help them maximize every opportunity available at GP Transco. By leveraging technology, maximizing miles, improving operational efficiency, and providing dependable support, he strives to position every driver for long-term success. He holds his drivers accountable for their performance while encouraging them to hold him to the same standard.",
    ],
  },
  {
    id: "ebony",
    name: "Ebony Rogers",
    shortName: "Ebony",
    title: "Driver Manager & CDL Holder",
    badge: "9+ Years Freight · Active CDL Holder",
    image: "/managers/ebony.png",
    intro:
      "With nine years in transportation and a CDL of her own, Ebony knows both sides of the windshield. She leads with a driver-first philosophy — making sure every driver feels heard, supported, and positioned to earn more and grow at GP Transco.",
    highlights: [
      "Holds an Active CDL-A License",
      "9+ Years Fleet Operations & Payroll",
      "Driver Growth & Earning Advocate",
    ],
    bio: [
      "With more than nine years of experience in the transportation industry, Ebony brings extensive expertise in driver management, department development, payroll, scheduling, and efficient fleet operations to GP Transco. Throughout her career, she has remained committed to a core principle: driver satisfaction is the foundation of a thriving company.",
      "By combining her Faith, operational expertise, and a driver-first philosophy, Ebony fosters a trusted environment where every driver feels heard, supported, respected, and positioned for long-term success. As a manager, she serves as a dedicated advocate and resource, ensuring drivers have the tools, information, and support they need to perform at their highest level.",
      "As a CDL holder herself, Ebony understands the challenges and responsibilities of both life on the road and operations in the office. This firsthand perspective is a defining aspect of her leadership style, allowing her to anticipate challenges, provide practical solutions, and build strong, relatable relationships with drivers.",
    ],
  },
  {
    id: "carly",
    name: "Carly Petersen",
    shortName: "Carly",
    title: "Driver Manager",
    badge: "Logistics & Counseling Background",
    image: "/managers/carly.png",
    intro:
      "With a background in both freight and counseling, Carly brings a rare mix of practical know-how and genuine empathy. She puts drivers first — building trust and creating an environment where every driver feels heard, valued, and supported.",
    highlights: [
      "Freight Operations & Counseling Background",
      "Driver Retention & Wellness Specialist",
      "Proactive Route Planning & Support",
    ],
    bio: [
      "As a Driver Manager at GP Transco, Carly Petersen has found her role to be both rewarding and fulfilling, offering continuous opportunities for professional and personal growth. Carly is passionate about leading fleet operations, supporting drivers, improving performance, and contributing to a culture built on safety, efficiency, and excellence.",
      "With a background in both freight and counseling, Carly brings a unique perspective to driver management. Her transportation experience gives her a practical understanding of the challenges drivers face every day, helping her make informed decisions that support both operational success and driver needs. Her counseling background enhances her ability to communicate effectively, listen with empathy, and help drivers navigate challenges with respect and understanding.",
      "Carly believes that successful driver management begins with putting drivers first. By building strong relationships, fostering trust, and creating an environment where drivers feel heard, valued, and supported, she helps empower her team to succeed both on and off the road.",
    ],
  },
  {
    id: "jim",
    name: "Jim Hernandez",
    shortName: "Jim",
    title: "Driver Manager & Dispatcher",
    badge: "6-Yr Military Radio Operator · 10 Yrs Logistics",
    image: "/managers/jim.png",
    intro:
      "A military veteran with 10 years of combined experience in communications and logistics, Jim brings discipline and a people-first approach to dispatch. He believes clear communication, trust, and mutual respect are the foundation of keeping freight moving safely and on schedule.",
    highlights: [
      "6 Years Military Radio Operator",
      "4 Years Specialized Freight Dispatch",
      "Route Optimization & High-Pressure Comms",
    ],
    bio: [
      "Jim is a dedicated and dependable transportation professional with 10 years of combined experience in military communications and the logistics industry. He proudly served 6 years in the military as a Radio Operator, where he developed exceptional communication, critical thinking, and decision-making skills while operating in high-pressure environments.",
      "After completing his military service, Jim built a successful career in transportation, gaining 4 years of experience as a Freight Broker and Dispatcher. He developed his expertise while working with Viz Point and John Express, and currently serves as a Dispatcher with GP Transco. Throughout his career, he has coordinated freight, managed driver schedules, optimized routes, and built strong relationships with both drivers and customers.",
      "Jim is passionate about working with truck drivers and believes that clear communication, trust, and mutual respect are the foundation of a successful dispatch operation. He understands the day-to-day challenges drivers face and is committed to providing dependable support that helps keep freight moving safely, efficiently, and on schedule.",
    ],
  },
  {
    id: "daniel",
    name: "Daniel Supitilov",
    shortName: "Daniel",
    title: "Senior Driver Manager",
    badge: "U.S. Air Force Veteran · 16 Yrs Industry",
    image: "/managers/daniel.png",
    intro:
      "A U.S. Air Force veteran with 16 years in transportation, Daniel leads with a driver-first approach built on trust and credibility. He's committed to understanding each driver's challenges and providing practical, results-oriented support that helps them reach their full earning potential.",
    highlights: [
      "U.S. Air Force Veteran",
      "16 Years Fleet Leadership",
      "Data-Driven Mileage & Profit Maximizer",
    ],
    bio: [
      "Daniel is a U.S. Air Force veteran and transportation industry leader with 16 years of experience driving operational success through a strong driver-first approach. He is passionate about building trust and credibility with drivers by understanding their challenges and providing practical, results-oriented support.",
      "Daniel is known for maximizing driver success at GP Transco through effective communication, relationship building, and a commitment to helping each driver reach their full earning potential. He leverages technology, data-driven decision-making, and strategic planning to optimize miles, improve efficiency, and create win-win outcomes for both drivers and the organization.",
      "Dedicated to delivering exceptional service, Daniel fosters driver satisfaction and ensures long-term success for every member of the team.",
    ],
  },
];

export function DriverManagers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const activeManager = MANAGERS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? MANAGERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === MANAGERS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === "Escape") setModalOpen(false);
      } else {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <section
      id="managers"
      className="bg-page py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      <Reveal>
        {/* Section Header */}
        <header
          className={cx(
            revealItem,
            "text-center max-w-[760px] mx-auto mb-[clamp(40px,6vh,64px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Users size={15} weight="bold" />
            Your Support Team
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Meet Our <span className="text-azure">Driver Managers</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Your driver manager is your advocate, problem-solver, and single point
            of contact. Every one of them takes a driver-first approach — because
            when drivers succeed, everyone does.
          </p>
        </header>

        {/* Manager Showcase Bento Stage */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "max-w-[1280px] mx-auto bg-surface border border-line shadow-sm overflow-hidden flex flex-col",
          )}
        >
          {/* Top Manager Selector Navigation Pills */}
          <div className="bg-page/80 border-b border-line px-4 sm:px-6 py-3 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 shrink-0">
              {MANAGERS.map((m, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={cx(
                      "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 select-none shrink-0",
                      isSelected
                        ? "bg-azure text-white shadow-xs font-bold"
                        : "bg-surface text-ink-text border border-line hover:border-azure/40",
                    )}
                  >
                    <span className="font-display">{m.shortName}</span>
                    {isSelected && (
                      <span className="size-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-soft-text font-medium">
                {currentIndex + 1} / {MANAGERS.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="size-8 rounded-full border border-line bg-surface hover:bg-page text-ink-text flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous manager"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="size-8 rounded-full border border-line bg-surface hover:bg-page text-ink-text flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next manager"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Showcase Grid: Left Image, Right Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">
            {/* Left Column: Manager Cutout Image Frame (5 Cols) */}
            <div className="lg:col-span-5 relative bg-gradient-to-br from-azure/5 via-page to-azure/10 flex items-end justify-center pt-8 px-6 lg:px-8 border-b lg:border-b-0 lg:border-r border-line overflow-hidden min-h-[440px] sm:min-h-[520px] lg:min-h-[600px]">
              {/* Radial back-glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-azure/20 via-transparent to-transparent"
              />

              {/* Manager Cutout Portrait */}
              <div className="relative z-10 w-full h-[400px] sm:h-[480px] lg:h-[560px] flex items-end justify-center">
                <Image
                  key={activeManager.id}
                  src={activeManager.image}
                  alt={activeManager.name}
                  width={680}
                  height={840}
                  priority
                  className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-2xl transition-all duration-500 ease-out select-none pointer-events-none"
                />
              </div>

              {/* Floating Low Driver-to-Manager Ratio Badge */}
              <div className="absolute top-6 left-6 z-20 bg-surface/95 backdrop-blur-sm border border-line px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold text-ink-text uppercase tracking-wide">
                  1:25 Max Driver Ratio
                </span>
              </div>
            </div>

            {/* Right Column: Narrative, Badges & Actions (7 Cols) */}
            <div className="lg:col-span-7 p-[clamp(28px,4.5vw,56px)] flex flex-col justify-between">
              <div>
                {/* Eyebrow and Experience Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-line mb-6">
                  <span className={cx(label, "text-azure")}>
                    {activeManager.title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-text font-semibold bg-page border border-line px-3 py-1 rounded-full">
                    <Medal size={14} className="text-azure" weight="bold" />
                    {activeManager.badge}
                  </span>
                </div>

                {/* Big Manager Name */}
                <h3 className="type-display text-[clamp(44px,5.5vw,78px)] font-black text-ink-text leading-[0.88] uppercase tracking-[-0.03em] m-0 mb-3">
                  {activeManager.shortName}
                </h3>

                <p className="font-mono text-xs text-soft-text uppercase tracking-wider mb-5">
                  {activeManager.name} · Dedicated Driver Manager
                </p>

                {/* Intro Copy */}
                <p className="text-[clamp(15px,1.15vw,17.5px)] leading-[1.68] text-body-text max-w-[54ch] m-0 mb-6">
                  {activeManager.intro}
                </p>

                {/* 3 Key Operational Pillars */}
                <div className="space-y-2.5 mb-8">
                  {activeManager.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-ink-text"
                    >
                      <CheckCircle
                        size={16}
                        weight="fill"
                        className="text-azure shrink-0"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row with Read Full Bio & Mobile Arrows */}
              <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className={cx(btn, btnSolid, btnHero, "shadow-sm cursor-pointer")}
                >
                  Read Full Bio
                  <ArrowRight size={17} />
                </button>

                {/* Mobile Arrows */}
                <div className="flex sm:hidden items-center gap-3">
                  <span className="font-mono text-xs text-soft-text">
                    {currentIndex + 1} / {MANAGERS.length}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="size-8 rounded-full border border-line bg-surface hover:bg-page text-ink-text flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous manager"
                    >
                      <CaretLeft size={16} weight="bold" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="size-8 rounded-full border border-line bg-surface hover:bg-page text-ink-text flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next manager"
                    >
                      <CaretRight size={16} weight="bold" />
                    </button>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-soft-text">
                  <span>Use keys</span>
                  <kbd className="px-1.5 py-0.5 bg-page border border-line rounded text-[10px]">
                    ←
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-page border border-line rounded text-[10px]">
                    →
                  </kbd>
                  <span>to browse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Full Manager Bio Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-surface border border-line rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-page">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-azure/10 text-azure flex items-center justify-center font-display font-bold">
                  {activeManager.shortName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-ink-text m-0">
                    {activeManager.name}
                  </h4>
                  <p className="text-xs text-azure font-mono m-0 font-medium">
                    {activeManager.badge}
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

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              {/* Quote callout box */}
              <div className="bg-azure/5 border border-azure/20 p-4 rounded-xl relative">
                <Quotes size={24} weight="fill" className="text-azure/30 mb-1" />
                <p className="text-sm italic font-medium text-ink-text m-0 leading-relaxed">
                  &ldquo;{activeManager.intro}&rdquo;
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 pt-2">
                {activeManager.bio.map((para, i) => (
                  <p
                    key={i}
                    className="text-[14.5px] leading-[1.7] text-body-text m-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-line bg-page flex items-center justify-between">
              <span className="text-xs font-mono text-soft-text">
                Dedicated GP Transco Operations Team
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className={cx(btn, btnOutline, "h-9 px-4 text-xs font-semibold cursor-pointer")}
              >
                Close Bio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
