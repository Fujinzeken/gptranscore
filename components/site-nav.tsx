"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, CaretDown, List, Truck, X } from "@phosphor-icons/react/dist/ssr";
import { EXPLORE_MORE, ITEM_ICONS, MENUS, type Menu } from "./nav-menu";
import { btn, btnGhost, btnNav, btnOutline, btnSolid, cx, label } from "./ui";

export type Tone = "dark" | "light";

/**
 * Opening on hover is only usable with two delays. Opening instantly makes the
 * panel flash while the pointer crosses the bar on its way somewhere else, and
 * closing instantly makes it impossible to travel diagonally from a trigger
 * down into the panel without passing over a neighbour. So: a short intent
 * delay in, a longer grace period out.
 */
const OPEN_DELAY = 90;
const CLOSE_DELAY = 180;

export function Wordmark({ tone }: { tone: Tone }) {
  const ink = tone === "light" ? "var(--color-ink)" : "var(--color-paper)";
  return (
    <a
      href="#"
      aria-label="GP Transco home"
      className="flex shrink-0 items-center gap-[11px]"
    >
      <svg
        viewBox="0 0 27 30"
        fill="none"
        aria-hidden="true"
        className="block h-[30px] w-[27px]"
      >
        <path
          d="M13.5 1.4 25.2 8.1v13.8L13.5 28.6 1.8 21.9V8.1z"
          stroke={ink}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M17.4 11.2a5.1 5.1 0 1 0 .5 6.4h-4.4"
          stroke="var(--color-azure)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cx(
          "font-display text-[12.5px] font-extrabold uppercase leading-[1.04] tracking-[0.055em]",
          "max-[1240px]:text-[11.5px]",
          tone === "light" ? "text-ink" : "text-paper",
        )}
      >
        GP
        <br />
        Transco
      </span>
    </a>
  );
}

