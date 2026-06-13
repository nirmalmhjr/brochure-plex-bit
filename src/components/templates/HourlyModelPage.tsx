import Page, { type PageProps } from "../layout/Page";
import type { ChecklistItem } from "./ChecklistPage";

interface HourlyModelPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight: string;
  intro: string;
  startingPrice?: string;
  items: ChecklistItem[];
}

export default function HourlyModelPage({
  pageNumber,
  title,
  highlight,
  intro,
  startingPrice = "$12",
  items,
}: HourlyModelPageProps) {
  const left = items.slice(0, 3);
  const right = items.slice(3);

  return (
    <Page pageNumber={pageNumber} showAccent={false}>
      <div className="flex h-full">
        {/* ── Left panel — diagonal cut ──
            box-shadow is clipped by clip-path, so use filter:drop-shadow on wrapper */}
        <div
          className="z-10 flex-shrink-0"
          style={{
            width: "44%",
            filter: "drop-shadow(6px 0 18px rgba(59,7,100,0.4))",
          }}
        >
          <div
            className="relative flex h-full flex-col justify-between bg-brand-deep px-10 py-12"
            style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
          >
            {/* decorative blobs */}
            <div className="pointer-events-none absolute -right-10 -top-14 size-52 rounded-full bg-brand/40" />
            <div className="pointer-events-none absolute -bottom-16 -left-8 size-56 rounded-full bg-fuchsia-500/20" />
            <div className="pointer-events-none absolute bottom-36 right-16 size-24 rounded-full bg-fuchsia-400/10" />

            {/* heading */}
            <div className="relative z-10 pr-24">
              <div className="mb-3 h-1 w-10 rounded-full bg-fuchsia-400" />
              <h1 className="text-3xl font-black leading-tight text-white">
                {title}
                <br />
                <span className="bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                  {highlight}
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-purple-200/90">{intro}</p>
            </div>

            {/* price callout */}
            <div className="relative z-10 pr-24">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                  Starting at just
                </p>
                <div className="mt-1 flex items-end gap-1 leading-none">
                  <span className="text-6xl font-black text-white">{startingPrice}</span>
                  <span className="mb-2 text-xl font-bold text-fuchsia-300">/hr</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-semibold text-green-300 ring-1 ring-green-400/30">
                    ✓ Free 5-Day Trial
                  </span>
                  <span className="rounded-full bg-fuchsia-400/15 px-3 py-1 text-xs font-semibold text-fuchsia-300 ring-1 ring-fuchsia-400/30">
                    Weekly &amp; Monthly Plans
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right panel — numbered horizontal rows ── */}
        <div className="relative flex flex-1 flex-col justify-center bg-gradient-to-br from-white to-brand-soft/30 py-10 pl-8 pr-10">
          <div className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-brand/5" />

          <div className="flex gap-6">
            {/* Left column */}
            <div className="flex flex-1 flex-col divide-y divide-zinc-100">
              {left.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="w-8 shrink-0 text-2xl font-black leading-none text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-snug text-brand-dark">{item.title}</p>
                    {item.desc && (
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Center divider */}
            <div className="w-px self-stretch bg-gradient-to-b from-transparent via-brand/30 to-transparent" />

            {/* Right column */}
            <div className="flex flex-1 flex-col divide-y divide-zinc-100">
              {right.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="w-8 shrink-0 text-2xl font-black leading-none text-brand">
                    {String(i + 4).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-snug text-brand-dark">{item.title}</p>
                    {item.desc && (
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
