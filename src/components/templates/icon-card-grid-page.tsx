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
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl"
                key={item.title}
              >
                {/* oversized ghost icon for depth */}
                <Icon
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -bottom-3 size-24 text-purple-100/70 transition-colors group-hover:text-purple-200/70"
                  strokeWidth={1.25}
                />
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-800 via-purple-700 to-fuchsia-500 text-white shadow-lg shadow-purple-700/25 transition-transform group-hover:scale-105">
                  <Icon size={26} strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-4 font-bold text-base text-zinc-900 tracking-tight">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="relative mt-1 text-xs text-zinc-500 leading-snug">
                    {item.desc}
                  </p>
                )}
                <span className="relative mt-3 h-1 w-8 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-400 transition-all group-hover:w-14" />
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
