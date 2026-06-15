import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import LogoTile from "../ui/logo-tile";

export interface LogoItem {
  name: string;
  src?: string;
}

export interface LogoCategory {
  items: LogoItem[];
  label: string;
}

export interface CategoryLogoPageProps extends Pick<PageProps, "pageNumber"> {
  categories: LogoCategory[];
  highlight?: string;
  /** "rows" = label left, items right (Tech Stack). "columns" = vertical groups (API integrations). */
  layout?: "rows" | "columns";
  subtitle?: string;
  title: string;
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
      <PageHeader highlight={highlight} subtitle={subtitle} title={title} />

      {layout === "rows" ? (
        <div className="space-y-4 px-14 pt-7">
          {categories.map((cat) => (
            <div
              className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
              key={cat.label}
            >
              <p className="w-32 shrink-0 border-brand/30 border-r-2 pr-4 font-bold text-[15px] text-brand-dark">
                {cat.label}
              </p>
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {cat.items.map((item) => (
                  <LogoTile
                    className="h-12 min-w-24 px-5"
                    key={item.name}
                    name={item.name}
                    src={item.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 px-14 pt-7">
          {categories.map((cat) => (
            <div
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              key={cat.label}
            >
              <div className="bg-gradient-to-r from-brand to-brand-dark px-5 py-2.5">
                <p className="text-center font-bold text-[14px] text-white tracking-wide">
                  {cat.label}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 p-4">
                {cat.items.map((item) => (
                  <LogoTile
                    className="h-14 w-28"
                    key={item.name}
                    name={item.name}
                    src={item.src}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Page>
  );
}
