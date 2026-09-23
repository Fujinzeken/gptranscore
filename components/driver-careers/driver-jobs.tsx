"use client";

import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  PhoneCall,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { SiteNav } from "../site-nav";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";

/**
 * Driver jobs board page (CAREERS — DRIVER JOBS row of the content pack).
 * Copy is CSV-verbatim. The CSV defines the board — what each posting shows
 * and the leave-your-details fallback — but contains no posting records, so
 * the board renders the posting specimen and an honest empty state. The
 * sitemap's JobPosting structured-data + expiry requirement is logged in
 * OPEN-ITEMS before real listings go live.
 */

const TYPES = ["Company Driver", "Owner-Operator"] as const;

export function DJHero() {
  const { openApplyModal } = useDriverApply();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/driver-highlight.png"
        alt="A PKT driver on the road — openings are posted the day they are real."
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_35%]"
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
          <Briefcase size={15} weight="bold" />
          Driver Jobs
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Every opening here is{" "}
          <span className="text-azure-hi">current.</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Company driver and owner-operator openings, filtered by state and
          type. If nothing matches your state, leave your details and
          we&rsquo;ll call when something opens near you.
        </p>

        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <button
            type="button"
            onClick={openApplyModal}
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            Leave Your Details
            <ArrowRight size={18} />
          </button>

          <a
            href="/careers/company-drivers"
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            <PhoneCall size={17} />
            Company Drivers
          </a>
        </div>
      </div>
    </section>
  );
}

const FIELDS: Array<{ n: string; name: string; detail: string }> = [
  { n: "01", name: "Title", detail: "What the truck actually does" },
  { n: "02", name: "Driver type", detail: "Company driver or owner-operator" },
  { n: "03", name: "Route type", detail: "Home daily, weekly, or OTR" },
  { n: "04", name: "Hiring states", detail: "Where the opening is real" },
  { n: "05", name: "Pay or split", detail: "The number, before you apply" },
  { n: "06", name: "Home time", detail: "What the run actually gives you" },
  { n: "07", name: "Equipment", detail: "The tractor and trailer you'd run" },
  { n: "08", name: "Experience minimum", detail: "Whether your record fits" },
];

/**
 * The posting specimen: the CSV's "each posting shows" list rendered as a
 * ruled manifest — the shape every opening takes, so the empty board still
 * makes a promise about what will appear on it.
 */
export function DJSpecimen() {
  return (
    <section id="board" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-5 max-[1000px]:col-span-1">
            <p
              style={{ "--i": 0 } as React.CSSProperties}
              className={cx(label, revealItem, "m-0 text-azure")}
            >
              How the board works
            </p>

            <h2
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[12em]",
                "text-[clamp(26px,3.6vw,52px)] text-ink-text",
              )}
            >
              What every posting shows.
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[48ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
              )}
            >
              No vague ads. Each opening on this board carries the same eight
              fields, so you can decide whether it fits before you apply —
              not after.
            </p>
          </div>

          <dl className="col-span-7 m-0 max-[1000px]:col-span-1">
            {FIELDS.map(({ n, name, detail }, i) => (
              <div
                key={n}
                style={{ "--i": i + 3 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "grid grid-cols-[2rem_9rem_1fr] items-baseline gap-x-[clamp(12px,2vw,28px)] border-b border-line py-4 first:border-t",
                  "max-[560px]:grid-cols-[2rem_1fr] max-[560px]:gap-y-1",
                )}
              >
                <span className="font-mono text-xs font-bold text-azure tabular-nums">
                  {n}
                </span>
                <dt className="m-0 font-display text-[clamp(16px,1.4vw,19px)] font-bold tracking-[-0.01em] text-ink-text">
                  {name}
                </dt>
                <dd className="m-0 max-[560px]:col-start-2 text-[clamp(14px,1.05vw,15.5px)] leading-[1.55] text-soft-text">
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

/**
 * The board itself. The CSV carries no posting records, so the filters and
 * the posting grid exist and are wired, and the empty state is the CSV's
 * own fallback: leave your details and we'll call when something opens
 * near you. No invented openings.
 */
export function DJOpenings() {
  const { openApplyModal } = useDriverApply();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (t: string) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );

  return (
    <section
      id="openings"
      className="bg-ink px-gut py-[clamp(78px,12vh,150px)] overflow-hidden"
    >
      <Reveal>
        <header
          className={cx(
            revealItem,
            "text-center max-w-[740px] mx-auto mb-[clamp(40px,6vh,64px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure-hi mb-3 flex items-center justify-center gap-2",
            )}
          >
            <Briefcase size={14} weight="bold" />
            Openings
          </p>

          <h2 className="type-display m-0 text-[clamp(26px,3.6vw,52px)] text-paper leading-[0.94]">
            Current openings, by type.
          </h2>
        </header>
      </Reveal>

      <Reveal>
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "flex flex-wrap items-center justify-center gap-2 mb-8",
          )}
        >
          {TYPES.map((t) => {
            const active = selectedTypes.includes(t);
            return (
              <button
                key={t}
                type="button"
                onClick={() => toggleType(t)}
                className={cx(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-full cursor-pointer",
                  active
                    ? "bg-azure text-azure-ink shadow-sm"
                    : "border border-rule-lit text-mute hover:text-paper hover:border-azure/40",
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* The honest empty state — the CSV's fallback, not invented listings. */}
      <Reveal>
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mx-auto max-w-[760px] bg-deep border border-rule rounded-2xl px-[clamp(28px,4vw,56px)] py-[clamp(40px,6vh,72px)] text-center",
          )}
        >
          <span className={cx(label, "text-mute-2")}>Board status</span>

          <p className="font-display m-0 mt-4 text-[clamp(20px,2.4vw,30px)] font-bold leading-[1.1] tracking-[-0.015em] text-paper">
            {selectedTypes.length > 0
              ? "Nothing posted under that filter yet."
              : "No postings are live on this board right now."}
          </p>

          <p className="m-0 mt-4 mx-auto max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
            Openings go up the day they&rsquo;re real. If nothing matches your
            state, leave your details and we&rsquo;ll call when something
            opens near you.
          </p>

          <button
            type="button"
            onClick={openApplyModal}
            className={cx(btn, btnHero, btnSolid, "mt-8 cursor-pointer")}
          >
            Leave Your Details
            <ArrowRight size={17} weight="bold" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}

export function DJClosing() {
  const { openApplyModal } = useDriverApply();

  return (
    <ClosingCTA
      id="apply"
      ariaLabel="Leave your details for driver openings"
      eyebrow={
        <>
          <SteeringWheel size={14} weight="bold" />
          Driver Jobs
        </>
      }
      headline={
        <>
          Your state, <span className="text-azure-hi">your call.</span>
        </>
      }
      copy="Leave your details and we'll call when something opens near you — company driver or owner-operator, whichever fits how you want to run."
      primaryLabel="Leave Your Details"
      onPrimary={openApplyModal}
      secondaryLabel="Back to Drive With PKT"
      secondaryHref="/careers"
      note="Openings Posted As They Go Live · Mon–Fri"
    />
  );
}