"use client";

import {
  Handshake,
  Scales,
  Briefcase,
  Package,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";

const values = [
  {
    icon: Handshake,
    title: "Answer fast",
    description: "A clear response on your lane the same day.",
  },
  {
    icon: Scales,
    title: "Own the load",
    description:
      "Freight we accept moves under our authority with our people responsible for it from pickup through delivery.",
  },
  {
    icon: Briefcase,
    title: "Tell you first",
    description:
      "If a delivery time changes, you hear it from us with the updated ETA and what we're doing about it.",
  },
  {
    icon: ShieldCheck,
    title: "Respect the driver",
    description:
      "Everyone runs rested and within their hours; safety comes ahead of any load.",
  },
  {
    icon: Package,
    title: "Serve the freight we serve well",
    description:
      "We commit to the freight we can move properly, and we move it properly.",
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
              Mission and Values
            </span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-ink-text">
            What we hold <br />
            <span className="text-azure">ourselves to</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[64ch] text-[clamp(16px,1.25vw,19px)] leading-[1.7] text-body-text">
            <strong className="font-semibold text-ink-text">Our mission:</strong>{" "}
            through collaboration, integrity and continuous innovation, provide
            outstanding logistics services in a safe and efficient manner while
            being a leading workplace in our industry.
          </p>
          <p className="mx-auto mt-4 max-w-[64ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.7] text-body-text">
            Success is built on strong relationships with brokers and with our
            drivers, based on trust, communication and transparency.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">

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
