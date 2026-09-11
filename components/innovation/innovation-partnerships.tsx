import Image from "next/image";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnHero, btnGhost, cx, label } from "../ui";

/**
 * Partnerships — the vendor ledger.
 *
 * Prod showed six logo cards: raster logos in tinted panels with two
 * paragraphs each. The logos would be the only rasters on the page and the
 * cards float, so the lockups are set typographically instead — each
 * partner as an indexed row in a two-column hairline lattice, its
 * one-line benefit mono-set as the row's tag. Selectivity reads as an
 * inventory: six vendors, counted, each with its reason.
 *
 * A closing dark band carries prod's final statement — the page's last
 * word, set at the display register like the award and fleet-age bands.
 */

const PARTNERS = [
  {
    name: "Samsara",
    logo: "/innovation/partners/samsara.png",
    body: "GP Transco became an early adopter of Samsara — now a leading company in fleet tracking and management products.",
    tag: "Outstanding safety record and real-time visibility into fleet location",
  },
  {
    name: "Freightliner",
    logo: "/innovation/partners/freightliner.png",
    body: "GP Transco partners with Freightliner as a core fleet equipment platform, leveraging modern truck technology that supports safety, reliability, and long-term uptime.",
    tag: "Safer operations, stronger uptime, consistent driver experience",
  },
  {
    name: "E-SMART",
    logo: "/innovation/partners/esmart.png",
    body: "GP Transco partners with E-SMART for intelligent, GPS-based vehicle control solutions that help fleets reduce speeding events and improve safety performance.",
    tag: "GPS-based speed governance for safer driving behavior",
  },
  {
    name: "Luma Brighter Learning",
    logo: "/innovation/partners/luma.png",
    body: "GP Transco partners with Luma Learning to support driver training and continuous learning, helping drivers stay current on the latest regulations and best practices.",
    tag: "Ongoing driver learning reinforces safety best practices",
  },
  {
    name: "Idelic",
    logo: "/innovation/partners/idelic.png",
    body: "GP Transco partners with Idelic's Safety Suite — a modern, AI-powered fleet safety management platform that centralizes driver data, streamlines safety workflows, and uses predictive analytics to proactively identify at-risk behaviors before they become incidents.",
    tag: "Data-driven safety management and proactive driver coaching",
  },
  {
    name: "Hyundai Translead",
    logo: "/innovation/partners/hyundai-translead.png",
    body: "GP Transco operates Hyundai Translead Composite® dry van trailers — delivering the same strength at a lighter weight with durable composite plate sidewalls, hot-dipped galvanization as standard, and increased freight capacity through thinner walls and lower trailer weight.",
    tag: "Lighter, more durable trailers with industry-leading anti-corrosion protection",
  },
];

export function InnovationPartnerships() {
  return (
    <section id="partnerships" className="bg-surface px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        {/* Header: the standard left, the count right. */}
        <div className="flex items-end justify-between gap-6 border-b border-rule pb-[clamp(24px,4vh,44px)]">
          <div className="max-w-[760px]">
            <p
              style={{ "--i": 1 } as React.CSSProperties}
              className={cx(revealItem, "m-0", label, "text-mute-2")}
            >
              Partnerships
            </p>
            <h2
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "font-display m-0 mt-4",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink-text",
              )}
            >
              Selective partnerships with{" "}
              <span className="text-azure-hi">best-in-class</span> tech vendors
            </h2>
          </div>
          <p
            style={{ "--i": 3 } as React.CSSProperties}
            className={cx(
              revealItem,
              "font-display m-0 hidden shrink-0 text-right",
              "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-none tracking-[-0.025em] text-line-strong",
              "max-[720px]:hidden",
            )}
          >
            06
          </p>
        </div>

        <p
          style={{ "--i": 4 } as React.CSSProperties}
          className={cx(
            revealItem,
            "m-0 mt-[clamp(28px,4vh,48px)] max-w-[68ch]",
            "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text",
          )}
        >
          Even though we develop our own IT products, GP Transco is extremely
          selective when choosing technology partners. We prioritize modern
          user experience, long-term vendor strength, and the ability to
          integrate into our cloud-based infrastructure.
        </p>

        {/* The vendor ledger: two-column hairline lattice, six indexed rows. */}
        <div
          className="mt-[clamp(36px,5vh,64px)] grid grid-cols-2 gap-px bg-line max-[820px]:grid-cols-1"
        >
          {PARTNERS.map((partner, n) => (
            <div
              key={partner.name}
              style={{ "--i": 5 + n } as React.CSSProperties}
              className={cx(
                revealItem,
                "group flex flex-col bg-surface p-[clamp(22px,2.8vw,40px)] transition-colors duration-300 hover:bg-page",
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className={cx(
                    label,
                    "text-mute-2 transition-colors duration-300 group-hover:text-azure",
                  )}
                >
                  {String(n + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-[clamp(24px,4vw,56px)] bg-line-strong transition-all duration-300 group-hover:w-[clamp(40px,6vw,88px)] group-hover:bg-azure"
                />
              </div>
              {/* The vendor's mark, on the page's own paper. */}
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={48}
                className="h-[clamp(26px,3vw,40px)] w-auto object-contain object-left"
              />
              <h3
                className={cx(
                  "font-display m-0 mt-5",
                  "text-[clamp(19px,2vw,27px)] font-extrabold leading-[1.08] tracking-[-0.015em] text-ink-text",
                )}
              >
                {partner.name}
              </h3>
              <p className="m-0 mt-3 text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.58] text-body-text">
                {partner.body}
              </p>
              <p
                className={cx(
                  label,
                  "m-0 mt-auto pt-6 text-azure transition-colors duration-300 group-hover:text-ink-text",
                )}
              >
                {partner.tag}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement: the page's last word on the dark register. */}
        <div
          style={{ "--i": 11 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(48px,7vh,88px)] bg-ink px-[clamp(28px,4vw,72px)] py-[clamp(40px,6vh,72px)]",
            "grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-6 max-[900px]:grid-cols-1",
          )}
        >
          <h3
            className={cx(
              "font-display m-0 col-span-6 max-[900px]:col-span-1",
              "text-[clamp(28px,3.4vw,48px)] font-extrabold leading-[1.0] tracking-[-0.025em] text-paper",
            )}
          >
            A modern carrier{" "}
            <span className="text-azure-hi">built for the future</span>
          </h3>
          <p
            className={cx(
              "m-0 col-span-5 col-start-8 max-w-[52ch] self-center",
              "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              "max-[900px]:col-span-1 max-[900px]:col-start-1",
            )}
          >
            Technology isn&apos;t a feature at GP Transco — it&apos;s part of
            how we operate every day. From modern equipment and connected
            services to in-house software and real-time visibility, we
            continue to invest in tools that improve safety, efficiency, and
            customer experience.
          </p>
          {/* The page's closing controls. */}
          <div className="col-span-12 mt-2 flex flex-wrap items-center gap-4 max-[900px]:col-span-1">
            <a href="/about-us" className={cx(btn, btnHero, "bg-paper text-ink-text font-semibold hover:bg-white")}>
              Learn More About GP Transco
            </a>
            <a
              href="tel:+18004605071"
              className={cx(btn, btnHero, btnGhost)}
            >
              <Phone size={17} weight="bold" aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}