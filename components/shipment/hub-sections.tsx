"use client";

import Image from "next/image";
import {
  ArrowRight,
  ClipboardText,
  MapTrifold,
  NotePencil,
  Package,
  Snowflake,
  Stack,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";
import { LaneMap } from "./lane-map";

/**
 * Freight Services hub sections. Copy transcribed from the PKT content pack
 * (FREIGHT SERVICES — HUB row); structure only, every line is theirs.
 */

export function HubIntro() {
  return (
    <section
      id="intro"
      className="relative bg-paper py-[clamp(78px,12vh,150px)] px-gut"
    >
      <div className="mx-auto max-w-[1200px] grid gap-[clamp(32px,5vw,72px)] md:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className={cx(label, "text-azure mb-6")}>Asset-based carrier</p>
          <h2 className="font-display m-0 text-[clamp(30px,3.6vw,52px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink">
            The carrier you hired is the carrier that moves it.
          </h2>
          <div className="mt-[clamp(30px,4.5vh,52px)]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(
                revealItem,
                "max-w-[52ch] text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/80",
              )}
            >
              PKT is an asset-based carrier. We own the trucks and hold the
              authority, so your freight moves with us rather than being passed
              along to a company you have never spoken to.
            </p>
            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 max-w-[52ch] text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/80",
              )}
            >
              We run dry van, refrigerated and flatbed equipment across 48
              states. The people you call about a load are the people who
              dispatched it.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <figure
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "relative m-0 min-h-[clamp(320px,44vw,520px)] overflow-hidden bg-line",
            )}
          >
            <Image
              src="/fleet-dock.jpg"
              alt="PKT tractors and dry vans backed into the loading dock."
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[52%_58%]"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

const EQUIPMENT = [
  {
    icon: Package,
    name: "Dry Van",
    body: "53' enclosed capacity for freight that travels at ambient temperature.",
    href: "/services/dry-van",
  },
  {
    icon: Snowflake,
    name: "Refrigerated",
    body: "Temperature-controlled truckload for freight that has to arrive at temperature.",
    href: "/services/reefer",
  },
  {
    icon: Stack,
    name: "Flatbed",
    body: "Open deck capacity for freight loading from the side, rear or overhead.",
    href: "/services/flatbed",
  },
];

