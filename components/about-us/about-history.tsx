"use client";

import { Sparkle, CheckCircle, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";

export interface Milestone {
  year: string;
  title: string;
  description?: string;
  tag?: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: "2006",
    title: "GP Transportation is born",
    description: "Founded with a single truck and a clear vision to revolutionize reliability in logistics.",
    tag: "Foundation",
  },
  {
    year: "2007",
    title: "The first owner-operator joins GP Transportation",
    description: "Expanding capacity and welcoming our very first partner behind the wheel.",
    tag: "Network",
  },
  {
    year: "2011",
    title: "We now have 8 drivers",
    description: "Steady organic growth driven by word-of-mouth and customer satisfaction.",
    tag: "Fleet Growth",
  },
  {
    year: "2013",
    title: "We open an office in Vilnius, Lithuania",
    description: "Establishing global operational and technological support hubs.",
    tag: "Global Expansion",
  },
  {
    year: "2014",
    title: "An in-house maintenance shop opens",
    description: "Taking full control over fleet safety, PM inspections, and zero-defect maintenance.",
    tag: "Infrastructure",
  },
  {
    year: "2015",
    title: "GP Transportation merges with ZA Transport",
    description: "Combining expertise and assets to accelerate Midwest regional dominance.",
    tag: "Strategic Merger",
  },
  {
    year: "2015",
    title: "We begin developing our own TMS system",
    description: "Investing early into proprietary software that would become OpenRoad TMS.",
    tag: "Proprietary Tech",
  },
  {
    year: "2016",
    title: "Company-wide re-branding takes place",
    description: "Unveiling modern fleet livery, brand identity, and corporate structure as GP Transco.",
    tag: "Evolution",
  },
  {
    year: "2018",
    title: "Transition to asset-based operations took place",
    description: "Pivoting strategically to 100% dedicated company assets for unrivaled service consistency.",
    tag: "Asset Model",
  },
  {
    year: "2019",
    title: "We now operate 400 Teal company trucks",
    description: "Recognizable across American highways as the gold standard of modern trucking.",
    tag: "Fleet Milestone",
  },
  {
    year: "2020",
    title: "We complete our new headquarters in Joliet, IL",
    description: "A state-of-the-art campus featuring driver amenities, tech suites, and full fleet support.",
    tag: "Headquarters",
  },
  {
    year: "2021",
    title: "We open an office in Medellín, Colombia",
    description: "Further expanding 24/7 bilingual tracking and logistics intelligence teams.",
    tag: "International",
  },
  {
    year: "2022",
    title: "We now operate over 500 trucks and 750 trailers",
    description: "Scaling capacity to meet surging demand from Fortune 500 enterprise shippers.",
    tag: "Major Scale",
  },
  {
    year: "2025",
    title: "With 1,800 trailers, 95% of GP Transco's drivers are company drivers hauling over 80% contracted freight",
    description: "Unmatched driver retention rates, high-value freight contracts, and trailer density.",
    tag: "Industry Leader",
  },
  {
    year: "2026",
    title: "GP Transco turns 20",
    description:
      "Two decades in, we're weaving AI throughout our operations — dramatically boosting efficiency and accuracy while elevating the experience for both our clients and our drivers.",
    tag: "20th Anniversary",
  },
];

export function AboutHistory() {
  return (
    <section
      id="history"
      className="relative isolate overflow-hidden bg-surface py-[clamp(80px,12vh,140px)] border-b border-rule"
    >
      {/* Subtle ambient brand lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 right-1/4 h-[500px] w-[650px] rounded-full bg-azure/5 blur-[140px]" />
        <div className="absolute bottom-10 left-10 h-[400px] w-[550px] rounded-full bg-azure/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1240px] px-gut">
        {/* Section Header */}
        <div className="mx-auto max-w-[780px] text-center mb-16 sm:mb-24">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-page/80 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            <span className={cx(label, "text-[11px] text-ink-text")}>
              COMPANY JOURNEY
            </span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-ink-text">
            Our <span className="text-azure">History</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[62ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-body-text">
            From a single owner-operator in 2006 to a fleet of over 550 trucks—discover
            the milestones that shaped GP Transco into an industry leader.
          </p>
        </div>

        {/* Elegant Timeline Rail */}
        <div className="relative">
          {/* Center Vertical Axis (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute hidden lg:block w-[2px] bg-gradient-to-b from-azure/20 via-azure to-[#25318d]/30"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "24px",
              bottom: "40px",
            }}
          />

          {/* Left Line for Mobile/Tablet */}
          <div
            aria-hidden="true"
            className="absolute lg:hidden w-[2px] bg-gradient-to-b from-azure/20 via-azure to-[#25318d]/30"
            style={{
              left: "19px",
              top: "20px",
              bottom: "40px",
            }}
          />

          {/* Milestones Alternating List */}
          <div className="space-y-8 sm:space-y-12">
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isAnniversary = item.year === "2026";

              return (
                <div
                  key={item.year + idx}
                  className={cx(
                    "group relative flex flex-col lg:flex-row items-center",
                    isEven ? "lg:flex-row-reverse" : "",
                  )}
                >
                  {/* Content Card Half */}
                  <div
                    className={cx(
                      "w-full lg:w-[calc(50%-44px)] pl-12 sm:pl-14 lg:pl-0",
                      isEven ? "lg:text-left" : "lg:text-right",
                    )}
                  >
                    <div
                      className={cx(
                        "relative rounded-2xl border bg-page p-6 sm:p-7 shadow-sm transition-all duration-300",
                        "hover:shadow-xl hover:-translate-y-1",
                        isAnniversary
                          ? "border-azure/60 bg-gradient-to-br from-page via-page to-azure/5 shadow-azure/10"
                          : "border-rule hover:border-azure/40",
                      )}
                    >
                      {/* Top Meta: Year & Tag */}
                      <div
                        className={cx(
                          "flex items-center gap-3 mb-3",
                          isEven
                            ? "justify-between"
                            : "justify-between lg:flex-row-reverse",
                        )}
                      >
                        <span
                          className={cx(
                            "font-display font-black tracking-tight text-2xl sm:text-3xl",
                            isAnniversary ? "text-azure" : "text-[#25318d]",
                          )}
                        >
                          {item.year}
                        </span>

                        {item.tag && (
                          <span
                            className={cx(
                              label,
                              "text-[10px] px-2.5 py-1 rounded-full border",
                              isAnniversary
                                ? "bg-azure/10 text-azure border-azure/30 font-bold"
                                : "bg-surface text-mute border-rule",
                            )}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink-text leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      {item.description && (
                        <p className="mt-2.5 text-[14px] leading-relaxed text-body-text">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div
                    className={cx(
                      "absolute z-10 flex items-center justify-center rounded-full border-4 border-surface shadow-md transition-all duration-300",
                      "group-hover:scale-110",
                      // Mobile positioning
                      "left-0 lg:left-1/2 lg:-translate-x-1/2",
                      "top-6 lg:top-1/2 lg:-translate-y-1/2",
                      isAnniversary
                        ? "h-11 w-11 bg-azure text-white shadow-azure/40"
                        : "h-10 w-10 bg-[#25318d] text-white group-hover:bg-azure",
                    )}
                  >
                    {isAnniversary ? (
                      <Sparkle size={18} weight="fill" />
                    ) : (
                      <span className="text-[11px] font-mono font-bold">
                        {idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Empty Spacer Half for Desktop Alternating Balance */}
                  <div className="hidden lg:block w-[calc(50%-44px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
