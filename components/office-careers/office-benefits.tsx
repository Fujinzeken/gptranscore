"use client";

import {
  CurrencyDollar,
  FirstAid,
  TrendUp,
  Door,
  Heart,
  Brain,
  GraduationCap,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

interface BenefitCard {
  icon: React.ComponentType<{ size?: number; weight?: "bold" | "regular" | "fill" | "duotone"; className?: string }>;
  title: string;
  description: string;
}

const BENEFITS: BenefitCard[] = [
  {
    icon: CurrencyDollar,
    title: "Competitive Pay",
    description: "Industry-leading compensation packages",
  },
  {
    icon: FirstAid,
    title: "Full Benefits",
    description:
      "Health, dental, vision, 401(k) with matching, free life insurance, pet insurance, and much more",
  },
  {
    icon: TrendUp,
    title: "Growth Opportunities",
    description:
      "We prioritize promoting from within—your growth and next career step start right here.",
  },
  {
    icon: Door,
    title: "Open Door Policy",
    description: "Direct access to leadership and management",
  },
  {
    icon: Heart,
    title: "Wellness & Fitness",
    description:
      "Complimentary gym access at all office locations to keep you healthy, active, and energized.",
  },
  {
    icon: Brain,
    title: "Mental Health Support",
    description:
      "Comprehensive mental wellness resources and counseling services to support your emotional well-being and work-life balance.",
  },
  {
    icon: GraduationCap,
    title: "Career Development",
    description:
      "Mentorship, structured onboarding, and ongoing training programs designed to accelerate your growth and career advancement.",
  },
  {
    icon: Clock,
    title: "Generous Time Off",
    description:
      "Ample paid time off and company-paid holidays so you can rest, recharge, and spend quality time with family.",
  },
];

export function OfficeBenefits() {
  return (
    <section
      id="benefits"
      className="relative bg-page py-[clamp(78px,12vh,140px)] px-gut overflow-hidden"
    >
      {/* Subtle brand ambiance glow in background */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-azure/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          {/* Header */}
          <header
            className={cx(
              revealItem,
              "text-center max-w-[760px] mx-auto mb-[clamp(44px,6.5vh,64px)]",
            )}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-azure/10 border border-azure/20 mb-5">
              <span className="size-2 rounded-full bg-azure animate-pulse" />
              <span className={cx(label, "text-azure tracking-widest text-[11px] sm:text-xs")}>
                Why Choose GP Transco
              </span>
            </div>

            <h2 className="type-display m-0 text-[clamp(32px,4.5vw,58px)] text-ink-text leading-[0.94]">
              Outstanding <span className="text-azure">Benefits</span>
            </h2>

            <p className="mt-4 text-[clamp(15px,1.15vw,18px)] leading-[1.62] text-body-text max-w-2xl mx-auto">
              Competitive pay, modern work environment, and benefits that
              support your life.
            </p>
          </header>

          {/* 8-Card Bento Grid (4 per row on desktop, 2 on tablet, 1 on mobile) */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6",
            )}
          >
            {BENEFITS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{ "--i": idx } as React.CSSProperties}
                  className="group bg-surface border border-line rounded-2xl p-7 sm:p-8 flex flex-col justify-start transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Icon Box */}
                  <div className="size-13 rounded-xl bg-azure/10 text-azure flex items-center justify-center mb-6 group-hover:bg-azure group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <Icon size={24} weight="bold" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-ink-text leading-snug mb-2.5 group-hover:text-azure transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-body-text m-0">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
