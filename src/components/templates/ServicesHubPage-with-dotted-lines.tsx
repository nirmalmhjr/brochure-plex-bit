import Page, { type PageProps } from "../layout/Page";

interface ServiceItem {
  icon: string;
  title: string;
  desc?: string;
}

export interface ServicesHubPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  items: ServiceItem[];
}

// ─── Canvas: 1280 × 720 ──────────────────────────────────────────────────────
const HUB_X = 640;
const HUB_Y = 300;              // sits just above vertical centre
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
  { x: 132,  exitX: 606, exitY: 300, iconY: 400 }, // 0 far left  — exits centre-left
  { x: 322,  exitX: 611, exitY: 317, iconY: 478 }, // 1           — exits lower-left
  { x: 512,  exitX: 623, exitY: 329, iconY: 556 }, // 2 near-left — exits bottom-left
  { x: 768,  exitX: 657, exitY: 329, iconY: 556 }, // 3 near-right— exits bottom-right
  { x: 958,  exitX: 669, exitY: 317, iconY: 478 }, // 4           — exits lower-right
  { x: 1148, exitX: 674, exitY: 300, iconY: 400 }, // 5 far right — exits centre-right
] as const;

const DROP_GAP = 14;            // gap between line tip and emoji

const STROKE  = "rgba(126,34,206,0.34)";
const STROKE2 = "rgba(126,34,206,0.16)";
const DASH    = "5 5";
const DOT_C   = "rgba(126,34,206,0.55)";
const DOT_R   = 4;

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
        <h2 className="text-[36px] font-extrabold leading-[1.1] tracking-tight">
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>
        <div className="mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand to-fuchsia-400" />
        {subtitle && (
          <p className="mt-2 max-w-[560px] text-[12.5px] leading-relaxed text-zinc-500">
            {subtitle}
          </p>
        )}
      </header>

      {/* ── Diagram ─────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <svg width="1280" height="720" className="absolute inset-0 overflow-visible">
          <defs>
            <radialGradient id="hubGrad" cx="38%" cy="32%" r="70%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#5b21b6" />
            </radialGradient>
          </defs>

          {/* One independent route per service: leave the hub edge → run
              sideways on its own track → drop to its icon. */}
          {COLS.map((col, i) => {
            const tip = col.iconY - DROP_GAP;
            const d = `M ${col.exitX},${col.exitY} H ${col.x} V ${tip}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={STROKE}
                strokeWidth="1.5"
                strokeDasharray={DASH}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}

          {/* Dot at each sideways→down bend */}
          {COLS.map((col, i) => (
            <circle key={`b${i}`} cx={col.x} cy={col.exitY} r={DOT_R} fill={DOT_C} />
          ))}

          {/* Dot at each drop tip */}
          {COLS.map((col, i) => (
            <circle
              key={`t${i}`}
              cx={col.x}
              cy={col.iconY - DROP_GAP}
              r={DOT_R}
              fill={DOT_C}
            />
          ))}

          {/* ── Hub ── (drawn last so it sits above the line exits) */}
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R + 6}
            fill="none" stroke={STROKE2} strokeWidth="1.5" />
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R} fill="url(#hubGrad)" />
        </svg>

        {/* Hub label */}
        <div
          className="absolute flex items-center justify-center text-white"
          style={{
            left: HUB_X - HUB_R, top: HUB_Y - HUB_R,
            width: HUB_R * 2, height: HUB_R * 2,
          }}
        >
          <span className="text-[16px] font-black tracking-tight">PB</span>
        </div>

        {/* ── Service items — large emoji + title, no card box ── */}
        {items.slice(0, 6).map((item, i) => {
          const col = COLS[i];
          return (
            <div
              key={item.title}
              className="absolute flex flex-col items-center text-center"
              style={{ left: col.x - 75, top: col.iconY, width: 150 }}
            >
              <span className="text-[48px] leading-none">{item.icon}</span>
              <span className="mt-2 text-[12px] font-semibold leading-tight text-zinc-700">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </Page>
  );
}
