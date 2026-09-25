import Link from "next/link";
import { House, Truck } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { NotFoundCta } from "@/components/not-found-cta";
import { cx, label } from "@/components/ui";

/**
 * 404 — "Wrong turn at the interchange." The dark cinematic plate, a ruled
 * readout of the ways back in, and the standard ClosingCTA. No dead end —
 * every exit is a working route.
 */

const ROUTES: Array<[string, string, string]> = [
  ["Freight", "Freight Services", "/services"],
  ["Drivers", "Driver Careers", "/careers"],
  ["Openings", "Open Driver Positions", "/careers/jobs"],
  ["Contact", "Reach the right team", "/contact"],
];

export default function NotFound() {
  return (
    <>
      <title>Page Not Found | PKT Logistics</title>
      <div className="bg-ink">
        <SiteNav tone="dark" />
      </div>

      <main className="bg-ink px-gut pb-[clamp(48px,8vh,96px)] pt-[clamp(48px,8vh,96px)]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(36px,6vh,64px)] max-[1000px]:grid-cols-1">
          <div className="col-span-7 max-[1000px]:col-span-1">
            <p
              className={cx(
                "m-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-2 border border-rule-lit text-azure-hi text-xs font-mono font-semibold tracking-wider uppercase",
              )}
            >
              Error 404 · Off the route
            </p>

            <h1
              className={cx(
                "type-display m-0 mt-[clamp(18px,2.6vh,30px)] max-w-[14em]",
                "text-[clamp(34px,5vw,72px)] text-paper leading-[0.95] uppercase font-black tracking-tight",
              )}
            >
              Wrong turn at the{" "}
              <span className="text-azure-hi">interchange.</span>
            </h1>

            <p className="mt-6 max-w-[54ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute">
              This page isn&rsquo;t on our map — it may have moved, been
              renamed, or never existed. Your freight is fine; the link just
              isn&rsquo;t.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className={cx(
                  "inline-flex items-center gap-2.5 rounded-full bg-azure px-8 py-3.5 text-[15.5px] font-semibold text-ink shadow-lg shadow-azure/25 transition-colors hover:bg-azure-hi",
                )}
              >
                <House size={18} weight="bold" />
                Back to the homepage
              </Link>
              <a
                href="/services"
                className={cx(
                  "inline-flex items-center gap-2.5 rounded-full border border-rule-lit px-8 py-3.5 text-[15.5px] text-paper transition-colors hover:border-azure hover:text-azure-hi",
                )}
              >
                View Freight Services
              </a>
            </div>
          </div>

          <nav
            aria-label="Ways back in"
            className="col-span-5 bg-deep p-[clamp(28px,3.6vw,56px)] max-[1000px]:col-span-1"
          >
            <div className="flex items-center justify-between pb-6">
              <Truck size={30} weight="bold" className="text-azure-hi" />
              <span className={cx(label, "text-mute-2")}>Re-route</span>
            </div>
            <ul className="m-0 list-none border-t border-rule p-0">
              {ROUTES.map(([term, text, href]) => (
                <li
                  key={term}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b border-rule py-4 max-[420px]:grid-cols-1 max-[420px]:gap-1"
                >
                  <span className={cx(label, "m-0 text-mute-2")}>{term}</span>
                  <a
                    href={href}
                    className="text-[clamp(14px,1.05vw,16px)] leading-[1.5] text-paper transition-colors hover:text-azure-hi"
                  >
                    {text} →
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>

      <NotFoundCta />
      <SiteFooter />
    </>
  );
}
