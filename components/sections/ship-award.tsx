import { ArrowUpRight, Trophy } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnGhost, btnHero, cx, label } from "../ui";

/**
 * CCJ Innovator of the Year Award Section.
 *
 * Sits on a dark plate (bg-ink) to sustain the alternating light/dark rhythm
 * following the light ShipComparison section above it.
 *
 * Presents PKT Group's Commercial Carrier Journal Innovator of the Year award
 * as an authoritative engineering citation rather than a generic PR banner.
 */

const STATS = [
  { figure: "#1", caption: "CCJ Tech Honor in North America" },
  { figure: "4.2s", caption: "AI Load-Matching Engine" },
  { figure: "0%", caption: "Manual Dispatch Bottlenecks" },
];

export function ShipAward() {
  return (
    <section
      id="innovation"
      className="relative isolate overflow-hidden bg-ink py-[clamp(78px,12vh,150px)] px-gut"
    >
      {/* Subtle radial azure glow behind the award crest */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-azure/10 blur-[120px] -z-10"
      />

      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,80px)] gap-y-12 items-center">
          {/* Left Column: Crafted CCJ Innovator Insignia */}
          <div
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-12 lg:col-span-5 bg-ink-2 border border-rule p-[clamp(26px,3.6vw,48px)] flex flex-col justify-between relative",
            )}
          >
            <div className="flex items-center justify-between pb-6 border-b border-rule">
              <span
                className={cx(label, "text-azure-hi flex items-center gap-2")}
              >
                <Trophy size={16} weight="fill" className="text-azure-hi" />
                Industry Recognition
              </span>
              <span className="font-mono text-xs text-mute font-bold">
                2026
              </span>
            </div>

            <div className="my-8">
              {/* Vector CCJ Logo Emblem */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-[clamp(38px,4.5vw,56px)] font-black tracking-tighter text-paper leading-none">
                  CCJ
                </span>
                <span className="font-mono text-[13px] font-bold text-azure-hi tracking-widest uppercase">
                  Innovator
                </span>
              </div>
              <p className="font-display text-[clamp(18px,1.8vw,24px)] font-bold text-paper leading-snug">
                Commercial Carrier Journal Innovator of the Year
              </p>
              <p className="mt-3 text-[14px] leading-[1.6] text-mute">
                Awarded for groundbreaking advancements in proprietary
                artificial intelligence, automated dispatch logic, and logistics
                efficiency.
              </p>
            </div>

            <div className="pt-5 border-t border-rule flex items-center justify-between text-xs text-mute font-mono">
              <span>COMMERCIAL CARRIER JOURNAL</span>
              <span className="text-azure-hi font-bold">ANNUAL HONORS</span>
            </div>
          </div>

          {/* Right Column: Citation Narrative & Action */}
          <div className="col-span-12 lg:col-span-7">
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 text-[clamp(28px,3.8vw,54px)] text-paper max-w-[14em]",
              )}
            >
              Leading the future of{" "}
              <span className="text-azure-hi">trucking technology</span>
            </h2>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-mute max-w-[56ch]",
              )}
            >
              In 2026, PKT Group was named CCJ Innovator of the Year — one of
              the highest distinctions in commercial transportation — honoring
              our proprietary AI algorithms that automate load matching, reduce
              planner workload, and eliminate transit errors.
            </p>

            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-4 text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-mute max-w-[56ch]",
              )}
            >
              While other carriers purchase off-the-shelf platforms, our
              in-house engineering team develops bespoke software built around
              our real physical assets. We aren&rsquo;t just participating in
              the freight evolution; we are driving it.
            </p>

            <div
              style={{ "--i": 5 } as React.CSSProperties}
              className={cx(revealItem, "mt-8 flex flex-wrap gap-4")}
            >
              <a
                href="https://www.ccjdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(btn, btnGhost, btnHero)}
              >
                Read the CCJ Feature
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Metrics Rail */}
            <dl
              style={{ "--i": 6 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mt-12 grid grid-cols-3 gap-6 border-t border-rule pt-8 max-[640px]:grid-cols-1",
              )}
            >
              {STATS.map(({ figure, caption }, i) => (
                <div
                  key={caption}
                  className={cx(i > 0 && "sm:border-l sm:border-rule sm:pl-6")}
                >
                  <dt className="font-display text-[clamp(28px,3vw,42px)] font-extrabold text-paper leading-none tabular-nums">
                    {figure}
                  </dt>
                  <dd
                    className={cx(label, "m-0 mt-2 text-mute leading-relaxed")}
                  >
                    {caption}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
