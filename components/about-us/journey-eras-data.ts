import { Award, AWARDS } from "./awards-data";

export interface Era {
  id: string;
  number: string;
  range: string;
  title: string;
  theme: string;
  summary: string;
  fleetStat: string;
  milestones: {
    year: string;
    title: string;
    detail: string;
    tag: string;
  }[];
  awards: Award[];
  keyHighlight: string;
}

export const JOURNEY_ERAS: Era[] = [
  {
    id: "foundations",
    number: "01",
    range: "2006 – 2014",
    title: "The Genesis & Core Fleet",
    theme: "Bootstrapped Resilience & Infrastructure",
    summary:
      "Founded by owner-operator Gedas Poviliunas with a single truck. Driven by a promise to honor driver commitments and customer deadlines, GP Transco systematically laid its foundational maintenance, global back-office, and fleet roots.",
    fleetStat: "1 → 25+ Trucks",
    keyHighlight: "Opened international support in Vilnius & built in-house maintenance facility.",
    milestones: [
      {
        year: "2006",
        title: "GP Transportation is born",
        detail: "Founded with a single truck and a clear mission to bring honesty back to freight.",
        tag: "Founding",
      },
      {
        year: "2007",
        title: "First Owner-Operator Joins",
        detail: "Welcoming independent drivers who believed in transparent pay and reliable miles.",
        tag: "Expansion",
      },
      {
        year: "2011",
        title: "Core Fleet Milestone",
        detail: "Surpassing the critical startup phase with 8 dedicated drivers and repeat accounts.",
        tag: "Milestone",
      },
      {
        year: "2013",
        title: "Vilnius, Lithuania Tech Hub",
        detail: "Opening European back-office operations for 24/7 fleet tracking and support.",
        tag: "Global",
      },
      {
        year: "2014",
        title: "In-House Maintenance Facility",
        detail: "Full control over safety, preventative maintenance, and driver safety protocols.",
        tag: "Facility",
      },
    ],
    awards: [],
  },
  {
    id: "proprietary-tech",
    number: "02",
    range: "2015 – 2018",
    title: "Software & Asset Transformation",
    theme: "Engineering Proprietary Advantage",
    summary:
      "A strategic turning point: merging operations, establishing OpenRoad TMS development, executing a unified re-brand, and shifting from brokerage dependence to an uncompromising 100% asset-based model.",
    fleetStat: "100+ Asset Fleet",
    keyHighlight: "Began building proprietary OpenRoad TMS & transitioned to 100% company assets.",
    milestones: [
      {
        year: "2015",
        title: "Strategic Merger with ZA Transport",
        detail: "Combining leadership, trucks, and regional footprint to supercharge capacity.",
        tag: "Merger",
      },
      {
        year: "2015",
        title: "OpenRoad TMS Engineering Starts",
        detail: "Rejected generic third-party software to build an AI-ready dispatcher operating system.",
        tag: "Tech",
      },
      {
        year: "2016",
        title: "Company-Wide Rebrand",
        detail: "Re-emerged as GP Transco with iconic teal branding and unified corporate vision.",
        tag: "Brand",
      },
      {
        year: "2018",
        title: "Pivoted to Asset-Based Operations",
        detail: "Committed 100% to company-owned trucks and trailers for unmatched SLA delivery.",
        tag: "Asset Pivot",
      },
    ],
    awards: AWARDS.filter((a) => ["2018"].includes(a.year)),
  },
  {
    id: "hypergrowth",
    number: "03",
    range: "2019 – 2023",
    title: "National Scale & Industry Acclaim",
    theme: "Campus Expansion & National Dominance",
    summary:
      "Rapid nationwide scaling. Commissioned a flagship Joliet campus with best-in-class driver lounges, established the Medellín international hub, and dominated national workplace and growth rankings year after year.",
    fleetStat: "500+ Trucks • 750+ Trailers",
    keyHighlight: "Over 25 major industry honors, new Joliet HQ, and Inc. 5000 / Fast 50 streaks.",
    milestones: [
      {
        year: "2019",
        title: "400 Teal Trucks on U.S. Highways",
        detail: "Fleet scale reached top 100 nationwide stature with late-model Freightliners.",
        tag: "Scale",
      },
      {
        year: "2020",
        title: "Flagship Joliet Headquarters Opens",
        detail: "State-of-the-art campus complete with fitness center, cafe, and tech dispatch floors.",
        tag: "Campus",
      },
      {
        year: "2021",
        title: "Medellín, Colombia Operations",
        detail: "Adding high-touch bilingual customer support and night-dispatch logistics.",
        tag: "International",
      },
      {
        year: "2022",
        title: "Fleet Surpasses 500 Trucks & 750 Trailers",
        detail: "Serving Fortune 500 supply chains with 99.4% on-time performance metrics.",
        tag: "Enterprise",
      },
    ],
    awards: AWARDS.filter((a) =>
      ["2019", "2020", "2021", "2022", "2023"].includes(a.year),
    ),
  },
  {
    id: "ai-decade",
    number: "04",
    range: "2024 – 2026+",
    title: "The AI Frontier & 20 Years",
    theme: "20th Anniversary & Autonomous Intelligence",
    summary:
      "Celebrating two decades at the forefront of American trucking. Armed with 1,800 trailers, fleetwide ESMART speed management, and CCJ Innovator of the Year AI dispatch simulators that set the bar for the entire transportation sector.",
    fleetStat: "1,800 Trailers • 550+ Trucks",
    keyHighlight: "2026 CCJ Innovator of the Year & 20 Years of Redefining Trucking.",
    milestones: [
      {
        year: "2024",
        title: "Ryder Dry Van Carrier of the Year",
        detail: "Recognized as top regional dry van partner for operational performance and safety.",
        tag: "Honor",
      },
      {
        year: "2025",
        title: "1,800 Trailers & 95% Company Drivers",
        detail: "80%+ contracted enterprise freight with near-zero turnover in driver ranks.",
        tag: "Capacity",
      },
      {
        year: "2025",
        title: "Fleetwide ESMART Safety Rollout",
        detail: "Dynamic speed management and low-bridge collision prevention across all power units.",
        tag: "Safety Tech",
      },
      {
        year: "2026",
        title: "Named CCJ Innovator of the Year",
        detail: "National award for in-house AI algorithms matching loads and predicting ETAs.",
        tag: "AI Landmark",
      },
      {
        year: "2026",
        title: "GP Transco Turns 20",
        detail: "Two decades in, proving that integrity, driver pay, and smart software always win.",
        tag: "Anniversary",
      },
    ],
    awards: AWARDS.filter((a) => ["2024", "2025", "2026"].includes(a.year)),
  },
];
