import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { cx, label } from "../ui";

/**
 * Latest updates.
 *
 * Third attempt, and the first one built to the system. It was a hairline row
 * list, then cards with a watermark in the corner. Both were containers doing
 * the work that structure should do.
 *
 * This is a newspaper index: columns divided by rules, no boxes, no fill, no
 * mark. The system says rules and space before containers, and a publication
 * index is the one place on the page where that reads literally.
 *
 * Three pieces rather than four. Four columns forces these titles to about
 * eleven characters a line at desktop, and the fourth was the oldest by six
 * months. The full set lives behind View All Publications.
 */

type Post = {
  title: string;
  date: string;
  read: string;
};

const POSTS: Post[] = [
  {
    title:
      "Evolution in Motion: The Innovation of Semi-Truck Engines Over the Past 30 Years",
    date: "Nov 17, 2024",
    read: "4 min",
  },
  {
    title:
      "Revving Up Recruitment: Proven Truck Driver Shortage Solutions for a Thriving Career",
    date: "Sep 19, 2024",
    read: "4 min",
  },
  {
    title:
      "Utilizing Semi Truck Solar Panels: Why We Believe in the Future of Trucking",
    date: "Jun 17, 2024",
    read: "4 min",
  },
];

export function Updates() {
  return (
    <section className="border-t border-line bg-page px-gut py-[clamp(66px,10vh,128px)]">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <h2
            className={cx(
              revealItem,
              "type-display m-0 max-w-[13em]",
              "text-[clamp(26px,3.6vw,52px)] text-ink-text",
            )}
          >
            Latest updates
          </h2>

          <a
            href="#"
            style={{ "--i": 1 } as React.CSSProperties}
            className={cx(
              revealItem,
              "inline-flex items-center gap-2 pb-2 text-[15px] font-medium text-azure",
              "transition-colors duration-200 hover:text-ink-text",
            )}
          >
            View All Publications
            <ArrowRight size={17} />
          </a>
        </div>

        {/* The rule the columns hang from. */}
        <div
          style={{ "--i": 2 } as React.CSSProperties}
          className={cx(
            revealItem,
            "mt-[clamp(30px,4.4vh,52px)] h-[2px] w-full bg-ink-text",
          )}
        />

        <div className="grid grid-cols-3 max-[820px]:grid-cols-1">
          {POSTS.map(({ title, date, read }, i) => (
            <a
              key={title}
              href="#"
              style={{ "--i": i + 3 } as React.CSSProperties}
              className={cx(
                revealItem,
                "group/post flex flex-col pb-[clamp(26px,3.6vh,42px)] pt-[clamp(22px,3vh,32px)]",
                i > 0 &&
                  "border-l border-line pl-[clamp(20px,2.6vw,44px)] max-[820px]:border-l-0 max-[820px]:border-t max-[820px]:pl-0",
                i < POSTS.length - 1 && "pr-[clamp(20px,2.6vw,44px)]",
              )}
            >
              <time className={cx(label, "text-body-text")}>{date}</time>

              <h3 className="font-display m-0 mt-5 text-[clamp(19px,1.75vw,26px)] font-bold leading-[1.24] tracking-[-0.015em] text-ink-text">
                {title}
              </h3>

              <span className="mt-auto flex items-center gap-2 pt-8 text-[13.5px] text-soft-text">
                {read}
                <ArrowUpRight
                  size={16}
                  className={cx(
                    "shrink-0 text-azure transition-transform duration-300 ease-[var(--ease-out-strong)]",
                    "group-hover/post:translate-x-0.5 group-hover/post:-translate-y-0.5",
                  )}
                />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
