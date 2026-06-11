import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import StatRing from "../ui/StatRing";

export interface Stat {
  value: string;
  label: string;
}

export interface StatsPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  stats: Stat[];
  note?: string;
}

/**
 * Big numbers page — Tricore-style stat rings + an optional note card.
 */
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
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="flex items-center justify-center gap-14 px-14 pt-14">
        {stats.map((stat) => (
          <StatRing key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      {note && (
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-brand px-10 py-5 text-center">
          <p className="text-[14px] font-medium leading-relaxed text-white">{note}</p>
        </div>
      )}
    </Page>
  );
}
