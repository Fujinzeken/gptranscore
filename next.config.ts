import type { NextConfig } from "next";

/**
 * Routes that were removed because they are not in the approved sitemap or
 * cover services PKT does not offer. Each points at the closest page that is.
 * Legacy uppercase paths are listed too so old links skip a second hop.
 */
const REMOVED_ROUTES: [string, string][] = [
  ["/services/step-deck", "/services"],
  ["/services/dedicated", "/services"],
  ["/services/drop-trailer", "/services"],
  ["/freight-brokerage-services", "/services"],
  ["/pktgrouptechnology", "/company"],
  ["/PKTGroupTechnology", "/company"],
  ["/sustainability", "/company"],
  ["/Sustainability", "/company"],
  ["/office-careers", "/careers"],
  ["/elitedriverprogram", "/careers"],
  ["/EliteDriverProgram", "/careers"],
  ["/highestpayingtruckingcompanies", "/careers"],
  ["/HighestPayingTruckingCompanies", "/careers"],
  ["/blog", "/"],
  ["/Safety", "/safety"],
];

const nextConfig: NextConfig = {
  redirects() {
    return REMOVED_ROUTES.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
