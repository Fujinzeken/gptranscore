/**
 * Nav menu structure. Every destination is a page in the approved sitemap
 * (PKT_WebsiteSitemap_ - Sitemap.csv) and every blurb is drawn from that
 * page's copy in the content pack, so the menu promises nothing the page
 * does not deliver.
 */

import type { Icon } from "@phosphor-icons/react";
import {
  Briefcase,
  Buildings,
  ClipboardText,
  Handshake,
  Package,
  PaperPlaneTilt,
  ShieldCheck,
  Snowflake,
  Stack,
  SteeringWheel,
  Target,
} from "@phosphor-icons/react/dist/ssr";

/**
 * One glyph per menu item, keyed by label. These stay monochrome in the
 * accent, because the page carries a single accent and a nav is not the place
 * to break it.
 */
export const ITEM_ICONS: Record<string, Icon> = {
  // Freight Services
  "Dry Van": Package,
  Refrigerated: Snowflake,
  Flatbed: Stack,
  "What We Need to Quote": ClipboardText,
  // Driver Careers
  "Company Drivers": SteeringWheel,
  "Owner-Operators": Handshake,
  "Open Driver Positions": Briefcase,
  "Quick Apply": PaperPlaneTilt,
  // Company
  "Who We Are": Buildings,
  "Our Values": Target,
  Safety: ShieldCheck,
};

export type MenuItem = {
  label: string;
  blurb: string;
  href?: string;
};

export type Menu = {
  label: string;
  href: string;
  /** Absent on plain links such as Contact. */
  panel?: {
    items: MenuItem[];
    featured: { label: string; blurb: string; cta: string };
  };
};

export const MENUS: Menu[] = [
  {
    label: "Freight Services",
    href: "/services",
    panel: {
      items: [
        {
          label: "Dry Van",
          blurb:
            "53' enclosed capacity for freight that travels at ambient temperature.",
          href: "/services/dry-van",
        },
        {
          label: "Refrigerated",
          blurb:
            "Temperature-controlled truckload for freight that has to arrive at temperature.",
          href: "/services/reefer",
        },
        {
          label: "Flatbed",
          blurb:
            "Open deck capacity for building materials, steel, machinery and equipment.",
          href: "/services/flatbed",
        },
        {
          label: "What We Need to Quote",
          blurb: "Send the details, get a clear answer on availability.",
          href: "/services#quote",
        },
      ],
      featured: {
        label: "Freight Services",
        blurb:
          "PKT owns its trucks and holds its own authority. Dry van, refrigerated and flatbed capacity across 48 states.",
        cta: "See all Freight Services",
      },
    },
  },
  {
    label: "Driver Careers",
    href: "/careers",
    panel: {
      items: [
        {
          label: "Company Drivers",
          blurb:
            "The truck, the trailer, the freight — you drive. OTR across 48 states.",
          href: "/careers/company-drivers",
        },
        {
          label: "Owner-Operators",
          blurb:
            "Your truck, our authority and freight. Steady freight without chasing loads.",
          href: "/careers/owner-operators",
        },
        {
          label: "Open Driver Positions",
          blurb:
            "Every opening here is current. Filter by state and type — or leave your details.",
          href: "/careers/jobs",
        },
        {
          label: "Quick Apply",
          blurb:
            "Four questions, about a minute. No resume, no uploads, no account.",
          href: "/careers/apply",
        },
      ],
      featured: {
        label: "Two ways to run with us",
        blurb:
          "Dispatch knows who you are, what you drive and where you live. Pick the path that fits how you want to work.",
        cta: "See all Driver Careers",
      },
    },
  },
  {
    label: "Company",
    href: "/company",
    panel: {
      items: [
        {
          label: "Who We Are",
          blurb:
            "An asset-based truckload carrier operating from Illinois on 48-state authority.",
          href: "/company#reliability",
        },
        {
          label: "Our Values",
          blurb: "What we hold ourselves to, from the first call to delivery.",
          href: "/company#mission",
        },
        {
          label: "Safety",
          blurb:
            "Maintained equipment, qualified drivers and clear operating standards.",
          href: "/safety",
        },
      ],
      featured: {
        label: "About PKT",
        blurb:
          "A carrier that owns its authority and answers its phone.",
        cta: "See our Company story",
      },
    },
  },
  { label: "Contact", href: "/contact" },
];
