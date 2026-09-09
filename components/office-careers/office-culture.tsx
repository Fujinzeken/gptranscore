"use client";

import { Lightbulb, Lightning, Heart, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";
import { Reveal, revealItem } from "../reveal";

const CULTURE_PILLARS = [
  {
    icon: Lightbulb,
    title: "Ideas from every level",
  },
  {
    icon: Lightning,
    title: "Build, don't wait",
  },
  {
    icon: Heart,
    title: "Ambition + belonging",
  },
];

export function OfficeCulture() {
  return (
    <section id="culture" className="bg-page py-[clamp(78px,12vh,150px)] px-gut">
      <Reveal>
        {/* Section Header */}
        <header
          className={cx(
            revealItem,
            "text-center max-w-[760px] mx-auto mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Sparkle size={13} weight="fill" />
            Our Culture
          </p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            A Culture of <span className="text-azure">Innovation</span>
          </h2>

          <p className="mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            Innovation is not something we simply adopt — it is something we
            build.
          </p>
        </header>

        {/* 2-Column Bento Grid */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto",
          )}
        >
          {/* Left Column: Visual Story Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-ink border border-line min-h-[480px] sm:min-h-[520px] flex flex-col justify-between p-6 sm:p-7">
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/office-careers/culture-team.jpg')",
                }}
              />
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />

              {/* Top Glass Badge */}
              <div className="relative z-10 self-end">
                <div className="size-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md flex items-center justify-center text-azure-hi">
                  <Lightbulb size={20} weight="fill" />
                </div>
              </div>

              {/* Bottom Quote Card */}
              <div className="relative z-10 bg-ink/75 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                <div
                  className={cx(
                    label,
                    "text-azure-hi flex items-center gap-1.5 mb-2",
                  )}
                >
                  <Sparkle size={12} weight="fill" />
                  What We Believe
                </div>

                <p className="text-base sm:text-lg font-bold text-paper leading-snug m-0">
                  &ldquo;Great people, given the freedom to think, can transform
                  an entire industry.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & 3 Highlight Cards */}
          <div className="lg:col-span-7 space-y-4 text-body-text text-[15px] leading-[1.68]">
            <p className="m-0">
              We believe the strongest companies do more than follow the industry
              forward — they help move it there. That mindset has shaped GP
              Transco into a place where technology, creativity, and continuous
              improvement are part of the everyday culture. When we see a better
              way to work, communicate, support our drivers, or serve our
              customers — we build toward it.
            </p>

            <p className="m-0">
              Across the company, ideas are welcomed from every level of the
              organization. A smarter process, a better system, a cleaner workflow,
              a more thoughtful experience — these things often begin with a
              simple but powerful question.{" "}
              <strong className="text-ink-text font-bold">
                At GP Transco, that question matters.
              </strong>
            </p>

            <p className="m-0">
              Our team is trusted to think beyond the expected, challenge
              outdated processes, and take ownership of meaningful progress —
              while still feeling supported, valued, and at home. Ambition and
              belonging exist together here. The best work happens when people feel
              comfortable enough to be themselves and inspired enough to help build
              what comes next.
            </p>

            <p className="m-0 text-ink-text font-semibold pt-1">
              That is the culture we are building — one where ideas are
              celebrated, technology is created, and the future is something we
              help shape ourselves.
            </p>

            {/* 3 Pillar Cards in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {CULTURE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-3.5 sm:p-4 rounded-2xl border border-line bg-surface hover:border-line-strong transition-all flex items-center gap-3 shadow-xs group"
                  >
                    <div className="size-9 rounded-full bg-azure/10 text-azure flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon size={18} weight="bold" />
                    </div>
                    <span className="text-[13px] font-bold text-ink-text leading-tight">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
