import Page, { type PageProps } from "../layout/Page";
import SmartImage from "../ui/SmartImage";
import type { Project } from "../../data/brochure";

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
            <p className="text-lg font-bold uppercase tracking-widest text-brand">
              {sectionLabel}
            </p>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-brand to-fuchsia-500" />
          </div>
          <span
            aria-hidden
            className="select-none text-6xl font-black leading-none tracking-tighter text-zinc-100"
          >
            HL
          </span>
        </div>

        {/* Two project cards */}
        <div className="grid flex-1 grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <div key={project.name} className="flex flex-col">
              {/* Browser chrome + screenshot */}
              <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-zinc-200">
                <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-white px-3 py-2">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-yellow-400" />
                  <span className="size-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 rounded bg-zinc-100 px-3 py-0.5 text-xs text-zinc-400">
                    {project.name.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
                <SmartImage
                  src={project.image}
                  label={project.name}
                  className="h-70 w-full"
                  imgClassName="h-full w-full object-top"
                />
              </div>

              {/* Project info */}
              <div className="mt-4">
                <h3 className="text-xl font-bold tracking-tight text-zinc-800">
                  {project.name}
                </h3>
                <div className="my-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand to-fuchsia-500" />
                <p className="text-xs leading-relaxed text-zinc-500">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
