import { useState } from "react";
import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

interface DbItem {
  name: string;
  src?: string;
}

interface DatabasesPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  items: DbItem[];
}

function DbCard({ name, src }: DbItem) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center justify-center rounded-2xl bg-white p-8 shadow-md border border-zinc-100">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="h-30 w-auto max-w-full object-contain"
        />
      ) : (
        <span className="text-center text-sm font-semibold text-zinc-500">{name}</span>
      )}
    </div>
  );
}

export default function DatabasesPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  items,
}: DatabasesPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="px-14 pt-6">
        <div className="grid grid-cols-4 gap-4 rounded-3xl bg-zinc-50 p-6">
          {items.map((item) => (
            <DbCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </Page>
  );
}
