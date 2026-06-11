import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

export interface IconCard {
  icon: string;
  title: string;
  desc?: string;
  /** Small highlighted line under the description, e.g. "+5 products". */
  meta?: string;
}

export interface IconCardGridPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  kicker?: string;
  subtitle?: string;
  items: IconCard[];
  columns?: 2 | 3 | 4;
  /** "row" = icon beside title (default). "tile" = centered showcase tile. */
  variant?: "row" | "tile";
}

const colClass = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

/**
 * The workhorse template: a grid of icon cards.
 * Used for: Services, Why Choose Us, Vision & Mission, Industries, …
 */
export default function IconCardGridPage({
  pageNumber,
  title,
  highlight,
  kicker,
  subtitle,
  items,
  columns = 3,
  variant = "row",
}: IconCardGridPageProps) {
  const dense = items.length > 6;

  if (variant === "tile") {
    return (
      <Page pageNumber={pageNumber}>
        <PageHeader title={title} highlight={highlight} kicker={kicker} subtitle={subtitle} />
        <div className={`grid ${colClass[columns]} gap-4 px-14 pt-7`}>
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 text-center shadow-[0_8px_30px_rgba(59,7,100,0.06)]"
            >
              {/* faint corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(217,70,239,.12), transparent 70%)" }}
              />
              <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-fuchsia-500 text-xl text-white shadow-md shadow-brand/30">
                {item.icon}
              </span>
              <h3 className="mt-2.5 text-[16px] font-bold text-brand-dark">{item.title}</h3>
              {item.meta && (
                <span className="mt-2 inline-block rounded-full bg-brand-soft px-3.5 py-1 text-[11px] font-semibold text-brand-dark">
                  {item.meta}
                </span>
              )}
              {item.desc && (
                <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </Page>
    );
  }

  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} kicker={kicker} subtitle={subtitle} />

      <div className={`grid ${colClass[columns]} gap-5 px-14 pt-8`}>
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-zinc-100 bg-white shadow-[0_8px_30px_rgba(59,7,100,0.06)] ${
              dense ? "p-4" : "p-6"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-fuchsia-500 text-white shadow-md shadow-brand/30 ${
                  dense ? "size-9 text-base" : "size-12 text-xl"
                }`}
              >
                {item.icon}
              </span>
              <h3 className={`font-bold text-brand-dark ${dense ? "text-[15px]" : "text-[17px]"}`}>
                {item.title}
              </h3>
            </div>
            {item.desc && (
              <p className="mt-3 text-[12.5px] leading-relaxed text-zinc-500">
                {item.desc}
              </p>
            )}
            {item.meta && (
              <p className="mt-2 text-[12px] font-semibold text-brand">{item.meta}</p>
            )}
          </div>
        ))}
      </div>
    </Page>
  );
}
