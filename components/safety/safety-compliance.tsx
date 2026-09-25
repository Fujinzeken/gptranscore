import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Compliance — the SAFETY row's authority and insurance block. Insurance
 * limits are unconfirmed ([INSURANCE COVERAGE AND LIMITS]), so the page
 * offers the certificate rather than stating figures.
 */

const FMCSA_URL =
  "https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&query_string=3188421";

const ROWS: Array<[string, string]> = [
  ["Authority", "48-state operating authority, active and in good standing"],
  ["Insurance", "Certificate of insurance available on request"],
  ["USDOT", "3188421"],
  ["MC", "132863"],
];

export function SafetyCompliance() {
  return (
    <section id="compliance" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute-2")}
            >
              Compliance
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-5 max-w-[14em]",
                "text-[clamp(30px,4.2vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              Verifiable at <span className="text-azure">any time.</span>
            </h2>
            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 max-w-[48ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              Our USDOT and MC numbers are verifiable through FMCSA at any
              time.
            </p>
            <a
              href={FMCSA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--i": 4 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-azure hover:underline",
              )}
            >
              Look us up on FMCSA SAFER
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>

          <dl className="col-span-7 m-0 max-[1000px]:col-span-1">
            {ROWS.map(([term, detail], i) => (
              <div
                key={term}
                style={{ "--i": 3 + i } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "grid grid-cols-[9rem_1fr] items-baseline gap-6 border-b border-line py-6 first:border-t",
                  "max-[560px]:grid-cols-1 max-[560px]:gap-2",
                )}
              >
                <dt className={cx(label, "m-0 text-soft-text")}>{term}</dt>
                <dd className="m-0 text-[clamp(15px,1.2vw,18px)] leading-[1.5] text-ink-text tabular-nums">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
