"use client";

import { useState } from "react";
import {
  ArrowRight,
  Buildings,
  Truck,
  CheckCircle,
  X,
  CircleNotch,
} from "@phosphor-icons/react/dist/ssr";
import { useQuote } from "../quote-modal";
import { btn, btnHero, btnSolid, cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

export function BrokerageClosing() {
  const { open: openQuote } = useQuote();
  const [carrierModalOpen, setCarrierModalOpen] = useState(false);

  return (
    <section
      id="contact"
      aria-label="Begin working with GP Transco Logistics"
      className="relative bg-page py-[clamp(78px,12vh,150px)] px-gut overflow-hidden border-t border-line"
    >
      {/* Subtle brand ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-azure/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          {/* Section Header */}
          <header
            className={cx(
              revealItem,
              "text-center max-w-[820px] mx-auto mb-[clamp(44px,6.5vh,64px)]",
            )}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-azure/10 border border-azure/20 mb-5">
              <span className="size-2 rounded-full bg-azure animate-pulse" />
              <span
                className={cx(
                  label,
                  "text-azure tracking-widest text-[11px] sm:text-xs",
                )}
              >
                For Shippers & Carriers
              </span>
            </div>

            <h2 className="type-display m-0 text-[clamp(32px,4.5vw,58px)] text-ink-text leading-[0.94]">
              Begin Working with{" "}
              <span className="text-azure">GP Transco Logistics</span>
            </h2>

            <p className="mt-4 text-[clamp(15px,1.15vw,18px)] leading-[1.62] text-body-text max-w-2xl mx-auto">
              Service and communication first, powered by our own fleet and
              trusted carrier partnerships.
            </p>
          </header>

          {/* 2-Column Command Panels (Shippers vs Carriers) */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10",
            )}
          >
            {/* Card 1: Shippers */}
            <div className="group bg-surface border border-line rounded-3xl p-8 sm:p-11 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="size-14 rounded-2xl bg-azure/10 text-azure flex items-center justify-center group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                    <Buildings size={28} weight="bold" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-page border border-line text-[11px] font-mono uppercase tracking-wider text-mute">
                    Direct Shipper Portal
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-3xl sm:text-4xl font-black text-ink-text tracking-tight m-0 mb-3">
                    Shippers
                  </h3>
                  <div className="w-16 h-1 bg-azure rounded-full" />
                </div>

                <div className="space-y-4 text-[14.5px] leading-relaxed text-body-text mb-8">
                  <p className="m-0">
                    The GP Transco freight brokerage services division puts
                    service and communication first in all that we do. We
                    strive to bring the best freight brokerage solutions to our
                    customers&apos; transportation needs with a unique ability
                    to offer more with the backing of our own,
                    Chicagoland&apos;s top-10, over-the-road truckload fleet, as
                    well as strong relationships with a diverse set of
                    carriers.
                  </p>
                  <p className="m-0 text-mute text-sm">
                    With GP Transco Logistics&apos; Trusted Carrier Network, you
                    can always be sure to work with those that meet the highest
                    standards. Our carriers are evaluated through a strict and
                    rigorous vetting process to ensure verified insurance,
                    safety compliance, and transparent tracking.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-line/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={openQuote}
                  className={cx(
                    btn,
                    btnSolid,
                    btnHero,
                    "shadow-lg shadow-azure/25 cursor-pointer text-sm sm:text-base px-8",
                  )}
                >
                  Work With Us
                  <ArrowRight size={18} weight="bold" />
                </button>
                <span className="text-xs font-mono text-mute hidden sm:inline-block">
                  Instant response
                </span>
              </div>
            </div>

            {/* Card 2: Carriers */}
            <div className="group bg-surface border border-line rounded-3xl p-8 sm:p-11 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="size-14 rounded-2xl bg-azure/10 text-azure flex items-center justify-center group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                    <Truck size={28} weight="bold" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-page border border-line text-[11px] font-mono uppercase tracking-wider text-mute">
                    Carrier Partner Fleet
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-3xl sm:text-4xl font-black text-ink-text tracking-tight m-0 mb-3">
                    Carriers
                  </h3>
                  <div className="w-16 h-1 bg-azure rounded-full" />
                </div>

                <div className="space-y-4 text-[14.5px] leading-relaxed text-body-text mb-8">
                  <p className="m-0">
                    Our logistics division evolved out of a top-ranked carrier
                    with carriers in mind. We have the knowledge, experience,
                    and technology to ensure our carriers are set up for
                    success. We deliver quality service and trustworthy
                    communication, building a partnership to last the long haul.
                  </p>
                  <p className="m-0 text-mute text-sm">
                    We understand what it takes to keep your trucks moving
                    profitably. Gain access to consistent freight volume,
                    transparent load terms, guaranteed detention policies, and
                    fast 2-day QuickPay options designed specifically for
                    owner-operators and carrier fleets.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-line/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCarrierModalOpen(true)}
                  className={cx(
                    btn,
                    btnSolid,
                    btnHero,
                    "shadow-lg shadow-azure/25 cursor-pointer text-sm sm:text-base px-8",
                  )}
                >
                  Join Carrier Network
                  <ArrowRight size={18} weight="bold" />
                </button>
                <span className="text-xs font-mono text-mute hidden sm:inline-block">
                  Fast onboarding
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Carrier Onboarding Modal */}
      {carrierModalOpen && (
        <CarrierSimpleModal onClose={() => setCarrierModalOpen(false)} />
      )}
    </section>
  );
}

