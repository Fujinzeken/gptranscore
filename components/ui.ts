/** Control and type roles shared across the directions. Kept as class
 *  strings rather than a component so each hero can compose freely. */

export const btn =
  "inline-flex items-center gap-2 rounded-full whitespace-nowrap font-medium " +
  "transition-[transform,background-color,border-color] duration-200 " +
  "ease-[var(--ease-out-strong)] active:scale-[0.97]";

export const btnSolid = "bg-azure text-azure-ink font-semibold hover:bg-[#12a2e2]";

export const btnGhost =
  "border border-rule-lit text-paper bg-white/[0.03] " +
  "hover:bg-white/[0.08] hover:border-[#3a4c66]";

export const btnOutline =
  "border border-[#b9c5d3] text-ink bg-transparent " +
  "hover:bg-ink/5 hover:border-[#8fa0b4]";

/** Nav-sized control. The hero uses a taller one. */
export const btnNav = "h-10 px-[19px] text-[13.5px] max-[1440px]:h-[38px] max-[1440px]:px-[15px] max-[1440px]:text-[12.8px]";

export const btnHero = "h-[50px] px-[26px] text-[14.5px]";

export const label =
  "font-mono text-[10.5px] font-medium uppercase tracking-[0.16em]";

/** Bounded cards (photo cards, dark panels, boards) get a responsive radius
 *  so they sit on the page as objects rather than cropping hard at the gutters. */
export const cardRound = "rounded-[clamp(16px,1.8vw,24px)]";

/** Deep, diffuse shadow for photo cards floating on the light page. */
export const cardLift = "shadow-[0_30px_70px_-38px_rgba(15,23,42,0.55)]";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
