import Page, { type PageProps } from "../layout/page";
import StatRing from "../ui/stat-ring";

export interface Stat {
  label: string;
  value: string;
}

export interface StatsPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  note?: string;
  stats: Stat[];
  subtitle?: string;
  title: string;
}

export default function StatsPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  stats,
  note,
}: StatsPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* Left panel — brand gradient */}
        <div className="relative flex w-[42%] flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-fuchsia-600 px-12 py-14">
          {/* decorative circles */}
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/5"
          />
          <div
            aria-hidden
            className="absolute -top-16 -right-16 size-56 rounded-full bg-white/5"
          />
          <div
            aria-hidden
            className="absolute right-10 bottom-28 size-28 rounded-full bg-white/5"
          />

          <h2 className="relative font-extrabold text-5xl text-white leading-[1.1] tracking-tight">
            {title}{" "}
            {highlight && <span className="text-fuchsia-200">{highlight}</span>}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-white/40" />

          {subtitle && (
            <p className="mt-5 max-w-xs text-base text-white/80 leading-relaxed">
              {subtitle}
            </p>
          )}

          {note && (
            <div className="mt-7 rounded-xl border border-white/20 bg-white/10 px-5 py-4">
              <p className="text-sm text-white/90 leading-relaxed">{note}</p>
            </div>
          )}
        </div>

        {/* Right panel — 2×2 stat ring grid */}
        <div className="flex flex-1 items-center justify-center">
          <div className="grid grid-cols-2 gap-10">
            {stats.map((stat) => (
              <StatRing
                key={stat.label}
                label={stat.label}
                sizePx={210}
                value={stat.value}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
