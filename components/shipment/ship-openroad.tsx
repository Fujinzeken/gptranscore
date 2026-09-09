"use client";

import {
  ArrowRight,
  Cpu,
  DeviceMobile,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnHero, btnOutline, btnSolid, cx, label } from "../ui";

/**
 * OpenRoad TMS & In-House Technology Section.
 *
 * Sits on a 100% light field (bg-page) following the dark ShipAward plate above.
 *
 * Demonstrates PKT Group's proprietary OpenRoad TMS and mobile driver telemetry
 * through a high-precision digital cockpit interface and architectural specs.
 */

export function ShipOpenRoad() {
  const { open: openQuote } = useQuote();

  return (
    <section
      id="openroad"
      className="bg-page py-[clamp(78px,12vh,150px)] px-gut"
    >
      <Reveal>
        <header className={cx(revealItem, "mb-[clamp(36px,5.5vh,64px)]")}>
          <p className={cx(label, "text-azure mb-3")}>
            In-House Technology &amp; AI
          </p>
          <h2 className="type-display m-0 max-w-[14em] text-[clamp(28px,3.8vw,54px)] text-ink-text">
            Every load, <span className="text-azure">fully visible</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            From pickup to delivery, our proprietary OpenRoad TMS and AI engine
            keep you informed at every mile — real-time satellite tracking,
            automated status alerts, and predictive routing you won&rsquo;t find
            at any standard carrier.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,72px)] gap-y-12 items-center">
          {/* Left Column: Machined OpenRoad Mobile Cockpit */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-12 lg:col-span-5 flex justify-center lg:justify-start",
            )}
          >
            {/* Phone Bezel */}
            <div className="w-full max-w-[380px] bg-ink rounded-[32px] p-4 border-4 border-[#1b2532] shadow-2xl relative overflow-hidden text-paper">
              {/* Device Top Bar */}
              <div className="flex items-center justify-between px-2 pt-1 pb-3 border-b border-rule text-[11px] font-mono text-mute">
                <span>11:30 AM</span>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-azure-hi animate-ping" />
                  <span className="text-azure-hi font-bold">5G · LIVE</span>
                </div>
              </div>

              {/* Cockpit Card: Active Transit */}
              <div className="mt-4 bg-ink-2 border border-rule p-4">
                <div className="flex items-center justify-between text-[10.5px] font-mono">
                  <span className="text-azure-hi font-bold">
                    LOAD # GP-482193
                  </span>
                  <span className="bg-azure/20 text-azure-hi px-2 py-0.5 rounded-full font-semibold">
                    In Transit
                  </span>
                </div>

                <p className="font-display text-[15px] font-bold text-paper mt-2 mb-1">
                  Chicago, IL → Columbus, OH
                </p>
                <p className="text-xs text-mute font-mono">
                  356 mi total · Dry Van 53″ · 38,400 lbs
                </p>

                {/* Progress bar */}
                <div className="mt-4 bg-rule h-1.5 w-full overflow-hidden rounded-full">
                  <div className="bg-azure h-full w-[62%]" />
                </div>
                <div className="flex justify-between text-[10.5px] font-mono text-mute mt-1.5">
                  <span>Progress: 62%</span>
                  <span className="text-azure-hi font-bold">ETA 8:14 PM</span>
                </div>
              </div>

              {/* Telemetry Status Cards */}
              <div className="mt-3 space-y-2.5">
                <div className="bg-ink-2/80 border border-rule p-3 flex items-start gap-2.5">
                  <span className="size-2 rounded-full bg-azure-hi mt-1 shrink-0" />
                  <div>
                    <p className="text-[11.5px] font-bold text-paper m-0">
                      Checkpoint Reached
                    </p>
                    <p className="text-[11px] text-mute m-0 mt-0.5">
                      Passed Mississippi River Bridge · Next checkpoint in 45 mi
                    </p>
                  </div>
                </div>

                <div className="bg-ink-2/80 border border-rule p-3 flex items-start gap-2.5">
                  <span className="size-2 rounded-full bg-azure mt-1 shrink-0" />
                  <div>
                    <p className="text-[11.5px] font-bold text-paper m-0">
                      Automated Geofence Armed
                    </p>
                    <p className="text-[11px] text-mute m-0 mt-0.5">
                      Columbus DC, Dock 14 · Customer webhook armed
                    </p>
                  </div>
                </div>

                <div className="bg-ink-2/80 border border-rule p-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-mute">Assigned Driver:</span>
                  <span className="text-paper font-semibold">
                    Jasmine Lee (13y exp)
                  </span>
                </div>
              </div>

              {/* Footnote */}
              <div className="mt-4 pt-3 border-t border-rule text-center text-[10.5px] font-mono text-mute">
                OPENROAD MOBILE TELEMETRY v4.8
              </div>
            </div>
          </div>

          {/* Right Column: In-House Architecture & AI Execution */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Pillar 1: OpenRoad TMS */}
            <div
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "bg-surface border border-line p-[clamp(24px,3vw,36px)] shadow-sm",
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-full bg-azure/10 text-azure flex items-center justify-center shrink-0">
                  <Cpu size={22} weight="bold" />
                </div>
                <div>
                  <h3 className="font-display text-[clamp(18px,1.6vw,22px)] font-bold text-ink-text m-0">
                    In-House Developed TMS (OpenRoad)
                  </h3>
                  <span className={cx(label, "text-soft-text text-[9.5px]")}>
                    Proprietary Architecture
                  </span>
                </div>
              </div>

              <p className="text-[15px] leading-[1.6] text-body-text m-0 mt-3">
                Unlike carriers that rent off-the-shelf software with vendor
                limitations, OpenRoad TMS was built from the ground up by our
                own software engineering department in Joliet, IL. It delivers
                instant live tracking, automated workflows, and direct EDI/API
                integration into your enterprise ERP (SAP, Oracle, Blue Yonder).
              </p>

              <div className="mt-4 pt-3 border-t border-line flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-body-text">
                <span>✓ Direct EDI 204 / 214 / 210</span>
                <span>✓ REST API Webhooks</span>
                <span>✓ 0 Third-Party Middleware</span>
              </div>
            </div>

            {/* Pillar 2: Operational AI */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "bg-surface border border-line p-[clamp(24px,3vw,36px)] shadow-sm",
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-full bg-azure/10 text-azure flex items-center justify-center shrink-0">
                  <Sparkle size={22} weight="bold" />
                </div>
                <div>
                  <h3 className="font-display text-[clamp(18px,1.6vw,22px)] font-bold text-ink-text m-0">
                    Operational AI for Dynamic Accuracy
                  </h3>
                  <span className={cx(label, "text-soft-text text-[9.5px]")}>
                    Machine Learning Engine
                  </span>
                </div>
              </div>

              <p className="text-[15px] leading-[1.6] text-body-text m-0 mt-3">
                Advanced machine learning models analyze live Doppler radar,
                mountain pass alerts, and traffic choke points in real time.
                When severe weather or highway bottlenecks appear, our system
                calculates safe bypass routes and updates your team before
                delays can materialize.
              </p>

              <div className="mt-4 pt-3 border-t border-line flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-body-text">
                <span>✓ Predictive ETA Recalculation</span>
                <span>✓ Dynamic Weather Reroutes</span>
                <span>✓ Automated Exception Flags</span>
              </div>
            </div>

            {/* Actions */}
            <div
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "flex flex-wrap items-center gap-4 pt-2",
              )}
            >
              <button
                type="button"
                onClick={openQuote}
                className={cx(btn, btnSolid, btnHero, "shadow-sm")}
              >
                Experience Our Technology
                <ArrowRight size={17} />
              </button>

              <a
                href="tel:+18004605071"
                className={cx(btn, btnOutline, btnHero)}
              >
                <DeviceMobile size={17} />
                Talk to a Tech Specialist
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
