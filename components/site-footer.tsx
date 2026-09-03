import { Wordmark } from "./site-nav";
import { cx, label } from "./ui";

/**
 * Footer.
 *
 * Dark because footers are chrome rather than content: it closes the page under
 * the azure CTA and reads as the edge of the site, not as another section. The
 * navigation labels and URLs are theirs, unchanged, so nothing they rank for or
 * track moves.
 *
 * Their current footer carries the line "This site was developed 100% in-house."
 * That is a claim about how their site was built, and it stops being true the
 * moment this redesign ships, so it is not carried over.
 */

const COLUMNS = [
  {
    heading: "Company",
    links: ["About Us", "Leadership", "Awards", "Careers"],
  },
  {
    heading: "Solutions",
    links: [
      "Shipment Solutions",
      "Brokerage Solutions",
      "Technology",
      "Request a Quote",
    ],
  },
  {
    heading: "Careers",
    links: ["Driver Careers", "Office Careers", "Benefits", "ELITE Program"],
  },
];

const LEGAL = ["Privacy Policy", "Terms of Service", "Sitemap"];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-gut pb-10 pt-[clamp(56px,8vh,96px)]">
      <div className="grid grid-cols-12 gap-x-8 gap-y-[clamp(36px,5vh,56px)] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div className="col-span-4 max-[900px]:col-span-2 max-[560px]:col-span-1">
          <Wordmark tone="dark" />
          <p className="mt-6 max-w-[34ch] text-[14.5px] leading-[1.6] text-mute-2">
            Modern logistics carrier delivering reliable freight solutions and
            rewarding driver careers.
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
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
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
              3200 Channahon Rd
              <br />
              Joliet, IL 60436
            </li>
            <li>
              <a
                href="tel:+18004605071"
                className="text-paper transition-colors duration-200 hover:text-azure-hi"
              >
                (800) 460-5071
              </a>
            </li>
            <li>
              <a
                href="mailto:info@gptransco.com"
                className="text-paper transition-colors duration-200 hover:text-azure-hi"
              >
                info@gptransco.com
              </a>
            </li>
            <li className="pt-1 text-mute-2">
              Driver verification of employment
              <br />
              <a
                href="tel:+17082610263"
                className="text-paper transition-colors duration-200 hover:text-azure-hi"
              >
                (708) 261-0263
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className="mt-[clamp(44px,6vh,72px)] flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-rule pt-7">
        <p className="m-0 text-[13.5px] text-mute-2">
          &copy; 2026 GP Transco. All rights reserved.
        </p>
        <ul className="m-0 flex flex-wrap list-none gap-x-7 gap-y-2 p-0">
          {LEGAL.map((l) => (
            <li key={l}>
              <a
                href="#"
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
