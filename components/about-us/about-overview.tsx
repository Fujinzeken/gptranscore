"use client";

import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { cx, label } from "../ui";

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
        {/* Left Team Member Cutout (hidden on small screens, positioned organically) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[clamp(80px,12vh,140px)] -left-12 z-0 hidden lg:block w-[380px] xl:w-[460px] 2xl:w-[500px]"
        >
          <Image
            src="/about-us/overview-left.png"
            alt="GP Transco Team Member"
            width={700}
            height={900}
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,26,44,0.12)]"
            priority={false}
          />
        </div>

        {/* Right Team Member Cutout */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[clamp(80px,12vh,140px)] -right-12 z-0 hidden lg:block w-[380px] xl:w-[460px] 2xl:w-[500px]"
        >
          <Image
            src="/about-us/overview-right.png"
            alt="GP Transco Team Member"
            width={700}
            height={900}
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(11,26,44,0.12)]"
            priority={false}
          />
        </div>

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
            Driven by People. <br />
            <span className="text-azure">Powered by Innovation.</span>
          </h2>

          {/* Narrative Lead */}
          <p className="mx-auto mt-6 max-w-[62ch] text-[clamp(15px,1.2vw,18px)] leading-[1.7] text-body-text">
            Since our founding, GP Transco has grown from a small operation into
            one of the most respected asset-based carriers in the Midwest. Our
            success is built on a simple principle: treat customers and drivers
            right, invest in technology, and never compromise on safety.
          </p>

          {/* Three Stat Pillar Counters */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 pt-10 border-t border-rule">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="font-display text-[clamp(38px,4.5vw,56px)] font-black tracking-tight text-ink-text leading-none">
                2006
              </span>
              <span className={cx(label, "mt-2.5 text-mute text-[12px]")}>
                FOUNDED
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="font-display text-[clamp(38px,4.5vw,56px)] font-black tracking-tight text-azure leading-none">
                500+
              </span>
              <span className={cx(label, "mt-2.5 text-mute text-[12px]")}>
                TRACTORS
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="font-display text-[clamp(38px,4.5vw,56px)] font-black tracking-tight text-ink-text leading-none">
                1,800
              </span>
              <span className={cx(label, "mt-2.5 text-mute text-[12px]")}>
                TRAILERS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
