import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

interface RecognitionLogo {
  name: string;
  src: string;
}

export interface SolutionsPageProps extends Pick<PageProps, "pageNumber"> {
  awardsLogos?: RecognitionLogo[];
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
  // image,
  // imageLabel,
  recognitionLogos,
  awardsLogos,
}: SolutionsPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* left panel */}
        <div className="flex w-7/12 flex-col">
          <PageHeader highlight={highlight} kicker={kicker} title={title} />
          <div className="space-y-4 px-14 pt-6 text-sm text-zinc-600 leading-relaxed">
            {paragraphs.map((p) => (
              <p className="text-justify" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          {awardsLogos && awardsLogos.length > 0 && (
            <div className="flex flex-wrap gap-10 px-14 pt-10">
              {awardsLogos.map((logo) => (
                <img
                  alt={logo.name}
                  className="size-60 object-contain"
                  key={logo.name}
                  src={logo.src}
                />
              ))}
            </div>
          )}
        </div>
        {/* right panel */}
        <div className="flex w-[45%] items-center justify-center pr-14 pl-4">
          {/* <SmartImage
            className="h-130 w-full rounded-tl-4xl rounded-br-4xl shadow-lg"
            label={imageLabel ?? "Photo"}
            src={image}
          /> */}
          {recognitionLogos && recognitionLogos.length > 0 && (
            <div className="flex flex-wrap gap-10 px-14 pt-10">
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
      </div>
    </Page>
  );
}
