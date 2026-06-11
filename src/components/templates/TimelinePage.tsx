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
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="mt-2 grid grid-cols-5 px-12">
        {steps.map((step, i) => {
          const above = i % 2 === 1; // 02, 04 → card above the line
          const card = (
            <div className="w-full rounded-2xl border border-zinc-100 bg-white p-4 text-center shadow-[0_10px_30px_rgba(59,7,100,0.08)]">
              <h3 className="text-[14px] font-bold leading-snug text-brand-dark">
                {step.title}
              </h3>
              <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-brand to-fuchsia-400" />
              <p className="mt-2 text-[11px] leading-relaxed text-zinc-500">
                {step.desc}
              </p>
            </div>
          );
          const tick = (
            <span
              className={`h-5 w-0.5 ${
                above
                  ? "bg-gradient-to-t from-brand/50 to-transparent"
                  : "bg-gradient-to-b from-brand/50 to-transparent"
              }`}
            />
          );

          return (
            <div key={step.title} className="flex flex-col items-center px-2">
              {/* top slot — card for even-numbered steps */}
              <div className="flex h-[215px] w-full flex-col items-center justify-end">
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
                  <span className="absolute left-[-8px] right-[calc(50%+34px)] top-1/2 border-t-2 border-dashed border-brand/35" />
                )}
                {i < steps.length - 1 && (
                  <>
                    <span className="absolute left-[calc(50%+34px)] right-[-8px] top-1/2 border-t-2 border-dashed border-brand/35" />
                    <span className="absolute right-[-13px] top-1/2 -translate-y-1/2 text-[13px] font-bold text-brand/60">
                      ›
                    </span>
                  </>
                )}
                <span className="grid size-12 rotate-45 place-items-center rounded-xl bg-gradient-to-br from-brand-dark via-brand to-fuchsia-500 shadow-lg shadow-brand/40 ring-4 ring-brand-soft">
                  <span className="-rotate-45 text-[15px] font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>

              {/* bottom slot — card for odd-numbered steps */}
              <div className="flex h-[215px] w-full flex-col items-center justify-start">
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
