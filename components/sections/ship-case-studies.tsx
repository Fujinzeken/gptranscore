"use client";

import Image from "next/image";
import { ArrowRight, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnHero, btnSolid, cx, label } from "../ui";

/**
 * Case Studies Section.
 *
 * Sits on a cinematic dark plate (bg-ink) following the light ShipCustomers section,
 * maintaining the strict alternating light/dark rhythm.
 *
 * Uses the exact copy and real performance metrics from the live website.
 */

interface CaseStudyItem {
  client: string;
  image: string;
  alt: string;
  stat1Value: string;
  stat1Label: string;
  stat1Sub: string;
  stat2Value: string;
  stat2Label: string;
  stat2Sub: string;
  body: string;
  href: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    client: "GP Transco & PaperWorks",
    image: "/fleet-dock.jpg",
    alt: "GP Transco freight carrier operations for PaperWorks.",
    stat1Value: "8,500+",
    stat1Label: "Loads hauled per year",
    stat1Sub: "Trusted partnership",
    stat2Value: "98.7%",
    stat2Label: "On-time delivery rate",
    stat2Sub: "Industry-leading performance",
    body: "A partnership built on trust and communication. GP Transco has become PaperWorks' preferred mid-sized carrier, covering 5 locations from Nebraska to Massachusetts.",
    href: "/company",
  },
  {
    client: "GP Transco & Dunlop + Falken Tires",
    image: "/case-haul.jpg",
    alt: "GP Transco driver hauling for Dunlop and Falken Tires.",
    stat1Value: "550+",
    stat1Label: "Loads per year (projected)",
    stat1Sub: "Rapid growth partnership",
    stat2Value: "#1",
    stat2Label: "Carrier in quarterly bid",
    stat2Sub: "Top-ranked performance",
    body: "From 2–3 trailers per week to 2–3 trailers per day. GP Transco is now the #1 carrier in the quarterly bid for Dunlop + Falken.",
    href: "/company",
  },
];

export function ShipCaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative isolate bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Subtle azure ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[500px] w-[800px] bg-azure/8 blur-[140px] -z-10"
      />

      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[720px] mx-auto mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <TrendUp size={14} weight="bold" />
            Real Results
          </p>

          <h2 className="type-display m-0 text-[clamp(28px,4.2vw,56px)] text-paper leading-[0.96]">
            Case <span className="text-azure-hi">Studies</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            See how industry leaders trust GP Transco to deliver measurable
            results.
          </p>
        </header>

        {/* 2 Case Study Cards */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1280px] mx-auto",
          )}
        >
          {CASE_STUDIES.map((study) => (
            <div
              key={study.client}
              className="bg-ink-2 border border-rule flex flex-col justify-between overflow-hidden group/card transition-colors duration-200 hover:border-azure/60"
            >
              <div>
                {/* Media banner */}
                <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden bg-pitch">
                  <Image
                    src={study.image}
                    alt={study.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover/card:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent"
                  />

                  {/* Client badge */}
                  <div className="absolute top-4 left-4 bg-ink/90 border border-rule px-3.5 py-1.5 backdrop-blur-sm">
                    <span className="font-mono text-[11px] font-semibold text-paper uppercase tracking-[0.14em]">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-[clamp(24px,3.2vw,40px)]">
                  {/* Two key metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-rule">
                    <div className="bg-ink/60 border border-rule p-4">
                      <p className="font-display text-[clamp(28px,2.8vw,38px)] font-black text-azure-hi leading-none tabular-nums m-0">
                        {study.stat1Value}
                      </p>
                      <p className="font-display text-[14px] font-bold text-paper mt-2 mb-1">
                        {study.stat1Label}
                      </p>
                      <p className="text-[12px] text-mute m-0">
                        {study.stat1Sub}
                      </p>
                    </div>

                    <div className="bg-ink/60 border border-rule p-4">
                      <p className="font-display text-[clamp(28px,2.8vw,38px)] font-black text-azure-hi leading-none tabular-nums m-0">
                        {study.stat2Value}
                      </p>
                      <p className="font-display text-[14px] font-bold text-paper mt-2 mb-1">
                        {study.stat2Label}
                      </p>
                      <p className="text-[12px] text-mute m-0">
                        {study.stat2Sub}
                      </p>
                    </div>
                  </div>

                  {/* Narrative body */}
                  <p className="mt-6 text-[14.5px] leading-[1.65] text-mute m-0">
                    {study.body}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-[clamp(24px,3.2vw,40px)] pt-0">
                <a
                  href={study.href}
                  className={cx(
                    btn,
                    btnSolid,
                    btnHero,
                    "w-full justify-center shadow-sm",
                  )}
                >
                  View Case Study
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
