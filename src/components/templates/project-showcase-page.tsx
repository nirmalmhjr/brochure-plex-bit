import type { Project, ProjectBadge } from "../../data/projects";
import Page, { type PageProps } from "../layout/page";
import SmartImage from "../ui/smart-image";

/**
 * Category title (e.g. "Web Development"). Shown big on the left panel.
 * Category description shown under the heading.
 * Capability chips shown on the left panel.
 * Up to two projects rendered as stacked cards on the right.
 */

export interface ProjectShowcasePageProps
  extends Pick<PageProps, "pageNumber"> {
  projects: Project[];
  subtitle?: string | string[];
  tags?: string[];
  title: string;
}

// Icon assets (kept as files in /public/images/icons)
const APP_STORE_ICON = "/images/icons/apple.svg";
const GOOGLE_PLAY_ICON = "/images/icons/google-play.svg";
const WEBSITE_ICON = "/images/icons/globe.svg";

const BADGE_META: Record<
  Exclude<ProjectBadge, "case-study" | "web">,
  { top: string; bottom: string; icon: string }
> = {
  "app-store": {
    top: "Download on",
    bottom: "App Store",
    icon: APP_STORE_ICON,
  },
  "google-play": {
    top: "Download on",
    bottom: "Google Play",
    icon: GOOGLE_PLAY_ICON,
  },
  // NOTE: "case-study" badge is intentionally omitted — no case studies yet.
  // "web" is handled by the dedicated <WebBadge /> button below.
};

//  "Visit it / On Web" badge
function WebBadge({ url }: { url?: string }) {
  return (
    <a
      className="flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-5 py-1.5 shadow-sm"
      href={url ?? "#"}
      rel="noreferrer"
      target="_blank"
    >
      <img alt="" className="size-4 object-contain" src={WEBSITE_ICON} />
      <span className="leading-tight">
        <span className="block text-xs text-zinc-400">Visit it</span>
        <span className="-mt-0.5 block font-bold text-xs text-zinc-700">
          On Web
        </span>
      </span>
    </a>
  );
}

// Light link/availability badge — mirrors the brochure reference design
function LinkBadge({ kind }: { kind: keyof typeof BADGE_META }) {
  const meta = BADGE_META[kind];
  return (
    <span className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">
      <img alt="" className="size-4 object-contain" src={meta.icon} />
      <span className="leading-tight">
        <span className="block text-xs text-zinc-400">{meta.top}</span>
        <span className="-mt-0.5 block font-bold text-xs text-zinc-700">
          {meta.bottom}
        </span>
      </span>
    </span>
  );
}

// A single project row: square screenshot on the left, info on the right
function ProjectRow({ project }: { project: Project }) {
  const badges = project.badges ?? ["web"];
  return (
    <div className="flex flex-1 items-center gap-6">
      {/* Screenshot */}
      <div className="h-48 w-92 shrink-0 overflow-hidden rounded-sm shadow-lg ring-1 ring-zinc-200">
        <SmartImage
          className="h-full w-full"
          imgClassName="h-full w-full object-contain"
          label={project.name}
          src={project.image}
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="font-bold text-2xl text-brand tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
          {project.desc}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {badges
            .filter((badge) => badge !== "case-study")
            .map((badge) =>
              badge === "web" ? (
                <WebBadge key={badge} url={project.url} />
              ) : (
                <LinkBadge key={badge} kind={badge} />
              )
            )}
        </div>
      </div>
    </div>
  );
}

//  Category icons (white line SVGs in /public/images/icons/categories)
const CATEGORY_ICON_BASE = "/images/icons/categories";

// Map a category title to its white SVG icon (shown on the brand block)
function categoryIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("web dev")) {
    return `${CATEGORY_ICON_BASE}/web-development.svg`;
  }
  if (t.includes("commerce")) {
    return `${CATEGORY_ICON_BASE}/ecommerce.svg`;
  }
  if (t.includes("ai")) {
    return `${CATEGORY_ICON_BASE}/ai.svg`;
  }
  if (t.includes("design")) {
    return `${CATEGORY_ICON_BASE}/design.svg`;
  }
  return `${CATEGORY_ICON_BASE}/mobile.svg`;
}

/**
 * Project showcase page — category info panel on the left, two project
 * cards stacked on the right. Matches the reference brochure layout.
 */
export default function ProjectShowcasePage({
  pageNumber,
  title,
  subtitle,
  tags,
  projects,
}: ProjectShowcasePageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full">
        {/* ── Left — category info panel ─────────────────────────────── */}
        <aside className="relative flex w-2/5 shrink-0 flex-col overflow-hidden bg-linear-to-b from-brand-soft/40 via-white to-white px-12 py-12">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-24 -right-16 size-56 rounded-full bg-brand-soft opacity-50"
          />

          {/* Icon + heading */}
          <div className="relative flex items-center gap-4">
            <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand to-brand-dark shadow-lg">
              <img alt="" className="size-8" src={categoryIcon(title)} />
            </div>
            <div>
              <h2 className="font-extrabold text-3xl text-ink leading-tight tracking-tight">
                {title}
              </h2>
              {/* <p className="text-sm text-zinc-400">backed by Plex Bit</p> */}
            </div>
          </div>

          {/* Description */}
          {subtitle && (
            <div className="relative mt-8 space-y-3 text-sm text-zinc-500 leading-relaxed">
              {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          )}

          {/* Capability chips */}
          {tags && tags.length > 0 && (
            <div className="relative mt-8 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 font-medium text-xs text-zinc-600 shadow-sm"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer accent */}
          <div className="relative mt-auto flex items-center gap-3 pt-8">
            <div className="h-1 w-12 rounded-full bg-linear-to-r from-brand to-fuchsia-500" />
            <span className="font-bold text-brand text-xs uppercase tracking-widest">
              Project Highlights
            </span>
          </div>
        </aside>

        {/* ── Right — project cards ──────────────────────────────────── */}
        <div className="flex flex-1 flex-col justify-center gap-10 px-12 py-12">
          {projects.slice(0, 2).map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Page>
  );
}
