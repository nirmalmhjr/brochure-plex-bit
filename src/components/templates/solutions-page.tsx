import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

interface RecognitionLogo {
  name: string;
  src: string;
}

export interface SolutionsPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  image?: string;
  imageLabel?: string;
  kicker?: string;
  paragraphs: string[];
  recognitionLogos?: RecognitionLogo[];
  title: string;
}

export default function SolutionsPage({
  pageNumber,
  title,
  highlight,
  kicker,
  paragraphs,
  image,
  imageLabel,
  recognitionLogos,
}: SolutionsPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* left panel */}
        <div className="flex w-[55%] flex-col">
          <PageHeader highlight={highlight} kicker={kicker} title={title} />
          <div className="space-y-4 px-14 pt-6 text-[14.5px] text-zinc-600 leading-relaxed">
            {paragraphs.map((p) => (
              <p className="text-justify" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          {recognitionLogos && recognitionLogos.length > 0 && (
            <div className="flex gap-6 px-14 pt-10">
              {recognitionLogos.map((logo) => (
                <img
                  alt={logo.name}
                  className="size-40 object-contain"
                  key={logo.name}
                  src={logo.src}
                />
              ))}
            </div>
          )}
        </div>
        {/* right panel */}
        <div className="flex w-[45%] items-center justify-center pr-14 pl-4">
          <SmartImage
            className="h-[520px] w-full rounded-tl-[90px] rounded-br-[90px] shadow-lg"
            label={imageLabel ?? "Photo"}
            src={image}
          />
        </div>
      </div>
    </Page>
  );
}
