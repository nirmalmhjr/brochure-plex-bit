import type { Project } from "../../data/projects";
import Page, { type PageProps } from "../layout/page";
import SmartImage from "../ui/smart-image";

export interface ProjectHighlightPageProps
  extends Pick<PageProps, "pageNumber"> {
  index?: number;
  project: Project;
  sectionLabel?: string;
}

export default function ProjectHighlightPage({
  pageNumber,
  project,
  sectionLabel = "Our Projects",
}: ProjectHighlightPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* Left — info panel */}
        <div className="relative flex w-2/5 flex-col justify-center overflow-hidden px-14 py-12">
          <p className="relative font-bold text-brand text-xs uppercase tracking-widest">
            {sectionLabel}
          </p>

          <h2 className="relative mt-2 font-extrabold text-5xl text-ink leading-tight tracking-tight">
            {project.name}
          </h2>

          <div className="mt-4 mb-6 h-1 w-14 rounded-full bg-linear-to-r from-brand to-fuchsia-500" />

          <p className="relative max-w-xs text-sm text-zinc-500 leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Right — screenshot panel */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-linear-to-br from-violet-50 via-white to-slate-50 px-12 py-10">
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 size-64 rounded-full bg-brand-soft opacity-50" />
          <div className="absolute -bottom-20 left-8 size-48 rounded-full bg-fuchsia-100 opacity-40" />
          <div className="absolute top-4 right-1/3 size-24 rounded-full bg-violet-100 opacity-60" />

          {/* Browser chrome + screenshot */}
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-zinc-200">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-zinc-200 border-b bg-white px-4 py-3">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded-md bg-zinc-100 px-4 py-1 text-xs text-zinc-400">
                {project.name.toLowerCase().replace(/\s+/g, "")}.com
              </div>
            </div>

            {/* Screenshot */}
            <SmartImage
              className="h-96 w-full"
              imgClassName="h-full w-full  "
              label={`${project.name} screenshot`}
              src={project.image}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
