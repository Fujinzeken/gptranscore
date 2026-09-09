"use client";

import { useState } from "react";
import {
  ArrowRight,
  Clock,
  CurrencyDollar,
  MapPin,
  MapTrifold,
  Path,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Driver Routes Section ("Routes That Fit Your Life").
 *
 * Sits on a light field (bg-page) following the dark DriverEquipment plate,
 * maintaining the strict alternating light/dark rhythm.
 *
 * Interactive route matcher stage allowing drivers to filter by hometime
 * and compare length of haul, weekly miles, and CPM compensation.
 */

interface RouteOption {
  id: string;
  name: string;
  badge?: string;
  region: string;
  haul: string;
  hometime: string;
  miles: string;
  pay: string;
  type: "daily" | "weekly" | "otr";
}

const ROUTES: RouteOption[] = [
  {
    id: "local",
    name: "Dry Van Local",
    region: "Chicagoland",
    haul: "100 miles or less",
    hometime: "Daily",
    miles: "1,000 or less",
    pay: "Hourly rate — contact recruiter",
    type: "daily",
  },
  {
    id: "short-haul",
    name: "Dry Van Short-Haul",
    region: "Nearby Midwest",
    haul: "250 miles or less",
    hometime: "Daily",
    miles: "1,500 – 1,800",
    pay: "49–80 CPM (flexible by length)",
    type: "daily",
  },
  {
    id: "regional",
    name: "Dry Van Regional",
    region: "Midwest & East Coast",
    haul: "300–450 miles",
    hometime: "Weekly",
    miles: "1,800 – 2,200",
    pay: "72 CPM + 6 CPM ELITE Bonus",
    type: "weekly",
  },
  {
    id: "otr",
    name: "Dry Van Over The Road",
    region: "Midwest to East Coast",
    haul: "400+ miles",
    hometime: "Every 2–3 Weeks",
    miles: "2,500+",
    pay: "65–67 CPM + 6 CPM ELITE Bonus",
    type: "otr",
  },
  {
    id: "conestoga",
    name: "Flatbed Conestoga OTR",
    badge: "NEW",
    region: "Coast to Coast",
    haul: "500+ miles",
    hometime: "Every 3–4 Weeks",
    miles: "2,500 – 3,000",
    pay: "75–77 CPM + 6 CPM ELITE Bonus",
    type: "otr",
  },
];

export function DriverRoutes() {
  const { open: openQuote } = useQuote();
  const [filter, setFilter] = useState<"all" | "daily" | "weekly" | "otr">(
    "all",
  );

  const filteredRoutes =
    filter === "all" ? ROUTES : ROUTES.filter((r) => r.type === filter);

  return (
    <section id="routes" className="bg-page py-[clamp(78px,12vh,150px)] px-gut">
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
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <MapTrifold size={14} weight="bold" />
            Route Selection
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Routes That <span className="text-azure">Fit Your Life</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Choose the haul type that matches your lifestyle and career goals.
          </p>
        </header>

        {/* Filter Bar */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "flex flex-wrap items-center justify-center gap-2 mb-8 max-w-[1280px] mx-auto",
          )}
        >
          {[
            { id: "all", label: "All Routes" },
            { id: "daily", label: "Home Daily" },
            { id: "weekly", label: "Home Weekly" },
            { id: "otr", label: "OTR (2–4 Wks)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as any)}
              className={cx(
                "px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-full",
                filter === tab.id
                  ? "bg-azure text-white shadow-sm"
                  : "bg-surface border border-line text-body-text hover:text-ink-text hover:border-azure/40",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Route Stage Table / Matrix */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "max-w-[1280px] mx-auto bg-surface border border-line shadow-sm overflow-hidden",
          )}
        >
          {/* Table Header (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-page border-b border-line text-[11px] font-mono font-bold uppercase tracking-wider text-body-text">
            <div className="col-span-3">Route &amp; Region</div>
            <div className="col-span-2">Length of Haul</div>
            <div className="col-span-2">Hometime</div>
            <div className="col-span-2">Weekly Miles</div>
            <div className="col-span-3 text-right">Pay &amp; Action</div>
          </div>

          {/* Route Rows */}
          <div className="divide-y divide-line">
            {filteredRoutes.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 items-center transition-colors duration-200 hover:bg-[#fafbfd] group/row"
              >
                {/* Route & Region */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-[18px] font-bold text-ink-text m-0 group-hover/row:text-azure transition-colors duration-200">
                      {r.name}
                    </h3>
                    {r.badge ? (
                      <span className="font-mono text-[10px] font-bold text-white bg-azure px-2 py-0.5 rounded-full">
                        {r.badge}
                      </span>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-body-text mt-1.5 font-medium">
                    <MapPin size={13} className="text-azure" />
                    {r.region}
                  </span>
                </div>

                {/* Length of Haul */}
                <div className="lg:col-span-2 text-xs text-body-text">
                  <span className="lg:hidden font-mono font-bold text-ink-text block mb-1">
                    HAUL LENGTH:
                  </span>
                  <span className="font-semibold text-ink-text">{r.haul}</span>
                </div>

                {/* Hometime */}
                <div className="lg:col-span-2 text-xs">
                  <span className="lg:hidden font-mono font-bold text-ink-text block mb-1">
                    HOMETIME:
                  </span>
                  <span className="font-bold text-azure bg-azure/10 px-2.5 py-1 inline-block rounded-full">
                    {r.hometime}
                  </span>
                </div>

                {/* Weekly Miles */}
                <div className="lg:col-span-2 text-xs">
                  <span className="lg:hidden font-mono font-bold text-ink-text block mb-1">
                    WEEKLY MILES:
                  </span>
                  <span className="font-mono font-bold text-ink-text text-[13.5px]">
                    {r.miles}
                  </span>
                </div>

                {/* Pay & Action */}
                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-end xl:items-center justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-line">
                  <div className="text-left lg:text-right">
                    <span className="font-mono text-xs font-bold text-azure block">
                      {r.pay}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={openQuote}
                    className={cx(
                      btn,
                      btnSolid,
                      "h-9 px-4 text-xs shrink-0 shadow-sm",
                    )}
                  >
                    Apply Now
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs text-soft-text italic max-w-[800px] mx-auto m-0">
          * Weekly miles represent our company goal and are not guaranteed.
          Actual miles may vary based on available freight, market conditions,
          and driver preferences.
        </p>
      </Reveal>
    </section>
  );
}
