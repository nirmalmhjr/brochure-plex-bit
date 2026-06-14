import Page, { type PageProps } from "../layout/Page";
import SmartImage from "../ui/SmartImage";
import type { Project } from "../../data/brochure";

export interface ProjectHighlightPageProps extends Pick<PageProps, "pageNumber"> {
  project: Project;
  sectionLabel?: string;
  index?: number;
}

export default function ProjectHighlightPage({
  pageNumber,
  project,
  sectionLabel = "Our Projects",
  index = 1,
}: ProjectHighlightPageProps) {
  const num = String(index).padStart(2, "0");

  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* Left — info panel */}
        <div className="relative flex w-2/5 flex-col justify-center overflow-hidden px-14 py-12">
          {/* Decorative watermark number */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-8 right-4 select-none text-9xl font-black leading-none tracking-tighter text-zinc-100"
          >
            {num}
          </span>

          <p className="relative text-xs font-bold uppercase tracking-widest text-brand">
            {sectionLabel}
          </p>

          <h2 className="relative mt-2 text-5xl font-extrabold leading-tight tracking-tight text-ink">
            {project.name}
          </h2>

          <div className="mb-6 mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-brand to-fuchsia-500" />

          <p className="relative max-w-xs text-sm leading-relaxed text-zinc-500">
            {project.desc}
          </p>
        </div>

        {/* Right — screenshot panel */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-slate-50 px-12 py-10">
          {/* Decorative blobs */}
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-brand-soft opacity-50" />
          <div className="absolute -bottom-20 left-8 size-48 rounded-full bg-fuchsia-100 opacity-40" />
          <div className="absolute right-1/3 top-4 size-24 rounded-full bg-violet-100 opacity-60" />

          {/* Browser chrome + screenshot */}
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-zinc-200">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-3">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded-md bg-zinc-100 px-4 py-1 text-xs text-zinc-400">
                {project.name.toLowerCase().replace(/\s+/g, "")}.com
              </div>
            </div>

            {/* Screenshot */}
            <SmartImage
              src={project.image}
              label={`${project.name} screenshot`}
              className="h-96 w-full"
              imgClassName="h-full w-full  "
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
