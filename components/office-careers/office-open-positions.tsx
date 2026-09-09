"use client";

import { useState } from "react";
import {
  Briefcase,
  MapPin,
  ShieldCheck,
  Wrench,
  TrendUp,
  Bank,
  Megaphone,
  Crown,
  Users,
  CurrencyDollar,
  Clock,
  ArrowRight,
  ShareNetwork,
  Check,
  X,
  UploadSimple,
  CircleNotch,
} from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryType?: "hourly" | "yearly";
  shortDescription: string;
  fullDescription?: string[];
  responsibilities?: string[];
  requirements?: string[];
}

const DEPARTMENTS = [
  "Operations",
  "Safety",
  "Maintenance",
  "Accounting",
  "Executive",
  "Marketing",
  "Sales",
  "HR",
];

const LOCATIONS = [
  "Joliet, IL",
  "Columbus, OH",
  "Kalamazoo, MI",
  "Indianapolis, IN",
  "Medellin, Colombia",
  "Vilnius, Lithuania",
  "Klaipeda, Lithuania",
  "Remote",
];

const JOBS: JobOpening[] = [
  {
    id: "dir-safety-joliet",
    title: "Director of Safety",
    department: "Safety",
    location: "Joliet, IL",
    jobType: "Full-time",
    salaryMin: 100000,
    salaryMax: 150000,
    salaryType: "yearly",
    shortDescription:
      "GP Transco, a modern industry leader in trucking and logistics, is seeking a highly motivated and experienced Director of Safety to lead our company-wide fleet safety, DOT compliance, and risk programs.",
    fullDescription: [
      "The Director of Safety is responsible for overseeing all aspects of transportation safety and regulatory compliance across GP Transco's fleet operations.",
      "In this executive leadership role, you will champion our award-winning safety culture, manage FMCSA and DOT compliance audits, direct driver risk mitigation programs, and implement cutting-edge safety technologies across hundreds of power units.",
    ],
    responsibilities: [
      "Oversee all federal, state, and local regulatory compliance programs (FMCSA, DOT, OSHA).",
      "Direct the safety coaching, driver accident review, and violation corrective action programs.",
      "Analyze safety telemetry, dashcam events, and CSA scores to proactively reduce accident frequency.",
      "Collaborate with executive leadership to elevate industry-best safety standards.",
    ],
    requirements: [
      "7+ years of safety leadership in motor carrier or transportation operations.",
      "Deep expertise in DOT/FMCSA regulations, Hours of Service, and HazMat requirements.",
      "Proven track record of improving CSA safety scores and building driver trust.",
      "Exceptional communication, team leadership, and data analytics skills.",
    ],
  },
  {
    id: "mtt-columbus",
    title: "Mobile Trailer Technician",
    department: "Maintenance",
    location: "Columbus, OH",
    jobType: "Full-time",
    salaryMin: 32,
    salaryMax: 42,
    salaryType: "hourly",
    shortDescription:
      "GP Transco is a modern trucking company that hires experienced technicians to operate mobile service units, maintaining our late-model trailer fleet with state-of-the-art tooling and equipment.",
    fullDescription: [
      "As a Mobile Trailer Technician, you will operate a fully equipped service vehicle providing mobile inspection, diagnostic, and repair services for our dry van and refrigerated trailers.",
    ],
    responsibilities: [
      "Perform PM inspections, brake jobs, wheel-end repairs, and electrical troubleshooting.",
      "Diagnose and repair structural trailer components, doors, air lines, and ABS systems.",
      "Complete digital work orders promptly using mobile tablet diagnostic software.",
    ],
    requirements: [
      "2+ years of commercial trailer repair or fleet maintenance experience.",
      "Valid driver's license with clean driving record.",
      "Proficiency with air brake systems, lighting/wiring, and preventive maintenance.",
    ],
  },
  {
    id: "mtt-kalamazoo",
    title: "Mobile Trailer Technician",
    department: "Maintenance",
    location: "Kalamazoo, MI",
    jobType: "Full-time",
    salaryMin: 32,
    salaryMax: 42,
    salaryType: "hourly",
    shortDescription:
      "GP Transco is a modern trucking company that hires experienced technicians to operate mobile service units, maintaining our late-model trailer fleet with state-of-the-art tooling and equipment.",
    fullDescription: [
      "Operate a company-provided mobile service truck serving GP Transco trailers in the Kalamazoo / Western Michigan regional operating corridors.",
    ],
    responsibilities: [
      "Inspect, troubleshoot, and repair 53ft trailers in the field and at terminal locations.",
      "Ensure trailer equipment meets DOT and strict GP Transco internal roadworthiness benchmarks.",
    ],
    requirements: [
      "Prior commercial fleet maintenance experience.",
      "Ability to work independently with mobile dispatch systems.",
    ],
  },
  {
    id: "mtt-indianapolis",
    title: "Mobile Trailer Technician",
    department: "Maintenance",
    location: "Indianapolis, IN",
    jobType: "Full-time",
    salaryMin: 32,
    salaryMax: 42,
    salaryType: "hourly",
    shortDescription:
      "GP Transco is a modern trucking company that hires experienced technicians to operate mobile service units, maintaining our late-model trailer fleet with state-of-the-art tooling and equipment.",
    fullDescription: [
      "Stationed in the Indianapolis regional hub, performing preventive maintenance and rapid field repair on fleet trailers.",
    ],
    responsibilities: [
      "Perform emergency roadside fixes and preventative maintenance cycles on trailers.",
      "Order parts and maintain truck stock levels accurately.",
    ],
    requirements: [
      "Experience with air brakes, suspension, tire changes, and structural body repairs.",
    ],
  },
  {
    id: "mtt-joliet",
    title: "Mobile Trailer Technician",
    department: "Maintenance",
    location: "Joliet, IL",
    jobType: "Full-time",
    salaryMin: 32,
    salaryMax: 42,
    salaryType: "hourly",
    shortDescription:
      "GP Transco is a modern trucking company that hires experienced technicians to operate mobile service units, maintaining our late-model trailer fleet with state-of-the-art tooling and equipment.",
    fullDescription: [
      "Based out of our flagship Joliet headquarters terminal, supporting the primary equipment depot and Midwest terminal network.",
    ],
    responsibilities: [
      "Trailer structural, brake, and electrical system overhaul.",
      "Collaborate with shop foremen and dispatch for expedited turnaround times.",
    ],
    requirements: [
      "Demonstrated trailer maintenance background and clean safety history.",
    ],
  },
  {
    id: "ops-coord-medellin",
    title: "Senior Logistics Coordinator",
    department: "Operations",
    location: "Medellin, Colombia",
    jobType: "Full-time",
    shortDescription:
      "Join our international operations hub in Medellin, Colombia. Manage load lifecycle execution, driver track-and-trace, and customer communications using proprietary dispatch intelligence tools.",
    fullDescription: [
      "Work closely with our US dispatch headquarters to coordinate freight movements across North American freight lanes.",
    ],
    responsibilities: [
      "Monitor shipment progression and proactively communicate ETAs to shippers.",
      "Coordinate directly with over-the-road drivers to resolve transit delays and appointment times.",
    ],
    requirements: [
      "Bilingual in English and Spanish (written and verbal).",
      "Experience in logistics, supply chain, or customer operations.",
    ],
  },
  {
    id: "acc-analyst-vilnius",
    title: "Accounting Specialist",
    department: "Accounting",
    location: "Vilnius, Lithuania",
    jobType: "Full-time",
    shortDescription:
      "Support freight billing, carrier settlements, and financial reporting in GP Transco's European technical and finance center located in Vilnius.",
    fullDescription: [
      "Process freight audit invoices, reconcile accounts receivable, and collaborate with US finance executives.",
    ],
    responsibilities: [
      "Audit bills of lading, proof of delivery, and rate confirmations for timely billing.",
      "Reconcile customer accounts and address payment discrepancies.",
    ],
    requirements: [
      "Bachelor's degree in Accounting, Finance, or related business discipline.",
      "Proficiency in Excel and accounting ERP software.",
    ],
  },
  {
    id: "sales-exec-remote",
    title: "Freight Sales Executive",
    department: "Sales",
    location: "Remote",
    jobType: "Full-time",
    salaryMin: 80000,
    salaryMax: 130000,
    salaryType: "yearly",
    shortDescription:
      "Grow enterprise shipper accounts with an asset-based carrier known for 99.4% on-time service, transparent pricing, and modern equipment.",
    fullDescription: [
      "Prospect, develop, and close enterprise freight shipping accounts across consumer goods, manufacturing, and retail sectors.",
    ],
    responsibilities: [
      "Build long-term direct shipper partnerships across US domestic lanes.",
      "Present GP Transco's technology and safety track record to VP-level logistics buyers.",
    ],
    requirements: [
      "3+ years of enterprise freight brokerage or carrier sales experience.",
      "Demonstrated book of shipper relationships and quota achievement.",
    ],
  },
];

