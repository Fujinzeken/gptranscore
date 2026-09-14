import type { Metadata } from "next";
import { SectionNav, type SectionLink } from "@/components/section-nav";
import {
  SafetyHero,
  SafetyTools,
  SafetyConnect,
  SafetyVideos,
  SafetyIdelic,
  SafetyEsmart,
  SafetyWeather,
  SafetySecurity,
  SafetyTrucks,
  SafetyCta,
} from "@/components/safety";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Fleet Safety | PKT Group",
  description:
    "Safety is at the core of everything we do. AI-powered monitoring, E-SMART active safety, and Safety Connect — every safety data source in one in-house platform.",
};

const LINKS: SectionLink[] = [
  { id: "tools", label: "Safety Tools" },
  { id: "connect", label: "Safety Connect" },
  { id: "videos", label: "Safety Videos" },
  { id: "idelic", label: "Idelic" },
  { id: "esmart", label: "E-SMART" },
  { id: "weather", label: "Weather Intel" },
  { id: "security", label: "Security" },
  { id: "trucks", label: "Truck Features" },
];

export default function SafetyPage() {
  return (
    <>
      <SafetyHero />
      <SectionNav links={LINKS} />
      <SafetyTools />
      <SafetyConnect />
      <SafetyVideos />
      <SafetyIdelic />
      <SafetyEsmart />
      <SafetyWeather />
      <SafetySecurity />
      <SafetyTrucks />
      <SafetyCta />
      <SiteFooter />
    </>
  );
}
