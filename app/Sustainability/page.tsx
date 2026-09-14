import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  SustainabilityHero,
  SustainabilityPillars,
  SustainabilitySolar,
  SustainabilityHq,
  SustainabilityEmissions,
  SustainabilityImpact,
  SustainabilityCta,
} from "@/components/sustainability";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Sustainability | PKT Group",
  description:
    "Environmental responsibility through green technology, eco-driving incentives, and a solar fleet plan — reducing our carbon footprint across the fleet and at headquarters.",
};

const LINKS: SectionLink[] = [
  { id: "approach", label: "Our Approach" },
  { id: "solar", label: "Solar Fleet Plan" },
  { id: "headquarters", label: "Headquarters" },
  { id: "emissions", label: "Emissions" },
  { id: "impact", label: "Real Results" },
];

export default function SustainabilityPage() {
  return (
    <>
      <SustainabilityHero />
      <SectionNav links={LINKS} />
      <SustainabilityPillars />
      <SustainabilitySolar />
      <SustainabilityHq />
      <SustainabilityEmissions />
      <SustainabilityImpact />
      <SustainabilityCta />
      <SiteFooter />
    </>
  );
}
