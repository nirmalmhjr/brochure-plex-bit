import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";
import type { CaseStudy } from "../../data/brochure";

export interface CaseStudyPageProps extends Pick<PageProps, "pageNumber"> {
  study: CaseStudy;
}

/**
 * Detailed portfolio case study (new-brochure style): team size,
 * timeframe, service area, tech ecosystem, services supplied, solutions.
 */
export default function CaseStudyPage({ pageNumber, study }: CaseStudyPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={study.name} kicker="Case Study" />

      <div className="flex gap-8 px-14 pt-5">
        {/* Left: visual */}
        <SmartImage
          src={study.image}
          label={`${study.name} Screens`}
          className="h-[480px] w-[360px] shrink-0 rounded-2xl border border-zinc-200 shadow-md"
        />

        {/* Right: details */}
        <div className="flex-1 space-y-3.5">
          <div className="flex gap-3">
            <span className="rounded-lg bg-brand-soft px-4 py-1.5 text-[12px] font-bold text-brand-dark">
              Team Size: {study.teamSize}
            </span>
            <span className="rounded-lg bg-brand-soft px-4 py-1.5 text-[12px] font-bold text-brand-dark">
              Time Frame: {study.timeFrame}
            </span>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="text-[14px] font-bold text-brand">
              Service Area : {study.serviceArea}
            </h3>
            <p className="mt-1.5 text-[12px] leading-relaxed text-zinc-600">
              {study.desc}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="text-[14px] font-bold text-brand">Tech Ecosystem</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {study.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11.5px] font-semibold text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="text-[14px] font-bold text-brand">Services Supplied</h3>
            <div className="mt-2 flex gap-3">
              {study.servicesSupplied.map((service) => (
                <span
                  key={service}
                  className="flex items-center gap-1.5 rounded-md bg-zinc-50 px-3 py-1 text-[11.5px] font-semibold text-zinc-600"
                >
                  <span className="text-green-600">✓</span> {service}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="text-[14px] font-bold text-brand">Solutions We Provided</h3>
            <ul className="mt-1.5 space-y-1">
              {study.solutions.map((solution) => (
                <li key={solution.slice(0, 24)} className="flex gap-2 text-[11.5px] leading-relaxed text-zinc-600">
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