function getDepartmentIcon(dept: string) {
  switch (dept.toLowerCase()) {
    case "safety":
      return ShieldCheck;
    case "maintenance":
      return Wrench;
    case "operations":
      return Briefcase;
    case "sales":
      return TrendUp;
    case "accounting":
      return Bank;
    case "marketing":
      return Megaphone;
    case "executive":
      return Crown;
    case "hr":
      return Users;
    default:
      return Briefcase;
  }
}

export function OfficeOpenPositions() {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [activeJobModal, setActiveJobModal] = useState<JobOpening | null>(null);

  const toggleDepartment = (dept: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept],
    );
  };

  const toggleLocation = (loc: string) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc],
    );
  };

  const clearFilters = () => {
    setSelectedDepartments([]);
    setSelectedLocations([]);
  };

  const hasFilters =
    selectedDepartments.length > 0 || selectedLocations.length > 0;

  const filteredJobs = JOBS.filter((job) => {
    if (
      selectedDepartments.length > 0 &&
      !selectedDepartments.includes(job.department)
    ) {
      return false;
    }
    if (
      selectedLocations.length > 0 &&
      !selectedLocations.includes(job.location)
    ) {
      return false;
    }
    return true;
  });

  return (
    <section
      id="open-positions"
      className="relative bg-page py-[clamp(78px,12vh,140px)] px-gut overflow-hidden border-t border-line"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          {/* Header */}
          <header
            className={cx(
              revealItem,
              "text-center max-w-[760px] mx-auto mb-[clamp(40px,5.5vh,64px)]",
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
                Open Positions
              </span>
            </div>

            <h2 className="type-display m-0 text-[clamp(32px,4.5vw,58px)] text-ink-text leading-[0.94]">
              Current <span className="text-azure">Job Openings</span>
            </h2>

            <p className="mt-4 text-[clamp(15px,1.15vw,18px)] leading-[1.62] text-body-text max-w-2xl mx-auto">
              Find the perfect role for you across our operations, maintenance,
              safety, and corporate teams.
            </p>
          </header>

          {/* Filter Card */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "bg-surface border border-line rounded-3xl p-6 sm:p-10 mb-12 shadow-sm",
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-ink-text m-0">
                  Filter Positions
                </h3>
                <p className="text-sm text-body-text mt-1 m-0">
                  Find the perfect role for you
                </p>
              </div>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-bold uppercase tracking-wider hover:bg-red-500 hover:text-white transition-all self-start sm:self-auto cursor-pointer"
                >
                  <X size={14} weight="bold" />
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Department Filter */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-ink-text font-bold text-sm uppercase tracking-wider">
                  <div className="size-8 rounded-lg bg-azure/10 text-azure flex items-center justify-center">
                    <Briefcase size={16} weight="bold" />
                  </div>
                  <span>Department</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DEPARTMENTS.map((dept) => {
                    const active = selectedDepartments.includes(dept);
                    return (
                      <button
                        key={dept}
                        type="button"
                        onClick={() => toggleDepartment(dept)}
                        className={cx(
                          "px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border",
                          active
                            ? "bg-azure text-white border-azure shadow-sm shadow-azure/25"
                            : "bg-page border-line text-ink-text hover:border-azure/40 hover:text-azure",
                        )}
                      >
                        {dept}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-ink-text font-bold text-sm uppercase tracking-wider">
                  <div className="size-8 rounded-lg bg-azure/10 text-azure flex items-center justify-center">
                    <MapPin size={16} weight="bold" />
                  </div>
                  <span>Location</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.map((loc) => {
                    const active = selectedLocations.includes(loc);
                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => toggleLocation(loc)}
                        className={cx(
                          "px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border",
                          active
                            ? "bg-azure text-white border-azure shadow-sm shadow-azure/25"
                            : "bg-page border-line text-ink-text hover:border-azure/40 hover:text-azure",
                        )}
                      >
                        {loc}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings Grid */}
          <div
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(revealItem)}
          >
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 px-6 bg-surface border border-line rounded-3xl">
                <p className="text-base text-body-text mb-4">
                  No positions match your filters. Try adjusting your search.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-5 py-2.5 rounded-full bg-azure text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => {
                  const DeptIcon = getDepartmentIcon(job.department);
                  return (
                    <div
                      key={job.id}
                      onClick={() => setActiveJobModal(job)}
                      className="group bg-surface border border-line rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                    >
                      <div>
                        {/* Department Badge */}
                        <div className="size-12 rounded-xl bg-azure/10 text-azure flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all shadow-sm">
                          <DeptIcon size={24} weight="bold" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-ink-text mb-2.5 group-hover:text-azure transition-colors leading-snug">
                          {job.title}
                        </h3>

                        {/* Description snippet */}
                        <p className="text-sm text-body-text leading-relaxed line-clamp-3 mb-6">
                          {job.shortDescription}
                        </p>
                      </div>

                      <div>
                        {/* Meta Rows */}
                        <div className="space-y-2.5 mb-6 text-xs text-body-text border-t border-line/60 pt-4">
                          <div className="flex items-center gap-2">
                            <MapPin
                              size={15}
                              weight="bold"
                              className="text-azure flex-shrink-0"
                            />
                            <span className="font-medium text-ink-text">
                              {job.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <DeptIcon
                              size={15}
                              weight="bold"
                              className="text-azure flex-shrink-0"
                            />
                            <span>{job.department}</span>
                          </div>

                          {job.salaryMin && job.salaryMax && (
                            <div className="flex items-center gap-2">
                              <CurrencyDollar
                                size={15}
                                weight="bold"
                                className="text-azure flex-shrink-0"
                              />
                              <span className="font-semibold text-ink-text">
                                ${job.salaryMin.toLocaleString()} - $
                                {job.salaryMax.toLocaleString()}
                                {job.salaryType === "hourly" ? "/hr" : "/yr"}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center gap-2">
                            <Clock
                              size={15}
                              weight="bold"
                              className="text-azure flex-shrink-0"
                            />
                            <span>{job.jobType}</span>
                          </div>
                        </div>

                        {/* Action link */}
                        <div className="flex items-center gap-2 text-azure text-sm font-bold group-hover:translate-x-1 transition-transform">
                          <span>View Details</span>
                          <ArrowRight size={15} weight="bold" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>
      </div>

      {/* Interactive Job Application Modal */}
      {activeJobModal && (
        <JobApplicationModal
          job={activeJobModal}
          onClose={() => setActiveJobModal(null)}
        />
      )}
    </section>
  );
}

function JobApplicationModal({
  job,
  onClose,
}: {
  job: JobOpening;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    coverLetter: "",
  });

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(
        `${window.location.origin}/office-careers#${job.id}`,
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
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto bg-ink/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl my-8 bg-surface rounded-3xl border border-line shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-ink via-ink-2 to-azure-ink p-6 sm:p-8 text-paper">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={cx(
                  label,
                  "text-azure-hi text-[11px] block mb-2",
                )}
              >
                {job.department} • {job.jobType}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-paper m-0">
                {job.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs sm:text-sm text-soft-text">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-azure-hi" />
                  {job.location}
                </span>
                {job.salaryMin && job.salaryMax && (
                  <>
                    <span>•</span>
                    <span className="font-semibold text-emerald-400">
                      ${job.salaryMin.toLocaleString()} - $
                      {job.salaryMax.toLocaleString()}
                      {job.salaryType === "hourly" ? "/hr" : "/yr"}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                title="Copy link to this job"
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-paper transition-all cursor-pointer"
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
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-paper transition-all cursor-pointer"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-160px)] overflow-y-auto space-y-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Check size={32} weight="bold" />
              </div>
              <h3 className="text-2xl font-bold text-ink-text mb-2">
                Application Submitted!
              </h3>
              <p className="text-sm text-body-text max-w-md mx-auto">
                Thank you for applying for the {job.title} position at GP
                Transco. Our recruiting team will review your qualifications and
                reach out shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Job Overview */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-ink-text uppercase tracking-wider">
                  Role Overview
                </h3>
                {job.fullDescription ? (
                  job.fullDescription.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-body-text m-0"
                    >
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="text-sm leading-relaxed text-body-text m-0">
                    {job.shortDescription}
                  </p>
                )}
              </div>

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-ink-text uppercase tracking-wider">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2 text-sm text-body-text list-none p-0 m-0">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="size-1.5 rounded-full bg-azure mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && job.requirements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-ink-text uppercase tracking-wider">
                    Qualifications & Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-body-text list-none p-0 m-0">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="size-1.5 rounded-full bg-azure mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Application Form */}
              <div className="border-t border-line pt-6">
                <h3 className="text-lg font-bold text-ink-text mb-4">
                  Apply for this position
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Doe"
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
                        placeholder="jane@example.com"
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
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full h-11 px-3.5 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                        LinkedIn Profile URL
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
                      Upload Resume / CV *
                    </label>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-line hover:border-azure rounded-2xl p-6 bg-page/50 cursor-pointer transition-colors group">
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
                        {fileName ? fileName : "Click to select PDF or Word document"}
                      </span>
                      <span className="text-[11px] text-mute mt-1">
                        Max file size: 10MB
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-text mb-1.5">
                      Cover Letter or Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share relevant experience, relocation preferences, or certifications..."
                      value={form.coverLetter}
                      onChange={(e) =>
                        setForm({ ...form, coverLetter: e.target.value })
                      }
                      className="w-full p-3 rounded-xl bg-page border border-line text-sm text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
