"use client";

// BlogNewsletter — compact newsletter CTA band
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { label, cx } from "@/components/ui";

export default function BlogNewsletter() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-16">
      {/* Dot-matrix texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative container mx-auto max-w-3xl px-4 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-rule-lit/30 px-4 py-1.5">
          <EnvelopeSimple size={14} className="text-azure-hi" weight="bold" />
          <span className={cx(label, "text-azure-hi")}>Newsletter</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-paper leading-tight">
          Get industry insights
          <br />
          delivered to your inbox
        </h2>
        <p className="text-mute max-w-md mx-auto">
          Monthly roundups of logistics trends, driver stories, and GP Transco news — no spam, unsubscribe anytime.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 rounded-full bg-surface border border-rule text-ink-text placeholder:text-mute focus:outline-none focus:border-azure transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-azure text-white font-semibold hover:bg-azure-hi transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-mute">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
