import { Manifest } from "@/components/heroes/manifest";
import { WhyGP } from "@/components/sections/why-gp";
import { CaseStudy } from "@/components/sections/case-study";
import { Technology } from "@/components/sections/technology";
import { DriverCareers } from "@/components/sections/driver-careers";
import { Company } from "@/components/sections/company";
import { Updates } from "@/components/sections/updates";
import { ClosingCTA } from "@/components/sections/closing-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Manifest />
      <WhyGP />
      <CaseStudy />
      <Technology />
      <DriverCareers />
      <Company />
      <Updates />
      <ClosingCTA />
      <SiteFooter />
    </>
  );
}
