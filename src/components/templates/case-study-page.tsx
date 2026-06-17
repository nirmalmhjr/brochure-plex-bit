import type { CaseStudy } from "../../data/case-studies";
import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

export interface CaseStudyPageProps extends Pick<PageProps, "pageNumber"> {
  study: CaseStudy;
}

/**
 * Detailed portfolio case study (new-brochure style): team size,
 * timeframe, service area, tech ecosystem, services supplied, solutions.
 */
export default function CaseStudyPage({
  pageNumber,
  study,
}: CaseStudyPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader kicker="Case Study" title={study.name} />

      <div className="flex gap-8 px-14 pt-5">
        {/* Left: visual */}
        <SmartImage
          className="h-120 w-90 shrink-0 rounded-2xl border border-zinc-200 shadow-md"
          label={`${study.name} Screens`}
          src={study.image}
        />

        {/* Right: details */}
        <div className="flex-1 space-y-3.5">
          <div className="flex gap-3">
            <span className="rounded-lg bg-brand-soft px-4 py-1.5 font-bold text-brand-dark text-xs">
              Team Size: {study.teamSize}
            </span>
            <span className="rounded-lg bg-brand-soft px-4 py-1.5 font-bold text-brand-dark text-xs">
              Time Frame: {study.timeFrame}
            </span>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-bold text-brand text-sm">
              Service Area : {study.serviceArea}
            </h3>
            <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
              {study.desc}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-bold text-brand text-sm">Tech Ecosystem</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {study.tech.map((tech) => (
                <span
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 font-semibold text-xs text-zinc-600"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-bold text-brand text-sm">Services Supplied</h3>
            <div className="mt-2 flex gap-3">
              {study.servicesSupplied.map((service) => (
                <span
                  className="flex items-center gap-1.5 rounded-md bg-zinc-50 px-3 py-1 font-semibold text-xs text-zinc-600"
                  key={service}
                >
                  <span className="text-green-600">✓</span> {service}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-bold text-brand text-sm">
              Solutions We Provided
            </h3>
            <ul className="mt-1.5 space-y-1">
              {study.solutions.map((solution) => (
                <li
                  className="flex gap-2 text-xs text-zinc-600 leading-relaxed"
                  key={solution.slice(0, 24)}
                >
                  <span className="text-brand">•</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
