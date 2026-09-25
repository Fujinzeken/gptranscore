import {
  ArrowRight,
  Handshake,
  SteeringWheel,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnOutline, btnSolid, btnHero, cx, label } from "../ui";

/**
 * Driver Careers overview: the CSV intro and the two paths it names.
 *
 * Copy is the DRIVER CAREERS — HUB row of the content pack. Pay and home time
 * are answered by recruiting on the phone rather than with published figures,
 * so neither card states a number.
 */

type Path = {
  icon: typeof SteeringWheel;
  tag: string;
  name: string;
  lead: string;
  points: Array<{ term: string; detail: string }>;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  featured?: boolean;
};

const PATHS: Path[] = [
  {
    icon: SteeringWheel,
    tag: "Company driver",
    name: "We provide the truck, you drive it.",
    lead: "The truck, the trailer, fuel, maintenance, insurance and the freight are ours.",
    points: [
      {
        term: "Pay",
        detail:
          "We set pay per driver based on experience and route. Call +1 (224) 666-0136 and we'll tell you what your lane pays before you apply.",
      },
      {
        term: "Home time",
        detail:
          "Depends on the run. Tell us where you live and we'll tell you what's realistic.",
      },
    ],
    primary: { label: "CDL-A Jobs", href: "/careers/jobs" },
    secondary: { label: "About company driving", href: "/careers/company-drivers" },
  },
  {
    icon: Handshake,
    tag: "Owner-operator",
    name: "Your truck, our authority and freight.",
    lead: "Steady freight without chasing loads.",
    points: [
      {
        term: "Freight",
        detail:
          "We run under our own authority with our own customer base, so the freight is there.",
      },
      {
        term: "Dispatch",
        detail: "The same dispatcher every week rather than whoever picks up.",
      },
    ],
    primary: { label: "Lease On", href: "/careers/owner-operators" },
    featured: true,
  },
];

export function DriverOverview() {
  return (
    <section
      id="overview"
      className="bg-page py-[clamp(78px,12vh,150px)] px-gut"
    >
      <Reveal>
        <header
          className={cx(
            revealItem,
            "max-w-[740px] mb-[clamp(44px,6.5vh,72px)]",
          )}
        >
          <p className={cx(label, "text-azure mb-3")}>Drive for PKT</p>

          <h2 className="type-display m-0 text-[clamp(32px,4.5vw,62px)] text-ink-text leading-[0.94]">
            Pick the path that fits how you want to work.
          </h2>

          <p className="mt-5 text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-body-text">
            At PKT, dispatch knows who you are, what you drive and where you
            live. We run dry van, reefer and flatbed freight across 48 states.
            Pick the path that fits how you want to work.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <div
          style={{ "--i": 1 } as React.CSSProperties}
          className={cx(revealItem, "grid gap-px bg-line md:grid-cols-2")}
        >
          {PATHS.map(
            ({ icon: Icon, tag, name, lead, points, primary, secondary, featured }) => (
              <article
                key={tag}
                className={cx(
                  "flex flex-col justify-between p-[clamp(24px,3vw,44px)]",
                  featured ? "bg-ink" : "bg-surface",
                )}
              >
                <div>
                  <p
                    className={cx(
                      label,
                      "m-0 flex items-center gap-2 border-b pb-4",
                      featured
                        ? "border-rule text-azure-hi"
                        : "border-line text-azure",
                    )}
                  >
                    <Icon size={18} weight="bold" />
                    {tag}
                  </p>

                  <h3
                    className={cx(
                      "font-display mt-5 mb-3 text-[clamp(24px,2.6vw,34px)] font-bold leading-snug",
                      featured ? "text-paper" : "text-ink-text",
                    )}
                  >
                    {name}
                  </h3>
                  <p
                    className={cx(
                      "m-0 text-[clamp(15px,1.1vw,17px)] leading-[1.6]",
                      featured ? "text-mute" : "text-body-text",
                    )}
                  >
                    {lead}
                  </p>

                  <dl className="m-0 mt-6">
                    {points.map(({ term, detail }) => (
                      <div
                        key={term}
                        className={cx(
                          "grid grid-cols-[7rem_1fr] gap-4 border-t py-4 max-[480px]:grid-cols-1 max-[480px]:gap-1",
                          featured ? "border-rule" : "border-line",
                        )}
                      >
                        <dt
                          className={cx(
                            label,
                            featured ? "text-mute-2" : "text-soft-text",
                          )}
                        >
                          {term}
                        </dt>
                        <dd
                          className={cx(
                            "m-0 text-[15px] leading-[1.6]",
                            featured ? "text-mute" : "text-body-text",
                          )}
                        >
                          {detail}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={primary.href} className={cx(btn, btnSolid, btnHero)}>
                    {primary.label}
                    <ArrowRight size={17} weight="bold" />
                  </a>
                  {secondary ? (
                    <a
                      href={secondary.href}
                      className={cx(btn, btnOutline, btnHero)}
                    >
                      {secondary.label}
                    </a>
                  ) : null}
                </div>
              </article>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}
