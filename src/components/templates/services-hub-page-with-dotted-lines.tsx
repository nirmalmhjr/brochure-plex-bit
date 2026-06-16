import Page, { type PageProps } from "../layout/page";

interface ServiceItem {
  desc?: string;
  icon: string;
  title: string;
}

export interface ServicesHubPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  items: ServiceItem[];
  subtitle?: string;
  title: string;
}

// ─── Canvas: 1280 × 720 ──────────────────────────────────────────────────────
const HUB_X = 640;
const HUB_Y = 300; // sits just above vertical centre
const HUB_R = 34;

// Six fully-independent routes. Lines now radiate from around the hub's
// PERIMETER (not bunched under it):
//   • far services  → leave the hub's left / right side at centre height
//   • inner services → leave the lower-left / lower-right of the hub
// Each line: leave its perimeter point → run sideways on its own track →
// drop to its icon. One tight bend, no shared segments → nothing crosses.
//   exitX/exitY = point on the hub edge the line leaves from
//   x           = the column the service sits in (exitY doubles as the track)
//   iconY       = where the emoji sits
const COLS = [
  { id: "far-left", x: 132, exitX: 606, exitY: 300, iconY: 400 },
  { id: "inner-left", x: 322, exitX: 611, exitY: 317, iconY: 478 },
  { id: "near-left", x: 512, exitX: 623, exitY: 329, iconY: 556 },
  { id: "near-right", x: 768, exitX: 657, exitY: 329, iconY: 556 },
  { id: "inner-right", x: 958, exitX: 669, exitY: 317, iconY: 478 },
  { id: "far-right", x: 1148, exitX: 674, exitY: 300, iconY: 400 },
] as const;

const DROP_GAP = 14; // gap between line tip and emoji

const STROKE = "rgba(126,34,206,0.34)";
const STROKE2 = "rgba(126,34,206,0.16)";
const DASH = "5 5";
const DOT_C = "rgba(126,34,206,0.55)";
const DOT_R = 4;

export default function ServicesHubPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  items,
}: ServicesHubPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      {/* ── Left-aligned header ─────────────────────────────────────────── */}
      <header className="px-14 pt-9">
        <h2 className="font-extrabold text-4xl leading-none tracking-tight">
          {title}{" "}
          {highlight && (
            <span className="bg-linear-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-linear-to-r from-brand to-fuchsia-400" />
        {subtitle && (
          <p className="mt-2 max-w-140 text-xs text-zinc-500 leading-relaxed">
            {subtitle}
          </p>
        )}
      </header>

      {/* ── Diagram ─────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          aria-hidden="true"
          className="absolute inset-0 overflow-visible"
          height="720"
          width="1280"
        >
          <defs>
            <radialGradient cx="38%" cy="32%" id="hubGrad" r="70%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#5b21b6" />
            </radialGradient>
          </defs>

          {/* One independent route per service: leave the hub edge → run
              sideways on its own track → drop to its icon. */}
          {COLS.map((col) => {
            const tip = col.iconY - DROP_GAP;
            const d = `M ${col.exitX},${col.exitY} H ${col.x} V ${tip}`;
            return (
              <path
                d={d}
                fill="none"
                key={`route-${col.id}`}
                stroke={STROKE}
                strokeDasharray={DASH}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Dot at each sideways→down bend */}
          {COLS.map((col) => (
            <circle
              cx={col.x}
              cy={col.exitY}
              fill={DOT_C}
              key={`bend-${col.id}`}
              r={DOT_R}
            />
          ))}

          {/* Dot at each drop tip */}
          {COLS.map((col) => (
            <circle
              cx={col.x}
              cy={col.iconY - DROP_GAP}
              fill={DOT_C}
              key={`tip-${col.id}`}
              r={DOT_R}
            />
          ))}

          {/* ── Hub ── (drawn last so it sits above the line exits) */}
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="none"
            r={HUB_R + 6}
            stroke={STROKE2}
            strokeWidth="1.5"
          />
          <circle cx={HUB_X} cy={HUB_Y} fill="url(#hubGrad)" r={HUB_R} />
        </svg>

        {/* Hub label */}
        <div
          className="absolute flex items-center justify-center text-white"
          style={{
            left: HUB_X - HUB_R,
            top: HUB_Y - HUB_R,
            width: HUB_R * 2,
            height: HUB_R * 2,
          }}
        >
          <span className="font-black text-base tracking-tight">PB</span>
        </div>

        {/* ── Service items — large emoji + title, no card box ── */}
        {items.slice(0, 6).map((item, i) => {
          const col = COLS[i];
          return (
            <div
              className="absolute flex flex-col items-center text-center"
              key={item.title}
              style={{ left: col.x - 75, top: col.iconY, width: 150 }}
            >
              <span className="text-5xl leading-none">{item.icon}</span>
              <span className="mt-2 font-semibold text-xs text-zinc-700 leading-tight">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
