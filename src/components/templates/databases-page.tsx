import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import { useImageFallback } from "../ui/use-image-fallback";

interface DbItem {
  name: string;
  src?: string;
}

interface DatabasesPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  items: DbItem[];
  subtitle?: string;
  title: string;
}

function DbCard({ name, src }: DbItem) {
  const { failed, ref } = useImageFallback(src);

  return (
    <div className="flex items-center justify-center rounded-2xl border border-zinc-100 bg-white p-8 shadow-md">
      {src && !failed ? (
        <img
          alt={name}
          className="h-30 w-30 max-w-full object-contain"
          ref={ref}
          src={src}
        />
      ) : (
        <span className="text-center font-semibold text-sm text-zinc-500">
          {name}
        </span>
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
      <PageHeader highlight={highlight} subtitle={subtitle} title={title} />

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
