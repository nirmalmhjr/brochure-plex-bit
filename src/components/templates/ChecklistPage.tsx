import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

export interface ChecklistItem {
  title: string;
  desc?: string;
}

export interface ChecklistPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  intro?: string;
  items: ChecklistItem[];
  columns?: 1 | 2;
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
      <PageHeader title={title} highlight={highlight} subtitle={intro} />

      <div
        className={`grid gap-x-10 gap-y-4 px-14 pt-8 ${
          columns === 2 ? "grid-cols-2" : "max-w-3xl grid-cols-1"
        }`}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_8px_30px_rgba(59,7,100,0.05)]"
          >
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-fuchsia-500 text-[13px] font-bold text-white shadow-md shadow-brand/30">
              ✓
            </span>
            <div>
              <p className="text-[15px] font-bold leading-snug text-brand-dark">
                {item.title}
              </p>
              {item.desc && (
                <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-500">
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
