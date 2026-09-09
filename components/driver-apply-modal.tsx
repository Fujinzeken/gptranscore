"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  Truck,
  Lightning,
  FileText,
  ArrowRight,
  ArrowLeft,
  X,
  Link as LinkIcon,
  Check,
  User,
  IdentificationCard,
  Heart,
  Warning,
  ClipboardText,
  ShieldCheck,
  CheckCircle,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { cx } from "./ui";

const INTELLIAPP_URL =
  "https://intelliapp.driverapponline.com/c/gptransco?r=website-apply-to-drive&uri_b=ia_gptransco_1630618353";

interface DriverApplyContextType {
  openApplyModal: () => void;
  openPrequalModal: () => void;
  closeModals: () => void;
}

const DriverApplyContext = createContext<DriverApplyContextType>({
  openApplyModal: () => {},
  openPrequalModal: () => {},
  closeModals: () => {},
});

export function useDriverApply() {
  return useContext(DriverApplyContext);
}

interface QualificationData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  preferredContact: "Call" | "Text" | "Email";
  cdlClass: "Class A" | "Class B" | "Class — None" | "";
  cdlState: string;
  yearsExperience: string;
  recentEmployer: string;

  // Step 3: Medical (4 questions)
  hasMedicalCard: boolean | null;
  passDrugScreen: boolean | null;
  clearinghouseProhibit: boolean | null;
  failedDrugTestBefore: boolean | null;

  // Step 4: Record (5 questions)
  dui5y: boolean | null;
  reckless5y: boolean | null;
  movingViolations3y: number;
  movingViolations12m: number;
  majorHosViolations6m: number;

  // Step 5: History / Accidents & Employment (4 questions)
  preventableAccidents3y: number;
  seriousAccident12m: boolean | null;
  cdlJobs12m: number;
  truckAbandonment: boolean | null;

  // Step 6: Background & Compliance (5 questions)
  hasFelonyHistory: boolean | null;
  passInspectionTest: boolean | null;
  passRoadSkillsTest: boolean | null;
  physicallyAble: boolean | null;
  reportHonestly: boolean | null;
}

const INITIAL_DATA: QualificationData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  zip: "",
  preferredContact: "Call",
  cdlClass: "Class A",
  cdlState: "",
  yearsExperience: "",
  recentEmployer: "",
  // Medical
  hasMedicalCard: null,
  passDrugScreen: null,
  clearinghouseProhibit: null,
  failedDrugTestBefore: null,
  // Record
  dui5y: null,
  reckless5y: null,
  movingViolations3y: 0,
  movingViolations12m: 0,
  majorHosViolations6m: 0,
  // History
  preventableAccidents3y: 0,
  seriousAccident12m: null,
  cdlJobs12m: 0,
  truckAbandonment: null,
  // Background & Compliance
  hasFelonyHistory: null,
  passInspectionTest: null,
  passRoadSkillsTest: null,
  physicallyAble: null,
  reportHonestly: null,
};

const STEPS = [
  { label: "Contact", icon: User },
  { label: "License", icon: IdentificationCard },
  { label: "Medical", icon: Heart },
  { label: "Record", icon: Warning },
  { label: "History", icon: ClipboardText },
  { label: "Background", icon: ShieldCheck },
];

