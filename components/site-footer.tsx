import Image from "next/image";
import Link from "next/link";
import { cx, label } from "./ui";

/**
 * Footer.
 *
 * Dark because footers are chrome rather than content: it closes the page under
 * the azure CTA and reads as the edge of the site, not as another section.
 * Every link resolves to a page in the approved sitemap.
 */
const COLUMNS = [
  {
    heading: "Freight",
    links: [
      { label: "Freight Services", href: "/services" },
      { label: "Dry Van", href: "/services/dry-van" },
      { label: "Refrigerated", href: "/services/reefer" },
      { label: "Flatbed", href: "/services/flatbed" },
    ],
  },
  {
    heading: "Drivers",
    links: [
      { label: "Driver Careers", href: "/careers" },
      { label: "Company Drivers", href: "/careers/company-drivers" },
      { label: "Owner-Operators", href: "/careers/owner-operators" },
      { label: "Open Positions", href: "/careers/jobs" },
      { label: "Quick Apply", href: "/careers/apply" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About PKT", href: "/company" },
      { label: "Safety", href: "/safety" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-gut pb-10 pt-[clamp(56px,8vh,96px)]">
      <div className="grid grid-cols-12 gap-x-8 gap-y-[clamp(36px,5vh,56px)] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div className="col-span-4 max-[900px]:col-span-2 max-[560px]:col-span-1">
          <Link
            href="/"
            aria-label="PKT home"
            className="flex w-fit shrink-0 items-center gap-[11px]"
          >
            <Image
              src="/pkt-logo1.png"
              alt=""
              width={150}
              height={98}
              className="block h-7 w-auto brightness-0 invert"
            />
            <span className="font-display text-[12.5px] font-extrabold uppercase leading-[1.04] tracking-[0.055em] text-paper">
              PKT
            </span>
          </Link>
          <p className="mt-6 max-w-[34ch] text-[14.5px] leading-[1.6] text-mute-2">
            Asset-based truckload carrier running 48-state authority out of
            Rosemont, Illinois.
          </p>
        </div>

        {COLUMNS.map(({ heading, links }) => (
          <nav
            key={heading}
            aria-label={heading}
            className="col-span-2 max-[560px]:col-span-1"
          >
            <h2 className={cx(label, "m-0 text-mute")}>{heading}</h2>
            <ul className="m-0 mt-5 list-none space-y-3 p-0">
              {links.map(({ label: l, href }) => (
                <li key={l}>
                  <a
                    href={href}
                    className="text-[14.5px] leading-[1.5] text-paper transition-colors duration-200 hover:text-azure-hi"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <address className="col-span-2 not-italic max-[900px]:col-span-2 max-[560px]:col-span-1">
          <h2 className={cx(label, "m-0 text-mute")}>Contact</h2>
          <ul className="m-0 mt-5 list-none space-y-3 p-0 text-[14.5px] leading-[1.5]">
            <li className="text-mute-2">
              9400 W Higgins Rd STE 412
              <br />
              Rosemont, IL 60018
            </li>
            <li>
              <a
                href="tel:+12246660136"
                className="text-paper transition-colors duration-200 hover:text-azure-hi"
              >
                +1 (224) 666-0136
              </a>
            </li>
            <li>
              <a
                href="mailto:safety@pktgroup.net"
                className="text-paper transition-colors duration-200 hover:text-azure-hi"
              >
                safety@pktgroup.net
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="mt-[clamp(44px,6vh,72px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-rule pt-7">
        <p className="m-0 text-[13.5px] text-mute-2">
          &copy; 2026 PKT Transportation INC. All rights reserved. · USDOT
          3188421 · MC 132863
        </p>
        <ul className="m-0 flex flex-wrap list-none gap-x-7 gap-y-2 p-0">
          {LEGAL.map(({ label: l, href }) => (
            <li key={l}>
              <a
                href={href}
                className="text-[13.5px] text-mute-2 transition-colors duration-200 hover:text-paper"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
