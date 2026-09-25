/**
 * Driver job postings for /careers/jobs.
 *
 * Each opening is its own record with an enforced expiry (`validThrough`).
 * Expired postings are filtered out before render and before the JobPosting
 * structured data is emitted — Google for Jobs delists sites that leave
 * expired postings live. The page revalidates hourly so expiry takes effect
 * without a redeploy.
 */

export type DriverType = "Company Driver" | "Owner-Operator";

export type JobPosting = {
  id: string;
  title: string;
  driverType: DriverType;
  /** e.g. "OTR", "Regional". */
  routeType: string;
  /** Two-letter state codes where the opening is real. */
  hiringStates: string[];
  /** Pay (company driver) or split (owner-operator), as it should read. */
  pay: string;
  homeTime: string;
  equipment: string;
  experience: string;
  /** Plain-text description used for the JobPosting schema. */
  description: string;
  /** ISO date the posting went live. */
  datePosted: string;
  /** ISO date-time after which the posting must not be shown. */
  validThrough: string;
};

export const DRIVER_TYPES: DriverType[] = ["Company Driver", "Owner-Operator"];

/** No openings are confirmed yet; add records here as they go live. */
export const JOBS: JobPosting[] = [];

export function activeJobs(now: Date = new Date()): JobPosting[] {
  return JOBS.filter((job) => new Date(job.validThrough) > now);
}

export function jobPostingJsonLd(job: JobPosting) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType:
      job.driverType === "Company Driver" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "PKT Transportation INC",
      sameAs: "https://pktgroup.net",
    },
    jobLocation: job.hiringStates.map((state) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: state,
        addressCountry: "US",
      },
    })),
    identifier: {
      "@type": "PropertyValue",
      name: "PKT",
      value: job.id,
    },
  };
}
