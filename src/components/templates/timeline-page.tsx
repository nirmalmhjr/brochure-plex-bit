import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

export interface TimelineStep {
  desc: string;
  title: string;
}

export interface TimelinePageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  steps: TimelineStep[];
  subtitle?: string;
  title: string;
}

/**
 * Modern zigzag process timeline: diamond gradient nodes on a center
 * line, cards alternating below (01, 03, 05…) and above (02, 04…).
 * Connectors are drawn node-to-node so nothing overflows the ends.
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
      <PageHeader highlight={highlight} subtitle={subtitle} title={title} />

      <div className="mt-2 grid grid-cols-5 px-12">
        {steps.map((step, i) => {
          const above = i % 2 === 1; // 02, 04 → card above the line
          const card = (
            <div className="w-full rounded-2xl border border-zinc-100 bg-white p-4 text-center shadow-xl">
              <h3 className="font-bold text-brand-dark text-sm leading-snug">
                {step.title}
              </h3>
              <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-linear-to-r from-brand to-fuchsia-400" />
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
          const tick = (
            <span
              className={`h-5 w-0.5 ${
                above
                  ? "bg-linear-to-t from-brand/50 to-transparent"
                  : "bg-linear-to-b from-brand/50 to-transparent"
              }`}
            />
          );

          return (
            <div className="flex flex-col items-center px-2" key={step.title}>
              {/* top slot — card for even-numbered steps */}
              <div className="flex h-54 w-full flex-col items-center justify-end">
                {above && (
                  <>
                    {card}
                    {tick}
                  </>
                )}
              </div>

              {/* node + connector segments (only between nodes) */}
              <div className="relative flex h-16 w-full items-center justify-center">
                {i > 0 && (
                  <span className="absolute top-1/2 right-1/2 -left-2 border-brand/35 border-t-2 border-dashed" />
                )}
                {i < steps.length - 1 && (
                  <>
                    <span className="absolute top-1/2 -right-2 left-1/2 border-brand/35 border-t-2 border-dashed" />
                    <span className="absolute top-1/2 -right-3 -translate-y-1/2 font-bold text-brand/60 text-sm">
                      ›
                    </span>
                  </>
                )}
                <span className="grid size-12 rotate-45 place-items-center rounded-xl bg-linear-to-br from-brand-dark via-brand to-fuchsia-500 shadow-brand/40 shadow-lg ring-4 ring-brand-soft">
                  <span className="-rotate-45 font-extrabold text-base text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>

              {/* bottom slot — card for odd-numbered steps */}
              <div className="flex h-54 w-full flex-col items-center justify-start">
                {!above && (
                  <>
                    {tick}
                    {card}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
