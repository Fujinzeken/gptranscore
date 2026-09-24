import type { Metadata } from "next";
import { Headset } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/site-nav";
import { ContactForm } from "@/components/contact/contact-routes";
import { SiteFooter } from "@/components/site-footer";
import { cx, label } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact PKT | Quotes, Operations and Recruiting",
  description:
    "Reach the right team directly. Separate routes for quotes, existing customers, driver recruiting and vendors.",
};

export default function ContactPage() {
  return (
    <>
      {/* Dark hero plate, same grammar as /careers/apply. */}
      <div className="relative isolate overflow-hidden bg-ink">
        <SiteNav />
        <div className="px-gut pb-[clamp(48px,8vh,104px)] pt-[clamp(96px,15vh,190px)]">
          <p
            className={cx(
              label,
              "text-azure-hi mb-4 flex items-center gap-2 tracking-[0.16em]",
            )}
          >
            <Headset size={15} weight="bold" />
            Contact PKT
          </p>

          <h1
            className={cx(
              "font-display m-0 max-w-[12em] text-[clamp(34px,5.6vw,86px)]",
              "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
            )}
          >
            Reach the{" "}
            <span className="text-azure-hi">right team.</span>
          </h1>

          <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
            Separate routes rather than one form, so nobody waits behind the
            wrong queue. Pick yours — the form follows.
          </p>
        </div>
      </div>

      <ContactForm />
      <SiteFooter />
    </>
  );
}