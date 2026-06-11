import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";
import type { Project } from "../../data/brochure";

export interface ProjectHighlightPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  projects: Project[]; // designed for 2 per page
}

/**
 * Two project highlights side by side — screenshot + name + description.
 */
export default function ProjectHighlightPage({
  pageNumber,
  title,
  highlight,
  projects,
}: ProjectHighlightPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} align="center" />

      <div className="grid grid-cols-2 gap-10 px-16 pt-8">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col">
            <h3 className="text-center text-[26px] font-bold text-ink">
              {project.name}
            </h3>
            <SmartImage
              src={project.image}
              label={`${project.name} Screenshot`}
              className="mt-4 h-64 w-full rounded-xl border border-zinc-200 shadow-md"
            />
            <p className="mt-4 text-center text-[12.5px] leading-relaxed text-zinc-500">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </Page>
  );
}
