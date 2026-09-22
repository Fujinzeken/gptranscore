import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  InnovationHero,
  InnovationOverview,
  InnovationApproach,
  InnovationPeople,
  InnovationApps,
  InnovationCapabilities,
  InnovationAward,
  InnovationHardware,
  InnovationSoftware,
  InnovationAI,
  InnovationPartnerships,
} from "@/components/innovation";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Technology & Innovation | PKT Group",
  description:
    "Technology that keeps freight moving smarter, faster and safer. In-house TMS, AI routing and real-time visibility, built and run by PKT Group.",
};

const LINKS: SectionLink[] = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Our Approach" },
  { id: "people", label: "Employee Innovation" },
  { id: "apps", label: "Internal Apps" },
  { id: "capabilities", label: "At-a-Glance" },
  { id: "award", label: "CCJ Award" },
  { id: "hardware", label: "Hardware" },
  { id: "software", label: "Software" },
  { id: "ai", label: "AI" },
  { id: "partnerships", label: "Partnerships" },
];

export default function InnovationPage() {
  return (
    <>
      <InnovationHero />
      <SectionNav links={LINKS} />
      <InnovationOverview />
      <InnovationApproach />
      <InnovationPeople />
      <InnovationApps />
      <InnovationCapabilities />
      <InnovationAward />
      <InnovationHardware />
      <InnovationSoftware />
      <InnovationAI />
      <InnovationPartnerships />
      <SiteFooter />
    </>
  );
}