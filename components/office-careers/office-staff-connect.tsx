"use client";

import { useState } from "react";
import {
  Users,
  SquaresFour,
  Folder,
  GraduationCap,
  Flask,
  Trophy,
  Sparkle,
  CheckCircle,
  DownloadSimple,
  ArrowsOut,
  MagnifyingGlass,
  Bell,
  Lock,
} from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

const TABS = [
  {
    id: "directory",
    icon: Users,
    title: "Employee Directory",
    desc: "Find teammates, expertise, and the people behind GP Transco.",
    navLabel: "Directory",
  },
  {
    id: "dashboard",
    icon: SquaresFour,
    title: "Personalized Dashboard",
    desc: "Everything each employee needs, in one place.",
    navLabel: "Home",
  },
  {
    id: "resources",
    icon: Folder,
    title: "Company Resources",
    desc: "Every downloadable file, organized by department.",
    navLabel: "Resources",
  },
  {
    id: "academy",
    icon: GraduationCap,
    title: "GP Academy",
    desc: "Assignments, quizzes, progress tracking, and employee recognition make professional development visible and accessible.",
    navLabel: "Academy",
  },
  {
    id: "decisions",
    icon: Flask,
    title: "Decision Lab",
    desc: "Clear visibility into important company decisions.",
    navLabel: "Decisions",
  },
  {
    id: "wins",
    icon: Trophy,
    title: "Team Wins",
    desc: "Celebrate the people and milestones that move us forward.",
    navLabel: "Wins",
  },
  {
    id: "claude",
    icon: Sparkle,
    title: "Ask Claude",
    desc: "Instant answers from company knowledge and connected resources.",
    navLabel: "Ask Claude",
  },
];

