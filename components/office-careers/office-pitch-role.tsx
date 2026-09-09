"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CircleNotch,
  Phone,
  ShareNetwork,
  Sparkle,
  UploadSimple,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnSolid, btnHero, btnGhost, cx } from "../ui";

/**
 * Office Careers Closing CTA Section ("Pitch Your Role").
 *
 * Cinematic dark plate (bg-ink) concluding the /office-careers page.
 * Uses the exact unified closing hero design system tokens from driver-cta.tsx.
 */

export function OfficePitchRole() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="pitch-your-role"
      aria-label="Pitch your role"
      className="relative isolate bg-ink py-[clamp(88px,14vh,170px)] px-gut overflow-hidden"
    >
      {/* Cinematic ambient depth glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-azure/10 blur-[160px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] -z-10"
      />

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          {/* Main Command Center */}
          <div className="text-center max-w-[840px] mx-auto mb-14">
            {/* Pill */}
            <div
              className={cx(
                revealItem,
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-2 border border-rule-lit text-azure-hi text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-sm",
              )}
            >
              <Sparkle size={14} weight="bold" />
              Don&apos;t See Your Role?
            </div>

            {/* Headline */}
            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 text-[clamp(36px,5.8vw,76px)] text-paper leading-[0.92] font-black uppercase tracking-tight",
              )}
            >
              Then Invent{" "}
              <span className="text-azure-hi">It.</span>
            </h2>

            {/* Subheading */}
            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 text-[clamp(16px,1.25vw,19.5px)] leading-[1.65] text-mute max-w-[64ch] mx-auto",
              )}
            >
              Got something great to bring to GP Transco but don&apos;t see an
              opening that fits? Tell us the role you&apos;d create, what
              you&apos;d build in your first 90 days, and the impact you&apos;d
              make here.
            </p>

            {/* Actions */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-10 flex flex-wrap items-center justify-center gap-4",
              )}
            >
              {/* Primary Pitch Button */}
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
                Create Your Own Position
                <ArrowRight size={18} weight="bold" />
              </button>

              {/* Direct Office Recruiting Line */}
              <a
                href="tel:7082988281"
                className={cx(
                  btn,
                  btnGhost,
                  btnHero,
                  "text-base sm:text-[15.5px] px-8 flex items-center gap-2.5",
                )}
              >
                <Phone size={18} weight="bold" className="text-azure-hi" />
                <span>(708) 298-8281</span>
              </a>
            </div>

            {/* Status / Trust Note */}
            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 text-xs font-mono text-mute flex items-center justify-center gap-2",
              )}
            >
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Leadership & HR Review · Every Pitch Read by Real People</span>
            </p>
          </div>
        </Reveal>
      </div>

      {/* Interactive 3-Step Pitch Role Modal */}
      {modalOpen && <PitchRoleModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}

function PitchRoleModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [form, setForm] = useState({
    proposedTitle: "",
    department: "Operations",
    workStyle: "Onsite — Joliet, IL",
    mission: "",
    impact: "",
    superpower: "",
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
  });

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(
        `${window.location.origin}/office-careers#pitch-your-role`,
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1400);
  };

  const isStepValid = () => {
    if (step === 0) {
      return form.proposedTitle.trim().length >= 3;
    }
    if (step === 1) {
      return form.mission.trim().length >= 10;
    }
    if (step === 2) {
      return (
        form.fullName.trim().length >= 2 &&
        form.email.trim().includes("@") &&
        form.phone.trim().length >= 7
      );
    }
    return true;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-2xl my-8 bg-surface rounded-3xl border border-line shadow-2xl overflow-hidden text-ink-text">
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-ink via-ink-2 to-azure-ink p-6 sm:p-8 text-paper relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-azure-hi text-[11px] font-mono font-semibold uppercase tracking-wider block mb-1.5">
                Executive Talent Initiative
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-paper m-0">
                Pitch Your Role to GP Transco
              </h2>
              <p className="text-xs sm:text-sm text-soft-text mt-1.5 m-0">
                Define what you build. We review every thoughtful pitch.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                title="Share link to Pitch Your Role"
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-paper transition-all cursor-pointer"
              >
                {copied ? (
                  <Check size={16} weight="bold" className="text-emerald-400" />
                ) : (
                  <ShareNetwork size={16} weight="bold" />
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                title="Close"
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-paper transition-all cursor-pointer"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          {!submitted && (
            <div className="mt-6 flex items-center gap-2">
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  className={cx(
                    "h-1.5 flex-1 rounded-full transition-all duration-300",
                    s <= step ? "bg-azure-hi" : "bg-white/15",
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-160px)] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Check size={32} weight="bold" />
              </div>
              <h3 className="text-2xl font-bold text-ink-text mb-2">
                Pitch Delivered!
              </h3>
              <p className="text-sm text-body-text max-w-md mx-auto">
                Thank you, {form.fullName}. Your proposed role as{" "}
                <strong className="text-ink-text font-bold">
                  {form.proposedTitle}
                </strong>{" "}
                has been routed straight to our leadership and talent team.
                We&apos;ll review your proposal and get in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 0: The Role & Workplace */}
              {step === 0 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <h3 className="text-lg font-bold text-ink-text m-0">
                      1. Name the role you want to create
                    </h3>
                    <p className="text-xs text-body-text mt-1 m-0">
                      Be specific about the title and what domain you belong to.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                      Proposed Position Title *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lead Telematics Engineer / Strategic Enterprise Partner"
                      value={form.proposedTitle}
                      onChange={(e) =>
                        setForm({ ...form, proposedTitle: e.target.value })
                      }
                      className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        Target Department
                      </label>
                      <select
                        value={form.department}
                        onChange={(e) =>
                          setForm({ ...form, department: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text focus:outline-none focus:border-azure transition-colors"
                      >
                        <option value="Operations">Operations & Fleet</option>
                        <option value="Safety">Safety & Compliance</option>
                        <option value="Maintenance">Maintenance & Shop</option>
                        <option value="Technology">Technology & Software</option>
                        <option value="Sales">Sales & Business Dev</option>
                        <option value="Accounting">Finance & Accounting</option>
                        <option value="Executive">Executive / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        Work Arrangement
                      </label>
                      <select
                        value={form.workStyle}
                        onChange={(e) =>
                          setForm({ ...form, workStyle: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text focus:outline-none focus:border-azure transition-colors"
                      >
                        <option value="Onsite — Joliet, IL">
                          Onsite — Joliet, IL Headquarters
                        </option>
                        <option value="Hybrid — Joliet, IL">
                          Hybrid — Joliet, IL
                        </option>
                        <option value="Onsite — Medellin, Colombia">
                          Onsite — Medellin Hub
                        </option>
                        <option value="Onsite — Vilnius, Lithuania">
                          Onsite — Vilnius Hub
                        </option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: The 90-Day Vision & Impact */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <h3 className="text-lg font-bold text-ink-text m-0">
                      2. What will you accomplish?
                    </h3>
                    <p className="text-xs text-body-text mt-1 m-0">
                      Show us what changes because you&apos;re here.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                      First 90 Days Plan & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="What projects would you ship or streamline in your first 3 months?"
                      value={form.mission}
                      onChange={(e) =>
                        setForm({ ...form, mission: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                      What is your superpower or unfair advantage?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Deep shipper network, specialized logistics telemetry expertise..."
                      value={form.superpower}
                      onChange={(e) =>
                        setForm({ ...form, superpower: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Contact & Resume */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <h3 className="text-lg font-bold text-ink-text m-0">
                      3. How do we contact you?
                    </h3>
                    <p className="text-xs text-body-text mt-1 m-0">
                      Direct line to our leadership team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Alex Morgan"
                        value={form.fullName}
                        onChange={(e) =>
                          setForm({ ...form, fullName: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="alex@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(555) 234-5678"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={form.linkedIn}
                        onChange={(e) =>
                          setForm({ ...form, linkedIn: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                      Upload Resume or Pitch Deck
                    </label>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-line hover:border-azure rounded-2xl p-6 bg-page/60 cursor-pointer transition-colors group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <UploadSimple
                        size={26}
                        className="text-azure mb-2 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-xs font-semibold text-ink-text">
                        {fileName
                          ? fileName
                          : "Click to select PDF or Document (Optional)"}
                      </span>
                      <span className="text-[11px] text-mute mt-1">
                        Max file size: 10MB
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="border-t border-line pt-5 flex items-center justify-between">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 h-11 rounded-full border border-line text-xs font-bold uppercase tracking-wider text-ink-text hover:bg-page transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 h-11 rounded-full border border-line text-xs font-bold uppercase tracking-wider text-ink-text hover:bg-page transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="px-7 h-11 rounded-full bg-azure text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-azure/25"
                  >
                    Continue
                    <ArrowRight size={14} weight="bold" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting || !isStepValid()}
                    className="px-8 h-11 rounded-full bg-azure text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-azure/30"
                  >
                    {submitting ? (
                      <>
                        <CircleNotch size={16} className="animate-spin" />
                        Sending Pitch...
                      </>
                    ) : (
                      "Submit My Role Pitch"
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
