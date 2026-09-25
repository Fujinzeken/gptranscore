"use client";

import { House } from "@phosphor-icons/react/dist/ssr";
import { ClosingCTA } from "./closing-cta";
import { useQuote } from "./quote-modal";

export function NotFoundCta() {
  const { open: openQuote } = useQuote();

  return (
    <ClosingCTA
      id="not-found-quote"
      ariaLabel="Recover from a missing page"
      eyebrow="Still need something?"
      headline={
        <>
          Get a real <span className="text-azure-hi">answer.</span>
        </>
      }
      copy="If you were looking for capacity, not a page — send the lane and we'll come back with a clear answer on availability."
      primaryLabel="Request a Quote"
      onPrimary={openQuote}
      secondaryLabel="Back to the homepage"
      secondaryHref="/"
      SecondaryIcon={House}
      note="Status: 404 · Re-route available"
    />
  );
}