export function DriverApplyProvider({ children }: { children: ReactNode }) {
  const [choiceOpen, setChoiceOpen] = useState(false);
  const [prequalOpen, setPrequalOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<QualificationData>(INITIAL_DATA);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openApplyModal = useCallback(() => {
    setPrequalOpen(false);
    setChoiceOpen(true);
  }, []);

  const openPrequalModal = useCallback(() => {
    setChoiceOpen(false);
    setStep(0);
    setSubmitted(false);
    setPrequalOpen(true);
  }, []);

  const closeModals = useCallback(() => {
    setChoiceOpen(false);
    setPrequalOpen(false);
  }, []);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModals();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModals]);

  const updateField = <K extends keyof QualificationData>(
    field: K,
    value: QualificationData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isStep1Valid = Boolean(
    formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.phone.trim() &&
      formData.email.trim(),
  );

  const isStep2Valid = Boolean(
    formData.cdlClass &&
      formData.cdlState.trim() &&
      formData.yearsExperience.trim(),
  );

  const isStep3Valid =
    formData.hasMedicalCard !== null &&
    formData.passDrugScreen !== null &&
    formData.clearinghouseProhibit !== null &&
    formData.failedDrugTestBefore !== null;

  const isStep4Valid =
    formData.dui5y !== null &&
    formData.reckless5y !== null;

  const isStep5Valid =
    formData.seriousAccident12m !== null &&
    formData.truckAbandonment !== null;

  const isStep6Valid =
    formData.hasFelonyHistory !== null &&
    formData.passInspectionTest !== null &&
    formData.passRoadSkillsTest !== null &&
    formData.physicallyAble !== null &&
    formData.reportHonestly !== null;

  const canContinue =
    (step === 0 && isStep1Valid) ||
    (step === 1 && isStep2Valid) ||
    (step === 2 && isStep3Valid) ||
    (step === 3 && isStep4Valid) ||
    (step === 4 && isStep5Valid) ||
    (step === 5 && isStep6Valid);

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <DriverApplyContext.Provider
      value={{ openApplyModal, openPrequalModal, closeModals }}
    >
      {children}

      {/* 1. APPLY TO DRIVE CHOICE MODAL */}
      {choiceOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setChoiceOpen(false)}
        >
          <div
            className="relative w-full max-w-[460px] bg-white rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-full bg-[#25318d] flex items-center justify-center shadow-md shadow-[#25318d]/20 text-white">
                  <Truck size={22} weight="fill" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800 m-0 leading-tight">
                    Apply to Drive
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm m-0 mt-0.5">
                    Choose how you&apos;d like to get started
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setChoiceOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: 2 Action Cards */}
            <div className="space-y-3">
              {/* Option 1: Quick Qualification (RECOMMENDED) */}
              <button
                type="button"
                onClick={openPrequalModal}
                className="w-full text-left p-4 rounded-2xl border border-[#25318d]/25 bg-[#25318d]/[0.03] hover:bg-[#25318d]/[0.07] transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-full bg-[#25318d] flex items-center justify-center shrink-0 shadow-md shadow-[#25318d]/20 text-white mt-0.5">
                    <Lightning size={20} weight="fill" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-sm">
                        Quick Qualification
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#25318d] text-white text-[10px] font-extrabold tracking-wider uppercase">
                        RECOMMENDED
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed m-0">
                      See if you meet our hiring requirements in under 2
                      minutes — before filling out the full application.
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-400 group-hover:text-[#25318d] group-hover:translate-x-1 transition-all shrink-0 mt-2"
                  />
                </div>
              </button>

              {/* Option 2: Begin Full Application */}
              <a
                href={INTELLIAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setChoiceOpen(false)}
                className="block w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 mt-0.5 group-hover:bg-slate-200 transition-colors">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-slate-900 text-sm block mb-1">
                      Begin Full Application
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed m-0">
                      Skip pre-qualification and go directly to the full driver
                      application on IntelliApp.
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all shrink-0 mt-2"
                  />
                </div>
              </a>
            </div>

            {/* Modal Footer Note */}
            <p className="mt-5 text-center text-xs text-slate-400 m-0 font-medium">
              Questions? Call recruiting at{" "}
              <a
                href="tel:7082988281"
                className="text-slate-700 font-bold hover:underline"
              >
                (708) 298-8281
              </a>
            </p>
          </div>
        </div>
      )}

      {/* 2. GP TRANSCO DRIVER QUALIFICATION MULTI-STEP MODAL */}
      {prequalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPrequalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="px-6 pt-5 pb-3 shrink-0 border-b border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1.5 p-1 transition-colors cursor-pointer"
                  title="Copy form link"
                >
                  {copied ? (
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <Check size={14} /> Link Copied
                    </span>
                  ) : (
                    <>
                      <LinkIcon size={15} />
                      <span className="hidden sm:inline">Share</span>
                    </>
                  )}
                </button>

                <h3 className="text-base sm:text-lg font-bold text-[#25318d] m-0 text-center">
                  GP Transco Driver Qualification
                </h3>

                <button
                  type="button"
                  onClick={() => setPrequalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close form"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Progress Steps Header */}
              {!submitted && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    {STEPS.map((s, idx) => {
                      const isDone = idx < step;
                      const isCurrent = idx === step;
                      const Icon = s.icon;
                      return (
                        <div
                          key={s.label}
                          className="flex flex-col items-center flex-1 min-w-0"
                        >
                          <div
                            className={cx(
                              "size-9 sm:size-10 rounded-full flex items-center justify-center transition-all duration-300",
                              isDone
                                ? "bg-[#25318d] text-white shadow-sm"
                                : isCurrent
                                ? "bg-[#25318d] text-white shadow-md ring-4 ring-[#25318d]/15"
                                : "bg-slate-100 text-slate-400 border border-slate-200",
                            )}
                          >
                            {isDone ? (
                              <Check size={16} weight="bold" />
                            ) : (
                              <Icon size={16} weight={isCurrent ? "fill" : "regular"} />
                            )}
                          </div>
                          {isCurrent && (
                            <span className="text-[11px] mt-1.5 font-bold text-[#25318d] tracking-wide whitespace-nowrap">
                              {s.label}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Connecting Progress Line */}
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#25318d] rounded-full transition-all duration-300"
                      style={{
                        width: `${((step + 1) / STEPS.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Scrollable Form Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {/* SUCCESS / RESULT SCREEN */}
              {submitted ? (
                <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle size={38} weight="fill" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 m-0">
                      You&apos;re Pre-Qualified!
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                      Great news,{" "}
                      <strong className="text-slate-900 font-bold">
                        {formData.firstName || "Driver"}
                      </strong>
                      ! Based on your CDL experience and safety record, you meet
                      GP Transco&apos;s hiring standards for top-tier pay.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Applicant:</span>
                      <span className="text-slate-800 font-bold">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Pay Range:</span>
                      <span className="text-[#25318d] font-bold">
                        Up to 83 CPM + ELITE
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Next Step:</span>
                      <span className="text-emerald-700 font-bold">
                        Complete IntelliApp Form
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                      href={INTELLIAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#25318d] text-white font-bold text-sm shadow-md hover:bg-[#1a2366] transition-all flex items-center justify-center gap-2"
                    >
                      Complete Full Application
                      <ArrowRight size={16} weight="bold" />
                    </a>
                    <a
                      href="tel:7082988281"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Phone size={16} weight="bold" />
                      (708) 298-8281
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  {/* STEP 1: CONTACT INFORMATION */}
                  {step === 0 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                        <div className="size-9 rounded-full bg-[#25318d]/10 text-[#25318d] flex items-center justify-center">
                          <User size={18} weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 m-0">
                            Contact Information
                          </h4>
                          <p className="text-xs text-slate-500 m-0">
                            How can we reach you?
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) =>
                              updateField("firstName", e.target.value)
                            }
                            placeholder="John"
                            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) =>
                              updateField("lastName", e.target.value)
                            }
                            placeholder="Doe"
                            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            updateField("phone", e.target.value)
                          }
                          placeholder="(555) 000-0000"
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            updateField("email", e.target.value)
                          }
                          placeholder="driver@example.com"
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) =>
                              updateField("city", e.target.value)
                            }
                            placeholder="Chicago"
                            className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            State *
                          </label>
                          <input
                            type="text"
                            value={formData.state}
                            onChange={(e) =>
                              updateField("state", e.target.value)
                            }
                            placeholder="IL"
                            className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            ZIP *
                          </label>
                          <input
                            type="text"
                            value={formData.zip}
                            onChange={(e) =>
                              updateField("zip", e.target.value)
                            }
                            placeholder="60435"
                            className="w-full h-11 px-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Preferred Contact Method *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(["Call", "Text", "Email"] as const).map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() =>
                                updateField("preferredContact", method)
                              }
                              className={cx(
                                "h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                                formData.preferredContact === method
                                  ? "bg-[#25318d] text-white border-[#25318d]"
                                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300",
                              )}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: LICENSE & EXPERIENCE */}
                  {step === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                        <div className="size-9 rounded-full bg-[#25318d]/10 text-[#25318d] flex items-center justify-center">
                          <IdentificationCard size={18} weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 m-0">
                            License & Experience
                          </h4>
                          <p className="text-xs text-slate-500 m-0">
                            Tell us about your CDL
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          CDL Class *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(
                            [
                              "Class A",
                              "Class B",
                              "Class — None",
                            ] as const
                          ).map((cls) => (
                            <button
                              key={cls}
                              type="button"
                              onClick={() => updateField("cdlClass", cls)}
                              className={cx(
                                "h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer",
                                formData.cdlClass === cls
                                  ? "bg-[#25318d] text-white border-[#25318d]"
                                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300",
                              )}
                            >
                              {cls}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            CDL State *
                          </label>
                          <input
                            type="text"
                            value={formData.cdlState}
                            onChange={(e) =>
                              updateField("cdlState", e.target.value)
                            }
                            placeholder="E.G. IL"
                            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Years of Experience *
                          </label>
                          <input
                            type="text"
                            value={formData.yearsExperience}
                            onChange={(e) =>
                              updateField("yearsExperience", e.target.value)
                            }
                            placeholder="e.g. 3"
                            className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Most Recent Employer *
                        </label>
                        <input
                          type="text"
                          value={formData.recentEmployer}
                          onChange={(e) =>
                            updateField("recentEmployer", e.target.value)
                          }
                          placeholder="Company name"
                          className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#25318d] text-sm text-slate-900 outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: MEDICAL & DRUG SCREEN */}
                  {step === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                        <div className="size-10 rounded-2xl bg-[#25318d] text-white flex items-center justify-center shadow-sm">
                          <Heart size={20} weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 m-0">
                            Medical & Compliance
                          </h4>
                          <p className="text-xs text-slate-500 m-0">
                            DOT physical & screening status
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        {/* 1. Valid DOT medical card */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Do you have a valid DOT medical card?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() => updateField("hasMedicalCard", val)}
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.hasMedicalCard === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 2. Pass DOT drug test */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Can you pass a DOT drug test?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() => updateField("passDrugScreen", val)}
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.passDrugScreen === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 3. Clearinghouse status prohibit */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Does your DOT Clearinghouse status prohibit you from doing work as a CDL Driver?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("clearinghouseProhibit", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.clearinghouseProhibit === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 4. Ever failed or refused DOT drug/alcohol test */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Have you ever failed or refused a DOT drug/alcohol test?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("failedDrugTestBefore", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.failedDrugTestBefore === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: DRIVING RECORD */}
                  {step === 3 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                        <div className="size-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-sm">
                          <Warning size={20} weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 m-0">
                            Driving Record
                          </h4>
                          <p className="text-xs text-slate-500 m-0">
                            Violations and incidents
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        {/* 1. DUI/DWI past 5 years */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            DUI/DWI in the past 5 years?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() => updateField("dui5y", val)}
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.dui5y === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 2. Reckless driving past 5 years */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Reckless driving in the past 5 years?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() => updateField("reckless5y", val)}
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.reckless5y === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 3. Moving violations (last 3 years) */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Moving violations (last 3 years)
                          </label>
                          <div className="grid grid-cols-11 gap-1">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() =>
                                  updateField("movingViolations3y", num)
                                }
                                className={cx(
                                  "h-10 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.movingViolations3y === num
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 4. Moving violations (last 12 months) */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Moving violations (last 12 months)
                          </label>
                          <div className="grid grid-cols-11 gap-1">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() =>
                                  updateField("movingViolations12m", num)
                                }
                                className={cx(
                                  "h-10 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.movingViolations12m === num
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 5. Major HOS violations (last 6 months) */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                            Major HOS violations (last 6 months)
                          </label>
                          <p className="text-[11px] text-slate-400 font-normal m-0 mb-1.5">
                            ELD tampering, false log, OOS, 2+ hrs over driving limit
                          </p>
                          <div className="grid grid-cols-6 gap-1.5 max-w-[280px]">
                            {[0, 1, 2, 3, 4, 5].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() =>
                                  updateField("majorHosViolations6m", num)
                                }
                                className={cx(
                                  "h-10 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.majorHosViolations6m === num
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: ACCIDENTS & EMPLOYMENT */}
                  {step === 4 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                        <div className="size-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-sm">
                          <ShieldCheck size={20} weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 m-0">
                            Accidents & Employment
                          </h4>
                          <p className="text-xs text-slate-500 m-0">
                            Recent history
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        {/* 1. Preventable accidents (last 3 years) */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Preventable accidents (last 3 years)
                          </label>
                          <div className="grid grid-cols-11 gap-1">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() =>
                                  updateField("preventableAccidents3y", num)
                                }
                                className={cx(
                                  "h-10 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.preventableAccidents3y === num
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 2. Serious at-fault accident in last 12 months? */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                            Serious at-fault accident in last 12 months?
                          </label>
                          <p className="text-[11px] text-slate-400 font-normal m-0 mb-1.5">
                            Rear-end, jackknife, rollover, sideswipe, etc.
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("seriousAccident12m", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.seriousAccident12m === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 3. CDL jobs in the last 12 months */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            CDL jobs in the last 12 months
                          </label>
                          <div className="grid grid-cols-11 gap-1">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => updateField("cdlJobs12m", num)}
                                className={cx(
                                  "h-10 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.cdlJobs12m === num
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 4. History of truck abandonment? */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            History of truck abandonment?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("truckAbandonment", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.truckAbandonment === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 6: BACKGROUND & COMPLIANCE */}
                  {step === 5 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                        <div className="size-10 rounded-2xl bg-[#a855f7] text-white flex items-center justify-center shadow-sm">
                          <FileText size={20} weight="bold" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 m-0">
                            Background & Compliance
                          </h4>
                          <p className="text-xs text-slate-500 m-0">
                            Final questions
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        {/* 1. Felony history */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Do you have a felony history?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("hasFelonyHistory", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.hasFelonyHistory === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 2. Pre-trip / post-trip inspection */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Can you pass a pre-trip/post-trip inspection test?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("passInspectionTest", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.passInspectionTest === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 3. Road skills test */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Can you pass a road skills test?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("passRoadSkillsTest", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.passRoadSkillsTest === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 4. Physically able to perform all job duties */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Are you physically able to perform all job duties?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("physicallyAble", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.physicallyAble === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 5. Report all incidents honestly */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                            Will you report all incidents and history honestly?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: "Yes", val: true },
                              { label: "No", val: false },
                            ].map(({ label, val }) => (
                              <button
                                key={label}
                                type="button"
                                onClick={() =>
                                  updateField("reportHonestly", val)
                                }
                                className={cx(
                                  "h-11 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center",
                                  formData.reportHonestly === val
                                    ? "border-[#25318d] bg-[#25318d]/5 text-[#25318d] font-bold ring-1 ring-[#25318d]"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                                )}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Bottom Form Navigation Buttons */}
            {!submitted && (
              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} weight="bold" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canContinue}
                  className={cx(
                    "px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all",
                    !canContinue
                      ? "bg-[#B4BFE0] text-white cursor-not-allowed"
                      : "bg-[#25318d] text-white hover:bg-[#1b2466] shadow-sm active:scale-[0.98] cursor-pointer",
                  )}
                >
                  <span>{step === STEPS.length - 1 ? "See My Results" : "Continue"}</span>
                  {step < STEPS.length - 1 && <ArrowRight size={14} weight="bold" />}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </DriverApplyContext.Provider>
  );
}
