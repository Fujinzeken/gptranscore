"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Broadcast,
  Compass,
  Gauge,
  Lightning,
  Moon,
  Rss,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Driver Equipment Section ("Drive Modern Equipment").
 *
 * Cinematic dark plate (bg-ink) following the light DriverOverview section.
 * Rebuilt as a Fleet Cockpit & Spec Terminal instead of a card grid, ensuring
 * zero consecutive card layouts on the page.
 */

interface SpecCategory {
  id: string;
  category: string;
  icon: typeof Gauge;
  highlights: string[];
  specs: { title: string; desc: string }[];
}

const SPEC_CATEGORIES: SpecCategory[] = [
  {
    id: "tech",
    category: "Cabin Tech & Connectivity",
    icon: Compass,
    highlights: ["Apple CarPlay", "Digital Cluster", "iPad Hotspot"],
    specs: [
      {
        title: "Apple CarPlay & Android Auto",
        desc: "Interactive touchscreen display seamlessly integrating your music, maps, and calls.",
      },
      {
        title: "All-Digital Instrument Dash",
        desc: "Crisp digital instrument cluster with customizable driver gauges and trip diagnostics.",
      },
      {
        title: "Unlimited Data & 30GB Hotspot",
        desc: "Stay connected with an assigned iPad Mini tablet for load tracking, navigation, and entertainment.",
      },
    ],
  },
  {
    id: "safety",
    category: "Active Safety Architecture",
    icon: ShieldCheck,
    highlights: [
      "Detroit Assurance 5.0",
      "Active Brake Assist",
      "LED Headlights",
    ],
    specs: [
      {
        title: "Detroit Assurance 5.0 Suite",
        desc: "Full-speed adaptive cruise control, lane keep assist, and forward collision mitigation.",
      },
      {
        title: "Side Guard Radar & Blindspot Assist",
        desc: "Radar sensors detecting pedestrians, objects, and vehicles along the passenger side.",
      },
      {
        title: "Smart Auto-High Beam LED Headlights",
        desc: "Ultra-wide light pattern with automatic dimming for maximum night visibility.",
      },
    ],
  },
  {
    id: "comfort",
    category: "Living & Sleeper Comfort",
    icon: Moon,
    highlights: ["Sleeper Cab", "Solar APU", "Keyless Entry"],
    specs: [
      {
        title: "Premium Ergonomic Sleeper Cab",
        desc: "Spacious sleeper with high-density mattress, swivel seating, and extended headroom.",
      },
      {
        title: "Roof-Mounted Solar APU Bank",
        desc: "Auxiliary power unit running climate controls during 10-hour breaks without engine idling.",
      },
      {
        title: "Maximum Storage & Keyless Entry",
        desc: "Generous overhead cubbies, under-bunk drawers, and keyless remote entry.",
      },
    ],
  },
];

const METRICS_RAIL = [
  { label: "Average Fleet Age", val: "1.5 Yrs" },
  { label: "Transmission", val: "100% Auto" },
  { label: "Cab Power", val: "Solar APU" },
  { label: "Safety Rating", val: "Assurance 5.0" },
];

export function DriverEquipment() {
  const { open: openQuote } = useQuote();
  const [activeTab, setActiveTab] = useState<string>("tech");

  const currentCategory =
    SPEC_CATEGORIES.find((c) => c.id === activeTab) || SPEC_CATEGORIES[0];

  return (
    <section
      id="equipment"
      className="relative isolate bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Subtle azure ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-azure/10 blur-[140px] -z-10"
      />

      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[740px] mx-auto mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure-hi mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Sparkle size={14} weight="bold" />
            State-of-the-Art Fleet
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-paper leading-[0.94]">
            Drive Modern <span className="text-azure-hi">Equipment</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            Our trucks are only 1.5 years old on average (vs. industry average
            of 4 years). Freightliner Cascadias packed with advanced safety,
            comfort, and efficiency features.
          </p>
        </header>

        {/* Feature Hero Image Stage */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "relative h-[clamp(280px,36vw,440px)] w-full max-w-[1280px] mx-auto border border-rule overflow-hidden bg-pitch mb-8",
          )}
        >
          <Image
            src="/ship-hero.jpg"
            alt="Late-model Freightliner Cascadia truck fleet"
            fill
            sizes="100vw"
            className="object-cover object-[55%_45%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
          />

          {/* Floating Spec Badges over photo */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
            <div className="bg-ink/90 border border-rule px-4 py-2 backdrop-blur-sm">
              <p className="font-mono text-xs text-paper font-semibold m-0">
                LATE-MODEL FREIGHTLINER CASCADIAS
              </p>
            </div>

            <div className="flex items-center gap-2">
              {METRICS_RAIL.map((m) => (
                <div
                  key={m.label}
                  className="bg-ink/90 border border-rule px-3 py-1.5 backdrop-blur-sm text-center hidden md:block"
                >
                  <span className="block font-mono text-[10px] text-mute uppercase">
                    {m.label}
                  </span>
                  <span className="font-display text-xs font-bold text-azure-hi">
                    {m.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spec Interactive Console (Tabbed Spec Terminal) */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "max-w-[1280px] mx-auto bg-ink-2 border border-rule p-[clamp(24px,3.5vw,48px)]",
          )}
        >
          {/* Tab selector bar */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-rule mb-8">
            {SPEC_CATEGORIES.map((cat) => {
              const Glyph = cat.icon;
              const active = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={cx(
                    "flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                    active
                      ? "bg-azure text-white shadow-sm"
                      : "bg-ink border border-rule text-mute hover:text-paper hover:border-azure/50",
                  )}
                >
                  <Glyph size={16} weight={active ? "fill" : "bold"} />
                  {cat.category}
                </button>
              );
            })}
          </div>

          {/* Category Specs Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentCategory.specs.map((spec, i) => (
              <div
                key={spec.title}
                className="border-l-2 border-azure pl-5 py-1"
              >
                <h4 className="font-display text-[17px] font-bold text-paper m-0">
                  {spec.title}
                </h4>
                <p className="mt-2 text-[14px] leading-[1.65] text-mute m-0">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
