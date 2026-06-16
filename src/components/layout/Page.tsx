import type { ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
  className?: string;
  /** Accepted for deck ordering; not rendered (modern clean look). */
  pageNumber?: number;
  showAccent?: boolean;
  showFooter?: boolean; // kept for API compat, footer removed
}

/**
 * One fixed-size brochure page (1280×720). Clean modern canvas:
 * soft brand glows in the corners, no footer chrome.
 */
export default function Page({
  children,
  className = "",
  showAccent = true,
}: PageProps) {
  return (
    <section className={`page font-sans text-ink ${className}`}>
      {showAccent && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(126,34,206,.16), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-28 size-80 rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(126,34,206,.10), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand-deep via-brand to-fuchsia-400"
          />
        </>
      )}
      {children}
    </section>
  );
}
