import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import { ShipTechnology } from "@/components/sections/ship-technology";
import { ShipTrailers } from "@/components/sections/ship-trailers";
import { ShipComparison } from "@/components/sections/ship-comparison";
import { ShipAward } from "@/components/sections/ship-award";
import { ShipOpenRoad } from "@/components/sections/ship-openroad";
import { ShipFeatures } from "@/components/sections/ship-features";
import { ShipSustainability } from "@/components/sections/ship-sustainability";
import { ShipEliteDrivers } from "@/components/sections/ship-elite-drivers";
import { ShipSupport } from "@/components/sections/ship-support";
import { ShipCustomers } from "@/components/sections/ship-customers";
import { ShipCaseStudies } from "@/components/sections/ship-case-studies";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Freight Shipping Services & Solutions | PKT Group",
  description:
    "Reliable transportation solutions, modern technology, and responsive service, built around your supply chain.",
};

// Their own section order, kept so the page reads the same way theirs does.
/** Only sections this page actually renders. A strip that scrolls nowhere is
 *  worse than a short one, so this list grows as the page does. */
const LINKS: SectionLink[] = [
  { id: "technology", label: "Technology" },
  { id: "trailers", label: "Dry Van & Conestoga" },
  { id: "difference", label: "The Difference" },
  { id: "innovation", label: "CCJ Award" },
  { id: "openroad", label: "In-House TMS & AI" },
  { id: "features", label: "Features" },
  { id: "sustainability", label: "Running Green" },
  { id: "drivers", label: "ELITE Drivers" },
  { id: "support", label: "Support" },
  { id: "customers", label: "Customers" },
  { id: "case-studies", label: "Case Studies" },
];

export default function ShipmentSolutions() {
  return (
    <>
      <PageHero
        title={["Freight that moves", "business forward"]}
        blurb="Reliable transportation solutions, modern technology, and responsive service. Built around your supply chain."
        image={{
          src: "/ship-hero.jpg",
          alt: "A PKT Group tractor and trailer crossing a river bridge.",
          position: "56% 62%",
        }}
      />
      <SectionNav links={LINKS} />
      <ShipTechnology />
      <ShipTrailers />
      <ShipComparison />
      <ShipAward />
      <ShipOpenRoad />
      <ShipFeatures />
      <ShipSustainability />
      <ShipEliteDrivers />
      <ShipSupport />
      <ShipCustomers />
      <ShipCaseStudies />
      <SiteFooter />
    </>
  );
}
