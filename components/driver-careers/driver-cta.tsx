"use client";

import { Phone, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { ClosingCTA } from "../closing-cta";
import { useDriverApply } from "../driver-apply-modal";

/**
 * Driver Careers Closing CTA Section.
 *
 * Cinematic dark plate (bg-ink) concluding the /careers page — this is the
 * site-standard ClosingCTA shape with careers words and actions.
 * Sits after the light DriverManagers section and flows seamlessly into SiteFooter.
 */

export function DriverCTA() {
  const { openApplyModal } = useDriverApply();

  return (
    <ClosingCTA
      id="apply"
      ariaLabel="Apply to drive"
      eyebrow={
        <>
          <Sparkle size={14} weight="bold" />
          Take the Next Step in Your Career
        </>
      }
      headline={
        <>
          Not sure which <span className="text-azure-hi">suits you? </span>
        </>
      }
      copy="Call +1 (331) 256-8985 and ask — two minutes, no application."
      primaryLabel="Apply to Drive"
      onPrimary={openApplyModal}
      secondaryLabel="+1 (331) 256-8985"
      secondaryHref="tel:+13312568985"
      SecondaryIcon={Phone}
      note="Recruiting Team Active Mon–Fri · Direct Human Response"
    />
  );
}
