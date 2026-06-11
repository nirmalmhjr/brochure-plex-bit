import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

export interface TimelineStep {
  title: string;
  desc: string;
}

export interface TimelinePageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  steps: TimelineStep[];
}

/**
 * Numbered horizontal process timeline (Our Work-Flow).
 */
export default function TimelinePage({
  pageNumber,
  title,
  highlight,
  subtitle,
  steps,
}: TimelinePageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="relative mt-16 px-14">
        {/* connecting line */}
        <div className="absolute left-24 right-24 top-7 h-0.5 bg-brand/30" />

        <div className="relative grid grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <span className="grid size-14 place-items-center rounded-full bg-ink text-[16px] font-bold text-white ring-4 ring-brand/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-center text-[15px] font-bold leading-snug text-brand">
                {step.title}
              </h3>
              <p className="mt-2 text-center text-[11.5px] leading-relaxed text-zinc-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
