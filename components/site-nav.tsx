"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  CaretDown,
  List,
  Truck,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { ITEM_ICONS, MENUS, type Menu } from "./nav-menu";
import { useQuote } from "./quote-modal";
import { useDriverApply } from "./driver-apply-modal";
import { btn, btnGhost, btnNav, btnOutline, btnSolid, cx, label } from "./ui";

export type Tone = "dark" | "light";

/** Menu entries that start the quote flow instead of loading a page. */
const QUOTE_ITEMS = new Set(["Ship With Us"]);
const APPLY_ITEMS = new Set(["Apply to Drive"]);

/**
 * Opening on hover is only usable with two delays. Opening instantly makes the
 * panel flash while the pointer crosses the bar on its way somewhere else, and
 * closing instantly makes it impossible to travel diagonally from a trigger
 * down into the panel without passing over a neighbour. So: a short intent
 * delay in, a longer grace period out.
 */
const OPEN_DELAY = 90;
const CLOSE_DELAY = 180;

const PANEL_WIDTH = 800;
/** Matches the `max-[1120px]` breakpoint where the bar collapses to a drawer. */
const DESKTOP_QUERY = "(min-width: 1121px)";

const noopSubscribe = () => () => {};

/** Same-page hash links scroll smoothly instead of reloading the page. */
function followHash(e: ReactMouseEvent, href: string) {
  if (!href.includes("#")) return;
  const [path, hash] = href.split("#");
  const current = window.location.pathname.replace(/\/$/, "");
  const targetPath = path.replace(/\/$/, "");
  if (targetPath && current !== targetPath) return;
  const target = document.getElementById(hash);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `#${hash}`);
}

export function Wordmark({ tone }: { tone: Tone }) {
  const ink = tone === "light" ? "var(--color-ink)" : "var(--color-paper)";
  return (
    <Link
      href="/"
      aria-label="PKT home"
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
        PKT
      </span>
    </Link>
  );
}

