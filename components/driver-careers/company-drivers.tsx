"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Check,
  Phone,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";

/**
 * Company drivers page sections (CAREERS — COMPANY DRIVERS row of the
 * content pack). Body copy is CSV-verbatim. The recruiting notes (training
 * for new CDL holders, USPS freight, new dry vans) are rewritten as plain
 * facts in CDMore; their hype ("get richer", "paycheck to paycheck") is not.
 */

const FREIGHT_TYPES = ["DRY VAN", "REEFER", "FLATBED", "48 STATES"];

export function CDHero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/demo-home/demo3.jpg"
        alt="A PKT tractor on the highway running company freight."
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[56%_62%]"
      />
      <div
        aria-hidden="true"
        className="scrim-side max-[920px]:scrim-base absolute inset-0 -z-10"
      />

      <SiteNav />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-gut py-[clamp(40px,7vh,88px)]">
        <p
          className={cx(
            label,
            "text-azure-hi mb-4 flex items-center gap-2 tracking-[0.16em]",
          )}
        >
          <SteeringWheel size={15} weight="bold" />
          Company Drivers
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Drive for a company that{" "}
          <span className="text-azure-hi">knows your name.</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          OTR company driver positions running dry van, reefer and flatbed
          freight across 48 states.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {FREIGHT_TYPES.map((type) => (
            <span
              key={type}
              className="border border-rule-lit bg-ink-2/80 px-3.5 py-1.5 font-mono text-[11.5px] font-bold text-paper tracking-[0.14em] rounded-full"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <a
            href="/careers/jobs"
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            See Open Positions
            <ArrowRight size={18} />
          </a>

          <a
            href="/careers/apply?type=company-driver"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            Quick Apply
          </a>
        </div>
      </div>
    </section>
  );
}

const PROVIDES = [
  "The truck",
  "The trailer",
  "Fuel",
  "Maintenance",
  "Insurance",
  "The freight",
];

export function CDIntro() {
  return (
    <section id="intro" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-body-text")}
            >
              Company Drivers
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              We are not trying to become a bigger carrier — we are trying to
              be a good one.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              That means dispatch knows what you drive and where you live; when
              you call, someone picks up. Nobody here gets pushed to run tired or run past
              their hours — a load is never worth your license.
            </p>
          </div>

          {/* The artifact: what the company provides, as a ruled readout on
              the dark plate — straight from the CSV, ending on "you drive." */}
          <div
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-5 bg-deep p-[clamp(28px,3.6vw,56px)]",
              "max-[1000px]:col-span-1",
            )}
          >
            <div className="flex items-center justify-between pb-6">
              <SteeringWheel
                size={30}
                weight="bold"
                className="text-azure-hi"
              />
              <span className={cx(label, "text-mute-2")}>What we provide</span>
            </div>
            <ul className="m-0 list-none border-t border-rule">
              {PROVIDES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-rule py-4"
                >
                  <Check size={16} weight="bold" className="shrink-0 text-azure-hi" />
                  <span className="text-[clamp(14px,1.05vw,16px)] leading-[1.5] text-paper">
                    {item}
                  </span>
                </li>
              ))}
              <li className="pt-5">
                <span className="font-display text-[clamp(18px,1.6vw,24px)] font-bold tracking-[-0.015em] text-azure-hi uppercase">
                  You drive.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const STAY: Array<{ name: string; detail: string }> = [
  {
    name: "Dispatch that knows you",
    detail:
      "Not a fleet number in a queue — the person dispatching your load knows your situation.",
  },
  {
    name: "Miles that are there",
    detail:
      "We don't hire more drivers than we have freight for; sitting doesn't pay you and it doesn't pay us.",
  },
  {
    name: "Home when we said",
    detail: "We plan the load around it.",
  },
  {
    name: "Equipment that works",
    detail:
      "2025 Kenworth and Freightliner Cascadia tractors on a preventive maintenance schedule — breakdowns cost you money, so we work to avoid them.",
  },
];

