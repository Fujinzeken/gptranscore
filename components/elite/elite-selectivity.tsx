"use client";

import { CountUp } from "../count-up";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Our Selectivity — "Only the Best Drive for GP Transco".
 *
 * Prod's two stat cards wore a dark gradient and an orange gradient. The
 * two-tone is kept but translated into the system's own surfaces: one ink
 * plate, one azure plate — the same pairing the closing CTA doors use —
 * with CountUp figures and prod's copy verbatim. The closing statement is
 * the section's third beat, set wide and ruled above.
 */

const STATS = [
  {
    figure: 2,
    suffix: "%",
    title: "Selection Rate",
    body: "Out of over 30,000 drivers who apply to drive with us each year, only about 2% are selected. We don't just hire drivers — we select the best.",
    tone: "ink" as const,
  },
  {
    figure: 13,
    suffix: "+",
    title: "Years Average Experience",
    body: "Our drivers bring an average of over 13 years of professional driving experience. That's the kind of expertise that delivers results.",
    tone: "azure" as const,
  },
];

export function EliteSelectivity() {
  return (
    <section id="selectivity" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <p
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(revealItem, "m-0", label, "text-mute-2")}
          >
            Highly Selective
          </p>
          <h2
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 mt-5 max-w-[18em]",
              "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
            )}
          >
            Only the Best Drive for{" "}
            <span className="text-azure">GP Transco</span>
          </h2>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-6 max-w-[58ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            We maintain the highest standards in the industry — because our
            customers deserve nothing less
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(16px,2vw,32px)] max-[820px]:grid-cols-1">
          {STATS.map((stat, i) => {
            const dark = stat.tone === "ink";
            return (
              <div
                key={stat.title}
                style={{ "--i": 4 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "flex flex-col px-[clamp(28px,3.4vw,56px)] py-[clamp(36px,5vh,64px)]",
                  dark ? "bg-ink" : "bg-azure",
                )}
              >
                <p
                  className={cx(
                    "font-display m-0 text-[clamp(52px,7vw,104px)] font-black",
                    "leading-[0.85] tracking-[-0.03em]",
                    dark ? "text-azure-hi" : "text-azure-ink",
                  )}
                >
                  <CountUp to={stat.figure} suffix={stat.suffix} />
                </p>
                <h3
                  className={cx(
                    "font-display m-0 mt-6",
                    "text-[clamp(20px,1.9vw,26px)] font-extrabold leading-[1.08] tracking-[-0.015em]",
                    dark ? "text-paper" : "text-azure-ink",
                  )}
                >
                  {stat.title}
                </h3>
                <p
                  className={cx(
                    "m-0 mt-4 max-w-[46ch] text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.6]",
                    dark ? "text-mute" : "text-azure-ink/85",
                  )}
                >
                  {stat.body}
                </p>
              </div>
            );
          })}
        </div>

        <p
          style={{ "--i": 6 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mx-auto mt-[clamp(40px,6vh,72px)] max-w-[62ch] border-t border-rule pt-[clamp(24px,4vh,40px)]",
            "text-center text-[clamp(16px,1.35vw,20px)] font-medium leading-[1.55] text-ink-text",
          )}
        >
          This selectivity means every driver behind the wheel of a GP Transco
          truck is a proven professional — reliable, safe, and committed to
          excellence.
        </p>
      </Reveal>
    </section>
  );
}
