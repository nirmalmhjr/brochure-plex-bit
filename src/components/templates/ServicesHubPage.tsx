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
// x and y are the coordinates of the hub
// r is the radius of the hub
// spokeR is the radius of the spokes
const HUB_X  = 820;
const HUB_Y  = 320;
const HUB_R  = 50;
const SPOKE_R = 228;

const SERVICE_COLORS = [
  { from: "#7c3aed", to: "#a855f7", glow: "rgba(124,58,237,0.35)" },
  { from: "#1d4ed8", to: "#3b82f6", glow: "rgba(29,78,216,0.35)"  },
  { from: "#0369a1", to: "#0ea5e9", glow: "rgba(3,105,161,0.35)"  },
  { from: "#b45309", to: "#f59e0b", glow: "rgba(180,83,9,0.35)"   },
  { from: "#047857", to: "#10b981", glow: "rgba(4,120,87,0.35)"   },
  { from: "#be123c", to: "#f43f5e", glow: "rgba(190,18,60,0.35)"  },
];

// Material Design icon paths (24×24 viewBox)
const SERVICE_ICON_PATHS = [
  // Staff Augmentation – group
  "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  // Web Development – code brackets
  "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  // E-commerce – shopping cart
  "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
  // MVP Development – rocket
  "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10l4-4 3.19.35zM14 5l-2-2-5.5 5.5 1.5 1.5L14 5zm-5 9l-2-2-2 2 2 2 2-2zm5.81 3.65L12 21l-2-3.65c.31-.13 3.6-1.53 5.89-3.57l.92 3.87zM22 2s-7 0-12 5l2 2 3-3 3 3 2-2 2-5z",
  // Mobile App – smartphone
  "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
  // AI Development – memory chip
  "M9 9h6v6H9zm7-7H8C6.9 2 6 2.9 6 4v1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V4c0-1.1-.9-2-2-2zm-1 14H8V8h8v8zm3 1h-2v-1c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v1H5V7h2V6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v1h2v10z",
];

// const HUB_GEAR_PATH =
//   "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z";

