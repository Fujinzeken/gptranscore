"use client";

import Image from "next/image";
import {
  ArrowRight,
  Handshake,
  Lightning,
  PhoneCall,
  Receipt,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "../site-nav";
import { Reveal, revealItem } from "../reveal";
import { ClosingCTA } from "../closing-cta";
import { useDriverApply } from "../driver-apply-modal";
import { btn, btnGhost, btnHero, btnSolid, cx, label } from "../ui";

/**
 * Owner-operators page sections (CAREERS — OWNER-OPERATORS row of the
 * content pack). Copy is CSV-verbatim; the notes column is unedited
 * marketing voice and is not rendered. Design deliberately varies from the
 * other careers pages: the signature section is a debit/credit ledger, and
 * the lease terms render as three numbered cards.
 */

const PROMISES = ["STEADY FREIGHT", "FUEL PROGRAM", "ON-TIME SETTLEMENTS"];

export function OOHero() {
  const { openApplyModal } = useDriverApply();

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink">
      <Image
        src="/demo-home/demo2.jpg"
        alt="An owner-operator's tractor hauling freight under PKT authority."
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[60%_40%]"
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
          <Handshake size={15} weight="bold" />
          Owner-Operators
        </p>

        <h1
          className={cx(
            "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
            "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
          )}
        >
          Your truck.{" "}
          <span className="text-azure-hi">Our authority and freight.</span>
        </h1>

        <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
          Lease on to PKT for steady 48-state freight, a fuel program and
          settlements that arrive on schedule.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {PROMISES.map((type) => (
            <span
              key={type}
              className="border border-rule-lit bg-ink-2/80 px-3.5 py-1.5 font-mono text-[11.5px] font-bold text-paper tracking-[0.14em] rounded-full"
            >
              {type}
            </span>
          ))}
        </div>

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
            Lease On
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

const LEDGER: Array<[string, string]> = [
  [
    "Dead time",
    "We run under our own authority with our own customer base — the freight is there.",
  ],
  [
    "Chasing loads that don't pay",
    "You deal with the same dispatcher every week, not whoever picks up.",
  ],
  [
    "Slow settlements",
    "Settlements that arrive on schedule — and a real settlement example before you sign anything.",
  ],
];

/**
 * The page's signature section: the CSV intro reframed as a ledger. Each
 * row pairs what costs an owner-operator money (the debit) with what the
 * lease removes (the credit), and the close is the CSV's own promise — a
 * real settlement example before you sign anything.
 */
export function OOLedger() {
  return (
    <section id="ledger" className="bg-page px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="mx-auto max-w-[1200px]">
          <p
            style={{ "--i": 0 } as React.CSSProperties}
            className={cx(label, revealItem, "m-0 text-azure")}
          >
            The ledger
          </p>

          <h2
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[16em]",
              "text-[clamp(26px,3.6vw,52px)] text-ink-text",
            )}
          >
            You know how to run a truck. We remove what costs you money.
          </h2>

          <ol
            className={cx(
              revealItem,
              "m-0 mt-[clamp(28px,4vh,44px)] list-none border-y border-line",
            )}
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {LEDGER.map(([cost, fix], i) => (
              <li
                key={cost}
                className="grid grid-cols-[2rem_1fr] items-start gap-x-[clamp(14px,2vw,32px)] border-b border-line py-[clamp(20px,3vh,34px)] last:border-b-0 md:grid-cols-[2rem_1fr_1.4fr] md:items-baseline"
              >
                <span className="font-mono text-sm font-bold text-azure">
                  −
                </span>
                <h3 className="m-0 font-display text-[clamp(19px,1.9vw,26px)] font-bold leading-[1.1] tracking-[-0.015em] text-ink-text">
                  {cost}
                </h3>
                <div className="col-start-2 mt-2 flex items-start gap-x-[clamp(14px,2vw,32px)] md:col-start-3 md:mt-0">
                  <span className="hidden font-mono text-sm font-bold text-azure md:inline">
                    +
                  </span>
                  <p className="m-0 max-w-[60ch] text-[clamp(14px,1.05vw,16px)] leading-[1.55] text-body-text">
                    {fix}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "mt-[clamp(24px,3.5vh,40px)] flex items-center gap-3 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
            )}
          >
            <Receipt size={20} weight="bold" className="shrink-0 text-azure" />
            We&rsquo;ll walk you through a real settlement example before you
            sign anything.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

const INCLUDES: Array<{
  num: string;
  icon: typeof Lightning;
  title: string;
  detail: string;
}> = [
  {
    num: "01",
    icon: Lightning,
    title: "Steady 48-state freight",
    detail:
      "Our authority, our customer base — lanes that are there when your truck is.",
  },
  {
    num: "02",
    icon: Receipt,
    title: "Fuel program",
    detail:
      "A fuel program behind your truck, not a discount card afterthought.",
  },
  {
    num: "03",
    icon: Handshake,
    title: "Settlements on schedule",
    detail:
      "The same dispatcher every week and settlements that arrive when they're supposed to.",
  },
];

export function OOIncludes() {
  return (
    <section
      id="lease"
      className="bg-surface border-y border-line px-gut py-[clamp(78px,12vh,150px)]"
    >
      <Reveal>
        <header
          className={cx(
            revealItem,
            "max-w-[740px] mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p className={cx(label, "text-azure mb-3 flex items-center gap-2")}>
            <Handshake size={14} weight="bold" />
            What the lease includes
          </p>

          <h2 className="type-display m-0 text-[clamp(26px,3.6vw,52px)] text-ink-text leading-[0.94]">
            Three commitments, agreed up front.
          </h2>
        </header>
      </Reveal>

      <Reveal>
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "grid gap-[clamp(20px,2.6vw,36px)] md:grid-cols-3",
          )}
        >
          {INCLUDES.map(({ num, icon: Icon, title, detail }) => (
            <div
              key={num}
              className="group relative flex min-h-[clamp(220px,28vh,320px)] flex-col justify-between overflow-hidden bg-surface border border-line p-[clamp(24px,2.6vw,40px)] transition-colors duration-300 hover:border-azure/50"
            >
              <span
                aria-hidden="true"
                className="font-display pointer-events-none absolute -top-4 right-2 text-[clamp(72px,9vw,140px)] font-black leading-none tracking-tighter text-ink/5 select-none transition-colors duration-500 group-hover:text-azure/15"
              >
                {num}
              </span>
              <div className="relative">
                <Icon
                  size={26}
                  weight="bold"
                  className="text-azure"
                  aria-hidden="true"
                />
                <h3 className="font-display mt-4 text-[clamp(19px,1.9vw,26px)] font-bold leading-[1.1] tracking-[-0.015em] text-ink-text">
                  {title}
                </h3>
              </div>
              <p className="relative m-0 mt-6 max-w-[44ch] text-[clamp(14px,1.05vw,15.5px)] leading-[1.6] text-body-text">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function OOClosing() {
  const { openApplyModal } = useDriverApply();

  return (
    <ClosingCTA
      id="lease-on"
      ariaLabel="Lease on to PKT"
      eyebrow={
        <>
          <SteeringWheel size={14} weight="bold" />
          Owner-Operators
        </>
      }
      headline={
        <>
          Ready to <span className="text-azure-hi">Lease On?</span>
        </>
      }
      copy="Bring the truck — run our freight under our authority, with the same dispatcher every week. We'll walk you through a real settlement example before you sign anything."
      primaryLabel="Lease On"
      onPrimary={openApplyModal}
      secondaryLabel="Compare Company Driving"
      secondaryHref="/careers/company-drivers"
      SecondaryIcon={SteeringWheel}
      note="Real Settlement Example Before You Sign · Mon–Fri"
    />
  );
}
