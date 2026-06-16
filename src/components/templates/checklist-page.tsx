import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

export interface ChecklistItem {
  desc?: string;
  title: string;
}

export interface ChecklistPageProps extends Pick<PageProps, "pageNumber"> {
  columns?: 1 | 2;
  highlight?: string;
  intro?: string;
  items: ChecklistItem[];
  title: string;
}

/**
 * Check-marked feature list — Working Models, Our Capabilities, …
 */
export default function ChecklistPage({
  pageNumber,
  title,
  highlight,
  intro,
  items,
  columns = 2,
}: ChecklistPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader highlight={highlight} subtitle={intro} title={title} />

      <div
        className={`grid gap-x-10 gap-y-4 px-14 pt-8 ${
          columns === 2 ? "grid-cols-2" : "max-w-3xl grid-cols-1"
        }`}
      >
        {items.map((item) => (
          <div
            className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-xl"
            key={item.title}
          >
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand to-fuchsia-500 font-bold text-sm text-white shadow-brand/30 shadow-md">
              ✓
            </span>
            <div>
              <p className="font-bold text-base text-brand-dark leading-snug">
                {item.title}
              </p>
              {item.desc && (
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
