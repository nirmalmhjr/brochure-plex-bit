import type { LucideIcon } from "lucide-react";
import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

export interface VisionMissionItem {
  desc: string;
  icon: LucideIcon;
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
          <div className="relative w-5/12 pr-8">
            {/* Top-left bracket */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 h-16 w-16 rounded-tl-2xl border-brand border-t-4 border-l-4 opacity-70"
            />
            {/* Bottom-right bracket */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-8 bottom-0 h-16 w-16 rounded-br-2xl border-fuchsia-400 border-r-4 border-b-4 opacity-70"
            />
            <SmartImage
              className="h-full w-full rounded-tl-4xl rounded-br-4xl object-contain shadow-xl"
              label="Team Photo"
              src={image}
            />
          </div>

          {/* Vertical divider */}
          <div className="mx-2 w-px self-stretch bg-linear-to-b from-transparent via-brand/20 to-transparent" />

          {/* Right: Vision + Mission */}
          <div className="flex w-7/12 flex-col justify-center gap-7 pl-8">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div className="group" key={item.title}>
                  {/* Dark pill label (matches old design) */}
                  <div className="mb-3 inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-brand-dark via-brand to-fuchsia-500 px-5 py-2 shadow-lg">
                    <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
                      <Icon aria-hidden className="size-3.5 text-white" />
                    </span>
                    <span className="font-bold text-base text-white tracking-wide">
                      {item.title}
                    </span>
                  </div>

                  {/* Accent bar */}
                  <div className="mb-2.5 ml-1 h-0.5 w-10 rounded-full bg-linear-to-r from-brand to-fuchsia-400" />

                  <p className="text-justify text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
