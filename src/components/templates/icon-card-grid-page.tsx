import type { LucideIcon } from "lucide-react";
import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

export interface IconCard {
  desc?: string;
  icon: LucideIcon;
  meta?: string;
  title: string;
}

export interface IconCardGridPageProps extends Pick<PageProps, "pageNumber"> {
  columns?: 2 | 3 | 4;
  highlight?: string;
  items: IconCard[];
  kicker?: string;
  subtitle?: string;
  title: string;
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
        <PageHeader
          highlight={highlight}
          kicker={kicker}
          subtitle={subtitle}
          title={title}
        />
        <div className={`grid ${colClass[columns]} gap-4 px-14 pt-6`}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-md"
                key={item.title}
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-fuchsia-500 shadow-sm">
                  <Icon className="text-white" size={26} strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 font-bold text-base text-brand-dark">
                  {item.title}
                </h3>
                {item.meta && (
                  <span className="mt-2 inline-block rounded-full bg-brand-soft px-4 py-1 font-semibold text-brand text-xs">
                    {item.meta}
                  </span>
                )}
                {item.desc && (
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
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
      <PageHeader
        highlight={highlight}
        kicker={kicker}
        subtitle={subtitle}
        title={title}
      />
      <div className={`grid ${colClass[columns]} gap-5 px-14 pt-8`}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className={`rounded-2xl border border-zinc-100 bg-white shadow-md ${dense ? "p-4" : "p-6"}`}
              key={item.title}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-fuchsia-500 shadow-sm ${dense ? "size-9" : "size-12"}`}
                >
                  <Icon
                    className="text-white"
                    size={dense ? 18 : 22}
                    strokeWidth={1.75}
                  />
                </div>
                <h3
                  className={`font-bold text-brand-dark ${dense ? "text-sm" : "text-lg"}`}
                >
                  {item.title}
                </h3>
              </div>
              {item.desc && (
                <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              )}
              {item.meta && (
                <p className="mt-2 font-semibold text-brand text-xs">
                  {item.meta}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Page>
  );
}
