import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  ShipTechnology,
  ShipTrailers,
  ShipComparison,
  ShipAward,
  ShipOpenRoad,
  ShipFeatures,
  ShipSustainability,
  ShipEliteDrivers,
  ShipSupport,
  ShipCustomers,
  ShipCaseStudies,
} from "@/components/shipment";
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
