"use client";

import { useState } from "react";
import {
  ShieldCheck,
  DeviceMobile,
  MapPin,
  Receipt,
  Scan,
  PhoneCall,
  NavigationArrow,
  CheckCircle,
  WarningCircle,
  User,
  Calendar,
  Clock,
  CurrencyDollar,
  FileText,
  CaretRight,
  Headset,
  Wrench,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Driver Transparency & Driver App Section.
 *
 * Cinematic dark plate (bg-ink) following the light DriverHighlights section.
 * Rebuilt as an interactive Driver App Telemetry Stage:
 * - Left: "THE DRIVER APP / IN FULL CONTROL" narrative, 4 interactive capability selectors
 * - Right: High-fidelity interactive device mockup simulating the live OpenRoad driver OS
 */

type AppScreen = "dispatch" | "pay" | "scanner" | "directory";

interface FeatureOption {
  id: AppScreen;
  title: string;
  subtitle: string;
  icon: typeof MapPin;
}

const FEATURE_OPTIONS: FeatureOption[] = [
  {
    id: "dispatch",
    title: "Live load info & route maps",
    subtitle: "Turn-by-turn truck routing, delivery windows & pickup numbers",
    icon: MapPin,
  },
  {
    id: "pay",
    title: "Pay, statements & mileage",
    subtitle: "Real-time CPM telemetry, itemized settlements & YTD tracking",
    icon: Receipt,
  },
  {
    id: "scanner",
    title: "Scan BOLs, scale tickets & more",
    subtitle: "Instant in-cab edge-detection OCR for same-day payroll clearance",
    icon: Scan,
  },
  {
    id: "directory",
    title: "One-tap company directory",
    subtitle: "Direct line to your assigned driver manager, safety & 24/7 shop",
    icon: PhoneCall,
  },
];

export function DriverTransparency() {
  const [activeScreen, setActiveScreen] = useState<AppScreen>("dispatch");

  return (
    <section
      id="transparency"
      className="relative isolate bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Cinematic ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-[550px] w-[550px] bg-azure/10 blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-1/4 h-[550px] w-[550px] bg-emerald-500/5 blur-[160px] -z-10"
      />

      <Reveal>
        {/* Section Header */}
        <header
          className={cx(
            revealItem,
            "text-center max-w-[760px] mx-auto mb-[clamp(44px,7vh,80px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure-hi mb-3 flex items-center justify-center gap-2",
            )}
          >
            <ShieldCheck size={15} weight="bold" />
            Always In Control
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-paper leading-[0.94]">
            Transparency & <span className="text-azure-hi">Convenience</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            Everything you need lives right in the GP Transco driver app. Your
            performance, your pay, your standing — always transparent, always in
            your hands. Plus the tools to make life on the road easier.
          </p>
        </header>

        {/* 2-Column Telemetry Stage */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",
          )}
        >
          {/* Left Column: Command & Feature Selectors (5 Cols) */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <span className={cx(label, "text-azure-hi block mb-2")}>
                The Driver App
              </span>
              <h3 className="type-display text-[clamp(34px,4.2vw,56px)] font-black text-paper uppercase tracking-tight leading-[0.92] m-0 mb-4">
                In Full <br />
                <span className="text-azure-hi">Control</span>
              </h3>
              <p className="text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-mute m-0 max-w-[54ch]">
                View load details on an interactive map, check pay statements and
                mileage, scan documents on the go, browse company & equipment
                docs, call any department with one tap, collect your driver awards,
                and refer other drivers to earn $3,000 per hire — all in one place.
              </p>
            </div>

            {/* 4 Interactive Feature Selector Cards */}
            <div className="space-y-3 pt-2">
              {FEATURE_OPTIONS.map((feat) => {
                const Icon = feat.icon;
                const isActive = activeScreen === feat.id;
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => setActiveScreen(feat.id)}
                    className={cx(
                      "w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4 group",
                      isActive
                        ? "bg-ink-2 border-azure shadow-[0_0_24px_rgba(0,128,255,0.18)]"
                        : "bg-ink/60 border-rule hover:border-rule-lit hover:bg-ink-2/60",
                    )}
                  >
                    <div
                      className={cx(
                        "size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200",
                        isActive
                          ? "bg-azure text-white shadow-sm"
                          : "bg-ink-2 border border-rule text-mute group-hover:text-paper group-hover:border-azure/40",
                      )}
                    >
                      <Icon size={20} weight={isActive ? "fill" : "bold"} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cx(
                            "font-display text-[15.5px] font-bold leading-snug tracking-[-0.01em]",
                            isActive ? "text-paper" : "text-paper/85 group-hover:text-paper",
                          )}
                        >
                          {feat.title}
                        </span>
                        {isActive && (
                          <span className="font-mono text-[10px] text-azure-hi uppercase font-semibold tracking-wider shrink-0 bg-azure/10 px-2 py-0.5 rounded border border-azure/30">
                            Active Preview
                          </span>
                        )}
                      </div>
                      <p className="text-[12.5px] text-mute leading-normal mt-1 m-0">
                        {feat.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Available Platform Note */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-mute">
              <DeviceMobile size={18} className="text-azure-hi shrink-0" />
              <span>
                Available on the GP Transco driver tablet & phone app (iOS & Android)
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Device Frame (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Outer Phone Shell with metallic bezel & soft drop shadow */}
              <div className="bg-[#0b1019] border-2 border-[#1c2738] rounded-[44px] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative">
                {/* Dynamic Island / Camera Pill */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="size-2 rounded-full bg-[#1c2738]" />
                  <div className="size-2 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* Inner Device Screen */}
                <div className="bg-[#0c121c] border border-rule rounded-[34px] overflow-hidden text-paper flex flex-col min-h-[640px]">
                  {/* Status Bar */}
                  <div className="pt-3.5 pb-2 px-6 flex justify-between items-center text-[11px] font-mono text-mute z-20">
                    <span className="font-bold text-paper">2:51</span>
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-paper" />
                      <span className="size-1.5 rounded-full bg-paper" />
                      <span className="size-1.5 rounded-full bg-paper" />
                      <span className="text-[10px] font-bold ml-1">5G</span>
                    </div>
                  </div>

                  {/* App Screen Switcher Header Tabs */}
                  <div className="px-5 pt-3 pb-3 border-b border-rule bg-ink flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        GP
                      </div>
                      <span className="font-display text-sm font-black tracking-wide text-paper">
                        OPENROAD
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-ink-2 p-1 rounded-lg border border-rule text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setActiveScreen("dispatch")}
                        className={cx(
                          "px-2 py-0.5 rounded transition-colors",
                          activeScreen === "dispatch" ? "bg-azure text-white font-bold" : "text-mute hover:text-paper",
                        )}
                      >
                        Loads
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveScreen("pay")}
                        className={cx(
                          "px-2 py-0.5 rounded transition-colors",
                          activeScreen === "pay" ? "bg-azure text-white font-bold" : "text-mute hover:text-paper",
                        )}
                      >
                        Pay
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveScreen("scanner")}
                        className={cx(
                          "px-2 py-0.5 rounded transition-colors",
                          activeScreen === "scanner" ? "bg-azure text-white font-bold" : "text-mute hover:text-paper",
                        )}
                      >
                        Scan
                      </button>
                    </div>
                  </div>

                  {/* SCREEN 1: LIVE DISPATCH & ACTIVE LOAD */}
                  {activeScreen === "dispatch" && (
                    <div className="p-4 space-y-4 animate-in fade-in duration-200">
                      {/* Driver Greeting Card */}
                      <div className="bg-gradient-to-r from-emerald-900/60 to-emerald-800/40 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                            WELCOME BACK
                          </span>
                          <span className="font-display text-xl font-black text-paper leading-tight">
                            Robert M.
                          </span>
                        </div>
                        <div className="size-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/40">
                          <User size={20} weight="bold" />
                        </div>
                      </div>

                      {/* Mini Telemetry Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-ink border border-rule rounded-xl p-3">
                          <span className="font-mono text-[10px] text-mute uppercase font-semibold block">
                            THIS WEEK
                          </span>
                          <span className="font-display text-lg font-bold text-paper">
                            1,203 <span className="text-xs font-mono text-azure-hi">mi</span>
                          </span>
                        </div>
                        <div className="bg-ink border border-rule rounded-xl p-3">
                          <span className="font-mono text-[10px] text-mute uppercase font-semibold block">
                            ON-TIME
                          </span>
                          <span className="font-display text-lg font-bold text-emerald-400 flex items-center gap-1.5">
                            <CheckCircle size={16} weight="fill" />
                            100%
                          </span>
                        </div>
                      </div>

                      {/* Urgent Action Callout */}
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-amber-300">
                          <WarningCircle size={17} weight="fill" className="shrink-0" />
                          <span className="font-medium leading-tight">
                            New Load Dispatched! Action Required: Review & Confirm
                          </span>
                        </div>
                        <CaretRight size={14} className="text-amber-400 shrink-0" />
                      </div>

                      {/* Active Load Detail Card (Direct match to screenshot) */}
                      <div className="bg-ink border border-rule-lit rounded-2xl p-4 space-y-3.5">
                        <div className="flex items-center justify-between pb-2.5 border-b border-rule text-xs font-mono">
                          <span className="text-mute">DISPATCHER</span>
                          <span className="text-paper font-semibold flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                            Marcus T. · Online
                          </span>
                        </div>

                        {/* Origin -> Destination Route Graph */}
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2.5">
                            <div className="size-5 rounded-full bg-azure/20 text-azure-hi flex items-center justify-center shrink-0 mt-0.5">
                              <MapPin size={12} weight="fill" />
                            </div>
                            <div>
                              <span className="font-bold text-paper block">Joliet, IL</span>
                              <span className="text-[11px] text-mute font-mono">
                                Pickup: Jul 27 · PU# 887-2201
                              </span>
                            </div>
                          </div>

                          <div className="ml-2.5 pl-3 border-l-2 border-dashed border-rule py-1 text-[11px] font-mono text-azure-hi">
                            ↓ 318 mi — Direct Transit
                          </div>

                          <div className="flex items-start gap-2.5">
                            <div className="size-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              <NavigationArrow size={12} weight="fill" />
                            </div>
                            <div>
                              <span className="font-bold text-paper block">Woodruff, WI</span>
                              <span className="text-[11px] text-mute font-mono">
                                Delivery: Jul 28 · DEL# 887-2202
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 4-Cell Specs Grid */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-rule text-[11.5px] font-mono">
                          <div className="bg-ink-2 p-2 rounded-lg border border-rule">
                            <span className="text-mute block text-[10px]">MILES</span>
                            <span className="text-paper font-bold">318 mi</span>
                          </div>
                          <div className="bg-ink-2 p-2 rounded-lg border border-rule">
                            <span className="text-mute block text-[10px]">WEIGHT</span>
                            <span className="text-paper font-bold">42,180 lbs</span>
                          </div>
                          <div className="bg-ink-2 p-2 rounded-lg border border-rule">
                            <span className="text-mute block text-[10px]">FREIGHT</span>
                            <span className="text-paper font-bold">24 pallets</span>
                          </div>
                          <div className="bg-ink-2 p-2 rounded-lg border border-rule">
                            <span className="text-mute block text-[10px]">TRAILER</span>
                            <span className="text-azure-hi font-bold">#TR-4471 (53&apos;)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: PAY & SETTLEMENTS TELEMETRY */}
                  {activeScreen === "pay" && (
                    <div className="p-4 space-y-4 animate-in fade-in duration-200">
                      <div className="bg-ink border border-azure/40 rounded-2xl p-4">
                        <span className="font-mono text-[10px] text-azure-hi uppercase tracking-wider block font-bold">
                          CURRENT WEEK GROSS
                        </span>
                        <div className="flex items-baseline justify-between mt-1">
                          <span className="font-display text-3xl font-black text-paper">
                            $2,148.80
                          </span>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded">
                            Approved for Direct Deposit
                          </span>
                        </div>
                      </div>

                      {/* Itemized breakdown */}
                      <div className="bg-ink border border-rule rounded-xl p-4 space-y-3 text-xs font-mono">
                        <span className="font-display text-xs font-bold text-paper uppercase tracking-wider block pb-2 border-b border-rule">
                          Weekly Settlement Breakdown
                        </span>
                        <div className="flex justify-between">
                          <span className="text-mute">Dispatched Miles (2,686 mi @ 74¢)</span>
                          <span className="text-paper font-bold">$1,987.64</span>
                        </div>
                        <div className="flex justify-between text-azure-hi">
                          <span>ELITE Monthly Tier Bonus (+6¢)</span>
                          <span className="font-bold">+$161.16</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-mute">Clean DOT Inspection Bonus</span>
                          <span className="text-paper font-bold">+$100.00</span>
                        </div>
                        <div className="pt-2 border-t border-rule flex justify-between text-sm font-bold">
                          <span className="text-paper font-display">Net Payout</span>
                          <span className="text-emerald-400 font-display">$2,248.80</span>
                        </div>
                      </div>

                      <div className="bg-ink-2 border border-rule rounded-xl p-3 flex items-center justify-between text-xs">
                        <span className="text-mute font-mono">YTD 2026 Earnings:</span>
                        <span className="font-display font-black text-azure-hi text-sm">
                          $78,420.00
                        </span>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3: IN-CAB DOCUMENT SCANNER */}
                  {activeScreen === "scanner" && (
                    <div className="p-4 space-y-4 animate-in fade-in duration-200">
                      <div className="relative bg-black rounded-2xl h-[260px] border border-rule overflow-hidden flex items-center justify-center">
                        {/* Camera viewfinder frame */}
                        <div className="absolute inset-6 border-2 border-dashed border-azure/70 rounded-xl flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <Scan size={36} className="text-azure-hi mx-auto animate-pulse" />
                            <span className="font-mono text-xs text-paper block">
                              Bill of Lading Detected
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                              Auto-crop Corners Aligned
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-ink border border-rule rounded-xl p-3.5 space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-mute">Document Type:</span>
                          <span className="text-paper font-bold">Signed BOL / POD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-mute">OCR Status:</span>
                          <span className="text-emerald-400 font-bold">Verified in 1.4s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-mute">Routed To:</span>
                          <span className="text-azure-hi font-bold">Billing Dept (Clear)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 4: ONE-TAP COMPANY DIRECTORY */}
                  {activeScreen === "directory" && (
                    <div className="p-4 space-y-3 animate-in fade-in duration-200">
                      <span className="font-mono text-[11px] text-mute uppercase tracking-wider block">
                        Assigned Support Team
                      </span>

                      <div className="bg-ink border border-rule rounded-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-azure/20 text-azure-hi flex items-center justify-center font-bold text-xs">
                            MT
                          </div>
                          <div>
                            <span className="font-display text-sm font-bold text-paper block">
                              Marcus Taylor
                            </span>
                            <span className="text-xs text-mute font-mono">
                              Assigned Driver Manager
                            </span>
                          </div>
                        </div>
                        <div className="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <PhoneCall size={16} weight="fill" />
                        </div>
                      </div>

                      <div className="bg-ink border border-rule rounded-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                            24/7
                          </div>
                          <div>
                            <span className="font-display text-sm font-bold text-paper block">
                              Road Service & Shop
                            </span>
                            <span className="text-xs text-mute font-mono">
                              Live Breakdown Dispatch
                            </span>
                          </div>
                        </div>
                        <div className="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Wrench size={16} weight="fill" />
                        </div>
                      </div>

                      <div className="bg-ink border border-rule rounded-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                            SF
                          </div>
                          <div>
                            <span className="font-display text-sm font-bold text-paper block">
                              Fleet Safety Dept
                            </span>
                            <span className="text-xs text-mute font-mono">
                              Logs, Permits & Compliance
                            </span>
                          </div>
                        </div>
                        <div className="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <ShieldCheck size={16} weight="fill" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Navigation Bar */}
                  <div className="mt-auto px-6 py-3 border-t border-rule bg-ink flex justify-around text-mute text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveScreen("dispatch")}
                      className={cx("flex flex-col items-center gap-1", activeScreen === "dispatch" ? "text-azure-hi font-bold" : "")}
                    >
                      <NavigationArrow size={16} weight={activeScreen === "dispatch" ? "fill" : "regular"} />
                      <span>Loads</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScreen("pay")}
                      className={cx("flex flex-col items-center gap-1", activeScreen === "pay" ? "text-azure-hi font-bold" : "")}
                    >
                      <CurrencyDollar size={16} weight={activeScreen === "pay" ? "fill" : "regular"} />
                      <span>Pay</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScreen("scanner")}
                      className={cx("flex flex-col items-center gap-1", activeScreen === "scanner" ? "text-azure-hi font-bold" : "")}
                    >
                      <Scan size={16} weight={activeScreen === "scanner" ? "fill" : "regular"} />
                      <span>Scan</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScreen("directory")}
                      className={cx("flex flex-col items-center gap-1", activeScreen === "directory" ? "text-azure-hi font-bold" : "")}
                    >
                      <Headset size={16} weight={activeScreen === "directory" ? "fill" : "regular"} />
                      <span>Support</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Ambient Badge Floating beside the phone */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-30 bg-ink-2/95 border border-rule-lit rounded-2xl p-3.5 shadow-xl backdrop-blur-md items-center gap-3">
                <div className="size-10 rounded-xl bg-azure/15 text-azure-hi flex items-center justify-center font-bold">
                  <DeviceMobile size={22} weight="fill" />
                </div>
                <div>
                  <span className="text-xs font-display font-bold text-paper block">
                    Proprietary OpenRoad OS
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    Real-time Cloud Sync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
