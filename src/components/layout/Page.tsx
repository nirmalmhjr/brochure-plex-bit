import type { ReactNode } from "react";
import { company } from "../../data/brochure";
import SlashAccent from "../ui/SlashAccent";

export interface PageProps {
  children: ReactNode;
  /** Injected automatically by App.tsx — index of the page in the deck. */
  pageNumber?: number;
  className?: string;
  /** Hide the website / page-number footer (cover, contact, …). */
  showFooter?: boolean;
  /** Hide the decorative corner slashes. */
  showAccent?: boolean;
}

/**
 * One fixed-size brochure page (1280×720). Everything rendered inside
 * must fit — there is no scrolling on a printed page.
 */
export default function Page({
  children,
  pageNumber,
  className = "",
  showFooter = true,
  showAccent = true,
}: PageProps) {
  return (
    <section className={`page font-sans text-ink ${className}`}>
      {showAccent && (
        <div className="absolute right-12 top-8">
          <SlashAccent />
        </div>
      )}

      {children}

      {showFooter && (
        <footer className="absolute bottom-5 left-14 right-14 flex items-end justify-between">
          <div className="flex items-center gap-2.5 border-l-4 border-brand pl-3">
            <div className="leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                Website
              </p>
              <p className="text-[13px] font-semibold text-brand">
                {company.website}
              </p>
            </div>
          </div>
          {pageNumber != null && pageNumber > 0 && (
            <span className="grid size-9 place-items-center rounded-full bg-zinc-100 text-[12px] font-semibold text-zinc-500">
              {String(pageNumber).padStart(2, "0")}
            </span>
          )}
        </footer>
      )}
    </section>
  );
}
