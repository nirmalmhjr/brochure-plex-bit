import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import LogoTile from "../ui/LogoTile";

export interface LogoItem {
  name: string;
  src?: string;
}

export interface LogoGridPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  logos: LogoItem[];
  columns?: 3 | 4 | 5;
}

const colClass = { 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5" } as const;

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
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="px-14 pt-8">
        <div className={`grid ${colClass[columns]} gap-4 rounded-2xl border border-brand/25 bg-zinc-50/60 p-6`}>
          {logos.map((logo) => (
            <LogoTile
              key={logo.name}
              name={logo.name}
              src={logo.src}
              className={tall ? "h-28" : "h-20"}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
