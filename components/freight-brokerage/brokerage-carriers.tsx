"use client";

import Image from "next/image";
import { useState } from "react";
import {
  TrendUp,
  ShieldCheck,
  Target,
  ArrowRight,
  Truck,
  CheckCircle,
  X,
  CircleNotch,
} from "@phosphor-icons/react/dist/ssr";
import { btn, btnHero, btnSolid, cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

export function BrokerageCarriers() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="for-carriers"
      aria-label="Carrier solutions and network"
      className="relative bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Background depth ambiance */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-azure/10 rounded-full blur-[150px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Aerial Intermodal Terminal Image with Glass Badges */}
            <div
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(revealItem, "lg:col-span-6 relative")}
            >
              <div className="relative rounded-3xl overflow-hidden border border-rule-lit bg-ink-2 shadow-2xl min-h-[440px] sm:min-h-[520px] flex items-end p-6 sm:p-8 group">
                <Image
                  src="/freight-brokerage/brokerage-carriers.webp"
                  alt="Aerial Intermodal Container Terminal Yard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "50% 50%" }}
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

                {/* Floating Top Telemetry Glass Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-ink/75 backdrop-blur-md border border-white/15 shadow-lg">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-paper">
                      Fast 2-Day QuickPay Available
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Card Over Image */}
                <div className="relative z-10 w-full p-5 rounded-2xl bg-ink/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} weight="fill" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-paper m-0">
                        Built By a Carrier, For Carriers
                      </h4>
                      <p className="text-xs text-mute m-0">
                        Zero unfair deductions, guaranteed detention, real dispatcher support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial & Value Cards */}
            <div
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "lg:col-span-6")}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink-2 border border-rule-lit text-azure-hi mb-5">
                <Truck size={15} weight="bold" />
                <span
                  className={cx(
                    label,
                    "text-azure-hi tracking-widest text-[11px] sm:text-xs",
                  )}
                >
                  For Carriers
                </span>
              </div>

              {/* Headline */}
              <h2 className="type-display m-0 text-[clamp(32px,4.5vw,56px)] text-paper leading-[0.94] font-black uppercase">
                Built Around <span className="text-azure-hi">Your Success</span>
              </h2>

              {/* Subheading */}
              <p className="mt-5 text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-mute max-w-xl">
                Our logistics division evolved out of a top-ranked carrier with
                carriers in mind. We have the knowledge, experience, and
                technology to ensure our carriers are set up for success.
              </p>

              {/* 3 Value Cards */}
              <div className="mt-8 space-y-3.5">
                {/* Value 1 */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-rule-lit hover:border-azure-hi/40 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center flex-shrink-0">
                      <TrendUp size={22} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-[15.5px] font-bold text-paper mb-1">
                        Consistent Revenue
                      </h3>
                      <p className="text-xs sm:text-sm text-mute leading-relaxed m-0">
                        Dependable freight, all year-round for reliable income across high-density lanes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-rule-lit hover:border-azure-hi/40 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={22} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-[15.5px] font-bold text-paper mb-1">
                        Reliable Operations
                      </h3>
                      <p className="text-xs sm:text-sm text-mute leading-relaxed m-0">
                        Long-lasting relationships with shippers without unexpected disruptions or delayed turnarounds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-rule-lit hover:border-azure-hi/40 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-azure/20 text-azure-hi flex items-center justify-center flex-shrink-0">
                      <Target size={22} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-[15.5px] font-bold text-paper mb-1">
                        Work on Your Terms
                      </h3>
                      <p className="text-xs sm:text-sm text-mute leading-relaxed m-0">
                        The freight you want, matched with the right shippers on your preferred regional lanes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 sm:mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className={cx(
                    btn,
                    btnSolid,
                    btnHero,
                    "shadow-lg shadow-azure/25 cursor-pointer text-base sm:text-[15.5px] px-8",
                  )}
                >
                  Join Carrier Network
                  <ArrowRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Interactive Carrier Onboarding Modal */}
      {modalOpen && (
        <CarrierOnboardingModal onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

function CarrierOnboardingModal({ onClose }: { onClose: () => void }) {
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
    fleetSize: "1-5",
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
                Join Our Carrier Partner Fleet
              </h2>
              <p className="text-xs text-soft-text mt-1 m-0">
                Get approved for premium loads, reliable rates, and fast QuickPay.
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
                carrier relations team will verify your DOT/MC credentials and
                reach out shortly with onboarding packets.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    Carrier / Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Midwest Freight LLC"
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
                    placeholder="MC-123456"
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
                    placeholder="John Miller"
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
                    placeholder="(555) 000-0000"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    Primary Equipment
                  </label>
                  <select
                    value={form.equipmentType}
                    onChange={(e) =>
                      setForm({ ...form, equipmentType: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text focus:outline-none focus:border-azure transition-colors"
                  >
                    <option value="Dry Van">53&apos; Dry Van</option>
                    <option value="Reefer">Reefer / Temp Controlled</option>
                    <option value="Flatbed">Flatbed / Step Deck</option>
                    <option value="Power Only">Power Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                    Tractor Fleet Size
                  </label>
                  <select
                    value={form.fleetSize}
                    onChange={(e) =>
                      setForm({ ...form, fleetSize: e.target.value })
                    }
                    className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text focus:outline-none focus:border-azure transition-colors"
                  >
                    <option value="1-5">1 - 5 Power Units</option>
                    <option value="6-20">6 - 20 Power Units</option>
                    <option value="21-50">21 - 50 Power Units</option>
                    <option value="50+">50+ Power Units</option>
                  </select>
                </div>
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
