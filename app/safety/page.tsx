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
  SafetyDrivers,
  SafetyHours,
  SafetyCta,
} from "@/components/safety";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Safety and Compliance | PKT",
  description:
    "How PKT keeps freight moving predictably: maintained equipment, qualified drivers and clear operating standards.",
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
  { id: "drivers", label: "Qualified Drivers" },
  { id: "hours", label: "Hours & Fatigue" },
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
      <SafetyHours />
      <SafetyDrivers />

      <SafetyCta />
      <SiteFooter />
    </>
  );
}
