import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { cx, label } from "./ui";

/**
 * Shared shell for /privacy, /terms and /accessibility: the dark hero plate
 * from /contact, then a single readable column of numbered sections.
 */

export type LegalSection = { id: string; title: string; body: ReactNode };

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-ink">
        <SiteNav />
        <div className="px-gut pb-[clamp(48px,8vh,96px)] pt-[clamp(96px,15vh,180px)]">
          <p className={cx(label, "text-azure-hi mb-4 tracking-[0.16em]")}>{eyebrow}</p>
          <h1
            className={cx(
              "font-display m-0 max-w-[14em] text-[clamp(34px,5.2vw,78px)]",
              "font-black uppercase leading-[0.9] tracking-[-0.03em] text-paper",
            )}
          >
            {title}
          </h1>
          <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[60ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
            {intro}
          </p>
          <p className={cx(label, "mt-6 text-mute-2")}>Last updated {updated}</p>
        </div>
      </div>

      <main className="bg-page px-gut py-[clamp(64px,10vh,120px)]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-12 gap-x-[clamp(32px,5vw,72px)] max-[900px]:grid-cols-1">
          <nav aria-label="On this page" className="col-span-4 max-[900px]:hidden">
            <ol className="sticky top-28 m-0 list-none space-y-2.5 p-0">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex gap-3 text-[14px] leading-[1.4] text-body-text hover:text-azure"
                  >
                    <span className={cx(label, "text-soft-text tabular-nums")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="col-span-8 max-[900px]:col-span-1">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 border-b border-line py-8 first:pt-0 last:border-b-0"
              >
                <h2 className="font-display m-0 flex items-baseline gap-3 text-[clamp(20px,1.8vw,26px)] font-extrabold leading-[1.2] text-ink-text">
                  <span className={cx(label, "text-azure tabular-nums")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                <div className="legal-body mt-4 space-y-4 text-[clamp(15px,1.1vw,16.5px)] leading-[1.7] text-body-text [&_a]:font-semibold [&_a]:text-azure [&_a:hover]:underline [&_li]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
