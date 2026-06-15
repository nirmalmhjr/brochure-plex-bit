import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import { useImageFallback } from "../ui/use-image-fallback";

export interface CertificationItem {
  name: string;
  src?: string;
}

export interface CertificationsPageProps extends Pick<PageProps, "pageNumber"> {
  certifications: CertificationItem[];
  columns?: 2 | 3 | 4;
  highlight?: string;
  subtitle?: string;
  title: string;
}

const colClass = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

function CertificationBadge({ name, src }: CertificationItem) {
  const { failed, ref } = useImageFallback(src);

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      {src && !failed ? (
        <img
          alt={name}
          className="h-36 w-36 max-w-full object-contain"
          ref={ref}
          src={src}
        />
      ) : (
        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-brand/10">
          <span className="text-center font-semibold text-brand text-sm leading-snug">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function CertificationsPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  certifications,
  columns = 3,
}: CertificationsPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader highlight={highlight} subtitle={subtitle} title={title} />

      <div className="px-14 pt-8">
        <div className={`grid ${colClass[columns]} gap-6`}>
          {certifications.map((cert) => (
            <CertificationBadge
              key={cert.name}
              name={cert.name}
              src={cert.src}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
