import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  DJHero,
  DJSpecimen,
  DJOpenings,
  DJClosing,
} from "@/components/driver-careers/driver-jobs";
import {
  activeJobs,
  jobPostingJsonLd,
} from "@/components/driver-careers/jobs-data";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Open Driver Positions | PKT",
  description:
    "Current CDL-A company driver and owner-operator openings. Filter by state and route type.",
};

/** Re-render hourly so postings past their validThrough drop off the board. */
export const revalidate = 3600;

const LINKS: SectionLink[] = [
  { id: "board", label: "How the Board Works" },
  { id: "openings", label: "Openings" },
  { id: "apply", label: "Leave Details" },
];

export default function DriverJobsPage() {
  const jobs = activeJobs();
  return (
    <>
      {jobs.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingJsonLd(job)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      ))}
      <DJHero />
      <SectionNav links={LINKS} />
      <DJSpecimen />
      <DJOpenings jobs={jobs} />
      <DJClosing />
      <SiteFooter />
    </>
  );
}
