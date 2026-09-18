import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, revealItem } from "../reveal";
import { btn, btnHero, cx } from "../ui";
import { ApplyButton, QuoteButton } from "./cta-buttons";

/**
 * Closing CTA.
 *
 * Was one flat azure rectangle with the copy jammed into the left third and
 * half the band empty. The dead space was the tell: a full-bleed colour field
 * has to be carrying something.
 *
 * Their own question already names two audiences, so the close is two doors,
 * each filling its half. A shipper and a driver want different things and
 * should not have to read past each other to find the right one.
 *
 * Ink against azure rather than azure against azure: the accent means action
 * everywhere else on the page, so the driver door wears it and the shipper door
 * takes the plate.
 */

const DOORS = [
  {
    heading: "Move freight",
    body: "Need a truck? Tell us the origin, destination, equipment and pickup date — we'll tell you whether PKT can cover it.",
    action: "Request a Quote",
    tone: "ink" as const,
  },
  {
    heading: "Grow your career",
    body: "Dispatch knows who you are, what you drive and where you live. 48-state authority, steady freight, and settlements that arrive when we said they would.",
    action: "Drive With PKT",
    tone: "azure" as const,
  },
];

export function ClosingCTA() {
  return (
    <section
      aria-label="Get started"
      className="grid grid-cols-2 max-[820px]:grid-cols-1"
    >
      {DOORS.map(({ heading, body, action, tone }) => {
        const dark = tone === "ink";
        const Action = dark ? QuoteButton : ApplyButton;
        return (
          <div
            key={heading}
            className={cx(
              "group/door flex flex-col justify-center",
              "px-gut py-[clamp(64px,10vh,132px)]",
              dark ? "bg-ink" : "bg-azure",
            )}
          >
            <Reveal>
              <h2
                className={cx(
                  revealItem,
                  "type-display m-0 max-w-[9em] text-[clamp(26px,3.4vw,48px)]",
                  dark ? "text-paper" : "text-azure-ink",
                )}
              >
                {heading}
              </h2>

              <p
                style={{ "--i": 1 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  "mt-6 max-w-[38ch] text-[clamp(15px,1.15vw,17.5px)] leading-[1.6]",
                  dark ? "text-mute" : "text-azure-ink",
                )}
              >
                {body}
              </p>

              <Action
                style={{ "--i": 2 } as React.CSSProperties}
                className={cx(
                  revealItem,
                  btn,
                  btnHero,
                  "mt-[clamp(28px,4.4vh,52px)] cursor-pointer font-semibold",
                  dark
                    ? "bg-azure text-azure-ink hover:bg-[#12a2e2]"
                    : "bg-ink text-paper hover:bg-[#101826]",
                )}
              >
                {action}
                <ArrowRight size={18} />
              </Action>
            </Reveal>
          </div>
        );
      })}
    </section>
  );
}
