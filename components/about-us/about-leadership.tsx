"use client";

import Image from "next/image";
import { LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";

export interface Leader {
  name: string;
  title: string;
  photo: string;
  linkedIn: string;
}

export const LEADERS: Leader[] = [
  {
    name: "Dominic Zastarskis",
    title: "CEO",
    photo: "/about-us/leadership/dominic-zastarskis.jpg",
    linkedIn: "https://www.linkedin.com/in/dominic-zastarskis-b4b44117/",
  },
  {
    name: "Gedas Poviliunas",
    title: "President & Founder",
    photo: "/about-us/leadership/gedas-poviliunas.jpg",
    linkedIn: "https://www.linkedin.com/in/gedasp/",
  },
  {
    name: "Amos Savickas",
    title: "Executive VP of Operations",
    photo: "/about-us/leadership/amos-savickas.png",
    linkedIn: "https://www.linkedin.com/in/amossavickas/",
  },
  {
    name: "Sergey Bort",
    title: "VP of MARCOM & Digital Strategy",
    photo: "/about-us/leadership/sergey-bort.png",
    linkedIn: "https://www.linkedin.com/in/sergeybort/",
  },
  {
    name: "Ivy Posada",
    title: "VP of HR and Talent Acquisition",
    photo: "/about-us/leadership/ivy-posada.png",
    linkedIn: "https://www.linkedin.com/in/ivyposada/",
  },
  {
    name: "Milda Davis",
    title: "VP of Logistics",
    photo: "/about-us/leadership/milda-davis.png",
    linkedIn: "https://www.linkedin.com/in/milda-davis/",
  },
  {
    name: "Alex Gorno",
    title: "VP of Maintenance",
    photo: "/about-us/leadership/alex-gorno.png",
    linkedIn: "https://www.linkedin.com/in/gorno/",
  },
];

export function AboutLeadership() {
  return (
    <section
      id="leadership"
      className="relative isolate overflow-hidden bg-page py-[clamp(80px,12vh,140px)] border-b border-rule"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-azure/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1360px] px-gut">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center mb-16 sm:mb-20">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface/80 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            <span className={cx(label, "text-[11px] text-ink-text")}>
              LEADERSHIP TEAM
            </span>
          </div>

          <h2 className="font-display text-[clamp(34px,4.5vw,64px)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-ink-text">
            Visionary <span className="text-azure">Leaders</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[55ch] text-[clamp(15px,1.2vw,18.5px)] leading-[1.6] text-body-text">
            Meet the executives driving innovation, technological excellence, and
            uncompromising standards at GP Transco.
          </p>
        </div>

        {/* Leaders Grid: 3 columns on large screens, matching live layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {LEADERS.map((leader) => (
            <a
              key={leader.name}
              href={leader.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer transition-all duration-300"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/4.2] sm:aspect-square w-full overflow-hidden rounded-2xl bg-surface border border-rule shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-azure/40 group-hover:-translate-y-1.5">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Hover overlay with LinkedIn action badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-paper">
                    <span>View Profile</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-azure text-azure-ink shadow-md">
                    <LinkedinLogo size={18} weight="fill" />
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-ink-text transition-colors duration-200 group-hover:text-azure">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-[13.5px] font-medium text-mute leading-snug">
                    {leader.title}
                  </p>
                </div>

                <span className="mt-1 text-mute/60 transition-colors duration-200 group-hover:text-azure group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
