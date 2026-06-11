export interface PageHeaderProps {
  /** Plain (dark) part of the heading, e.g. "Our". */
  title: string;
  /** Brand-gradient part of the heading, e.g. "Services". */
  highlight?: string;
  /** Small grey text above the heading. */
  kicker?: string;
  /** Small grey text below the heading. */
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * Tricore-style section heading: accent bar + two-tone bold title.
 */
export default function PageHeader({
  title,
  highlight,
  kicker,
  subtitle,
  align = "left",
}: PageHeaderProps) {
  const centered = align === "center";
  return (
    <header className={`px-14 pt-10 ${centered ? "text-center" : ""}`}>
      <div className={`mb-3 h-1.5 w-16 rounded-full bg-brand ${centered ? "mx-auto" : ""}`} />
      {kicker && (
        <p className="text-[13px] font-medium uppercase tracking-widest text-zinc-400">
          {kicker}
        </p>
      )}
      <h2 className="text-[38px] font-bold leading-[1.15] tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 max-w-4xl text-[13px] leading-relaxed text-zinc-500 ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