export default function ServicesHubPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  items,
}: ServicesHubPageProps) {
  const spokes = items.slice(0, 6).map((item, i) => {
    const rad = ((i * 60 - 90) * Math.PI) / 180;
    return {
      ...item,
      x: Math.round(HUB_X + SPOKE_R * Math.cos(rad)),
      y: Math.round(HUB_Y + SPOKE_R * Math.sin(rad)),
      color: SERVICE_COLORS[i % SERVICE_COLORS.length],
      iconPath: SERVICE_ICON_PATHS[i % SERVICE_ICON_PATHS.length],
    };
  });

  return (
    <Page pageNumber={pageNumber}>

      {/* ── LEFT PANEL ────────────────────────────────────────────────── */}
      <div className="absolute left-0 top-0 flex h-full w-80 flex-col justify-center px-14">
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-dark">
          <span className="size-1.5 rounded-full bg-brand" />
          What we offer
        </span>

        <h2 className="pt-6 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900">
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-brand to-fuchsia-400" />
          <div className="h-0.5 w-4 rounded-full bg-brand/20" />
          <div className="h-0.5 w-2 rounded-full bg-brand/10" />
        </div>

        {subtitle && (
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">{subtitle}</p>
        )}

        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-fuchsia-500 text-base font-black text-white shadow-md shadow-brand/30">
            {items.length}
          </div>
          <span className="text-sm font-semibold text-zinc-600">
            Core services<br />
            <span className="text-xs font-normal text-zinc-500">tailored for your business</span>
          </span>
        </div>

        <div className="absolute right-0 top-16 h-4/5 w-px bg-gradient-to-b from-transparent via-brand/15 to-transparent" />
      </div>

      {/* ── RIGHT RADIAL DIAGRAM ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <svg width="1280" height="720" className="absolute inset-0 overflow-visible">
          <defs>
            <radialGradient id="hubFill" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#5b21b6" />
            </radialGradient>
            <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="rgba(147,51,234,0)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.04)" />
            </radialGradient>
            <radialGradient id="bg2" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="rgba(147,51,234,0)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.03)" />
            </radialGradient>

            {/* Per-spoke color gradient from hub to tip */}
            {spokes.map((s, i) => (
              <linearGradient
                key={`lg-${i}`}
                id={`spokeGrad-${i}`}
                x1={HUB_X} y1={HUB_Y}
                x2={s.x}   y2={s.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%"   stopColor={s.color.from} stopOpacity="0.55" />
                <stop offset="100%" stopColor={s.color.to}   stopOpacity="0.15" />
              </linearGradient>
            ))}
          </defs>

          {/* Background depth rings */}
          <circle cx={HUB_X} cy={HUB_Y} r={SPOKE_R + 70}
            fill="url(#bg2)" stroke="rgba(147,51,234,0.06)" strokeWidth="1" />
          <circle cx={HUB_X} cy={HUB_Y} r={SPOKE_R + 52}
            fill="none" stroke="rgba(147,51,234,0.05)" strokeWidth="0.75" strokeDasharray="2 8" />
          <circle cx={HUB_X} cy={HUB_Y} r={SPOKE_R}
            fill="url(#bg1)" stroke="rgba(147,51,234,0.10)" strokeWidth="1" />

          {/* Blueprint tick marks on outer ring, every 30° */}
          {Array.from({ length: 12 }, (_, k) => {
            const a = (k * 30 * Math.PI) / 180;
            return (
              <line
                key={`tick-${k}`}
                x1={Math.round(HUB_X + (SPOKE_R + 48) * Math.cos(a))}
                y1={Math.round(HUB_Y + (SPOKE_R + 48) * Math.sin(a))}
                x2={Math.round(HUB_X + (SPOKE_R + 57) * Math.cos(a))}
                y2={Math.round(HUB_Y + (SPOKE_R + 57) * Math.sin(a))}
                stroke="rgba(147,51,234,0.22)"
                strokeWidth="1"
              />
            );
          })}

          {/* Colored gradient spokes */}
          {spokes.map((s, i) => (
            <line
              key={`spoke-${s.title}`}
              x1={HUB_X} y1={HUB_Y}
              x2={s.x}   y2={s.y}
              stroke={`url(#spokeGrad-${i})`}
              strokeWidth="2"
            />
          ))}

          {/* Colored dot where spoke meets hub perimeter */}
          {spokes.map((s) => {
            const rad = Math.atan2(s.y - HUB_Y, s.x - HUB_X);
            return (
              <circle
                key={`hub-dot-${s.title}`}
                cx={Math.round(HUB_X + (HUB_R + 3) * Math.cos(rad))}
                cy={Math.round(HUB_Y + (HUB_R + 3) * Math.sin(rad))}
                r={4.5}
                fill={s.color.from}
                opacity="0.75"
              />
            );
          })}

          {/* Colored dot at spoke tip */}
          {spokes.map((s) => (
            <circle
              key={`tip-${s.title}`}
              cx={s.x} cy={s.y} r={5}
              fill={s.color.from}
              opacity="0.6"
            />
          ))}

          {/* Hub — outer glow → dashed ring → translucent ring → solid fill */}
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R + 22}
            fill="rgba(147,51,234,0.04)" stroke="rgba(147,51,234,0.08)" strokeWidth="1.5" />
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R + 12}
            fill="rgba(147,51,234,0.06)" stroke="rgba(147,51,234,0.20)"
            strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R + 2}
            fill="rgba(255,255,255,0.35)" stroke="rgba(168,85,247,0.28)" strokeWidth="1" />
          <circle cx={HUB_X} cy={HUB_Y} r={HUB_R}
            fill="url(#hubFill)" />

          {/* Hub center: gear icon (22×22, centered slightly above mid) */}
          {/* <g transform={`translate(${HUB_X - 11},${HUB_Y - 19}) scale(0.917)`} opacity="0.88">
            <path d={HUB_GEAR_PATH} fill="white" fillRule="evenodd" />
          </g> */}
          <text
            x={HUB_X} y={HUB_Y + 8}
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="700"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="1"
            opacity="0.9"
          >
            SERVICES
          </text>
        </svg>

        {/* ── Service cards ─────────────────────────────────────────────── */}
        {spokes.map((s) => (
          <div
            key={s.title}
            className="absolute flex flex-col items-center text-center w-50"
            style={{ left: s.x - 76, top: s.y - 28, width: 152 }}
          >
            {/* Gradient icon tile with SVG icon */}
            <div
              className="grid size-14 place-items-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${s.color.from}, ${s.color.to})`,
                boxShadow: `0 6px 18px ${s.color.glow}, 0 2px 4px rgba(0,0,0,0.10)`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
                <path d={s.iconPath} />
              </svg>
            </div>

            {/* Info card */}
            <div className="mt-2 w-full rounded-xl border border-zinc-200/80 bg-white px-3 py-2 shadow-md">
              <span className="block text-[13px] font-bold leading-tight text-zinc-800">
                {s.title}
              </span>
              {s.desc && (
                <span className="mt-0.5 block line-clamp-2 text-[10.5px] leading-snug text-zinc-400">
                  {s.desc}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
