import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DriverHero,
  DriverOverview,
  DriverEquipment,
  DriverOwnerOperator,
  DriverRoutes,
  DriverPayCalculator,
  DriverBenefits,
  DriverElite,
  DriverHighlights,
  DriverTransparency,
  DriverManagers,
  DriverCTA,
} from "@/components/driver-careers";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Drive for PKT | CDL-A Jobs and Owner-Operator Opportunities",
  description:
    "Company driver positions and owner-operator lease opportunities. 48-state OTR freight, late-model equipment, dispatch that knows your name.",
};
const LINKS: SectionLink[] = [
  { id: "overview", label: "Overview" },
  { id: "equipment", label: "Equipment" },
  { id: "owner-operator", label: "Owner-Operator" },
  { id: "routes", label: "Route Selection" },
  { id: "calculator", label: "Pay Calculator" },
  { id: "benefits", label: "Benefits" },
  { id: "elite", label: "ELITE Program" },
  { id: "highlights", label: "Driver Highlights" },
  { id: "transparency", label: "Transparency" },
  { id: "managers", label: "Driver Managers" },
];

export default function DriverCareersPage() {
  return (
    <>
      <DriverHero />
      <SectionNav links={LINKS} />
      <DriverOverview />
      <DriverEquipment />
      <DriverOwnerOperator />
      <DriverRoutes />
      <DriverPayCalculator />
      <DriverBenefits />
      <DriverElite />
      <DriverHighlights />
      <DriverTransparency />
      <DriverManagers />
      <DriverCTA />
      <SiteFooter />
    </>
  );
}
