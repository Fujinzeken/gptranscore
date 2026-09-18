"use client";

import {
  ArrowRight,
  ChatText,
  ClipboardText,
  MapTrifold,
  NotePencil,
  Package,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

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
        </Reveal>
        <Reveal>
          <div className={cx(revealItem, "space-y-5 text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/80")}>
            <p>
              PKT is an asset-based carrier. We own the trucks and hold the
              authority, so your freight moves with us rather than being passed
              along to a company you have never spoken to.
            </p>
            <p>
              We run dry van, refrigerated, flatbed and step deck equipment
              across 48 states. The people you call about a load are the people
              who dispatched it.
            </p>
          </div>
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
        </Reveal>
        <div className="mt-[clamp(40px,6vh,72px)] grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} className={cx(revealItem, "bg-ink p-[clamp(24px,2.6vw,36px)]")}>
                <div className="flex items-center justify-between pb-5">
                  <Icon size={22} weight="bold" className="text-azure-hi" />
                  <span className={cx(label, "text-soft-text")}>{s.step}</span>
                </div>
                <h3 className="font-display m-0 pb-2 text-[20px] font-bold uppercase tracking-[-0.01em] text-paper">
                  {s.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.6] text-mute">
                  {s.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HubCommunication() {
  return (
    <section
      id="communication"
      className="relative bg-paper py-[clamp(78px,12vh,150px)] px-gut"
    >
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <ChatText size={34} weight="bold" className="mx-auto text-azure" />
          <h2 className="font-display m-0 mt-6 text-[clamp(28px,3.4vw,46px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink">
            Direct communication with dispatch.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/80">
            Contact PKT about an active shipment and you reach the team managing
            it — appointment changes, receiver questions, schedule issues
            handled directly by operations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Lanes from the content pack's notes — the lanes PKT runs regularly. */
const LANES = [
  "WI → FL", "WI → MA", "WI → CT", "WI → NJ",
  "IL → FL", "IL → GA", "IL → TX",
  "NJ → MI", "NJ → GA", "NJ → SC", "NJ → NC", "NJ → FL",
  "FL → NC", "FL → GA",
  "GA → OH", "GA → MI",
  "NC → IN", "KY → TX",
];

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
            48-state authority, regular lanes in the middle of the map.
          </h2>
          <p className="mt-6 text-[clamp(15px,1.1vw,17px)] leading-[1.65] text-ink/80">
            PKT holds 48-state operating authority and runs OTR across the
            contiguous US. The lanes below are where we run most consistently —
            fastest quote turnaround. Freight outside these lanes is open to us
            depending on where equipment sits that week; send the lane for a
            same-day answer.
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
          <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
            {LANES.map((lane) => (
              <div
                key={lane}
                className="flex items-center justify-center bg-paper px-4 py-5 text-[14px] font-semibold uppercase tracking-[0.04em] text-ink"
              >
                {lane}
              </div>
            ))}
          </div>
          <p className={cx(label, "mt-4 text-soft-text")}>
            Regular lanes · weekly freight can be reviewed for ongoing or
            dedicated capacity
          </p>
          </div>
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
            Weekly freight can be reviewed for ongoing or dedicated capacity —
            send the lane, loads per week, schedules, commodity, average weight,
            loading method and receiver requirements.
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
