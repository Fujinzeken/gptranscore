"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { useQuote } from "../quote-modal";
import { btn, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Support / Dedicated Team Section.
 *
 * Dark plate (bg-ink) following the light ShipEliteDrivers section.
 *
 * "Meet the Team Behind Your Freight" — the live site uses a carousel
 * of team member portraits on a deep navy panel. We replicate that
 * editorial weight with a two-column split: left carries the centred
 * headline + body, right slides through named team profiles on the
 * dark plate. No images required — each card is a styled identity
 * block with role, name, and bio, using the design system's azure
 * accent and hard edges throughout.
 */

interface TeamMember {
  role: string;
  name: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    role: "Account Coordinator",
    name: "Maria",
    bio: "Maria brings a people-first approach to every account she touches. With a background in airport customer service and team leadership, she believes every interaction is a chance to make a client feel heard, respected, and taken care of.",
  },
  {
    role: "Logistics Manager",
    name: "James",
    bio: "James has spent 11 years building carrier relationships and optimizing lane performance. He proactively flags delays before they become problems, and treats every shipper's freight like it's his own.",
  },
  {
    role: "Senior Freight Coordinator",
    name: "Diane",
    bio: "Diane's attention to detail and deep knowledge of regulatory compliance means your loads move clean — the right equipment, the right paperwork, every time.",
  },
  {
    role: "Operations Lead",
    name: "Carlos",
    bio: "Carlos coordinates across drivers, dispatch, and customers to keep capacity aligned with demand. His team's on-time rate is the benchmark others on the floor chase.",
  },
];

export function ShipSupport() {
  const { open: openQuote } = useQuote();
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + TEAM.length) % TEAM.length);
  const next = () => setActive((i) => (i + 1) % TEAM.length);

  const member = TEAM[active];

  return (
    <section
      id="support"
      className="relative isolate bg-ink py-[clamp(78px,12vh,150px)] px-gut overflow-hidden"
    >
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[900px] bg-azure/8 blur-[120px] -z-10"
      />

      <Reveal>
        {/* Section header — centred */}
        <header
          className={cx(
            revealItem,
            "text-center max-w-[700px] mx-auto mb-[clamp(48px,7vh,80px)]",
          )}
        >
          <p
            className={cx(
              label,
              "text-azure mb-4 flex items-center justify-center gap-2",
            )}
          >
            <Users size={14} weight="bold" />
            Dedicated Support
          </p>
          <h2 className="type-display m-0 text-[clamp(28px,4.2vw,58px)] text-paper">
            Meet the Team Behind{" "}
            <span className="text-azure-hi">Your Freight</span>
          </h2>
          <p className="mt-5 text-[clamp(15px,1.15vw,17.5px)] leading-[1.65] text-mute max-w-[58ch] mx-auto">
            Every customer is paired with a dedicated professional who serves as
            a single point of contact. These are the people who manage your
            freight day in and day out — bringing decades of combined expertise,
            proactive communication, and a relentless commitment to getting every
            shipment right.
          </p>
        </header>

        {/* Team carousel */}
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(
            revealItem,
            "relative max-w-[860px] mx-auto bg-[#0d1521] border border-rule",
          )}
        >
          {/* Azure top accent bar */}
          <div className="h-[3px] w-full bg-azure" />

          <div className="p-[clamp(32px,4.5vw,56px)]">
            {/* Role kicker */}
            <p className={cx(label, "text-azure mb-5 tracking-[0.2em]")}>
              {member.role}
            </p>

            {/* Name — big display */}
            <h3 className="font-display text-[clamp(48px,7vw,96px)] font-black text-paper uppercase leading-[0.88] tracking-[-0.02em] m-0">
              {member.name}
            </h3>

            {/* Bio */}
            <p className="mt-6 text-[clamp(14.5px,1.1vw,17px)] leading-[1.68] text-mute max-w-[58ch]">
              {member.bio}
            </p>

            {/* Nav + dots */}
            <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
              {/* Pagination dots */}
              <div className="flex items-center gap-2.5">
                {TEAM.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to team member ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={cx(
                      "h-[3px] transition-all duration-300",
                      i === active
                        ? "w-8 bg-azure"
                        : "w-3 bg-rule-lit hover:bg-mute-2",
                    )}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous team member"
                  className="size-10 border border-rule-lit flex items-center justify-center text-mute hover:border-azure hover:text-azure transition-colors duration-200"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next team member"
                  className="size-10 border border-rule-lit flex items-center justify-center text-mute hover:border-azure hover:text-azure transition-colors duration-200"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(revealItem, "mt-12 flex justify-center")}
        >
          <button
            type="button"
            onClick={openQuote}
            className={cx(
              btn,
              btnSolid,
              btnHero,
              "shadow-[0_8px_24px_-8px_rgba(11,143,203,0.5)]",
            )}
          >
            Talk to Our Team
            <ArrowRight size={17} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
