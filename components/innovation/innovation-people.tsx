import Image from "next/image";
import { Lightning, Stack, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cardRound, cx, label } from "../ui";

/**
 * Employee Innovation — "Built by the people who know the work best".
 *
 * After two rounds of invented layouts, this section now follows the prod
 * structure directly — it was the one thing that worked, and the real
 * headshots carry it. Two-column dark section: the claim and its two
 * supporting paragraphs on the left, closing on the pull line; on the right
 * the team panel with its "TEAM INNOVATION / A FEW OF MANY" header, the four
 * builders' headshots, and the caption. The three claims close the section
 * as rule-separated columns.
 *
 * The headshots came from the live site's bundle and live in
 * /public/innovation/team — same treatment as the leadership grid on
 * About Us: square frames, next/image, object-cover.
 */

const TEAM = [
  {
    name: "Sergey",
    title: "VP of MARCOM & Digital Strategy",
    photo: "/innovation/team/sergey.png",
  },
  {
    name: "Alex",
    title: "VP of Maintenance",
    photo: "/innovation/team/alex.png",
  },
  {
    name: "Vin",
    title: "Director of Operations",
    photo: "/innovation/team/vin.png",
  },
  {
    name: "Victoria",
    title: "Assistant Controller",
    photo: "/innovation/team/victoria.png",
  },
];

const RESULTS = [
  {
    icon: Lightning,
    title: "Faster ideas to execution",
    body: "From operational need to working solution — remarkably fast.",
  },
  {
    icon: Stack,
    title: "Built around real workflows",
    body: "Tools shaped by the people who know the day-to-day best.",
  },
  {
    icon: UsersThree,
    title: "Innovation across departments",
    body: "Part of the culture — not confined to one team.",
  },
];

export function InnovationPeople() {
  return (
    <section id="people" className="bg-ink px-gut py-[clamp(78px,12vh,150px)]">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-[clamp(32px,5vw,88px)] gap-y-[clamp(40px,6vh,64px)]">
          {/* Left: the claim and its evidence. */}
          <div className="col-span-6 max-[1000px]:col-span-12">
            <h2
              className={cx(
                revealItem,
                "font-display m-0",
                "text-[clamp(26px,3.6vw,52px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-paper",
              )}
            >
              Built by the people who{" "}
              <span className="text-azure-hi">know the work</span> best
            </h2>

            <p
              style={{ "--i": 2 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-7 m-0 max-w-[52ch]",
                "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              Across marketing, maintenance, operations, and finance, our
              employees are using AI to turn real operational challenges into
              purpose-built internal tools — faster than ever before.
            </p>

            <p
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-5 m-0 max-w-[52ch]",
                "text-[clamp(15px,1.15vw,17.5px)] leading-[1.62] text-mute",
              )}
            >
              The result: ideas move faster, solutions are more relevant, and
              innovation becomes part of the culture — not a department.
            </p>

            {/* The pull line, closing the left column over a hairline. */}
            <div
              style={{ "--i": 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "mt-[clamp(36px,6vh,64px)] border-t border-rule-lit pt-[clamp(24px,4vh,40px)]",
              )}
            >
              <p
                className={cx(
                  "font-display m-0",
                  "text-[clamp(20px,2.4vw,34px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-paper",
                )}
              >
                Technology at GP Transco isn&apos;t adopted.{" "}
                <span className="text-azure-hi">It&apos;s built.</span>
              </p>
            </div>
          </div>
{/* Right: the team panel — TEAM INNOVATION / A FEW OF MANY. */}
          <div
            style={{ "--i": 4 } as React.CSSProperties}
            className={cx(
              revealItem,
              "col-span-6 col-start-7 self-start",
              "max-[1000px]:col-span-12 max-[1000px]:col-start-1",
            )}
          >
            <div className={cx(cardRound, "bg-paper/[0.03] ring-1 ring-rule-lit overflow-hidden")}>
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-rule-lit px-[clamp(18px,2.2vw,28px)] py-4">
                <span className="flex items-center gap-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-hi opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-azure-hi" />
                  </span>
                  <span
                    className={cx(label, "text-[10px] text-azure-hi")}
                  >
                    TEAM INNOVATION
                  </span>
                </span>
                <span className={cx(label, "text-[9px] text-mute-2")}>
                  A FEW OF MANY
                </span>
              </div>

              {/* The four builders. */}
              <div className="grid grid-cols-4 gap-[clamp(12px,1.6vw,20px)] px-[clamp(18px,2.2vw,28px)] py-[clamp(20px,3vh,32px)] max-[560px]:grid-cols-2">
                {TEAM.map((member, n) => (
                  <div
                    key={member.name}
                    style={{ "--i": 4 + n } as React.CSSProperties}
                    className={cx(revealItem, "min-w-0 text-center")}
                  >
                    <div className={cx(cardRound, "relative mx-auto aspect-square w-full overflow-hidden bg-ink-2 ring-1 ring-rule-lit")}>
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 1000px) 40vw, 15vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="m-0 mt-3 text-[clamp(13px,1.05vw,15.5px)] font-bold leading-none text-paper">
                      {member.name}
                    </p>
                    <p className="m-0 mt-1.5 text-[clamp(11px,0.85vw,12.5px)] leading-[1.35] text-mute">
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Caption */}
              <div className="border-t border-rule-lit px-[clamp(18px,2.2vw,28px)] py-4">
                <p className="m-0 text-center text-[clamp(12.5px,1vw,14.5px)] leading-[1.55] text-mute">
                  A few of the GP Transco team members from different
                  departments making a real difference by building powerful
                  productivity tools — without any prior development experience.
                </p>
              </div>
            </div>
          </div>
{/* The three claims as rule-separated columns. */}
          <div
            style={{ "--i": 6 } as React.CSSProperties}
            className={cx(revealItem, "col-span-12 mt-[clamp(24px,5vh,56px)]")}
          >
            <div className="grid grid-cols-3 border-t border-rule-lit pt-[clamp(28px,4vh,48px)] max-[900px]:grid-cols-1">
              {RESULTS.map((item, n) => (
                <div
                  key={item.title}
                  className={cx(
                    "px-[clamp(18px,2.2vw,32px)] py-2 first:pl-0",
                    n > 0 && "border-l border-rule-lit",
                    "max-[900px]:border-l-0 max-[900px]:px-0",
                    n < RESULTS.length - 1 &&
                      "max-[900px]:border-b max-[900px]:pb-6",
                    n > 0 && "max-[900px]:pt-6",
                  )}
                >
                  <item.icon size={22} weight="regular" className="text-azure-hi" />
                  <h3 className="font-display m-0 mt-4 text-[clamp(16px,1.5vw,21px)] font-bold leading-[1.25] text-paper">
                    {item.title}
                  </h3>
                  <p className="m-0 mt-1.5 max-w-[36ch] text-[clamp(13.5px,1.05vw,15.5px)] leading-[1.55] text-mute">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}