import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  SafetyHero,
  SafetyIntro,
  SafetyTrucks,
  SafetyDrivers,
  SafetySecurity,
  SafetyHours,
  SafetyCompliance,
  SafetyCta,
} from "@/components/safety";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Safety and Compliance | PKT",
  description:
    "How PKT keeps freight moving predictably: maintained equipment, qualified drivers and clear operating standards.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Our Approach" },
  { id: "drivers", label: "Qualified Drivers" },
  { id: "trucks", label: "Equipment" },
  { id: "security", label: "Cargo" },
  { id: "hours", label: "Hours & Fatigue" },
  { id: "compliance", label: "Compliance" },
];

export default function SafetyPage() {
  return (
    <>
      <SafetyHero />
      <SectionNav links={LINKS} />
      <SafetyIntro />
      <SafetyDrivers />
      <SafetyTrucks />
      <SafetySecurity />
      <SafetyHours />
      <SafetyCompliance />
      <SafetyCta />
      <SiteFooter />
    </>
  );
}
