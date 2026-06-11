import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";

export interface IntroPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  kicker?: string;
  paragraphs: string[];
  image?: string;
  imageLabel?: string;
  /** Big text shown under the paragraphs, e.g. "Since 2019". */
  stamp?: string;
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
          <PageHeader title={title} highlight={highlight} kicker={kicker} />
          <div className="space-y-4 px-14 pt-6 text-[14.5px] leading-relaxed text-zinc-600">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-justify">
                {p}
              </p>
            ))}
          </div>
          {stamp && (
            <p className="px-14 pt-7 text-[34px] font-extrabold tracking-tight text-ink">
              <span className="mr-3 text-brand">▸▸▸</span>
              {stamp}
            </p>
          )}
        </div>

        <div className="flex w-[45%] items-center justify-center pr-14 pl-4">
          <SmartImage
            src={image}
            label={imageLabel ?? "Photo"}
            className="h-[520px] w-full rounded-tl-[90px] rounded-br-[90px] shadow-lg"
          />
        </div>
      </div>
    </Page>
  );
}
