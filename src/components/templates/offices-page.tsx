import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

export interface Office {
  address: string;
  image?: string;
  name: string;
}

export interface OfficesPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  offices: Office[];
  title: string;
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
      <PageHeader highlight={highlight} title={title} />

      <div className="flex justify-center gap-10 px-14 pt-20">
        {offices.map((office) => (
          <div className="w-80" key={office.name}>
            <SmartImage
              className="h-70 w-full rounded-2xl object-contain object-top shadow-md"
              label={office.name}
              src={office.image}
            />
            <p className="mt-5 text-center font-bold text-base text-brand">
              {office.name}
            </p>
            <p className="mt-1.5 text-center font-medium text-sm text-zinc-600 leading-relaxed">
              {office.address}
            </p>
          </div>
        ))}
      </div>
    </Page>
  );
}