export function OfficeStaffConnect() {
  const [activeTab, setActiveTab] = useState("academy");

  return (
    <section id="staff-connect" className="bg-ink py-[clamp(78px,12vh,150px)] px-gut relative overflow-hidden text-paper">
      <Reveal>
        {/* Section Header */}
        <header className={cx(revealItem, "max-w-[760px] mb-[clamp(40px,6vh,64px)]")}>
          <p className={cx(label, "text-azure-hi mb-3 flex items-center gap-2")}>
            <Sparkle size={13} weight="fill" />
            Built for Our People
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-paper leading-[0.94]">
            One <span className="text-azure-hi">Connected</span> Workplace
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute max-w-[58ch]">
            Staff Connect brings communication, learning, recognition, company
            knowledge, and everyday tools together in one modern workspace built
            specifically for GP Transco employees.
          </p>
        </header>

        {/* 2-Column Interactive Workspace Console */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-7xl mx-auto",
          )}
        >
          {/* Left Column: Vertical Feature Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cx(
                    "w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all cursor-pointer relative overflow-hidden flex items-start gap-3.5 group",
                    isActive
                      ? "bg-ink-2 border border-azure/40 shadow-xl"
                      : "bg-ink/40 hover:bg-ink-2/60 border border-rule-lit/50 text-mute hover:text-paper",
                  )}
                >
                  {/* Glowing active indicator line */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-azure-hi via-azure to-deep shadow-sm" />
                  )}

                  {/* Icon */}
                  <div
                    className={cx(
                      "size-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                      isActive
                        ? "bg-azure text-azure-ink shadow-md"
                        : "bg-rule-lit text-mute",
                    )}
                  >
                    <Icon size={18} weight={isActive ? "bold" : "regular"} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={cx(
                        "text-[13.5px] font-bold m-0 leading-snug transition-colors",
                        isActive ? "text-paper" : "text-paper/85",
                      )}
                    >
                      {tab.title}
                    </h3>
                    <p className="text-xs text-mute/80 m-0 mt-1 leading-relaxed line-clamp-2">
                      {tab.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Sleek Simulated Laptop Console */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative mx-auto max-w-2xl">
              {/* Laptop Top Case */}
              <div className="bg-ink-2 rounded-t-2xl border-t border-x border-rule-lit shadow-2xl p-2.5 pb-0">
                {/* Camera dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-black mx-auto mb-2 border border-rule-lit flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Laptop Screen Display */}
                <div className="bg-[#0b101a] rounded-t-lg overflow-hidden border border-rule-lit/80 shadow-inner min-h-[380px] sm:min-h-[420px] flex flex-col">
                  {/* Top Bar inside App */}
                  <div className="h-10 px-3.5 bg-ink-2/95 border-b border-rule-lit/80 flex items-center justify-between text-xs shrink-0">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-paper tracking-wide">
                        <span className="size-2 rounded-full bg-azure-hi" />
                        <span>Staff Connect</span>
                      </div>

                      {/* Nav Links */}
                      <div className="hidden sm:flex items-center gap-1 text-[11px] text-mute font-medium">
                        {["Home", "Resources", "Directory", "Academy", "Decisions", "Wins"].map(
                          (item) => {
                            const isLinkActive =
                              TABS.find((t) => t.id === activeTab)?.navLabel ===
                              item;
                            return (
                              <span
                                key={item}
                                className={cx(
                                  "px-2.5 py-1 rounded-md transition-colors",
                                  isLinkActive
                                    ? "bg-azure/20 text-azure-hi font-bold border border-azure/30"
                                    : "hover:text-paper",
                                )}
                              >
                                {item}
                              </span>
                            );
                          },
                        )}
                      </div>
                    </div>

                    {/* Right utilities */}
                    <div className="flex items-center gap-2 text-mute">
                      <MagnifyingGlass size={13} />
                      <Bell size={13} />
                      <div className="size-5 rounded-full bg-azure text-azure-ink text-[9px] font-bold flex items-center justify-center">
                        JS
                      </div>
                    </div>
                  </div>

                  {/* App Main Body */}
                  <div className="flex-1 p-4 sm:p-6 bg-ink flex flex-col justify-center">
                    {/* 1. GP ACADEMY VIEW (Matches Screenshot 5) */}
                    {activeTab === "academy" && (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        {/* Top Metrics Row */}
                        <div className="grid grid-cols-3 gap-2 pb-3 border-b border-rule-lit/80 text-center">
                          <div className="bg-ink-2 p-2 rounded-xl border border-rule-lit">
                            <div className={cx(label, "text-mute text-[9.5px]")}>
                              Assigned
                            </div>
                            <div className="text-lg font-bold text-paper">3</div>
                          </div>
                          <div className="bg-ink-2 p-2 rounded-xl border border-rule-lit">
                            <div className={cx(label, "text-mute text-[9.5px]")}>
                              Completed
                            </div>
                            <div className="text-lg font-bold text-azure-hi">
                              18
                            </div>
                          </div>
                          <div className="bg-ink-2 p-2 rounded-xl border border-rule-lit">
                            <div className={cx(label, "text-mute text-[9.5px]")}>
                              Progress
                            </div>
                            <div className="text-lg font-bold text-emerald-400">
                              100%
                            </div>
                          </div>
                        </div>

                        {/* Completion Trophy Card */}
                        <div className="text-center py-6 px-4 bg-gradient-to-b from-ink-2 to-ink rounded-2xl border border-rule-lit shadow-xl space-y-3">
                          <div className="size-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                            <CheckCircle size={26} weight="bold" />
                          </div>

                          <div>
                            <h4 className="text-base font-bold text-paper m-0">
                              Assignment Complete
                            </h4>
                            <p className="text-xs text-azure-hi font-semibold m-0 mt-0.5">
                              +50 points earned
                            </p>
                          </div>

                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[10px] font-bold">
                            <Lock size={11} weight="fill" />
                            Dean&apos;s List unlocked
                          </div>

                          {/* Progress bar */}
                          <div className="h-1.5 w-full bg-rule-lit rounded-full overflow-hidden mt-4">
                            <div className="h-full w-full bg-gradient-to-r from-azure-hi via-azure to-emerald-400 rounded-full" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. COMPANY RESOURCES VIEW (Matches Screenshot 4) */}
                    {activeTab === "resources" && (
                      <div className="space-y-3 animate-in fade-in duration-300">
                        {/* PDF Doc Header */}
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-rule-lit text-mute">
                          <div className="flex items-center gap-1.5 text-paper font-semibold">
                            <span className="text-red-400 font-bold">PDF</span>
                            <span>Employee Handbook 2026</span>
                          </div>
                          <div className="flex items-center gap-2 text-mute">
                            <DownloadSimple size={14} className="hover:text-paper cursor-pointer" />
                            <ArrowsOut size={14} className="hover:text-paper cursor-pointer" />
                          </div>
                        </div>

                        {/* Document Content Simulation */}
                        <div className="bg-surface rounded-xl p-5 text-ink-text shadow-xl space-y-3 text-[11px] select-none">
                          <div className="text-[10px] text-body-text leading-relaxed">
                            We believe in open communication and continuous
                            improvement. Feedback is welcomed at all levels, and
                            leadership maintains an open-door approach.
                          </div>

                          <div className="border-t border-line pt-2">
                            <div className="text-[9px] font-bold uppercase tracking-wider text-azure mb-1.5">
                              Core Values
                            </div>
                            <div className="flex flex-wrap gap-1.5 text-[9px] font-semibold">
                              <span className="px-2 py-0.5 rounded-full bg-page text-ink-text">
                                • Safety First
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-page text-ink-text">
                                • Respect & Integrity
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-page text-ink-text">
                                • Ownership
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-page text-ink-text">
                                • Team Success
                              </span>
                            </div>
                          </div>

                          <div className="text-[9px] text-soft-text leading-relaxed italic">
                            Diversity and inclusion are central to who we are.
                            Every individual is treated with dignity and
                            respect.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. EMPLOYEE DIRECTORY VIEW */}
                    {activeTab === "directory" && (
                      <div className="space-y-3 animate-in fade-in duration-300">
                        <div className="p-2.5 rounded-xl bg-ink-2 border border-rule-lit flex items-center gap-2 text-xs text-mute">
                          <MagnifyingGlass size={14} />
                          <span>Search 280+ team members...</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[
                            { name: "Jonathon S.", role: "Operations Lead", dept: "Logistics" },
                            { name: "Carly M.", role: "Driver Manager", dept: "Fleet" },
                            { name: "Jim T.", role: "Safety Supervisor", dept: "Compliance" },
                            { name: "Ebony R.", role: "Talent Acquisition", dept: "People" },
                          ].map((person) => (
                            <div
                              key={person.name}
                              className="p-2.5 rounded-xl bg-ink-2 border border-rule-lit flex items-center gap-2.5"
                            >
                              <div className="size-7 rounded-full bg-azure text-azure-ink text-[10px] font-bold flex items-center justify-center shrink-0">
                                {person.name.slice(0, 1)}
                              </div>
                              <div className="min-w-0">
                                <div className="font-bold text-paper text-[11px] truncate">
                                  {person.name}
                                </div>
                                <div className="text-[9px] text-mute truncate">
                                  {person.role}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 4. DASHBOARD VIEW */}
                    {activeTab === "dashboard" && (
                      <div className="space-y-3 animate-in fade-in duration-300 text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-rule-lit">
                          <span className="font-bold text-paper text-xs">
                            Good morning, Team
                          </span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            Fleet 99.4% On-Time
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-ink-2 border border-rule-lit p-3 rounded-xl">
                            <div className={cx(label, "text-mute text-[9.5px]")}>Active Dispatches</div>
                            <div className="text-base font-bold text-paper mt-1">1,420</div>
                          </div>
                          <div className="bg-ink-2 border border-rule-lit p-3 rounded-xl">
                            <div className={cx(label, "text-mute text-[9.5px]")}>Customer Rating</div>
                            <div className="text-base font-bold text-azure-hi mt-1">4.9 / 5.0</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 5. DECISION LAB VIEW */}
                    {activeTab === "decisions" && (
                      <div className="space-y-2.5 animate-in fade-in duration-300 text-xs">
                        <div className="text-xs font-bold text-paper pb-1.5 border-b border-rule-lit">
                          Transparent Decision Registry
                        </div>
                        {[
                          { title: "2026 Fleet Spec & Aerodynamics", status: "Approved" },
                          { title: "OpenRoad 4.0 Driver UI Update", status: "In Pilot" },
                          { title: "Joliet HQ Wellness Extension", status: "Evaluating" },
                        ].map((d) => (
                          <div
                            key={d.title}
                            className="p-2.5 rounded-xl bg-ink-2 border border-rule-lit flex items-center justify-between"
                          >
                            <span className="font-semibold text-paper text-[11px] truncate">
                              {d.title}
                            </span>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-azure/20 text-azure-hi border border-azure/30 shrink-0">
                              {d.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 6. TEAM WINS VIEW */}
                    {activeTab === "wins" && (
                      <div className="space-y-2.5 animate-in fade-in duration-300 text-xs">
                        <div className="text-xs font-bold text-paper pb-1.5 border-b border-rule-lit flex items-center justify-between">
                          <span>Recent Milestones</span>
                          <span className="text-amber-400 text-[10px]">★ 14 Shoutouts</span>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20 text-paper">
                          <div className="font-bold text-amber-300 text-xs">
                            Top Carrier of the Year Finalist
                          </div>
                          <p className="text-[11px] text-mute m-0 mt-1">
                            Recognized for lowest turnover and unmatched safety record.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 7. ASK CLAUDE VIEW */}
                    {activeTab === "claude" && (
                      <div className="space-y-2.5 animate-in fade-in duration-300 text-xs">
                        <div className="p-2.5 rounded-xl bg-azure/10 border border-azure/25 text-azure-hi text-[11px]">
                          <strong>Ask Claude:</strong> How do I refer a new logistics coordinator?
                        </div>
                        <div className="p-2.5 rounded-xl bg-ink-2 border border-rule-lit text-mute text-[11px] leading-relaxed">
                          You can submit referrals directly in Staff Connect under &ldquo;People &gt; Referrals&rdquo;. Qualified referrals earn a $1,500 bonus after 90 days.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Laptop Aluminum Keyboard Base */}
              <div className="h-3.5 bg-gradient-to-r from-rule-lit via-slate-600 to-rule-lit rounded-b-xl border border-rule-lit shadow-2xl relative flex items-center justify-center">
                <div className="w-16 h-1 bg-ink rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
