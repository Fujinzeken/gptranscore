import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  EliteHero,
  EliteSelectivity,
  EliteRewards,
  EliteMetrics,
  EliteBenefits,
  EliteImpact,
} from "@/components/elite";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "ELITE Driver Program | Performance That Delivers Results | PKT Group",
  description:
    "GP Transco's ELITE Driver Program rewards drivers up to $7,400/year extra for safe, efficient, reliable service. When drivers succeed, customers succeed.",
};

const LINKS: SectionLink[] = [
  { id: "selectivity", label: "Our Selectivity" },
  { id: "rewards", label: "Performance Rewards" },
  { id: "metrics", label: "How Drivers Earn" },
  { id: "benefits", label: "Driver Benefits" },
  { id: "impact", label: "Customer Impact" },
];

export default function EliteDriverProgramPage() {
  return (
    <>
      <EliteHero />
      <SectionNav links={LINKS} />
      <EliteSelectivity />
      <EliteRewards />
      <EliteMetrics />
      <EliteBenefits />
      <EliteImpact />
      <SiteFooter />
    </>
  );
}
