import type { Metadata } from "next";
import { PageHero } from "@/components/heroes/page-hero";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DTIntro,
  DTIncludes,
  DTProcess,
  DTSuits,
  DTCrossSell,
  DTQuote,
} from "@/components/shipment/drop-trailer";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Drop Trailer Programs | PKT",
  description:
    "Trailers staged at your dock so loading happens on your schedule.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Drop Trailer" },
  { id: "includes", label: "What You Get" },
  { id: "process", label: "How It Works" },
  { id: "suits", label: "Who It Suits" },
  { id: "quote", label: "Get a Quote" },
];

export default function DropTrailerPage() {
  return (
    <>
      <PageHero
        title={["Load on", "your schedule"]}
        blurb="Trailers staged at your dock so loading happens on your schedule. We collect when it's done and return an empty on the agreed cycle."
        image={{
          src: "/demo-home/demo3.jpg",
          alt: "PKT drop trailers staged at a loading dock.",
          position: "58% 55%",
        }}
      />
      <SectionNav links={LINKS} />
      <DTIntro />
      <DTIncludes />
      <DTProcess />
      <DTSuits />
      <DTCrossSell />
      <DTQuote />
      <SiteFooter />
    </>
  );
}
