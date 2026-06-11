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
}: IconCardGridPageProps) {
  const dense = items.length > 6;
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} kicker={kicker} subtitle={subtitle} />

      <div className={`grid ${colClass[columns]} gap-5 px-14 pt-8`}>
        {items.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-brand-soft/40 shadow-sm ${
              dense ? "p-4" : "p-6"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid shrink-0 place-items-center rounded-full bg-brand text-white ${
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
