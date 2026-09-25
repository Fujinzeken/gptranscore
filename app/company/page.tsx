import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import { AboutHero } from "@/components/about-us/about-hero";
import { AboutOverview } from "@/components/about-us/about-overview";
import { AboutMissionValues } from "@/components/about-us/about-mission-values";
import { AboutCTA } from "@/components/about-us/about-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About PKT | Asset-Based Truckload Carrier",
  description:
    "A carrier that owns its authority and answers its phone. PKT runs truckload freight on 48-state authority from Illinois.",
};

const LINKS: SectionLink[] = [
  { id: "reliability", label: "Who We Are" },
  { id: "mission", label: "Our Values" },
];

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <SectionNav
        links={LINKS}
        action={{ label: "Explore Careers", href: "/careers" }}
      />
      <AboutOverview />
      <AboutMissionValues />
      <AboutCTA />
      <SiteFooter />
    </>
  );
}
