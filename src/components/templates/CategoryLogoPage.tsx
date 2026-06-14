import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import LogoTile from "../ui/LogoTile";

export interface LogoItem {
  name: string;
  src?: string;
}

export interface LogoCategory {
  label: string;
  items: LogoItem[];
}

export interface CategoryLogoPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  categories: LogoCategory[];
  /** "rows" = label left, items right (Tech Stack). "columns" = vertical groups (API integrations). */
  layout?: "rows" | "columns";
}

/**
 * Logos grouped by category — Technology Stack, Major API Integrations, …
 */
export default function CategoryLogoPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  categories,
  layout = "rows",
}: CategoryLogoPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      {layout === "rows" ? (
        <div className="space-y-4 px-14 pt-7">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
            >
              <p className="w-32 shrink-0 border-r-2 border-brand/30 pr-4 text-[15px] font-bold text-brand-dark">
                {cat.label}
              </p>
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {cat.items.map((item) => (
                  <LogoTile key={item.name} name={item.name} src={item.src} className="h-12 min-w-24 px-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 px-14 pt-7">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="bg-gradient-to-r from-brand to-brand-dark px-5 py-2.5">
                <p className="text-center text-[14px] font-bold text-white tracking-wide">
                  {cat.label}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 p-4">
                {cat.items.map((item) => (
                  <LogoTile key={item.name} name={item.name} src={item.src} className="h-14 w-28" />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Page>
  );
}
