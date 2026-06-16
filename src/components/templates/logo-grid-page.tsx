import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import LogoTile from "../ui/logo-tile";

export interface LogoItem {
  name: string;
  src?: string;
}

export interface LogoGridPageProps extends Pick<PageProps, "pageNumber"> {
  columns?: 3 | 4 | 5;
  highlight?: string;
  logos: LogoItem[];
  subtitle?: string;
  title: string;
}

const colClass = {
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
} as const;

/**
 * Plain grid of logos — Clients, Databases, Certifications, Recognition, …
 */
export default function LogoGridPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  logos,
  columns = 5,
}: LogoGridPageProps) {
  const tall = logos.length <= 8;
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader highlight={highlight} subtitle={subtitle} title={title} />

      <div className="px-14 pt-4">
        <div
          className={`grid ${colClass[columns]} gap-4 rounded-2xl border border-brand/25 bg-zinc-50/60 p-6`}
        >
          {logos.map((logo) => (
            <LogoTile
              className={tall ? "h-28" : "h-16"}
              key={logo.name}
              name={logo.name}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
