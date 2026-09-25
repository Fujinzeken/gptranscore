import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Driver FAQ — the answers from the original pktgroup.net FAQ, plus the
 * CSV's pay line. Native <details> so it works without JavaScript; the same
 * list feeds the FAQPage structured data.
 */

const FAQ: Array<[string, string]> = [
  [
    "What are the qualifications to drive for PKT?",
    "A CDL Class A license and a minimum of 6 months of driving experience.",
  ],
  [
    "What if I don't have driving experience yet?",
    "We offer training programs led by professional instructors for drivers without prior experience.",
  ],
  [
    "What trucks are in the PKT fleet?",
    "2025 Kenworth and Freightliner Cascadia trucks, kept on a preventive maintenance schedule.",
  ],
  [
    "What kind of support do drivers receive?",
    "24/7 assistance from our dispatch, maintenance, pre-trip inspection (PTI) and fuel teams.",
  ],
  [
    "What incentives do you offer drivers?",
    "Every driver earns a bonus for maintaining a clean inspection record.",
  ],
  [
    "What discounts are available for owner-operators?",
    "Owner-operators receive discounts at the UGL Truck Center repair shop and Montgomery Truck Wash.",
  ],
  [
    "What types of loads do you haul?",
    "Dry van, refrigerated (reefer) and flatbed freight across 48 states.",
  ],
  [
    "How is pay set?",
    "We set pay per driver based on experience and route. Call recruiting at +1 (224) 666-0136 and we'll tell you what your lane pays before you apply.",
  ],
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export function DriverFAQ() {
  return (
    <section id="faq" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(32px,5vh,56px)] max-[1000px]:grid-cols-1">
          <header className="col-span-4 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-azure")}
            >
              Driver FAQ
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-4 text-[clamp(30px,3.8vw,52px)] leading-[0.98] text-ink-text",
              )}
            >
              Questions drivers ask first.
            </h2>
            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[40ch] text-[clamp(15px,1.1vw,17px)] leading-[1.6] text-body-text",
              )}
            >
              Anything else? Call recruiting at{" "}
              <a
                href="tel:+12246660136"
                className="font-semibold text-azure hover:underline"
              >
                +1 (224) 666-0136
              </a>
              , Monday–Saturday, 8 AM–5 PM CDT.
            </p>
          </header>

          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(revealItem, "col-span-8 border-t border-line max-[1000px]:col-span-1")}
          >
            {FAQ.map(([q, a]) => (
              <details key={q} className="group border-b border-line">
                <summary
                  className={cx(
                    "flex cursor-pointer list-none items-center justify-between gap-6 py-5",
                    "font-display text-[clamp(16px,1.35vw,20px)] font-bold leading-[1.3] text-ink-text",
                    "transition-colors hover:text-azure [&::-webkit-details-marker]:hidden",
                  )}
                >
                  {q}
                  <Plus
                    size={18}
                    weight="bold"
                    aria-hidden="true"
                    className="shrink-0 text-azure transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="m-0 max-w-[62ch] pb-6 text-[clamp(15px,1.1vw,16.5px)] leading-[1.65] text-body-text">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
