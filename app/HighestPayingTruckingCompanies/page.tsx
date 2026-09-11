import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  SelectiveHero,
  SelectivePhilosophy,
  SelectiveDrivers,
  SelectiveDetail,
  SelectiveNumbers,
  SelectiveCTA,
} from "@/components/selective";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "What Does It Mean to Be Selective? | PKT Group",
  description:
    "All the ways GP Transco is intentional with our operations, staff, drivers, and more — from a 2% driver hire rate to in-house technology.",
};

const LINKS: SectionLink[] = [
  { id: "philosophy", label: "Philosophy" },
  { id: "drivers", label: "Drivers" },
  { id: "detail", label: "In Detail" },
  { id: "numbers", label: "By the Numbers" },
];

export default function BeSelectivePage() {
  return (
    <>
      <SelectiveHero />
      <SectionNav links={LINKS} />
      <SelectivePhilosophy />
      <SelectiveDrivers />
      <SelectiveDetail />
      <SelectiveNumbers />
      <SelectiveCTA />
      <SiteFooter />
    </>
  );
}
