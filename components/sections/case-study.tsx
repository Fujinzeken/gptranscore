import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnOutline, btnHero, cx, label } from "../ui";

/**
 * Dunlop + Falken case study, as a feature spread.
 *
 * The best detail in their own copy is easy to miss: going from "2-3 trailers
 * per week" to "2-3 trailers per day", the NUMBER never changes. Only the unit
 * does. So the two lines stack with the identical prefix aligned, and the eye
 * lands on the single word that moved.
 *
 * The photograph is the section anchor. It is PKT Group equipment and a PKT
 * Group driver, which is exactly what the story is about, and it bleeds off
 * the left edge so the spread reads as a magazine feature rather than a column
 * of text. No invented Dunlop or Falken imagery: the proof here is theirs.
 */

const PROOF = [
  { figure: "550+", body: "Projected loads per year" },
  { figure: "#1", body: "Carrier in quarterly bid" },
  { figure: "10×", body: "Volume growth" },
];

export function CaseStudy() {
  return (
    <section className="overflow-hidden border-y border-line bg-surface px-gut py-[clamp(66px,10vh,128px)]">
      <Reveal>
        {/* Masthead rule: who, and what kind of story this is. */}
        <div
          className={cx(
            revealItem,
            label,
            "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2",
            "border-b border-line pb-4 text-body-text",
          )}
        >
          <span className="text-ink-text">
            PKT Group <span className="text-soft-text">&times;</span> Dunlop +
            Falken
          </span>
          <span>Latest Case Study</span>
        </div>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display mb-0 mt-[clamp(26px,3.6vh,44px)] max-w-[15em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          How PKT Group became the #1 carrier for Dunlop + Falken Tires
        </h2>

        <div className="mt-[clamp(34px,5vh,60px)] grid grid-cols-12 items-stretch gap-x-[clamp(28px,4vw,72px)] gap-y-[clamp(30px,4.5vh,48px)] max-[900px]:grid-cols-1">
          {/* Bleeds to the viewport edge: the move that makes this a spread. */}
          <figure
            style={{ "--i": 2 } as React.CSSProperties}
            className={cx(
              revealItem,
              "relative col-span-4 m-0 -ml-[var(--gut)] min-h-[clamp(460px,52vw,580px)] overflow-hidden bg-line",
              "max-[900px]:col-span-1 max-[900px]:-mr-[var(--gut)] max-[900px]:aspect-[16/11] max-[900px]:min-h-0",
            )}
          >
            <Image
              src="/case-haul.jpg"
              alt="A PKT Group driver at the wheel of a company Freightliner Cascadia."
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="object-cover object-[64%_38%]"
            />
          </figure>

          <div className="col-span-7 col-start-6 self-center max-[900px]:col-span-1 max-[900px]:col-start-1">
            {/* Identical prefixes align by construction, so the eye is drawn
                to the one word that differs. */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(revealItem, "relative pl-[clamp(18px,2.2vw,32px)]")}
            >
              {/* Rule draws downward: it depicts the move from the first line
                  to the second, rather than decorating it. */}
              <span
                aria-hidden="true"
                className={cx(
                  "absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[2px] origin-top scale-y-0 rounded-full bg-azure",
                  "transition-transform duration-[1100ms] ease-[var(--ease-out-strong)] [transition-delay:420ms]",
                  "group-data-[shown=true]/reveal:scale-y-100",
                )}
              />

              <p className={cx(label, "m-0 text-body-text")}>Before</p>
              <p className="font-display m-0 mt-2 text-[clamp(25px,3.2vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-soft-text">
                2-3 trailers per{" "}
                <span className="relative whitespace-nowrap">
                  week
                  <span
                    aria-hidden="true"
                    className={cx(
                      "absolute inset-x-0 top-[0.56em] h-[3px] origin-left scale-x-0 rounded-full bg-soft-text",
                      "transition-transform duration-700 ease-[var(--ease-out-strong)] [transition-delay:1000ms]",
                      "group-data-[shown=true]/reveal:scale-x-100",
                    )}
                  />
                </span>
              </p>

              <p
                className={cx(
                  label,
                  "m-0 mt-[clamp(18px,2.6vh,30px)] text-body-text",
                )}
              >
                Now
              </p>
              <p className="font-display m-0 mt-2 text-[clamp(25px,3.2vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink-text">
                2-3 trailers per <span className="text-azure">day</span>
              </p>
            </div>

            <p
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-[clamp(26px,3.6vh,44px)] max-w-[52ch] text-[clamp(15px,1.1vw,17px)] leading-[1.62] text-body-text",
              )}
            >
              PKT Group earned the #1 spot in Dunlop + Falken&rsquo;s quarterly
              carrier bid through reliability, communication, and consistent
              execution.
            </p>

            {/* Corroborating figures. A rule of numbers, not a row of cards. */}
            <dl
              style={{ "--i": 5 } as React.CSSProperties}
              className={cx(
                revealItem,
                "m-0 mt-[clamp(26px,3.6vh,44px)] flex flex-wrap items-start",
                "gap-x-[clamp(20px,2.6vw,44px)] gap-y-6",
              )}
            >
              {PROOF.map(({ figure, body }, i) => (
                <div
                  key={figure}
                  className={cx(
                    "min-w-[128px]",
                    i > 0 && "border-l border-line pl-[clamp(20px,2.6vw,44px)]",
                  )}
                >
                  <dt className="font-display text-[clamp(28px,2.9vw,42px)] font-extrabold leading-none tracking-[-0.03em] text-ink-text">
                    {figure}
                  </dt>
                  <dd className="m-0 mt-2.5 text-[14.5px] leading-[1.45] text-body-text">
                    {body}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#"
              style={{ "--i": 6 } as React.CSSProperties}
              className={cx(
                revealItem,
                btn,
                btnOutline,
                btnHero,
                "mt-[clamp(28px,4vh,48px)]",
              )}
            >
              Read the Full Case Study
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