export function CDStay() {
  return (
    <section
      id="stay"
      className="bg-ink px-gut py-[clamp(78px,12vh,150px)] overflow-hidden"
    >
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-azure-hi")}
        >
          Why drivers stay
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[16em]",
            "text-[clamp(26px,3.6vw,52px)] text-paper",
          )}
        >
          Four reasons, none of them slogans.
        </h2>

        {/* The manifest. Ruled rows, names as display type, the same
            ground-shift hover the service pages use. */}
        <ul
          className={cx(
            revealItem,
            "m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-rule",
          )}
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {STAY.map(({ name, detail }, i) => (
            <li
              key={name}
              className={cx(
                "group grid grid-cols-[2.5rem_1fr] gap-x-[clamp(16px,2.5vw,40px)] border-b border-rule py-[clamp(20px,3vh,34px)] last:border-b-0",
                "transition-colors duration-300 hover:bg-ink-2",
              )}
            >
              <span className={cx(label, "text-mute-2 tabular-nums")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span
                  className={cx(
                    "font-display block font-bold tracking-[-0.02em] text-paper",
                    "text-[clamp(20px,2.2vw,32px)] leading-[1.05]",
                    "transition-transform duration-500 ease-[var(--ease-out-strong)]",
                    "group-hover:translate-x-[clamp(6px,1vw,16px)]",
                  )}
                >
                  {name}
                </span>
                <p className="m-0 mt-2 max-w-[72ch] text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-mute">
                  {detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

const MORE: Array<{ name: string; detail: string }> = [
  {
    name: "Training for new CDL-A holders",
    detail:
      "Newly licensed? Our training program gets you from licence to running loads, with our team behind you while you build experience.",
  },
  {
    name: "USPS freight for US citizens",
    detail:
      "We have dry van coverage on USPS freight for company drivers who are US citizens.",
  },
  {
    name: "New 53′ dry vans",
    detail:
      "Brand-new 53′ swing-door trailers, and first-come, first-served facilities that typically have you loaded and back on the road in about two hours.",
  },
  {
    name: "No owner-operator overhead",
    detail:
      "Steady paychecks without carrying the fuel, maintenance and insurance costs of running your own truck.",
  },
  {
    name: "Clean-inspection bonus",
    detail: "Every driver earns a bonus for maintaining a clean inspection record.",
  },
  {
    name: "Support around the clock",
    detail:
      "24/7 assistance from our dispatch, maintenance, pre-trip inspection (PTI) and fuel teams.",
  },
];

export function CDMore() {
  return (
    <section
      id="more"
      className="bg-surface border-y border-line px-gut py-[clamp(78px,12vh,150px)]"
    >
      <Reveal>
        <p
          style={{ "--i": 0 } as React.CSSProperties}
          className={cx(label, revealItem, "m-0 text-azure")}
        >
          Also for company drivers
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[16em]",
            "text-[clamp(26px,3.6vw,52px)] text-ink-text",
          )}
        >
          Room for new drivers and steady freight for everyone.
        </h2>

        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(36px,5vh,64px)] grid gap-px bg-line sm:grid-cols-2",
          )}
        >
          {MORE.map(({ name, detail }) => (
            <div key={name} className="bg-paper p-[clamp(24px,2.6vw,36px)]">
              <h3 className="font-display m-0 pb-2 text-[20px] font-bold tracking-[-0.01em] text-ink-text">
                {name}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-body-text">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function CDClosing() {
  const router = useRouter();

  return (
    <ClosingCTA
      id="apply"
      ariaLabel="Apply as a company driver"
      eyebrow={
        <>
          <SteeringWheel size={14} weight="bold" />
          Company Drivers
        </>
      }
      headline={
        <>
          The truck, the freight,{" "}
          <span className="text-azure-hi">the name.</span>
        </>
      }
      copy="We provide the truck, the trailer, fuel, maintenance, insurance and the freight — you drive. Call and we'll tell you what your lane pays before you apply."
      primaryLabel="See Open Positions"
      onPrimary={() => router.push("/careers/jobs")}
      secondaryLabel="+1 (224) 666-0136"
      secondaryHref="tel:+12246660136"
      SecondaryIcon={Phone}
      note="Recruiting · Mon–Sat · 8 AM–5 PM CDT"
    />
  );
}
