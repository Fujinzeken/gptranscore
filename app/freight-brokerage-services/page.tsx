import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import { BrokerageHero } from "@/components/freight-brokerage/brokerage-hero";
import { BrokerageServices } from "@/components/freight-brokerage/brokerage-services";
import { BrokerageStreamline } from "@/components/freight-brokerage/brokerage-streamline";
import { BrokerageSolutions } from "@/components/freight-brokerage/brokerage-solutions";
import { BrokerageCarriers } from "@/components/freight-brokerage/brokerage-carriers";
import { BrokerageClosing } from "@/components/freight-brokerage/brokerage-closing";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Freight Brokerage Services | PKT Group",
  description:
    "Done in a simple, smart, and modern way. Backed by top-tier carrier partnerships and our own asset-based fleet in Chicagoland.",
};

const LINKS: SectionLink[] = [
  { id: "logistics-services", label: "Logistics Services" },
  { id: "streamline", label: "Why Brokerage" },
  { id: "solutions", label: "Our Solutions" },
  { id: "for-carriers", label: "For Carriers" },
  { id: "contact", label: "Work With Us" },
];

export default function FreightBrokerageServicesPage() {
  return (
    <>
      {/* 1. Full-Height Hero matching unified website brand design */}
      <BrokerageHero />

      {/* 2. Pinned Section Subnav with Quote CTA */}
      <SectionNav links={LINKS} />

      {/* 3. Section 1: Logistics Services For Every Need (Light field bento) */}
      <BrokerageServices />

      {/* 4. Section 2: Streamline Your Logistics (Cinematic Dark plate split) */}
      <BrokerageStreamline />

      {/* 5. Section 3: Complete Transportation Solutions (Light field grid with category tabs) */}
      <BrokerageSolutions />

      {/* 6. Section 4: Built Around Your Success (Cinematic Dark plate split for carriers) */}
      <BrokerageCarriers />

      {/* 7. Section 5: Begin Working with GP Transco Logistics (Light field command cards) */}
      <BrokerageClosing />

      {/* 8. Site Footer */}
      <SiteFooter />
    </>
  );
}
