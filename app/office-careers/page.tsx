import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import { OfficeHero } from "@/components/office-careers/office-hero";
import { OfficeCulture } from "@/components/office-careers/office-culture";
import { OfficeStaffConnect } from "@/components/office-careers/office-staff-connect";
import { OfficeBenefits } from "@/components/office-careers/office-benefits";
import { OfficeOpenPositions } from "@/components/office-careers/office-open-positions";
import { OfficePitchRole } from "@/components/office-careers/office-pitch-role";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Office Careers | PKT Group",
  description:
    "Help build the future of logistics. Explore corporate, operations, dispatch, safety, and technology careers at PKT Group headquarters in Joliet, IL.",
};

const LINKS: SectionLink[] = [
  { id: "culture", label: "Culture" },
  { id: "staff-connect", label: "Staff Connect" },
  { id: "benefits", label: "Benefits" },
  { id: "open-positions", label: "Open Positions" },
  { id: "pitch-your-role", label: "Pitch Your Role" },
];

export default function OfficeCareersPage() {
  return (
    <>
      {/* 1. Full-Height Hero matching website brand design */}
      <OfficeHero />

      {/* 2. Pinned Section Subnav matching Freight and Driver pages */}
      <SectionNav links={LINKS} />

      {/* 3. Culture of Innovation Section (Light field) */}
      <OfficeCulture />

      {/* 4. Staff Connect / Connected Workplace Section (Dark plate) */}
      <OfficeStaffConnect />

      {/* 5. Outstanding Benefits Section (Light field) */}
      <OfficeBenefits />

      {/* 6. Current Job Openings Section (Filterable Grid + Interactive Modal) */}
      <OfficeOpenPositions />

      {/* 7. Pitch Your Role Section (Dark plate with blueprint grid + Interactive Modal) */}
      <OfficePitchRole />

      {/* 8. Site Footer */}
      <SiteFooter />
    </>
  );
}
