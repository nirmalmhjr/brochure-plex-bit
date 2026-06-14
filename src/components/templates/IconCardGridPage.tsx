import type { LucideIcon } from "lucide-react";
import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

export interface IconCard {
  icon: LucideIcon;
  title: string;
  desc?: string;
  meta?: string;
}

export interface IconCardGridPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  kicker?: string;
  subtitle?: string;
  items: IconCard[];
  columns?: 2 | 3 | 4;
  variant?: "row" | "tile";
}

const colClass = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

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
        <div className={`grid ${colClass[columns]} gap-4 px-14 pt-6`}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-md"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-fuchsia-500 shadow-sm">
                  <Icon size={26} strokeWidth={1.75} className="text-white" />
                </div>
                <h3 className="mt-3 text-base font-bold text-brand-dark">{item.title}</h3>
                {item.meta && (
                  <span className="mt-2 inline-block rounded-full bg-brand-soft px-4 py-1 text-xs font-semibold text-brand">
                    {item.meta}
                  </span>
                )}
                {item.desc && (
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </Page>
    );
  }

  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} kicker={kicker} subtitle={subtitle} />
      <div className={`grid ${colClass[columns]} gap-5 px-14 pt-8`}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`rounded-2xl border border-zinc-100 bg-white shadow-md ${dense ? "p-4" : "p-6"}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-fuchsia-500 shadow-sm ${dense ? "size-9" : "size-12"}`}
                >
                  <Icon size={dense ? 18 : 22} strokeWidth={1.75} className="text-white" />
                </div>
                <h3 className={`font-bold text-brand-dark ${dense ? "text-sm" : "text-lg"}`}>
                  {item.title}
                </h3>
              </div>
              {item.desc && (
                <p className="mt-3 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
              )}
              {item.meta && (
                <p className="mt-2 text-xs font-semibold text-brand">{item.meta}</p>
              )}
            </div>
          );
        })}
      </div>
    </Page>
  );
}
