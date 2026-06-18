import type { ReactNode } from "react";
import type { CaseStudy } from "../../data/case-studies";
import Page, { type PageProps } from "../layout/page";
import { ClockIcon, PeopleIcon } from "../ui/icons";
import SmartImage from "../ui/smart-image";
import { useImageFallback } from "../ui/use-image-fallback";

export interface CaseStudyDetailPageProps
  extends Pick<PageProps, "pageNumber"> {
  index?: number;
  study: CaseStudy;
}

// Icon assets (kept as files in /public/images/icons, not inline)
const WEBSITE_ICON = "/images/icons/globe.svg";
const APP_STORE_ICON = "/images/icons/apple.svg";
const GOOGLE_PLAY_ICON = "/images/icons/google-play.svg";

const SERVICE_ICONS: Record<string, string> = {
  design: "/images/icons/design.svg",
  development: "/images/icons/development.svg",
  support: "/images/icons/support.svg",
  maintenance: "/images/icons/maintenance.svg",
};

// App store badges (rendered only when the study supplies a link)
function StoreBadge({
  href,
  icon,
  top,
  bottom,
}: {
  href: string;
  icon: string;
  top: string;
  bottom: string;
}) {
  return (
    <a
      className="flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 ring-1 ring-white/20"
      href={href}
    >
      <img alt="" className="size-5" src={icon} />
      <span className="text-white leading-tight">
        <span className="block text-xs">{top}</span>
        <span className="-mt-0.5 block font-semibold text-sm">{bottom}</span>
      </span>
    </a>
  );
}

// a single tech logo chip — `src` is an image path; hide if it fails to load
function TechChip({ src }: { src: string }) {
  const { failed, ref } = useImageFallback(src);
  if (failed) {
    return null;
  }
  return (
    <span className="flex h-14 w-20 items-center justify-center rounded-xl border border-zinc-200 bg-white p-1.5 shadow-sm">
      <img alt="" className="size-full object-contain" ref={ref} src={src} />
    </span>
  );
}

// Section card with an accent rail + heading
function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-brand to-fuchsia-400"
      />
      <h3 className="font-bold text-brand-dark text-sm tracking-tight">
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/**
 * Detailed portfolio case study — branded device showcase on the left,
 */
export default function CaseStudyDetailPage({
  pageNumber,
  // index,
  study,
}: CaseStudyDetailPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full gap-7 px-12 py-10">
        {/* ── Left — branded device showcase ─────────────────────────── */}
        <aside className="relative flex w-2/5 shrink-0 flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-b from-white to-slate-50 shadow-lg">
          {/* Brand lockup */}
          <div className="px-7 pt-7 text-center">
            {study.brandLogo ? (
              <img
                alt={study.name}
                className="mx-auto h-9 object-contain"
                src={study.brandLogo}
              />
            ) : (
              <p className="font-extrabold text-2xl text-ink capitalize tracking-tight">
                {study.name}
              </p>
            )}
            {study.brandSub && (
              <p className="mt-0.5 text-xs text-zinc-400 tracking-wide">
                {study.brandSub}
              </p>
            )}
            <div className="mx-auto mt-4 h-px w-4/5 bg-zinc-200" />
          </div>

          {/* Device mockup */}
          <div className="relative min-h-0 flex-1 px-6 pt-5">
            <SmartImage
              className="h-full w-full"
              imgClassName="h-full w-full object-contain"
              label={`${study.name}`}
              src={study.image}
            />
          </div>

          {/* Tagline ribbon */}
          {study.tagline && (
            <div className="mx-6 rounded-xl bg-white/90 px-4 py-3 text-center shadow-md ring-1 ring-zinc-100 backdrop-blur">
              <p className="font-bold text-base text-ink leading-snug">
                {study.tagline}
              </p>
            </div>
          )}

          {/* Footer: website + optional store badges + caption */}
          <div className="mt-4 bg-linear-to-r from-brand-deep via-brand-dark to-brand px-5 py-3.5">
            <div className="flex flex-wrap items-center gap-2">
              {study.website && (
                <a
                  className="flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 font-bold text-brand-dark text-xs"
                  href={`https://${study.website}`}
                >
                  <img alt="" className="size-4" src={WEBSITE_ICON} />
                  Website
                </a>
              )}
              {study.appStore && (
                <StoreBadge
                  bottom="App Store"
                  href={study.appStore}
                  icon={APP_STORE_ICON}
                  top="Download on the"
                />
              )}
              {study.playStore && (
                <StoreBadge
                  bottom="Google Play"
                  href={study.playStore}
                  icon={GOOGLE_PLAY_ICON}
                  top="GET IT ON"
                />
              )}
            </div>
            {study.footnote && (
              <p className="mt-2 text-white/80 text-xs leading-tight">
                {study.footnote}
              </p>
            )}
          </div>
        </aside>

        {/*  project facts */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Pills: team size + time frame */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 rounded-xl bg-linear-to-r from-brand to-brand-dark px-4 py-2.5 text-white shadow-sm">
              <PeopleIcon className="size-4" />
              <span className="font-bold text-xs">
                Team Size: {study.teamSize}
              </span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-linear-to-r from-brand-dark to-brand-deep px-4 py-2.5 text-white shadow-sm">
              <ClockIcon className="size-4" />
              <span className="font-bold text-xs">Time Frame:</span>
              <span className="font-bold text-xs">{study.timeFrame}</span>
            </div>
          </div>

          {/* Service area + description */}
          <div className="mt-3">
            <InfoCard title={`Service Area · ${study.serviceArea}`}>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {study.desc}
              </p>
            </InfoCard>
          </div>

          {/* Tech ecosystem */}
          <div className="mt-3">
            <InfoCard title="Tech Ecosystem">
              <div className="flex flex-wrap gap-3">
                {study.tech.map((tech) => (
                  <TechChip key={tech} src={tech} />
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Services supplied */}
          <div className="mt-3">
            <InfoCard title="Services Supplied">
              <div className="flex flex-wrap gap-2.5">
                {study.servicesSupplied.map((service) => (
                  <span
                    className="flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 font-semibold text-brand-dark text-xs"
                    key={service}
                  >
                    <img
                      alt=""
                      className="size-4"
                      src={
                        SERVICE_ICONS[service.toLowerCase()] ??
                        SERVICE_ICONS.development
                      }
                    />
                    {service}
                  </span>
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Solutions we provided */}
          <div className="mt-3 flex-1">
            <InfoCard title="Solutions We Provided">
              <ul className="grid gap-1.5">
                {study.solutions.map((solution) => (
                  <li
                    className="flex gap-2 text-xs text-zinc-600 leading-relaxed"
                    key={solution.slice(0, 28)}
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-linear-to-r from-brand to-fuchsia-400" />
                    {solution}
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </Page>
  );
}
