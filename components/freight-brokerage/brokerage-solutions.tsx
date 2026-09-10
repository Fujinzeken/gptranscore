"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle,
  Users,
  Clock,
  TrendUp,
  Truck,
  Lightning,
  Cube,
  PaperPlaneTilt,
  MapPin,
  Target,
  Cpu,
  Headset,
  Leaf,
  Medal,
} from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

interface SolutionCard {
  icon: React.ComponentType<{ size?: number; weight?: "bold" | "regular" | "fill" | "duotone"; className?: string }>;
  title: string;
  description: string;
  category: "operations" | "specialized" | "service";
}

const ALL_SOLUTIONS: SolutionCard[] = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We prioritize the safety of our team members, customers, and communities we serve. We maintain rigorous safety standards to ensure every shipment is handled with the utmost care.",
    category: "operations",
  },
  {
    icon: CheckCircle,
    title: "Integrity and Transparency",
    description:
      "We conduct our business with honesty, integrity, and transparency. We believe in open and honest communication with our customers and team members.",
    category: "operations",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description:
      "We place our customers at the heart of everything we do. Understanding their unique needs allows us to tailor solutions that deliver maximum value.",
    category: "service",
  },
  {
    icon: Clock,
    title: "Reliability and Timeliness",
    description:
      "We are committed to delivering shipments on time, every time. Our reliable transportation solutions are delivered to meet tight deadlines and critical delivery schedules.",
    category: "operations",
  },
  {
    icon: TrendUp,
    title: "Continuous Improvement",
    description:
      "We embrace a culture of continuous improvement, seeking innovative ways to enhance our services and optimize operations.",
    category: "service",
  },
  {
    icon: Truck,
    title: "Truckload Freight",
    description:
      "We offer reliable and cost-effective truckload freight solutions for various industries, catering to shipments of all sizes.",
    category: "specialized",
  },
  {
    icon: Lightning,
    title: "Expedited Shipping",
    description:
      "Our expedited shipping services provide time-sensitive delivery options to meet urgent shipment requirements.",
    category: "specialized",
  },
  {
    icon: Cube,
    title: "Temperature-Controlled Transport",
    description:
      "We specialize in temperature-controlled transport to ensure the safe and timely delivery of perishable goods.",
    category: "specialized",
  },
  {
    icon: PaperPlaneTilt,
    title: "Dedicated Fleets",
    description:
      "We offer dedicated fleet solutions for businesses seeking customized transportation services and a dedicated team of drivers.",
    category: "specialized",
  },
  {
    icon: MapPin,
    title: "Freight Brokerage",
    description:
      "Our freight brokerage services leverage a vast network of carriers to match the right transportation solutions with our customers' needs.",
    category: "operations",
  },
  {
    icon: Target,
    title: "Extensive Experience",
    description:
      "With years of experience in the transportation industry, we have developed a deep understanding of the complexities and challenges our customers face.",
    category: "service",
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Technology",
    description:
      "We leverage advanced transportation management systems and technology to optimize operations and provide real-time visibility into shipments.",
    category: "service",
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    description:
      "Our customer support team is available around the clock to address inquiries, track shipments, and provide personalized assistance.",
    category: "service",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to sustainable practices, implementing initiatives to minimize our environmental impact and promote eco-friendly transportation solutions.",
    category: "service",
  },
  {
    icon: Medal,
    title: "Award-Winning Service",
    description:
      "Our dedication to excellence has earned us recognition and awards for outstanding service and customer satisfaction.",
    category: "service",
  },
];

type CategoryFilter = "all" | "operations" | "specialized" | "service";

export function BrokerageSolutions() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredSolutions =
    filter === "all"
      ? ALL_SOLUTIONS
      : ALL_SOLUTIONS.filter((s) => s.category === filter);

  return (
    <section
      id="solutions"
      aria-label="Complete transportation solutions"
      className="relative bg-page py-[clamp(78px,12vh,140px)] px-gut overflow-hidden border-t border-line"
    >
      {/* Subtle brand glow */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-azure/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          {/* Section Header */}
          <header
            className={cx(
              revealItem,
              "text-center max-w-[780px] mx-auto mb-[clamp(40px,6vh,56px)]",
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
                For Shippers
              </span>
            </div>

            <h2 className="type-display m-0 text-[clamp(32px,4.5vw,58px)] text-ink-text leading-[0.94]">
              Complete <span className="text-azure">Transportation Solutions</span>
            </h2>

            <p className="mt-4 text-[clamp(15px,1.15vw,18px)] leading-[1.62] text-body-text max-w-2xl mx-auto">
              Service and communication first, powered by our own fleet and
              trusted carrier partnerships.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: "All Solutions (15)" },
                { id: "operations", label: "Core Operations" },
                { id: "specialized", label: "Freight Modes" },
                { id: "service", label: "Technology & Service" },
              ].map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilter(tab.id as CategoryFilter)}
                    className={cx(
                      "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border",
                      active
                        ? "bg-azure text-white border-azure shadow-sm shadow-azure/25"
                        : "bg-surface border-line text-ink-text hover:border-azure/40 hover:text-azure",
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </header>

          {/* Solutions Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
            )}
          >
            {filteredSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{ "--i": idx } as React.CSSProperties}
                  className="group bg-surface border border-line rounded-2xl p-7 flex flex-col justify-start transition-all duration-300 hover:border-azure/40 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Icon Box */}
                  <div className="size-13 rounded-xl bg-azure/10 text-azure flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-azure group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon size={24} weight="bold" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17.5px] sm:text-[18.5px] font-bold text-ink-text leading-snug mb-2.5 group-hover:text-azure transition-colors">
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
