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
          Ready to Drive With <span className="text-azure-hi">Purpose?</span>
        </>
      }
      copy="Join a team that values your skills, respects your time, and rewards your performance. Apply today and become part of the PKT Group family."
      primaryLabel="Apply to Drive"
      onPrimary={openApplyModal}
      secondaryLabel="(708) 298-8281"
      secondaryHref="tel:7082988281"
      SecondaryIcon={Phone}
      note="Recruiting Team Active Mon–Fri · Direct Human Response"
    />
  );
}
