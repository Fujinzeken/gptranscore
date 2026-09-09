"use client";

import {
  Bank,
  Calendar,
  Coins,
  FirstAid,
  Heart,
  Lightning,
  ShieldCheck,
  Sparkle,
  UserPlus,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Driver Benefits Section ("Complete Benefit Package").
 *
 * Sits on a 100% light field (bg-page) following the dark DriverPayCalculator plate.
 * Rebuilt as a dual-tier continuous opposing marquee of benefit cards (Row 1 left, Row 2 right).
 */

interface BenefitItem {
  icon: typeof Heart;
  title: string;
  desc: string;
  badge: string;
  category: string;
}

const ROW_1_BENEFITS: BenefitItem[] = [
  {
    icon: Coins,
    category: "Incentive",
    title: "Earnings Profit Sharing",
    desc: "Earn additional bonuses for driving more efficiently across every route you haul.",
    badge: "Monthly Payouts",
  },
  {
    icon: Heart,
    category: "Coverage",
    title: "Life Insurance",
    desc: "Free $25,000 life insurance policy with ability to buy coverage up to $250,000.",
    badge: "100% Company Paid",
  },
  {
    icon: Lightning,
    category: "Performance",
    title: "Safety Bonus",
    desc: "Get a clean DOT roadside inspection and earn up to $250 in cash bonuses immediately.",
    badge: "Up to $250 Payout",
  },
  {
    icon: Bank,
    category: "Financial",
    title: "401(k) Retirement",
    desc: "Plan with company matching — we do our part ensuring you are ready for retirement.",
    badge: "Company Matching",
  },
];

const ROW_2_BENEFITS: BenefitItem[] = [
  {
    icon: Calendar,
    category: "Time Off",
    title: "Paid Holidays",
    desc: "Enjoy paid holidays with loved ones without sacrificing your steady weekly earnings.",
    badge: "Paid Time Off",
  },
  {
    icon: FirstAid,
    category: "Medical",
    title: "Health, Dental & Vision",
    desc: "Comprehensive medical, dental, and vision insurance for you and your family.",
    badge: "Full Family Coverage",
  },
  {
    icon: ShieldCheck,
    category: "Protection",
    title: "Disability Coverage",
    desc: "Short and long term disability plans protecting your income through unexpected events.",
    badge: "Income Shield",
  },
  {
    icon: UserPlus,
    category: "Lifestyle",
    title: "Passenger & Pet Policy",
    desc: "Bring your loved ones or pets along for the ride on all long-haul regional and OTR routes.",
    badge: "Rider Friendly",
  },
];

function BenefitCard({ benefit }: { benefit: BenefitItem }) {
  const Icon = benefit.icon;
  return (
    <div className="w-[320px] sm:w-[360px] h-[210px] shrink-0 border border-line bg-surface p-5 flex flex-col justify-between group/card transition-colors duration-200 hover:border-azure/60 shadow-sm">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-line">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-full bg-azure/10 text-azure flex items-center justify-center group-hover/card:bg-azure group-hover/card:text-white transition-colors duration-200">
              <Icon size={17} weight="bold" />
            </div>
            <span
              className={cx(
                label,
                "text-[10px] text-soft-text group-hover/card:text-azure transition-colors duration-200",
              )}
            >
              {benefit.category}
            </span>
          </div>
          <span className="font-mono text-[10.5px] text-azure font-semibold">
            {benefit.badge}
          </span>
        </div>

        <h3 className="font-display text-[16.5px] font-bold text-ink-text mt-3.5 mb-1.5 leading-snug tracking-[-0.01em]">
          {benefit.title}
        </h3>
        <p className="text-[13.5px] leading-[1.58] text-body-text m-0 line-clamp-3">
          {benefit.desc}
        </p>
      </div>
    </div>
  );
}

export function DriverBenefits() {
  return (
    <section
      id="benefits"
      className="bg-page py-[clamp(78px,12vh,150px)] overflow-hidden"
    >
      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[740px] mx-auto mb-[clamp(44px,6.5vh,72px)] px-gut",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Sparkle size={14} weight="bold" />
            Driver Benefits
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Complete <span className="text-azure">Benefit Package</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            We believe professional drivers deserve outstanding benefits. Hover
            to pause.
          </p>
        </header>

        {/* Dual-Tier Opposing Marquee Stage */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "relative overflow-hidden w-full py-2 space-y-6",
          )}
        >
          {/* Edge Scrims */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-page via-page/80 to-transparent z-10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-page via-page/80 to-transparent z-10"
          />

          {/* Row 1: Scrolls Left */}
          <div className="flex w-max gap-6 animate-roll hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-6"
                aria-hidden={copy === 1}
              >
                {ROW_1_BENEFITS.map((item, idx) => (
                  <BenefitCard key={`${copy}-${idx}`} benefit={item} />
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="flex w-max gap-6 animate-roll-reverse hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 gap-6"
                aria-hidden={copy === 1}
              >
                {ROW_2_BENEFITS.map((item, idx) => (
                  <BenefitCard key={`${copy}-${idx}`} benefit={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
