import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  FBIntro,
  FBEquipment,
  FBSecurement,
  FBHaul,
  FBDimensions,
  FBCrossSell,
  FBQuote,
} from "@/components/shipment/flatbed";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Flatbed Carrier and Open Deck Freight | PKT",
  description:
    "Flatbed capacity for building materials, steel, machinery and equipment. Secured to FMCSA standard, tarping available. Flatbed freight.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Flatbed" },
  { id: "equipment", label: "Equipment" },
  { id: "securement", label: "Securement" },
  { id: "haul", label: "What We Haul" },
  { id: "dimensions", label: "Dimensions" },
  { id: "quote", label: "Get a Quote" },
];

export default function FlatbedPage() {
  return (
    <>
      <PageHero
        title={["Open deck capacity,", "secured to FMCSA standard"]}
        blurb="Flatbed capacity for building materials, steel, machinery and equipment. Secured to FMCSA standard, tarping available."
        image={{
          src: "/trucks/flatbed-kenworth.jpg",
          alt: "A Kenworth tractor hauling a loaded flatbed on a wet highway.",
          position: "45% 55%",
        }}
      />
      <SectionNav links={LINKS} />
      <FBIntro />
      <FBEquipment />
      <FBSecurement />
      <FBHaul />
      <FBDimensions />
      <FBCrossSell />
      <FBQuote />
      <SiteFooter />
    </>
  );
}
