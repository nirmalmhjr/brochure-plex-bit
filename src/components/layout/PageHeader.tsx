export interface PageHeaderProps {
  title: string;
  highlight?: string;
  kicker?: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * Modern section heading: kicker pill + two-tone bold title + gradient rule.
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
    <header className={`px-14 pt-11 ${centered ? "text-center" : ""}`}>
      {kicker && (
        <span className="mb-3 inline-block rounded-full bg-brand-soft px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-dark">
          {kicker}
        </span>
      )}
      <h2 className="text-[40px] font-extrabold leading-[1.12] tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      <div className={`mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-fuchsia-400 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-3 max-w-4xl text-[13px] leading-relaxed text-zinc-500 ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
