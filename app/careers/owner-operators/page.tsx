import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  OOHero,
  OOLedger,
  OOIncludes,
  OOClosing,
} from "@/components/driver-careers/owner-operators";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Owner-Operator Lease Opportunities | PKT",
  description:
    "Lease on to PKT for steady 48-state freight, a fuel program and settlements that arrive on schedule.",
};

const LINKS: SectionLink[] = [
  { id: "ledger", label: "The Ledger" },
  { id: "lease", label: "What's Included" },
  { id: "lease-on", label: "Lease On" },
];

export default function OwnerOperatorsPage() {
  return (
    <>
      <OOHero />
      <SectionNav links={LINKS} />
      <OOLedger />
      <OOIncludes />
      <OOClosing />
      <SiteFooter />
    </>
  );
}