function MegaPanel({ menu, shown }: { menu: Menu; shown: boolean }) {
  if (!menu.panel) return null;
  const { items, featured } = menu.panel;

  return (
    <div
      className={cx(
        "flex flex-col gap-7 p-[clamp(22px,2.2vw,34px)]",
        "transition-[opacity,transform] duration-300 ease-[var(--ease-out-strong)]",
        shown ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
      )}
    >
      <p className={cx(label, "m-0 text-azure-hi")}>{menu.label}</p>

      <div className="flex gap-x-[clamp(20px,2.2vw,40px)] max-[820px]:flex-col max-[820px]:gap-y-7">
        <ul className="m-0 grid flex-1 list-none grid-cols-4 gap-x-[clamp(16px,1.8vw,32px)] gap-y-6 p-0 max-[1320px]:grid-cols-3 max-[1024px]:grid-cols-2">
          {items.map((item) => {
            const Glyph = ITEM_ICONS[item.label];
            return (
              <li key={item.label}>
                <a
                  href={menu.href}
                  className="group/item flex gap-3 focus-visible:outline-offset-4"
                >
                  {Glyph ? (
                    <Glyph
                      size={19}
                      weight="regular"
                      aria-hidden="true"
                      className="mt-[3px] shrink-0 text-azure transition-colors duration-200 group-hover/item:text-azure-hi"
                    />
                  ) : null}
                  <span className="block">
                    <span className="block text-[14.5px] font-semibold leading-[1.3] text-paper transition-colors duration-200 group-hover/item:text-azure-hi">
                      {item.label}
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-[1.45] text-mute">
                      {item.blurb}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* One action, set against a rule rather than boxed. */}
        <div className="w-[290px] shrink-0 border-l border-rule pl-[clamp(18px,2vw,32px)] max-[820px]:w-auto max-[820px]:border-l-0 max-[820px]:border-t max-[820px]:pl-0 max-[820px]:pt-6">
          <p className="m-0 text-[18px] font-bold leading-[1.25] text-paper">
            {featured.label}
          </p>
          <p className="m-0 mt-2.5 text-[13.5px] leading-[1.5] text-mute">
            {featured.blurb}
          </p>
          <a
            href={menu.href}
            className={cx(btn, btnSolid, "mt-5 h-11 px-5 text-[13.5px]")}
          >
            {featured.cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-[clamp(16px,2.2vw,36px)] gap-y-3 border-t border-rule pt-5">
        <span className={cx(label, "text-mute-2")}>Explore more</span>
        {EXPLORE_MORE.map((e) => (
          <a
            key={e}
            href="#"
            className="text-[13.5px] font-medium text-mute transition-colors duration-200 hover:text-azure-hi"
          >
            {e}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteNav({ tone = "dark" }: { tone?: Tone }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const schedule = useCallback((next: string | null, delay: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(next), delay);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const light = tone === "light";
  const activeMenu = MENUS.find((m) => m.label === active && m.panel);

  return (
    <>
      {/* Nav and panel share one hover region, so the pointer never crosses a
          dead gap on its way down into the panel. */}
      <div
        className="relative z-40 shrink-0"
        onPointerLeave={() => schedule(null, CLOSE_DELAY)}
      >
        <nav
          aria-label="Primary"
          className={cx(
            "relative z-10 flex h-[var(--nav-h)] items-center px-gut",
            "gap-[clamp(14px,2.2vw,34px)] max-[1440px]:gap-[18px]",
          )}
        >
          <Wordmark tone={tone} />

          <div
            className={cx(
              "ml-[clamp(10px,2.4vw,34px)] flex items-center gap-[clamp(6px,1.4vw,20px)]",
              "max-[1440px]:ml-[18px] max-[1440px]:gap-1 max-[1240px]:gap-px max-[1120px]:hidden",
            )}
          >
            {MENUS.map((menu) => {
              const isOpen = active === menu.label;
              return (
                <a
                  key={menu.label}
                  href={menu.href}
                  aria-expanded={menu.panel ? isOpen : undefined}
                  onPointerEnter={() =>
                    schedule(menu.panel ? menu.label : null, OPEN_DELAY)
                  }
                  onFocus={() => schedule(menu.panel ? menu.label : null, 0)}
                  className={cx(
                    "relative flex items-center gap-1 whitespace-nowrap px-1 py-[9px] text-[13.5px] font-medium",
                    "transition-colors duration-200 ease-[var(--ease-out-strong)]",
                    "max-[1440px]:px-1.5 max-[1440px]:text-[12.8px] max-[1240px]:px-[5px] max-[1240px]:text-[12.2px]",
                    "after:absolute after:inset-x-1 after:bottom-0.5 after:h-[1.5px] after:bg-azure",
                    "after:origin-center after:transition-transform after:duration-200",
                    "after:ease-[var(--ease-out-strong)]",
                    isOpen ? "after:scale-x-100" : "after:scale-x-0",
                    "hover:after:scale-x-100",
                    light
                      ? "text-[#33465c] hover:text-ink"
                      : "text-[#c7d4e0] hover:text-paper",
                    isOpen && (light ? "text-ink" : "text-paper"),
                  )}
                >
                  {menu.label}
                  {menu.panel ? (
                    <CaretDown
                      size={11}
                      weight="bold"
                      aria-hidden="true"
                      className={cx(
                        "mt-px shrink-0 transition-transform duration-200 ease-[var(--ease-out-strong)]",
                        isOpen && "rotate-180",
                      )}
                    />
                  ) : null}
                </a>
              );
            })}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-[9px] max-[1120px]:hidden">
            <a href="#" className={cx(btn, btnNav, light ? btnOutline : btnGhost)}>
              Request a Quote
            </a>
            <a href="#" className={cx(btn, btnNav, btnSolid)}>
              <Truck size={18} />
              Apply to Drive
            </a>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              setOpen((v) => {
                if (v) setExpanded(null);
                return !v;
              });
            }}
            className={cx(
              "ml-auto hidden size-[42px] items-center justify-center rounded-full border",
              "transition-[transform,background-color] duration-200 ease-[var(--ease-out-strong)]",
              "active:scale-[0.97] max-[1120px]:inline-flex",
              light
                ? "border-[#c2ccd8] text-ink hover:bg-ink/5"
                : "border-rule-lit text-paper hover:bg-white/[0.07]",
            )}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </nav>

        <div
          className={cx(
            "absolute left-1/2 top-full w-[calc(100%-2*var(--gut))] max-w-[1680px] -translate-x-1/2",
            "origin-top bg-ink-2 ring-1 ring-rule-lit max-[1120px]:hidden",
            "shadow-[0_30px_80px_-28px_rgba(0,0,0,0.85)]",
            "transition-[opacity,visibility] duration-200 ease-[var(--ease-out-strong)]",
            activeMenu ? "visible opacity-100" : "invisible opacity-0",
          )}
        >
          {/* Every panel stays mounted so switching menus cross-fades in place
              instead of tearing the panel down and rebuilding it. */}
          {MENUS.filter((m) => m.panel).map((menu) => (
            <div
              key={menu.label}
              className={active === menu.label ? "block" : "hidden"}
            >
              <MegaPanel menu={menu} shown={active === menu.label} />
            </div>
          ))}
        </div>
      </div>

      <div
        id="site-drawer"
        className={cx(
          "fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-[37] overflow-y-auto px-gut pb-12 pt-5",
          "transition-transform duration-300 ease-[var(--ease-out-strong)]",
          open ? "visible translate-y-0" : "invisible -translate-y-full",
          light ? "bg-page text-ink" : "bg-[#080d15] text-paper",
        )}
      >
        {/* Both doors first: on a phone the reason to open the menu is usually
            to act, not to browse forty-three links. */}
        <div className="flex gap-2.5">
          <a
            href="#"
            className={cx(
              btn,
              "h-12 flex-1 justify-center px-4 text-[13.5px]",
              light ? btnOutline : btnGhost,
            )}
          >
            Request a Quote
          </a>
          <a
            href="#"
            className={cx(btn, btnSolid, "h-12 flex-1 justify-center px-4 text-[13.5px]")}
          >
            <Truck size={17} />
            Apply to Drive
          </a>
        </div>

        <div className="mt-7">
          {MENUS.map((menu) => {
            const isOpen = expanded === menu.label;
            const panelId = `drawer-${menu.label.replace(/\s+/g, "-").toLowerCase()}`;

            if (!menu.panel) {
              return (
                <a
                  key={menu.label}
                  href={menu.href}
                  className={cx(
                    "block border-b py-[15px] text-[15.5px] font-semibold",
                    light ? "border-line" : "border-rule",
                  )}
                >
                  {menu.label}
                </a>
              );
            }

            return (
              <div
                key={menu.label}
                className={cx("border-b", light ? "border-line" : "border-rule")}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isOpen ? null : menu.label)}
                  className="flex w-full items-center justify-between gap-4 py-[15px] text-left text-[15.5px] font-semibold"
                >
                  {menu.label}
                  <CaretDown
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className={cx(
                      "shrink-0 text-azure transition-transform duration-300 ease-[var(--ease-out-strong)]",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                {/* 0fr to 1fr animates height without measuring anything. */}
                <div
                  id={panelId}
                  className={cx(
                    "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-strong)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul
                      className={cx(
                        "m-0 mb-4 grid list-none grid-cols-2 gap-px p-0",
                        light ? "bg-line" : "bg-rule",
                      )}
                    >
                      {menu.panel.items.map((item) => {
                        const Glyph = ITEM_ICONS[item.label];
                        return (
                          <li key={item.label} className="contents">
                            <a
                              href={menu.href}
                              tabIndex={isOpen ? undefined : -1}
                              className={cx(
                                "flex items-center gap-2.5 px-3 py-3.5 text-[13px] font-medium leading-[1.3]",
                                light
                                  ? "bg-page text-ink-text"
                                  : "bg-[#080d15] text-paper",
                              )}
                            >
                              {Glyph ? (
                                <Glyph
                                  size={17}
                                  aria-hidden="true"
                                  className="shrink-0 text-azure"
                                />
                              ) : null}
                              {item.label}
                            </a>
                          </li>
                        );
                      })}
                      {menu.panel.items.length % 2 === 1 ? (
                        <li
                          aria-hidden="true"
                          className={light ? "bg-page" : "bg-[#080d15]"}
                        />
                      ) : null}
                    </ul>

                    <a
                      href={menu.href}
                      tabIndex={isOpen ? undefined : -1}
                      className={cx(
                        btn,
                        btnSolid,
                        "mb-5 h-11 w-full justify-center px-4 text-[13px]",
                      )}
                    >
                      {menu.panel.featured.cta}
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          {EXPLORE_MORE.map((e) => (
            <a
              key={e}
              href="#"
              className={cx(
                "text-[13.5px] font-medium",
                light ? "text-body-text" : "text-mute",
              )}
            >
              {e}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
