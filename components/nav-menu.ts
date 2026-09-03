/**
 * Nav menu structure, transcribed from the live site so the information
 * architecture and the URLs stay exactly where they are. Nothing here is
 * invented: same groupings, same labels, same destinations, so nothing they
 * rank for or track moves.
 */

import type { Icon } from "@phosphor-icons/react";
import {
  Briefcase,
  Buildings,
  ClockCounterClockwise,
  CurrencyDollar,
  Gear,
  Handshake,
  Heart,
  Leaf,
  Lightbulb,
  MapPin,
  Medal,
  Monitor,
  Package,
  PaperPlaneTilt,
  Play,
  ShieldCheck,
  Sparkle,
  Stack,
  Star,
  Target,
  Trophy,
  Truck,
  Users,
  Wrench,
  Cpu,
  FileText,
} from "@phosphor-icons/react/dist/ssr";

/**
 * One glyph per menu item, keyed by label. Their site tints each icon a
 * different colour; these stay monochrome in the accent, because the page
 * carries a single accent and a nav is not the place to break it.
 */
export const ITEM_ICONS: Record<string, Icon> = {
  // Shipment Solutions
  "Ship With Us": PaperPlaneTilt,
  "Technology-Driven Solutions": Monitor,
  "Dry Van & Conestoga": Package,
  "In-House Tech & AI": Cpu,
  "Industry-Leading Features": Medal,
  "Running Green": Leaf,
  "ELITE Drivers": Users,
  "Outstanding Equipment": Gear,
  "Supported by the Best": Handshake,
  "Some of our Customers": Buildings,
  "Case Studies": FileText,
  // Driver Careers
  "Apply to Drive": PaperPlaneTilt,
  "Driver Pay Calculator": CurrencyDollar,
  "Why Drivers Choose Us": Star,
  "Routes that Fit Your Life": MapPin,
  "Am I ELITE?": Medal,
  "ELITE Driver Program": Trophy,
  "Complete Benefits": Heart,
  "Modern Equipment": Wrench,
  "Driver Highlights": Play,
  "Transparency & Convenience": Monitor,
  "Meet Our Driver Managers": Users,
  // Office Careers
  "Culture of Innovation": Sparkle,
  "Staff Connect": Monitor,
  Benefits: Heart,
  "Open Positions": Briefcase,
  "Pitch Your Role": Lightbulb,
  // Brokerage Solutions
  "Work With Us": Handshake,
  "Why Use a Brokerage": Target,
  "Logistics Services": Package,
  "Our Solutions": Stack,
  "For Carriers": Truck,
  // Company
  Overview: Buildings,
  "Mission & Values": Target,
  "Press Releases": FileText,
  Leadership: Users,
  History: ClockCounterClockwise,
  Awards: Medal,
  // Innovation
  "Be Selective": Sparkle,
  Technology: Cpu,
  Safety: ShieldCheck,
  Sustainability: Leaf,
};

export type MenuItem = {
  label: string;
  blurb: string;
};

export type Menu = {
  label: string;
  href: string;
  /** Present on every nav item except Blog, which is a plain link. */
  panel?: {
    items: MenuItem[];
    featured: { label: string; blurb: string; cta: string };
  };
};

/** The same secondary row sits under every panel on the live site. */
export const EXPLORE_MORE = [
  "Be Selective",
  "Safety",
  "Technology",
  "Sustainability",
  "ELITE Drivers",
];

