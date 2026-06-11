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
            className="flex items-start gap-4 rounded-xl bg-gradient-to-r from-brand-soft/60 to-transparent p-4"
          >
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md bg-green-600 text-[13px] font-bold text-white">
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