function MegaPanel({
  menu,
  shown,
  onQuote,
  onApply,
  onClose,
}: {
  menu: Menu;
  shown: boolean;
  onQuote: () => void;
  onApply: () => void;
  onClose: () => void;
}) {
  if (!menu.panel) return null;
  const { items, featured } = menu.panel;
  const odd = items.length % 2 === 1;

  return (
    <div
      className={cx(
        "grid grid-cols-[minmax(0,1fr)_248px] max-[900px]:grid-cols-1",
        "transition-[opacity,transform] duration-300 ease-[var(--ease-out-strong)]",
        shown ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
      )}
    >
      <ul className="m-0 grid list-none grid-cols-2 content-start gap-1 p-3">
        {items.map((item, i) => {
          const Glyph = ITEM_ICONS[item.label];
          const isQuote = QUOTE_ITEMS.has(item.label);
          const isApply = APPLY_ITEMS.has(item.label);
          const isAction = isQuote || isApply;
          const itemHref = item.href ?? menu.href;
          const runAction = () => {
            onClose();
            if (isQuote) onQuote();
            if (isApply) onApply();
          };
          return (
            <li
              key={item.label}
              className={odd && i === items.length - 1 ? "col-span-2" : undefined}
            >
              <a
                href={isAction ? undefined : itemHref}
                role={isAction ? "button" : undefined}
                tabIndex={isAction ? 0 : undefined}
                onClick={(e) => {
                  if (isAction) {
                    e.preventDefault();
                    runAction();
                    return;
                  }
                  onClose();
                  followHash(e, itemHref);
                }}
                onKeyDown={
                  isAction
                    ? (e) => {
                        if (e.key !== "Enter" && e.key !== " ") return;
                        e.preventDefault();
                        runAction();
                      }
                    : undefined
                }
                className={cx(
                  "group/item flex h-full cursor-pointer gap-3 rounded-xl p-3.5",
                  "transition-colors duration-200 hover:bg-white/[0.045]",
                  "focus-visible:bg-white/[0.045] focus-visible:outline-offset-0",
                )}
              >
                {Glyph ? (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-azure/10 text-azure ring-1 ring-azure/20 transition-colors duration-200 group-hover/item:bg-azure/15 group-hover/item:text-azure-hi">
                    <Glyph size={18} weight="regular" aria-hidden="true" />
                  </span>
                ) : null}
                <span className="block min-w-0">
                  <span className="block text-[14.5px] font-semibold leading-[1.3] text-paper transition-colors duration-200 group-hover/item:text-azure-hi">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[13px] leading-[1.45] text-mute">
                    {item.blurb}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col border-l border-rule bg-white/[0.02] p-6 max-[900px]:border-l-0 max-[900px]:border-t">
        <p className={cx(label, "m-0 text-azure-hi")}>{menu.label}</p>
        <p className="m-0 mt-3 text-[17px] font-bold leading-[1.25] text-paper">
          {featured.label}
        </p>
        <p className="m-0 mt-2 text-[13px] leading-[1.5] text-mute">
          {featured.blurb}
        </p>
        <a
          href={menu.href}
          onClick={onClose}
          className={cx(
            btn,
            btnSolid,
            "mt-auto h-10 justify-center self-start px-4 text-[13px] max-[900px]:mt-5",
          )}
        >
          {featured.cta}
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

type PanelPos = { top: number; left: number; width: number };

export function SiteNav({ tone = "dark" }: { tone?: Tone }) {
  const { open: openQuote } = useQuote();
  const { openApplyModal } = useDriverApply();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const [pos, setPos] = useState<PanelPos | null>(null);
  const [drawerTop, setDrawerTop] = useState(0);
  const timer = useRef<number | undefined>(undefined);
  const wrapRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggers = useRef(new Map<string, HTMLAnchorElement>());
  const pointerType = useRef<string>("mouse");

  const schedule = useCallback((next: string | null, delay: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(next), delay);
  }, []);

  const hold = useCallback(() => window.clearTimeout(timer.current), []);

  const closeAll = useCallback(() => {
    window.clearTimeout(timer.current);
    setActive(null);
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
      closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (mq.matches) setOpen(false);
      else closeAll();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeAll]);

  /* The panel lives in a portal, so it is placed in document coordinates:
     under the bar, starting at its trigger, and clamped inside the gutters. */
  const place = useCallback(() => {
    const nav = navRef.current;
    const trigger = active ? triggers.current.get(active) : undefined;
    if (!nav || !trigger) return;
    const vw = document.documentElement.clientWidth;
    const gut = parseFloat(getComputedStyle(nav).paddingLeft) || 20;
    const width = Math.min(PANEL_WIDTH, vw - gut * 2);
    const t = trigger.getBoundingClientRect();
    const left = Math.min(Math.max(t.left - 16, gut), vw - gut - width);
    setPos({
      top: nav.getBoundingClientRect().bottom + window.scrollY,
      left: left + window.scrollX,
      width,
    });
  }, [active]);

  useLayoutEffect(() => {
    if (!active) return;
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active, place]);

  /* Touch has no hover, so a tap outside is the only way to dismiss. */
  useEffect(() => {
    if (!active) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (wrapRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      closeAll();
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [active, closeAll]);

  const toggleDrawer = () => {
    const bottom = navRef.current?.getBoundingClientRect().bottom ?? 0;
    setDrawerTop(Math.max(0, bottom));
    setOpen((v) => {
      if (v) setExpanded(null);
      return !v;
    });
  };

  const light = tone === "light";
  const activeMenu = MENUS.find((m) => m.label === active && m.panel);

  const panel = (
    <div
      ref={panelRef}
      onPointerEnter={hold}
      onPointerLeave={(e) => {
        if (e.pointerType !== "touch") schedule(null, CLOSE_DELAY);
      }}
      style={
        pos ? { top: pos.top, left: pos.left, width: pos.width } : undefined
      }
      className={cx(
        "absolute z-[45] overflow-hidden rounded-b-[18px] rounded-t-md bg-ink-2 ring-1 ring-rule-lit",
        "shadow-[0_30px_80px_-28px_rgba(0,0,0,0.85)] max-[1120px]:hidden",
        "transition-[opacity,visibility] duration-200 ease-[var(--ease-out-strong)]",
        activeMenu && pos ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      {/* Every panel stays mounted so switching menus cross-fades in place
          instead of tearing the panel down and rebuilding it. */}
      {MENUS.filter((m) => m.panel).map((menu) => (
        <div
          key={menu.label}
          className={active === menu.label ? "block" : "hidden"}
        >
          <MegaPanel
            menu={menu}
            shown={active === menu.label}
            onQuote={() => {
              closeAll();
              openQuote();
            }}
            onApply={() => {
              closeAll();
              openApplyModal();
            }}
            onClose={closeAll}
          />
        </div>
      ))}
    </div>
  );

  const drawer = (
    <div
      id="site-drawer"
      style={{ top: drawerTop }}
      className={cx(
        "fixed inset-x-0 bottom-0 z-[44] overflow-y-auto px-gut pb-12 pt-5 min-[1121px]:hidden",
        "transition-[transform,visibility] duration-300 ease-[var(--ease-out-strong)]",
        open ? "visible translate-y-0" : "invisible -translate-y-4",
        light ? "bg-page text-ink" : "bg-[#080d15] text-paper",
      )}
    >
      {/* Both doors first: on a phone the reason to open the menu is usually
          to act, not to browse forty-three links. */}
      <div className="flex gap-2.5 max-[380px]:flex-col">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            openQuote();
          }}
          className={cx(
            btn,
            "h-12 flex-1 justify-center px-4 text-[13.5px]",
            light ? btnOutline : btnGhost,
          )}
        >
          Request a Quote
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            openApplyModal();
          }}
          className={cx(
            btn,
            btnSolid,
            "h-12 flex-1 cursor-pointer justify-center px-4 text-[13.5px]",
          )}
        >
          <Truck size={17} />
          Drive With PKT
        </button>
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
                onClick={() => setOpen(false)}
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
                  <ul className="m-0 mb-4 grid list-none grid-cols-1 gap-1 p-0 min-[560px]:grid-cols-2">
                    {menu.panel.items.map((item) => {
                      const Glyph = ITEM_ICONS[item.label];
                      const isQuote = QUOTE_ITEMS.has(item.label);
                      const isApply = APPLY_ITEMS.has(item.label);
                      const isAction = isQuote || isApply;
                      const itemHref = item.href ?? menu.href;
                      return (
                        <li key={item.label}>
                          <a
                            href={isAction ? undefined : itemHref}
                            role={isAction ? "button" : undefined}
                            tabIndex={isOpen ? undefined : -1}
                            onClick={(e) => {
                              setOpen(false);
                              if (isAction) {
                                e.preventDefault();
                                if (isQuote) openQuote();
                                if (isApply) openApplyModal();
                                return;
                              }
                              followHash(e, itemHref);
                            }}
                            className={cx(
                              "flex items-start gap-3 rounded-xl px-3 py-3 transition-colors duration-200",
                              light
                                ? "text-ink-text hover:bg-ink/5"
                                : "text-paper hover:bg-white/[0.05]",
                            )}
                          >
                            {Glyph ? (
                              <Glyph
                                size={18}
                                aria-hidden="true"
                                className="mt-px shrink-0 text-azure"
                              />
                            ) : null}
                            <span className="block min-w-0">
                              <span className="block text-[14px] font-semibold leading-[1.3]">
                                {item.label}
                              </span>
                              <span
                                className={cx(
                                  "mt-0.5 block text-[12.5px] leading-[1.45]",
                                  light ? "text-soft-text" : "text-mute",
                                )}
                              >
                                {item.blurb}
                              </span>
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={menu.href}
                    tabIndex={isOpen ? undefined : -1}
                    onClick={() => setOpen(false)}
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
    </div>
  );

  return (
    <>
      <div
        ref={wrapRef}
        className="relative z-40 shrink-0"
        onPointerLeave={(e) => {
          if (e.pointerType !== "touch") schedule(null, CLOSE_DELAY);
        }}
      >
        <nav
          ref={navRef}
          aria-label="Primary"
          className={cx(
            "relative z-10 flex h-[var(--nav-h)] items-center px-gut",
            "gap-[clamp(14px,2.2vw,34px)] max-[1440px]:gap-[18px]",
          )}
        >
          <Link href="/" aria-label="PKT home" className="block shrink-0">
            <Image
              src="/pkt-logo1.png"
              alt="PKT"
              width={150}
              height={98}
              priority
              className="block h-7 w-auto brightness-0 invert"
            />
          </Link>

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
                  ref={(el) => {
                    if (el) triggers.current.set(menu.label, el);
                    else triggers.current.delete(menu.label);
                  }}
                  href={menu.href}
                  aria-expanded={menu.panel ? isOpen : undefined}
                  aria-haspopup={menu.panel ? "true" : undefined}
                  onPointerDown={(e) => {
                    pointerType.current = e.pointerType;
                  }}
                  onPointerEnter={(e) => {
                    pointerType.current = e.pointerType;
                    if (e.pointerType === "touch") return;
                    schedule(menu.panel ? menu.label : null, OPEN_DELAY);
                  }}
                  onFocus={() => schedule(menu.panel ? menu.label : null, 0)}
                  onClick={(e) => {
                    /* A tap has no hover, so the first tap opens the panel and
                       a second tap on the same trigger follows the link. */
                    if (!menu.panel || pointerType.current !== "touch") return;
                    if (isOpen) return;
                    e.preventDefault();
                    window.clearTimeout(timer.current);
                    setActive(menu.label);
                  }}
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
            <button
              type="button"
              onClick={openQuote}
              className={cx(btn, btnNav, light ? btnOutline : btnGhost)}
            >
              Request a Quote
            </button>
            <button
              type="button"
              onClick={openApplyModal}
              className={cx(btn, btnNav, btnSolid, "cursor-pointer")}
            >
              <Truck size={18} />
              Drive With PKT
            </button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={toggleDrawer}
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
      </div>

      {/* Portalled to <body>: every page mounts the nav inside a hero with
          `overflow-hidden` and `isolate`, which would otherwise clip the panel
          and let later sections paint over both the panel and the drawer. */}
      {mounted ? createPortal(panel, document.body) : null}
      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
