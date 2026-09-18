import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  HubIntro,
  HubHowItMoves,
  HubCommunication,
  HubCoverage,
  HubQuote,
} from "@/components/shipment";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Asset-Based Truckload Carrier | PKT",
  description:
    "PKT owns its trucks and holds its own authority. Dry van, refrigerated, flatbed and step deck capacity across 48 states. Truckload freight, moved by the carrier you hired.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Asset-Based" },
  { id: "how-it-moves", label: "How Freight Moves" },
  { id: "communication", label: "Communication" },
  { id: "coverage", label: "Where We Run" },
  { id: "quote", label: "Get a Quote" },
];

export default function FreightServices() {
  return (
    <>
      <PageHero
        title={["Truckload freight, moved by", "the carrier you hired"]}
        blurb="PKT owns its trucks and holds its own authority. Dry van, refrigerated, flatbed and step deck capacity across 48 states."
        image={{
          src: "/ship-hero.jpg",
          alt: "A PKT tractor and trailer on the highway.",
          position: "56% 62%",
        }}
      />
      <SectionNav links={LINKS} />
      <HubIntro />
      <HubHowItMoves />
      <HubCommunication />
      <HubCoverage />
      <HubQuote />
      <SiteFooter />
    </>
  );
}
