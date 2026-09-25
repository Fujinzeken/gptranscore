import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  CDHero,
  CDIntro,
  CDStay,
  CDMore,
  CDClosing,
} from "@/components/driver-careers/company-drivers";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "CDL-A Company Driver Jobs | PKT",
  description:
    "OTR company driver positions running dry van, reefer and open deck freight across 48 states.",
};

const LINKS: SectionLink[] = [
  { id: "intro", label: "Company Drivers" },
  { id: "stay", label: "Why Drivers Stay" },
  { id: "more", label: "New Drivers & Freight" },
  { id: "apply", label: "Apply" },
];

export default function CompanyDriversPage() {
  return (
    <>
      <CDHero />
      <SectionNav links={LINKS} />
      <CDIntro />
      <CDStay />
      <CDMore />
      <CDClosing />
      <SiteFooter />
    </>
  );
}
