import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

export interface IntroPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  image?: string;
  imageLabel?: string;
  kicker?: string;
  paragraphs: string[];
  /** Big text shown under the paragraphs, e.g. "Since 2019". */
  stamp?: string;
  title: string;
}

/**
 * Title + rich text on the left, large image on the right.
 * Used for: Welcome, We Provide Solutions, …
 */
export default function IntroPage({
  pageNumber,
  title,
  highlight,
  kicker,
  paragraphs,
  image,
  imageLabel,
  stamp,
}: IntroPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        <div className="flex w-7/12 flex-col">
          <PageHeader highlight={highlight} kicker={kicker} title={title} />
          <div className="space-y-6 px-14 pt-6 text-sm text-zinc-600 leading-relaxed">
            {paragraphs.map((p) => (
              <p className="text-justify" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          {stamp && (
            <p className="px-14 pt-7 font-extrabold text-4xl text-ink tracking-tight">
              <span className="mr-3 text-brand">▸▸▸</span>
              {stamp}
            </p>
          )}
        </div>

        <div className="flex w-5/12 items-center justify-center pr-14 pl-4">
          <SmartImage
            className="h-130 w-full rounded-tl-4xl rounded-br-4xl shadow-lg"
            label={imageLabel ?? "Photo"}
            src={image}
          />
        </div>
      </div>
    </Page>
  );
}