export const MENUS: Menu[] = [
  {
    label: "Shipment Solutions",
    href: "/freight-shipping-solutions",
    panel: {
      items: [
        {
          label: "Ship With Us",
          blurb: "Request a quote and start shipping with GP Transco today.",
        },
        {
          label: "Technology-Driven Solutions",
          blurb:
            "Advanced tracking and real-time visibility for your shipments.",
        },
        {
          label: "Dry Van & Conestoga",
          blurb: "Flexible dry van and flatbed Conestoga capacity for any load.",
        },
        {
          label: "In-House Tech & AI",
          blurb: "OpenRoad TMS and AI-powered logistics optimization.",
        },
        {
          label: "Industry-Leading Features",
          blurb: "GPS tracking, geofencing, and automated load updates.",
        },
        {
          label: "Running Green",
          blurb:
            "Sustainability initiatives saving 107K gallons of fuel yearly.",
        },
        {
          label: "ELITE Drivers",
          blurb: "Highly trained drivers delivering outstanding service.",
        },
        {
          label: "Outstanding Equipment",
          blurb: "State-of-the-art fleet with modern safety features.",
        },
        {
          label: "Supported by the Best",
          blurb: "Dedicated support team and single point of contact.",
        },
        {
          label: "Some of our Customers",
          blurb: "Trusted by leading companies like Walmart and GE.",
        },
        {
          label: "Case Studies",
          blurb: "See how we deliver 8,500+ loads per year for PaperWorks.",
        },
      ],
      featured: {
        label: "Ship With Us",
        blurb: "Request a quote and start shipping with GP Transco today.",
        cta: "See all Shipment Solutions",
      },
    },
  },
  {
    label: "Driver Careers",
    href: "/best-truck-driving-jobs",
    panel: {
      items: [
        {
          label: "Apply to Drive",
          blurb: "Start your application and join our elite team of drivers.",
        },
        {
          label: "Driver Pay Calculator",
          blurb:
            "Estimate your potential annual pay at GP Transco in under a minute.",
        },
        {
          label: "Why Drivers Choose Us",
          blurb:
            "Industry-leading pay, annual raises, and a team that has your back.",
        },
        {
          label: "Routes that Fit Your Life",
          blurb: "Local, short-haul, regional, and OTR options available.",
        },
        {
          label: "Am I ELITE?",
          blurb:
            "Take the 60-second quiz to see if you are tracking toward ELITE performance.",
        },
        {
          label: "ELITE Driver Program",
          blurb: "Earn up to $7,400/year extra through performance rewards.",
        },
        {
          label: "Complete Benefits",
          blurb: "401(k), health insurance, paid holidays, and more.",
        },
        {
          label: "Modern Equipment",
          blurb: "Late-model Freightliner Cascadias with top safety features.",
        },
        {
          label: "Driver Highlights",
          blurb: "Watch video testimonials from our professional drivers.",
        },
        {
          label: "Transparency & Convenience",
          blurb:
            "See your loads, pay, docs and miles right from your driver tablet.",
        },
        {
          label: "Meet Our Driver Managers",
          blurb: "The people you will actually talk to every single day.",
        },
      ],
      featured: {
        label: "Driver Pay Calculator",
        blurb:
          "Estimate your potential annual pay at GP Transco in under a minute.",
        cta: "See all Driver Careers",
      },
    },
  },
  {
    label: "Office Careers",
    href: "/office-careers",
    panel: {
      items: [
        {
          label: "Culture of Innovation",
          blurb: "A team that builds its own tools and improves how trucking works.",
        },
        {
          label: "Staff Connect",
          blurb:
            "Our in-house employee platform for resources, wins and learning.",
        },
        {
          label: "Benefits",
          blurb: "Health insurance, 401(k), paid time off and more.",
        },
        {
          label: "Open Positions",
          blurb: "See every role currently open at our Joliet headquarters.",
        },
        {
          label: "Pitch Your Role",
          blurb: "Do not see your job? Invent the role you want and pitch it to us.",
        },
      ],
      featured: {
        label: "Culture of Innovation",
        blurb: "A team that builds its own tools and improves how trucking works.",
        cta: "See all Office Careers",
      },
    },
  },
  {
    label: "Brokerage Solutions",
    href: "/freight-brokerage-services",
    panel: {
      items: [
        {
          label: "Work With Us",
          blurb: "Begin working with GP Transco Logistics for your freight needs.",
        },
        {
          label: "Why Use a Brokerage",
          blurb:
            "Trusted carrier network plus our own asset-based capacity.",
        },
        {
          label: "Logistics Services",
          blurb: "Dry van, reefer, flatbed, lift-gate, and more services.",
        },
        {
          label: "Our Solutions",
          blurb: "Complete transportation solutions for shippers.",
        },
        {
          label: "For Carriers",
          blurb: "Join our carrier network and grow your business.",
        },
      ],
      featured: {
        label: "Work With Us",
        blurb: "Begin working with GP Transco Logistics for your freight needs.",
        cta: "See all Brokerage Solutions",
      },
    },
  },
  {
    label: "Company",
    href: "/about-us",
    panel: {
      items: [
        {
          label: "Overview",
          blurb: "Who GP Transco is and how we became a modern carrier.",
        },
        {
          label: "Mission & Values",
          blurb: "The principles that guide every decision we make.",
        },
        {
          label: "Press Releases",
          blurb: "Company news, announcements and media coverage.",
        },
        {
          label: "Leadership",
          blurb: "Meet the team leading GP Transco forward.",
        },
        {
          label: "History",
          blurb: "Our journey from a small fleet to a national carrier.",
        },
        {
          label: "Awards",
          blurb: "Industry recognition, including CCJ Innovator of the Year.",
        },
      ],
      featured: {
        label: "Overview",
        blurb: "Who GP Transco is and how we became a modern carrier.",
        cta: "See our full Company story",
      },
    },
  },
  { label: "Blog", href: "/NewsUpdates" },
  {
    label: "Innovation",
    href: "/GPTranscoTechnology",
    panel: {
      items: [
        {
          label: "Be Selective",
          blurb:
            "Our philosophy of selectivity in staff, technology, and partnerships.",
        },
        {
          label: "ELITE Drivers",
          blurb: "Performance-based rewards program for outstanding drivers.",
        },
        {
          label: "Technology",
          blurb: "In-house technology and AI-powered logistics solutions.",
        },
        {
          label: "Safety",
          blurb: "Industry-leading safety practices and technology.",
        },
        {
          label: "Sustainability",
          blurb: "Our commitment to environmental responsibility.",
        },
      ],
      featured: {
        label: "Be Selective",
        blurb:
          "Our philosophy of selectivity in staff, technology, and partnerships.",
        cta: "Explore our Technology",
      },
    },
  },
];
