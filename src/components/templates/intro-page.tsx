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
        <div className="flex w-[55%] flex-col">
          <PageHeader highlight={highlight} kicker={kicker} title={title} />
          <div className="space-y-4 px-14 pt-6 text-[14.5px] text-zinc-600 leading-relaxed">
            {paragraphs.map((p) => (
              <p className="text-justify" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          {stamp && (
            <p className="px-14 pt-7 font-extrabold text-[34px] text-ink tracking-tight">
              <span className="mr-3 text-brand">▸▸▸</span>
              {stamp}
            </p>
          )}
        </div>

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
