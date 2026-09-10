// Dummy blog data for GP Transco blog page
// Images reuse existing public assets until real blog images are provided

export type Publication = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number; // minutes
  featured: boolean;
  image: string;
  author: { name: string; avatar?: string };
};

export const CATEGORIES = [
  "All",
  "Technology",
  "Driver Careers",
  "Sustainability",
  "Industry Trends",
  "Safety",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    slug: "ai-powered-route-optimization",
    title: "How AI-Powered Route Optimization Is Reshaping Long-Haul Trucking",
    excerpt:
      "From predictive traffic analysis to fuel-efficient routing, artificial intelligence is transforming how GP Transco plans every mile across the US and Canada.",
    category: "Technology",
    date: "2026-08-28",
    readTime: 6,
    featured: true,
    image: "/about-us/about-hero.jpg",
    author: { name: "Gedas Poviliunas" },
  },
  {
    id: "2",
    slug: "life-on-the-road",
    title: "Life on the Road: What Our Drivers Say About Company Culture",
    excerpt:
      "We sat down with six GP Transco drivers to hear what a typical week on the road actually looks like — the rewards, the challenges, and why they stay.",
    category: "Driver Careers",
    date: "2026-08-14",
    readTime: 5,
    featured: false,
    image: "/freight-brokerage/brokerage-carriers.webp",
    author: { name: "Milda Davis" },
  },
  {
    id: "3",
    slug: "electric-fleet-2027",
    title: "Mapping Our Path to a Zero-Emission Fleet by 2030",
    excerpt:
      "GP Transco's sustainability roadmap outlines the phased transition to electric Class 8 trucks, the infrastructure investments required, and why now is the moment to act.",
    category: "Sustainability",
    date: "2026-07-30",
    readTime: 7,
    featured: true,
    image: "/freight-brokerage/brokerage-hero.jpg",
    author: { name: "Dominic Zastarskis" },
  },
  {
    id: "4",
    slug: "freight-market-outlook-q4",
    title: "Freight Market Outlook: What Shippers Need to Know for Q4 2026",
    excerpt:
      "Capacity tightens every autumn. Our logistics analysts break down seasonal demand spikes, rate forecasts, and the lanes most likely to see disruption this fall.",
    category: "Industry Trends",
    date: "2026-07-10",
    readTime: 4,
    featured: false,
    image: "/office-careers/office-hero-bg1.jpg",
    author: { name: "Amos Savickas" },
  },
  {
    id: "5",
    slug: "driver-wellness-program",
    title: "Putting Drivers First: Inside Our Comprehensive Wellness Program",
    excerpt:
      "Sleep apnea screening, mental health resources, and ergonomic cab design — GP Transco is raising the industry bar for driver health and wellbeing.",
    category: "Safety",
    date: "2026-06-25",
    readTime: 5,
    featured: false,
    image: "/about-us/overview-right.png",
    author: { name: "Ivy Posada" },
  },
  {
    id: "6",
    slug: "eld-mandate-guide",
    title: "The Complete Guide to ELD Mandate Compliance in 2026",
    excerpt:
      "Electronic Logging Device regulations continue to evolve. Here's everything fleet managers and owner-operators need to stay compliant and avoid costly violations.",
    category: "Industry Trends",
    date: "2026-06-05",
    readTime: 8,
    featured: false,
    image: "/freight-brokerage/brokerage-streamline.webp",
    author: { name: "Sergey Bort" },
  },
];
