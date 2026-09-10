import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import { AboutHero } from "@/components/about-us/about-hero";
import { AboutOverview } from "@/components/about-us/about-overview";
import { AboutMissionValues } from "@/components/about-us/about-mission-values";
import { AboutPressReleases } from "@/components/about-us/about-press-releases";
import { AboutLeadership } from "@/components/about-us/about-leadership";
import { AboutJourney } from "@/components/about-us/about-journey";
import { AboutCTA } from "@/components/about-us/about-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About Us | GP Transco",
  description:
    "20 years of redefining trucking through innovation, integrity, and an uncompromising commitment to safety. Learn about GP Transco's mission, values, and leadership.",
};

const LINKS: SectionLink[] = [
  { id: "reliability", label: "Overview" },
  { id: "mission", label: "Mission & Values" },
  { id: "press-releases", label: "Press Releases" },
  { id: "leadership", label: "Leadership" },
  { id: "history", label: "History" },
  { id: "awards", label: "Awards" },
];

export default function AboutUsPage() {
  return (
    <>
      {/* 1. Full-Height Hero — Driver in Cascadia cab */}
      <AboutHero />

      {/* 2. Pinned Section Subnav — Explore Careers CTA */}
      <SectionNav
        links={LINKS}
        action={{ label: "Explore Careers", href: "/best-truck-driving-jobs" }}
      />

      {/* 3. Overview — Driven by People, Powered by Innovation */}
      <AboutOverview />

      {/* 4. Mission & Values — Safe, Reliable, Advanced Freight Transportation */}
      <AboutMissionValues />

      {/* 5. Press Releases — NEWSROOM carousel */}
      <AboutPressReleases />

      {/* 6. Leadership — Visionary Leaders executive grid */}
      <AboutLeadership />

      {/* 7. Unified Journey & Accomplishments Command Center (#history, #awards) */}
      <AboutJourney />

      {/* 8. Final Closing CTA — Ready to move freight or grow your career? */}
      <AboutCTA />

      {/* Site Footer */}
      <SiteFooter />
    </>
  );
}
