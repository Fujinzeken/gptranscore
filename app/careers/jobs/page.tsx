import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DJHero,
  DJSpecimen,
  DJOpenings,
  DJClosing,
} from "@/components/driver-careers/driver-jobs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Open Driver Positions | PKT",
  description:
    "Current CDL-A company driver and owner-operator openings. Filter by state and route type.",
};

const LINKS: SectionLink[] = [
  { id: "board", label: "How the Board Works" },
  { id: "openings", label: "Openings" },
  { id: "apply", label: "Leave Details" },
];

export default function DriverJobsPage() {
  return (
    <>
      <DJHero />
      <SectionNav links={LINKS} />
      <DJSpecimen />
      <DJOpenings />
      <DJClosing />
      <SiteFooter />
    </>
  );
}