"use client";

import { Handshake, Scales, Briefcase } from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";

const values = [
  {
    icon: Handshake,
    title: "Honesty",
    description: "We communicate transparently and keep our promises.",
  },
  {
    icon: Scales,
    title: "Integrity",
    description:
      "We conduct business ethically and stand by our principles.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    description: "We deliver excellence in everything we do.",
  },
];

export function AboutMissionValues() {
  return (
    <section
      id="mission"
      className="relative isolate overflow-hidden bg-surface py-[clamp(80px,12vh,140px)] border-b border-rule"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[500px] rounded-full bg-azure/5 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[300px] w-[400px] rounded-full bg-azure/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1360px] px-gut">
        {/* Top Block: Our Mission */}
        <div className="mx-auto max-w-[880px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-page/80 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            <span className={cx(label, "text-[11px] text-ink-text")}>
              OUR MISSION
            </span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-ink-text">
            Safe, Reliable, Advanced <br />
            <span className="text-azure">Freight Transportation</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[70ch] text-[clamp(16px,1.25vw,19px)] leading-[1.7] text-body-text font-normal">
            Our mission is to provide safe, reliable transportation solutions
            through lasting relationships built on trust, commitment, and
            effective communication. We honor our word, cultivate trust, and lead
            with integrity — because our actions define who we are.
          </p>
        </div>

        {/* Bottom Block: Our Values */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-rule">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-page/80 px-4 py-1.5 backdrop-blur-sm shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-azure" />
              <span className={cx(label, "text-[11px] text-ink-text")}>
                OUR VALUES
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="group relative flex flex-col items-center text-center rounded-2xl border border-rule bg-page p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-azure/40 hover:-translate-y-1"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25318d] text-white shadow-md shadow-[#25318d]/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-azure group-hover:shadow-azure/30">
                    <Icon size={32} weight="duotone" />
                  </div>

                  <h3 className="font-display mt-6 text-xl sm:text-2xl font-bold tracking-tight text-ink-text">
                    {val.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-body-text max-w-[32ch]">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
