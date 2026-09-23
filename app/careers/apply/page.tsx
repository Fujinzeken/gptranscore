import type { Metadata } from "next";
import { Briefcase } from "@phosphor-icons/react/dist/ssr";
import { SiteNav } from "@/components/site-nav";
import { QuickApply } from "@/components/driver-careers/quick-apply";
import { SiteFooter } from "@/components/site-footer";
import { cx, label } from "@/components/ui";

export const metadata: Metadata = {
  title: "Quick Apply | PKT",
  description:
    "Four questions, about a minute. No resume, no uploads, no account.",
};

export default function QuickApplyPage() {
  return (
    <>
      {/* Compact hero — this page's job is the form, not a build-up. */}
      <div className="relative isolate bg-ink overflow-hidden">
        <SiteNav />
        <div className="px-gut pb-[clamp(40px,7vh,88px)] pt-[clamp(88px,14vh,180px)]">
          <p
            className={cx(
              label,
              "text-azure-hi mb-4 flex items-center gap-2 tracking-[0.16em]",
            )}
          >
            <Briefcase size={15} weight="bold" />
            Driver Application
          </p>

          <h1
            className={cx(
              "font-display m-0 max-w-[14em] text-[clamp(34px,5.6vw,86px)]",
              "font-black uppercase leading-[0.88] tracking-[-0.03em] text-paper",
            )}
          >
            Quick <span className="text-azure-hi">apply.</span>
          </h1>

          <p className="mt-[clamp(18px,2.6vh,28px)] max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-mute">
            Four questions. No resume, no uploads, nothing to create an account
            for.
          </p>
        </div>
      </div>
      <QuickApply />
      <SiteFooter />
    </>
  );
}