"use client";

import { cx, label } from "../ui";

const FACTS: Array<[string, string]> = [
  ["5+", "Years of expertise"],
  ["20,000+", "Loads delivered"],
  ["96%", "US ZIP codes covered"],
  ["24/7", "Dispatch team"],
];

export function AboutOverview() {
  return (
    <section
      id="reliability"
      className="relative isolate overflow-hidden bg-page py-[clamp(80px,12vh,140px)] border-b border-rule"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[800px] rounded-full bg-azure/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-gut">
        {/* Centered Content Container */}
        <div className="relative z-10 mx-auto max-w-[760px] text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface/80 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse" />
            <span className={cx(label, "text-[11px] text-ink-text")}>
              WHO WE ARE
            </span>
          </div>

          {/* Display Headline */}
          <h2 className="font-display text-[clamp(34px,4.4vw,62px)] font-black uppercase leading-[0.98] tracking-[-0.03em] text-ink-text">
            Direct access. <br />
            <span className="text-azure">A fast answer.</span>
          </h2>

          {/* Narrative Lead */}
          <p className="mx-auto mt-6 max-w-[62ch] text-[clamp(15px,1.2vw,18px)] leading-[1.7] text-body-text">
            PKT is an asset-based truckload carrier operating from Illinois on
            48-state authority. We started with a simple idea: run our own
            freight properly. The authority, the insurance and the dispatch are
            all ours — when something changes on your load, the person you call
            is the person who can act on it. We run dry van, refrigerated and
            flatbed freight across the contiguous US. What we offer is direct
            access and a fast answer; when we take your load, we move it.
          </p>

          <dl className="m-0 mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 pt-10 border-t border-rule">
            {FACTS.map(([value, term], i) => (
              <div key={term} className="flex flex-col items-center">
                <dt className={cx(label, "order-last mt-2.5 text-mute-2 text-[12px]")}>
                  {term}
                </dt>
                <dd
                  className={cx(
                    "m-0 font-display text-[clamp(30px,3.6vw,46px)] font-black tracking-tight leading-none",
                    i === 1 ? "text-azure" : "text-ink-text",
                  )}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
