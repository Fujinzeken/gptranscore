import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  SDIntro,
  SDEquipment,
  SDGuidance,
  SDHaul,
  SDCrossSell,
  SDQuote,
} from "@/components/shipment/step-deck";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Step Deck Carrier | PKT",
  description:
    "Step deck capacity for freight too tall for a flatbed. Ramps available for rolling equipment. Step deck freight.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Step Deck" },
  { id: "equipment", label: "Equipment" },
  { id: "guidance", label: "Flatbed or Step Deck" },
  { id: "haul", label: "What We Haul" },
  { id: "quote", label: "Get a Quote" },
];

export default function StepDeckPage() {
  return (
    <>
      <PageHero
        title={["Height without a permit,", "legality without the paperwork"]}
        blurb="Step deck capacity for freight too tall for a flatbed. Ramps available for rolling equipment. Step deck freight."
        image={{
          src: "/demo-home/demo2.jpg",
          alt: "A PKT tractor and drop deck trailer on the road.",
          position: "50% 55%",
        }}
      />
      <SectionNav links={LINKS} />
      <SDIntro />
      <SDEquipment />
      <SDGuidance />
      <SDHaul />
      <SDCrossSell />
      <SDQuote />
      <SiteFooter />
    </>
  );
}
