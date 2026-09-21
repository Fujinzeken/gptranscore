import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DVIntro,
  DVEquipment,
  DVHaul,
  DVCrossSell,
  DVQuote,
} from "@/components/shipment/dry-van";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Dry Van Truckload Carrier | PKT",
  description:
    "53' dry van capacity for general freight, retail goods, food and beverage, automotive parts and manufactured products. Dry van truckload.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Dry Van" },
  { id: "equipment", label: "Equipment" },
  { id: "haul", label: "What We Haul" },
  { id: "quote", label: "Get a Quote" },
];

export default function DryVanPage() {
  return (
    <>
      <PageHero
        title={["53' dry van capacity,", "moved by the carrier you hired"]}
        blurb="Enclosed capacity for freight that travels at ambient temperature. Full truckload across the contiguous US — one load or weekly volume, you get a clear answer on availability."
        image={{
          src: "/ship-hero.jpg",
          alt: "A PKT tractor pulling a 53-foot dry van on the highway.",
          position: "56% 62%",
        }}
      />
      <SectionNav links={LINKS} />
      <DVIntro />
      <DVEquipment />
      <DVHaul />
      <DVCrossSell />
      <DVQuote />
      <SiteFooter />
    </>
  );
}