function CarrierSimpleModal({ onClose }: { onClose: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    dotNumber: "",
    mcNumber: "",
    contactName: "",
    email: "",
    phone: "",
    equipmentType: "Dry Van",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-xl my-8 bg-surface rounded-3xl border border-line shadow-2xl overflow-hidden text-ink-text">
        {/* Header */}
        <div className="bg-gradient-to-r from-ink via-ink-2 to-azure-ink p-6 sm:p-8 text-paper relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-azure-hi text-[11px] font-mono font-semibold uppercase tracking-wider block mb-1.5">
                GP Transco Carrier Network
              </span>
              <h2 className="text-2xl font-black tracking-tight text-paper m-0">
                Partner with GP Transco Logistics
              </h2>
              <p className="text-xs text-soft-text mt-1 m-0">
                Join our trusted carrier network for steady loads and fast payments.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-paper transition-all cursor-pointer"
            >
              <X size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-140px)] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10">
              <div className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} weight="bold" />
              </div>
              <h3 className="text-xl font-bold text-ink-text mb-2">
                Application Received!
              </h3>
              <p className="text-sm text-body-text max-w-md mx-auto">
                Thank you for applying to the GP Transco Carrier Network. Our
                carrier relations team will review your qualifications and reach
                out with packet verification shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    Carrier / Fleet Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Eagle Transport LLC"
                    value={form.companyName}
                    onChange={(e) =>
                      setForm({ ...form, companyName: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    DOT / MC Number *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="MC-987654"
                    value={form.mcNumber}
                    onChange={(e) =>
                      setForm({ ...form, mcNumber: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    Contact Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Alex Smith"
                    value={form.contactName}
                    onChange={(e) =>
                      setForm({ ...form, contactName: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="dispatch@carrier.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                  Primary Equipment Mode
                </label>
                <select
                  value={form.equipmentType}
                  onChange={(e) =>
                    setForm({ ...form, equipmentType: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text focus:outline-none focus:border-azure transition-colors"
                >
                  <option value="Dry Van">53&apos; Dry Van (Air-Ride)</option>
                  <option value="Reefer">Reefer / Temperature Controlled</option>
                  <option value="Flatbed">Flatbed / Step Deck</option>
                  <option value="Power Only">Power Only</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-line">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 h-11 rounded-full border border-line text-xs font-bold uppercase tracking-wider text-ink-text hover:bg-page transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-7 h-11 rounded-full bg-azure text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-azure/20"
                >
                  {submitting ? (
                    <>
                      <CircleNotch size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
