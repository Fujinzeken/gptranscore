import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DriverHero,
  DriverOverview,
  DriverEquipment,
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
  title: "Best CDL-A Truck Driving Jobs | PKT Group",
  description:
    "CDL-A driving jobs built around how you want to drive. Up to 83 CPM, home daily or weekly, late-model Freightliners, and industry-leading pay.",
};

const LINKS: SectionLink[] = [
  { id: "overview", label: "Overview" },
  { id: "equipment", label: "Equipment" },
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
