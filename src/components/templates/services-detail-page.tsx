import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

interface ServiceCategory {
  items: string[];
  title: string;
}

interface ServicesDetailPageProps extends Pick<PageProps, "pageNumber"> {
  categories: ServiceCategory[];
  highlight?: string;
  kicker?: string;
  subtitle?: string;
  title: string;
}

// Where each category sits in the bento grid. Staff Augmentation (index 2) is
// the tall tile on the right; the other four fill the 2×2 area beside it.
const tileLayout = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1",
  "col-start-3 row-start-1 row-span-2",
  "col-start-1 row-start-2",
  "col-start-2 row-start-2",
];

export default function ServicesDetailPage({
  pageNumber,
  title,
  highlight,
  kicker,
  subtitle,
  categories,
}: ServicesDetailPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader
        highlight={highlight}
        kicker={kicker}
        subtitle={subtitle}
        title={title}
      />

      <div className="grid grid-cols-3 gap-4 px-14 pt-8">
        {categories.map((category, index) => (
          <div
            className={`${tileLayout[index]} flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md`}
            key={category.title}
          >
            <div className="bg-gradient-to-br from-brand-deep via-brand to-fuchsia-500 px-4 py-3">
              <h3 className="font-bold text-lg text-white leading-tight">
                {category.title}
              </h3>
            </div>

            <ul className="flex flex-1 flex-col gap-3 p-4">
              {category.items.map((item) => (
                <li className="flex items-start gap-2" key={item}>
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-gradient-to-br from-brand to-fuchsia-500" />
                  <span className="text-sm text-zinc-600 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Page>
  );
}
