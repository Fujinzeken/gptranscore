"use client";

import { useQuote } from "./quote-modal";

/**
 * Opens the quote flow from a server component.
 *
 * The sections are server-rendered, so they cannot call the modal's hook
 * directly. This is the smallest possible client boundary that lets any
 * section start the flow, rather than shipping a dead "#" link.
 */
export function QuoteButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useQuote();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