export function HubEquipment() {
  return (
    <section
      id="equipment"
      className="relative border-t border-line bg-paper px-gut py-[clamp(64px,10vh,120px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className={cx(label, "text-azure mb-6")}>Equipment</p>
          <h2 className="font-display m-0 max-w-[16em] text-[clamp(30px,3.6vw,52px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink">
            Pick the trailer your freight needs.
          </h2>
          <ul className="m-0 mt-[clamp(36px,5vh,60px)] grid list-none gap-px bg-line p-0 md:grid-cols-3">
            {EQUIPMENT.map(({ icon: Icon, name, body, href }, i) => (
              <li key={name} className="bg-surface">
                <a
                  href={href}
                  style={{ "--i": i } as React.CSSProperties}
                  className={cx(
                    revealItem,
                    "group flex h-full flex-col gap-4 p-[clamp(24px,2.6vw,36px)] transition-colors duration-300 hover:bg-paper",
                  )}
                >
                  <Icon size={24} weight="bold" className="text-azure" />
                  <span className="font-display text-[22px] font-bold uppercase tracking-[-0.01em] text-ink">
                    {name}
                  </span>
                  <span className="text-[15px] leading-[1.6] text-ink/75">
                    {body}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[14px] font-semibold text-azure">
                    View {name}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: ClipboardText,
    step: "01",
    title: "Book",
    body: "Send origin, destination, pickup date, commodity, weight, pallet count and equipment requirements; we confirm capacity before accepting.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Pickup",
    body: "Truck arrives, freight loads, team confirms and begins managing the shipment.",
  },
  {
    icon: Package,
    step: "03",
    title: "In transit",
    body: "We follow the load and keep you updated; revised ETA comes from us if anything affects delivery.",
  },
  {
    icon: ArrowRight,
    step: "04",
    title: "Delivery",
    body: "Receiver accepts, we confirm, proof of delivery provided.",
  },
];

export function HubHowItMoves() {
  return (
    <section
      id="how-it-moves"
      className="relative bg-ink py-[clamp(78px,12vh,150px)] px-gut"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className={cx(label, "text-azure-hi mb-6")}>How your freight moves</p>
          <h2 className="font-display m-0 max-w-[16em] text-[clamp(30px,3.6vw,52px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-paper">
            Four steps, one accountable carrier.
          </h2>

          {/* One Reveal over the slab; the cells and their ink paint are
              static — only the inner content fades in (a cell that is both
              the paint and the fade shows the pale grid base beneath it as a
              blank slab before it reveals). */}
          <div className="mt-[clamp(40px,6vh,72px)] grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="bg-ink p-[clamp(24px,2.6vw,36px)]">
                  <div
                    style={{ "--i": i } as React.CSSProperties}
                    className={cx(revealItem)}
                  >
                    <div className="flex items-center justify-between pb-5">
                      <Icon size={22} weight="bold" className="text-azure-hi" />
                      <span className={cx(label, "text-soft-text")}>
                        {s.step}
                      </span>
                    </div>
                    <h3 className="font-display m-0 pb-2 text-[20px] font-bold uppercase tracking-[-0.01em] text-paper">
                      {s.title}
                    </h3>
                    <p className="m-0 text-[14.5px] leading-[1.6] text-mute">
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HubCommunication() {
  return (
    <section
      id="communication"
      className="relative isolate flex min-h-[clamp(460px,62vh,660px)] items-center overflow-hidden bg-ink px-gut py-[clamp(56px,9vh,104px)]"
    >
      <Image
        src="/case-haul.jpg"
        alt="A PKT driver at the wheel."
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[64%_38%]"
      />
      {/* Reads left, so the scrim is heaviest there and clears to the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,11,17,0.94)_0%,rgba(7,11,17,0.82)_34%,rgba(7,11,17,0.34)_62%,rgba(7,11,17,0.12)_100%)]"
      />

      <Reveal className="w-full">
        <p className={cx(label, revealItem, "m-0 text-mute")}>
          Communication
        </p>

        <h2
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "font-display mb-0 mt-[clamp(20px,3vh,34px)] max-w-[15em] text-[clamp(28px,3.4vw,46px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-paper",
          )}
        >
          Direct communication with dispatch.
        </h2>

        <p
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "m-0 mt-[clamp(18px,2.8vh,30px)] max-w-[52ch] text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-mute",
          )}
        >
          Contact PKT about an active shipment and you reach the team managing
          it — appointment changes, receiver questions, schedule issues handled
          directly by operations.
        </p>

        <a
          href="/contact"
          style={{ "--i": 3 } as React.CSSProperties}
          className={cx(
            revealItem,
            btn,
            btnHero,
            btnSolid,
            "mt-[clamp(26px,4vh,44px)] shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)]",
          )}
        >
          Talk to Our Team
          <ArrowRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}

export function HubCoverage() {
  const { open: openQuote } = useQuote();
  return (
    <section
      id="coverage"
      className="relative bg-surface border-y border-line py-[clamp(78px,12vh,150px)] px-gut"
    >
      <div className="mx-auto max-w-[1200px] grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className={cx(label, "text-azure mb-6")}>
            <MapTrifold size={16} weight="bold" className="mr-2 inline -mt-1" />
            Where we run
          </p>
          <h2 className="font-display m-0 text-[clamp(30px,3.6vw,52px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink">
            48-state authority, regular lanes where we run most.
          </h2>
          <p className="mt-6 text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/80">
            PKT holds 48-state operating authority and runs OTR across the
            contiguous US. The lanes on the map are where we run most
            consistently — Midwest to the Northeast, Northeast to the
            Southeast, and Southeast to the Midwest — with the fastest quote
            turnaround. Freight outside these lanes is open to us depending on
            where equipment sits that week; send the lane for a same-day
            answer.
          </p>
          <button
            type="button"
            onClick={openQuote}
            className={cx(btn, btnHero, btnSolid, "mt-8 shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)]")}
          >
            Request a Quote
            <ArrowRight size={18} />
          </button>
        </Reveal>
        <Reveal>
          <LaneMap className={revealItem} />
        </Reveal>
      </div>
    </section>
  );
}

const QUOTE_FIELDS = [
  "ZIP-level origin and destination",
  "Pickup date",
  "Commodity",
  "Weight",
  "Dimensions or pallet count",
  "Loading method",
  "Appointment times and special handling",
];

export function HubQuote() {
  const { open: openQuote } = useQuote();
  return (
    <section
      id="quote"
      className="relative bg-ink py-[clamp(78px,12vh,150px)] px-gut"
    >
      <div className="mx-auto max-w-[1200px] grid gap-[clamp(32px,5vw,72px)] md:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className={cx(label, "text-azure-hi mb-6")}>
            <NotePencil size={16} weight="bold" className="mr-2 inline -mt-1" />
            What we need to quote
          </p>
          <h2 className="font-display m-0 max-w-[13em] text-[clamp(30px,3.6vw,52px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-paper">
            Send the details, get a clear answer.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-mute">
            Weekly freight can be reviewed for ongoing capacity — send the
            lane, loads per week, schedules, commodity, average weight, loading
            method and receiver requirements.
          </p>
          <button
            type="button"
            onClick={openQuote}
            className={cx(btn, btnHero, btnSolid, "mt-8 shadow-[0_12px_34px_-12px_rgba(11,143,203,0.75)]")}
          >
            Request a Quote
            <ArrowRight size={18} />
          </button>
        </Reveal>
        <Reveal>
          <div className={revealItem}>
          <ul className="m-0 list-none divide-y divide-line border border-line bg-ink p-0">
            {QUOTE_FIELDS.map((field) => (
              <li
                key={field}
                className="flex items-center gap-3 px-[clamp(18px,2vw,26px)] py-[clamp(14px,1.6vh,20px)] text-[15px] text-paper"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-azure-hi" />
                {field}
              </li>
            ))}
          </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
