"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { useMemo, useState } from "react";
import { SiteNav } from "../site-nav";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";
import { DRIVER_TYPES, type DriverType, type JobPosting } from "./jobs-data";

/**
 * Driver jobs board page (CAREERS — DRIVER JOBS row of the content pack).
 * Copy is CSV-verbatim. Postings come from jobs-data.ts, already filtered to
 * unexpired records by the page; filters run by state and driver type, and
 * the empty state is the CSV's own fallback: leave your details and we'll
 * call when something opens near you.
 */

const LEAVE_DETAILS_HREF = "/careers/apply";

/** Contiguous US, the footprint of PKT's 48-state authority. */
const STATES = [
  "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN",
  "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
  "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA",
  "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

function applyHref(type: DriverType) {
  return `/careers/apply?type=${
    type === "Owner-Operator" ? "owner-operator" : "company-driver"
  }`;
}

export function DJHero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/driver-highlight.png"
        alt="A PKT driver on the road."
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
          Filter by state and by type — company driver or owner-operator. If
          nothing matches your state, leave your details and we&rsquo;ll call
          when something opens near you.
        </p>

        <div className="mt-[clamp(24px,3.4vh,38px)] flex flex-wrap gap-[11px] max-[560px]:flex-col max-[560px]:items-stretch">
          <a
            href="#openings"
            className={cx(
              btn,
              btnHero,
              btnSolid,
              "shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)] max-[560px]:justify-center",
            )}
          >
            See Openings
            <ArrowRight size={18} />
          </a>

          <a
            href={LEAVE_DETAILS_HREF}
            className={cx(btn, btnHero, btnGhost, "max-[560px]:justify-center")}
          >
            Leave Your Details
          </a>
        </div>
      </div>
    </section>
  );
}

const FIELDS: Array<{ n: string; name: string }> = [
  { n: "01", name: "Title" },
  { n: "02", name: "Driver type" },
  { n: "03", name: "Route type" },
  { n: "04", name: "Hiring states" },
  { n: "05", name: "Pay or split" },
  { n: "06", name: "Home time" },
  { n: "07", name: "Equipment" },
  { n: "08", name: "Experience minimum" },
];

/**
 * The posting specimen: the CSV's "each posting shows" list rendered as a
 * ruled manifest — the shape every opening takes.
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
              Each opening shows the same eight details, so you can decide
              whether it fits before you apply.
            </p>
          </div>

          <dl className="col-span-7 m-0 max-[1000px]:col-span-1">
            {FIELDS.map(({ n, name }, i) => (
              <div
                key={n}
                style={{ "--i": i + 3 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "grid grid-cols-[2rem_1fr] items-baseline gap-x-[clamp(12px,2vw,28px)] border-b border-line py-4 first:border-t",
                )}
              >
                <span className="font-mono text-xs font-bold text-azure tabular-nums">
                  {n}
                </span>
                <dt className="m-0 font-display text-[clamp(16px,1.4vw,19px)] font-bold tracking-[-0.01em] text-ink-text">
                  {name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

function JobCard({ job }: { job: JobPosting }) {
  const rows: Array<[string, string]> = [
    ["Driver type", job.driverType],
    ["Route type", job.routeType],
    ["Hiring states", job.hiringStates.join(", ")],
    [job.driverType === "Owner-Operator" ? "Split" : "Pay", job.pay],
    ["Home time", job.homeTime],
    ["Equipment", job.equipment],
    ["Experience", job.experience],
  ];
  return (
    <article className="flex flex-col justify-between bg-deep border border-rule p-[clamp(22px,2.6vw,36px)]">
      <div>
        <h3 className="font-display m-0 text-[clamp(20px,2vw,26px)] font-bold leading-[1.15] text-paper">
          {job.title}
        </h3>
        <dl className="m-0 mt-5">
          {rows.map(([term, detail]) => (
            <div
              key={term}
              className="grid grid-cols-[8rem_1fr] gap-3 border-t border-rule py-2.5 text-[14px]"
            >
              <dt className="text-mute-2">{term}</dt>
              <dd className="m-0 text-paper">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
      <a
        href={applyHref(job.driverType)}
        className={cx(btn, btnHero, btnSolid, "mt-6 self-start")}
      >
        Apply
        <ArrowRight size={17} weight="bold" />
      </a>
    </article>
  );
}

export function DJOpenings({ jobs }: { jobs: JobPosting[] }) {
  const [selectedTypes, setSelectedTypes] = useState<DriverType[]>([]);
  const [state, setState] = useState("");

  const toggleType = (t: DriverType) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );

  const filtered = useMemo(
    () =>
      jobs.filter(
        (job) =>
          (selectedTypes.length === 0 ||
            selectedTypes.includes(job.driverType)) &&
          (!state || job.hiringStates.includes(state)),
      ),
    [jobs, selectedTypes, state],
  );

  const filtering = selectedTypes.length > 0 || state !== "";

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
            Current openings, by state and type.
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
          <label className="sr-only" htmlFor="job-state">
            State
          </label>
          <select
            id="job-state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="h-9 rounded-full border border-rule-lit bg-ink px-4 text-xs font-semibold uppercase tracking-wider text-paper"
          >
            <option value="">All states</option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {DRIVER_TYPES.map((t) => {
            const active = selectedTypes.includes(t);
            return (
              <button
                key={t}
                type="button"
                aria-pressed={active}
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

      {filtered.length > 0 ? (
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
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
              {filtering
                ? "Nothing posted under that filter yet."
                : "No postings are live on this board right now."}
            </p>

            <p className="m-0 mt-4 mx-auto max-w-[52ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
              If nothing matches your state, leave your details and we&rsquo;ll
              call when something opens near you.
            </p>

            <a
              href={LEAVE_DETAILS_HREF}
              className={cx(btn, btnHero, btnSolid, "mt-8")}
            >
              Leave Your Details
              <ArrowRight size={17} weight="bold" />
            </a>
          </div>
        </Reveal>
      )}
    </section>
  );
}

export function DJClosing() {
  const router = useRouter();

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
      onPrimary={() => router.push(LEAVE_DETAILS_HREF)}
      secondaryLabel="Back to Drive With PKT"
      secondaryHref="/careers"
      note="Recruiting · Mon–Sat · 8 AM–5 PM CDT"
    />
  );
}
