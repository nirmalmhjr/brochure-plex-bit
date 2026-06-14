import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";
import type { IconCard } from "./IconCardGridPage";

const iconSrcMap: Record<string, string> = {
  "🌐": "/images/icons/globe.svg",
  "📊": "/images/icons/chart.svg",
  "🎯": "/images/icons/target.svg",
  "💰": "/images/icons/coin.svg",
};

interface WhyChooseUsPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  kicker?: string;
  items: IconCard[];
  image?: string;
}

export default function WhyChooseUsPage({
  pageNumber,
  title,
  highlight,
  kicker,
  items,
  image,
}: WhyChooseUsPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* Left: header + feature cards */}
        <div className="flex w-7/12 flex-col">
          <PageHeader title={title} highlight={highlight} kicker={kicker} />

          <div className="grid grid-cols-2 gap-8 px-14 pt-14">
            {items.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md"
              >
                {/* Dark banner: icon + title */}
                <div className="flex items-center gap-3 bg-gradient-to-br from-brand-deep via-brand to-fuchsia-500  px-4 py-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/20">
                    <img
                      src={iconSrcMap[item.icon] ?? ""}
                      alt={item.title}
                      className="size-5 brightness-0 invert"
                    />
                  </span>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                {/* Description */}
                {item.desc && (
                  <p className="px-4 py-3 text-sm leading-relaxed text-zinc-500 text-justify">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: diagonally clipped office image */}
        <div className="relative w-5/12 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <SmartImage
              src={image}
              label="Office"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand/10" />
          </div>
        </div>
      </div>
    </Page>
  );
}
