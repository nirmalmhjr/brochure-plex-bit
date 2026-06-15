import type { Project } from "../../data/brochure";
import Page, { type PageProps } from "../layout/page";
import SmartImage from "../ui/smart-image";

export interface ProjectPairPageProps extends Pick<PageProps, "pageNumber"> {
  projects: Project[];
  sectionLabel?: string;
}

export default function ProjectPairPage({
  pageNumber,
  projects,
  sectionLabel = "Project Highlights",
}: ProjectPairPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full flex-col px-14 py-8">
        {/* Section header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-bold text-brand text-lg uppercase tracking-widest">
              {sectionLabel}
            </p>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-brand to-fuchsia-500" />
          </div>
          <span
            aria-hidden
            className="select-none font-black text-6xl text-zinc-100 leading-none tracking-tighter"
          >
            HL
          </span>
        </div>

        {/* Two project cards */}
        <div className="grid flex-1 grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <div className="flex flex-col" key={project.name}>
              {/* Browser chrome + screenshot */}
              <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-zinc-200">
                <div className="flex items-center gap-1.5 border-zinc-200 border-b bg-white px-3 py-2">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-yellow-400" />
                  <span className="size-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 rounded bg-zinc-100 px-3 py-0.5 text-xs text-zinc-400">
                    {project.name.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
                <SmartImage
                  className="h-70 w-full"
                  imgClassName="h-full w-full object-top"
                  label={project.name}
                  src={project.image}
                />
              </div>

              {/* Project info */}
              <div className="mt-4">
                <h3 className="font-bold text-xl text-zinc-800 tracking-tight">
                  {project.name}
                </h3>
                <div className="my-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand to-fuchsia-500" />
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
