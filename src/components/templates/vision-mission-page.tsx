import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

export interface VisionMissionItem {
  desc: string;
  icon: string;
  title: string;
}

export interface VisionMissionPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  image?: string;
  items: VisionMissionItem[];
  title: string;
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
        <PageHeader highlight={highlight} title={title} />

        <div className="flex flex-1 gap-0 px-14 pt-5 pb-10">
          {/* Left: Photo with decorative corner brackets */}
          <div className="relative w-[42%] pr-8">
            {/* Top-left bracket */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 h-16 w-16 rounded-tl-2xl border-brand border-t-[3px] border-l-[3px] opacity-70"
            />
            {/* Bottom-right bracket */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-8 bottom-0 h-16 w-16 rounded-br-2xl border-fuchsia-400 border-r-[3px] border-b-[3px] opacity-70"
            />
            <SmartImage
              className="h-full w-full rounded-tl-[60px] rounded-br-[60px] object-contain shadow-xl"
              label="Team Photo"
              src={image}
            />
          </div>

          {/* Vertical divider */}
          <div className="mx-2 w-px self-stretch bg-gradient-to-b from-transparent via-brand/20 to-transparent" />

          {/* Right: Vision + Mission */}
          <div className="flex w-[58%] flex-col justify-center gap-7 pl-8">
            {items.map((item) => (
              <div className="group" key={item.title}>
                {/* Dark pill label (matches old design) */}
                <div className="mb-3 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 px-5 py-2 shadow-lg">
                  <span className="font-bold text-[15px] text-white tracking-wide">
                    {item.icon} {item.title}
                  </span>
                </div>

                {/* Accent bar */}
                <div className="mb-2.5 ml-1 h-[2px] w-10 rounded-full bg-gradient-to-r from-brand to-fuchsia-400" />

                <p className="text-justify text-[13px] text-zinc-600 leading-[1.75]">
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
