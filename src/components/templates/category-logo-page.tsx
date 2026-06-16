import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import LogoTile from "../ui/logo-tile";
import { useImageFallback } from "../ui/use-image-fallback";

export interface LogoItem {
  name: string;
  src?: string;
}

// Soft pastel card themes cycled across the category grid.
const CARD_THEMES = [
  {
    bg: "from-amber-50/80 to-white",
    accent: "bg-amber-300",
    rule: "border-amber-200",
  },
  {
    bg: "from-rose-50/80 to-white",
    accent: "bg-rose-300",
    rule: "border-rose-200",
  },
  {
    bg: "from-emerald-50/80 to-white",
    accent: "bg-emerald-300",
    rule: "border-emerald-200",
  },
  {
    bg: "from-violet-50/80 to-white",
    accent: "bg-violet-300",
    rule: "border-violet-200",
  },
] as const;

//  A single logo + name item shown inline (icon beside its label).
function InlineLogo({ name, src }: LogoItem) {
  const { failed, ref } = useImageFallback(src);
  return (
    <div className="flex items-center gap-2">
      {src && !failed ? (
        <img
          alt={name}
          className="size-22 max-h-16 shrink-0 object-contain"
          ref={ref}
          src={src}
        />
      ) : (
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-white font-bold text-[11px] text-zinc-400 shadow-sm">
          {name.slice(0, 2)}
        </span>
      )}
      {/* <span className="font-medium text-[13px] text-zinc-700">{name}</span> */}
    </div>
  );
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
        <div className="grid grid-cols-2 gap-5 px-14 pt-7">
          {categories.map((cat, i) => {
            const theme = CARD_THEMES[i % CARD_THEMES.length];
            // A lone last card (odd count) spans the full row instead of half.
            const isLoneLast =
              i === categories.length - 1 && categories.length % 2 === 1;
            return (
              <div
                className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${theme.bg} p-5 pl-7 ${
                  isLoneLast ? "col-span-2" : ""
                }`}
                key={cat.label}
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-1.5 ${theme.accent}`}
                />
                <p className="font-semibold text-[16px] text-zinc-800">
                  {cat.label}
                </p>
                <div
                  className={`mt-2 mb-4 border-b border-dashed ${theme.rule}`}
                />
                <div className="flex flex-wrap gap-x-5 gap-y-4">
                  {cat.items.map((item) => (
                    <InlineLogo
                      key={item.name}
                      name={item.name}
                      src={item.src}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 px-14 pt-7">
          {categories.map((cat) => (
            <div
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              key={cat.label}
            >
              <div className="bg-linear-to-r from-brand to-brand-dark px-5 py-2.5">
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
