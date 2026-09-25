import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DDIntro,
  DDIncludes,
  DDProcess,
  DDSuits,
  DDCrossSell,
  DDQuote,
} from "@/components/shipment/dedicated";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Dedicated Truck Capacity | PKT",
  description:
    "Trucks assigned to your lanes with the same drivers running them week after week. Trucks assigned to your freight.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Dedicated" },
  { id: "includes", label: "What You Get" },
  { id: "process", label: "How It Works" },
  { id: "suits", label: "Who It Suits" },
  { id: "quote", label: "Get a Quote" },
];

export default function DedicatedPage() {
  return (
    <>
      <PageHero
        title={["Trucks assigned to", "your freight"]}
        blurb="Trucks assigned to your lanes with the same drivers running them week after week. Rates agreed for the term, one operations contact."
        image={{
          src: "/demo-home/demo1.jpg",
          alt: "A PKT tractor on the highway running a dedicated lane.",
          position: "56% 62%",
        }}
      />
      <SectionNav links={LINKS} />
      <DDIntro />
      <DDIncludes />
      <DDProcess />
      <DDSuits />
      <DDCrossSell />
      <DDQuote />
      <SiteFooter />
    </>
  );
}
