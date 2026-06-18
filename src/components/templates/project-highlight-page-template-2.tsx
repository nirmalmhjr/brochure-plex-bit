import type { Project } from "../../data/projects";
import Page, { type PageProps } from "../layout/page";
import SmartImage from "../ui/smart-image";

export interface ProjectHighlightPageProps
  extends Pick<PageProps, "pageNumber"> {
  index?: number;
  project: Project;
  sectionLabel?: string;
}

const WEBSITE_ICON = "/images/icons/globe.svg";
const APP_STORE_ICON = "/images/icons/apple.svg";
const GOOGLE_PLAY_ICON = "/images/icons/google-play.svg";

function StoreBadge({
  href,
  icon,
  top,
  bottom,
}: {
  href: string;
  icon: string;
  top: string;
  bottom: string;
}) {
  return (
    <a
      className="flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 ring-1 ring-white/20"
      href={href}
    >
      <img alt="" className="size-5" src={icon} />
      <span className="text-white leading-tight">
        <span className="block text-xs">{top}</span>
        <span className="-mt-0.5 block font-semibold text-sm">{bottom}</span>
      </span>
    </a>
  );
}

export default function ProjectHighlightPageTemplateTwo({
  pageNumber,
  project,
  sectionLabel = "Our Projects",
}: ProjectHighlightPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full gap-10 px-12 py-10">
        {/* Left — info panel */}
        <div className="relative flex w-[55%] flex-col justify-center overflow-hidden pr-4">
          <p className="relative font-bold text-brand text-xs uppercase tracking-widest">
            {sectionLabel}
          </p>

          <h2 className="mt-5 bg-linear-to-r from-brand-dark via-brand to-black/45 bg-clip-text font-bold text-5xl text-transparent print:text-brand">
            {project.name}
          </h2>

          <div className="mt-4 mb-6 h-1 w-14 rounded-full bg-linear-to-r from-brand to-fuchsia-500" />

          {Array.isArray(project.desc) ? (
            <div className="relative flex flex-col gap-3">
              {project.desc.map((para) => (
                <p
                  className="text-sm text-zinc-500 leading-relaxed"
                  key={`bold-${para}`}
                >
                  {para}
                </p>
              ))}
            </div>
          ) : (
            <p className="relative text-sm text-zinc-500 leading-relaxed">
              {project.desc}
            </p>
          )}
        </div>

        {/* Right — device showcase panel */}
        <aside className="relative flex w-[45%] flex-1 shrink-0 flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-white to-slate-50 shadow-lg">
          {/* Brand lockup */}
          <div className="px-7 pt-7 text-center">
            <p className="font-extrabold text-2xl text-ink capitalize tracking-tight">
              {project.name}
            </p>
            <div className="mx-auto mt-4 h-px w-4/5 bg-zinc-200" />
          </div>

          {/* Device mockup */}
          <div className="relative min-h-0 flex-1 px-6 pt-5">
            <SmartImage
              className="h-full w-full"
              imgClassName="h-full w-full object-contain scale-120"
              label={`${project.name} screenshot`}
              src={project.image}
            />
          </div>

          {/* Footer: website + optional store badges */}
          <div className="mt-4 bg-linear-to-r from-brand-deep via-brand-dark to-brand px-5 py-3.5">
            <div className="flex flex-wrap items-center gap-2">
              {project.url && (
                <a
                  className="flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 font-bold text-brand-dark text-xs"
                  href={project.url}
                >
                  <img alt="" className="size-4" src={WEBSITE_ICON} />
                  Website
                </a>
              )}
              {project.appStore && (
                <StoreBadge
                  bottom="App Store"
                  href={project.appStore}
                  icon={APP_STORE_ICON}
                  top="Download on the"
                />
              )}
              {project.playStore && (
                <StoreBadge
                  bottom="Google Play"
                  href={project.playStore}
                  icon={GOOGLE_PLAY_ICON}
                  top="GET IT ON"
                />
              )}
            </div>
          </div>
        </aside>
      </div>
    </Page>
  );
}
