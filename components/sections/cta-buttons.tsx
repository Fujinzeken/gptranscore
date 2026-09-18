"use client";

import type { ReactNode } from "react";
import { useQuote } from "../quote-modal";
import { useDriverApply } from "../driver-apply-modal";

/**
 * Client bridges for the homepage sections. The sections themselves stay
 * server components; only the action needs the modal context, so these two
 * buttons carry it. Same contract as the nav: "Request a Quote" opens the
 * quote flow, "Drive With PKT" opens the driver application.
 */
export function QuoteButton({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  const { open } = useQuote();
  return (
    <button type="button" onClick={open} className={className} style={style}>
      {children}
    </button>
  );
}

export function ApplyButton({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  const { openApplyModal } = useDriverApply();
  return (
    <button
      type="button"
      onClick={openApplyModal}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}