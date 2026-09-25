import type { Metadata } from "next";
import {
  DriverHero,
  DriverOverview,
  DriverFAQ,
  DriverCTA,
} from "@/components/driver-careers";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Drive for PKT | CDL-A Jobs and Owner-Operator Opportunities",
  description:
    "Company driver positions and owner-operator lease opportunities. 48-state OTR freight, late-model equipment, dispatch that knows your name.",
};

export default function DriverCareersPage() {
  return (
    <>
      <DriverHero />
      <DriverOverview />
      <DriverFAQ />
      <DriverCTA />
      <SiteFooter />
    </>
  );
}
