import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  RFIntro,
  RFEquipment,
  RFProtect,
  RFHaul,
  RFCrossSell,
  RFQuote,
} from "@/components/shipment/reefer";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Refrigerated Truckload Carrier | PKT Reefer Service",
  description:
    "Temperature-controlled capacity for food, beverage and temperature-sensitive freight with continuous monitoring. Refrigerated freight.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Refrigerated" },
  { id: "equipment", label: "Equipment" },
  { id: "protecting", label: "Protecting the Load" },
  { id: "haul", label: "What We Haul" },
  { id: "quote", label: "Get a Quote" },
];

export default function ReeferPage() {
  return (
    <>
      <PageHero
        title={["Temperature-controlled capacity,", "moved by the carrier you hired"]}
        blurb="Temperature-controlled truckload for freight that has to arrive at temperature. Reefer has less margin for error than dry van, and operations manages these shipments accordingly."
        image={{
          src: "/fleet-dock.jpg",
          alt: "PKT trailers backed into the loading dock.",
          position: "58% 55%",
        }}
      />
      <SectionNav links={LINKS} />
      <RFIntro />
      <RFEquipment />
      <RFProtect />
      <RFHaul />
      <RFCrossSell />
      <RFQuote />
      <SiteFooter />
    </>
  );
}