import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";

export interface Office {
  name: string;
  address: string;
  image?: string;
}

export interface OfficesPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  offices: Office[];
}

/**
 * Office location cards — used for both development and business offices.
 */
export default function OfficesPage({
  pageNumber,
  title,
  highlight,
  offices,
}: OfficesPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} />

      <div className="flex justify-center gap-10 px-14 pt-12">
        {offices.map((office) => (
          <div key={office.name} className="w-80">
            <SmartImage
              src={office.image}
              label={office.name}
              className="h-60 w-full rounded-2xl shadow-md"
            />
            <p className="mt-5 text-center text-[16px] font-bold text-brand">
              {office.name}
            </p>
            <p className="mt-1.5 text-center text-[13px] font-medium leading-relaxed text-zinc-600">
              {office.address}
            </p>
          </div>
        ))}
      </div>
    </Page>
  );
}
