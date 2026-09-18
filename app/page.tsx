import type { Metadata } from "next";
import { Manifest } from "@/components/heroes/manifest";
import { WhyGP } from "@/components/sections/why-gp";
import { WhatWeMove } from "@/components/sections/what-we-move";
import { Coverage } from "@/components/sections/coverage";
import { Communication } from "@/components/sections/communication";
import { Safety } from "@/components/sections/safety";
import { DrivePKT } from "@/components/sections/drive-pkt";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "PKT | Asset-Based Truckload Carrier in Illinois",
  description:
    "Asset-based dry van truckload capacity from PKT, serving the contiguous US. Loads move under our authority, insurance and dispatch.",
};

export default function Home() {
  return (
    <>
      <Manifest />
      <WhyGP />
      <WhatWeMove />
      <Coverage />
      <Communication />
      <Safety />
      <DrivePKT />
      <ClosingCTA />
      <SiteFooter />
    </>
  );
}
