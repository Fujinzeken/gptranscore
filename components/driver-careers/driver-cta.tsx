"use client";

import { Phone } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { ClosingCTA } from "../closing-cta";

/**
 * Driver Careers closing CTA: the hub's "Not sure which suits you?" line.
 */

export function DriverCTA() {
  const router = useRouter();

  return (
    <ClosingCTA
      id="apply"
      ariaLabel="Apply to drive"
      eyebrow="Talk to recruiting"
      headline={
        <>
          Not sure which <span className="text-azure-hi">suits you?</span>
        </>
      }
      copy="Call +1 (224) 666-0136 and ask — two minutes, no application."
      primaryLabel="Quick Apply"
      onPrimary={() => router.push("/careers/apply")}
      secondaryLabel="+1 (224) 666-0136"
      secondaryHref="tel:+12246660136"
      SecondaryIcon={Phone}
      note="Recruiting · Mon–Sat · 8 AM–5 PM CDT"
    />
  );
}
