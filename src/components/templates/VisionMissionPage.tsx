import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";

export interface VisionMissionItem {
  icon: string;
  title: string;
  desc: string;
}

export interface VisionMissionPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  items: VisionMissionItem[];
  image?: string;
}

export default function VisionMissionPage({
  pageNumber,
  title,
  highlight,
  items,
  image,
}: VisionMissionPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full flex-col">
        <PageHeader title={title} highlight={highlight} />

        <div className="flex flex-1 gap-0 px-14 pb-10 pt-5">
          {/* Left: Photo with decorative corner brackets */}
          <div className="relative w-[42%] pr-8">
            {/* Top-left bracket */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-tl-2xl border-l-[3px] border-t-[3px] border-brand opacity-70"
            />
            {/* Bottom-right bracket */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-8 h-16 w-16 rounded-br-2xl border-b-[3px] border-r-[3px] border-fuchsia-400 opacity-70"
            />
            <SmartImage
              src={image}
              label="Team Photo"
              className="h-full w-full rounded-tl-[60px] rounded-br-[60px] shadow-xl object-contain"
            />
          </div>

          {/* Vertical divider */}
          <div className="mx-2 w-px self-stretch bg-gradient-to-b from-transparent via-brand/20 to-transparent" />

          {/* Right: Vision + Mission */}
          <div className="flex w-[58%] flex-col justify-center gap-7 pl-8">
            {items.map((item) => (
              <div key={item.title} className="group">
                {/* Dark pill label (matches old design) */}
                <div className="mb-3 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 px-5 py-2 shadow-lg">
                
                  <span className="text-[15px] font-bold tracking-wide text-white">
                    {item.icon} {item.title}
                  </span>
                </div>

                {/* Accent bar */}
                <div className="mb-2.5 ml-1 h-[2px] w-10 rounded-full bg-gradient-to-r from-brand to-fuchsia-400" />

                <p className="text-[13px] leading-[1.75] text-zinc-600 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
