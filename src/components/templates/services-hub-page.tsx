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
// x and y are the coordinates of the hub
// r is the radius of the hub
// spokeR is the radius of the spokes
const HUB_X = 820;
const HUB_Y = 390;
const HUB_R = 50;
const SPOKE_R = 190;
// Max services rendered around the hub (must be ≤ colors/icon paths available)
const MAX_SPOKES = 5;
const TICK_DEGREES = [
  0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
] as const;

const SERVICE_COLORS = [
  { from: "#7c3aed", to: "#a855f7", glow: "rgba(124,58,237,0.35)" },
  { from: "#1d4ed8", to: "#3b82f6", glow: "rgba(29,78,216,0.35)" },
  { from: "#0369a1", to: "#0ea5e9", glow: "rgba(3,105,161,0.35)" },
  { from: "#b45309", to: "#f59e0b", glow: "rgba(180,83,9,0.35)" },
  { from: "#047857", to: "#10b981", glow: "rgba(4,120,87,0.35)" },
  { from: "#be123c", to: "#f43f5e", glow: "rgba(190,18,60,0.35)" },
];

// Material Design icon paths (24×24 viewBox) — order matches `services` data
const SERVICE_ICON_PATHS = [
  // AI Development – memory chip
  "M9 9h6v6H9zm7-7H8C6.9 2 6 2.9 6 4v1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V4c0-1.1-.9-2-2-2zm-1 14H8V8h8v8zm3 1h-2v-1c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v1H5V7h2V6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v1h2v10z",
  // Technology & Consulting – lightbulb
  "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z",
  // Staff Augmentation – group
  "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  // Data – storage
  "M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z",
  // AWS Cloud Solutions – cloud
  "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
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
  const visible = items.slice(0, MAX_SPOKES);
  const step = 360 / visible.length;
  const spokes = visible.map((item, i) => {
    const rad = ((i * step - 90) * Math.PI) / 180;
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
      <div className="absolute top-0 left-0 flex h-full w-100 flex-col justify-center px-14">
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-soft px-4 py-1.5 font-bold text-brand-dark text-xs uppercase tracking-widest">
          <span className="size-1.5 rounded-full bg-brand" />
          What we offer
        </span>

        <h2 className="pt-6 font-extrabold text-4xl text-zinc-900 leading-tight tracking-tight">
          {title}{" "}
          {highlight && (
            <span className="bg-linear-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent print:text-brand">
              {highlight}
            </span>
          )}
        </h2>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-0.5 w-12 rounded-full bg-linear-to-r from-brand to-fuchsia-400" />
          <div className="h-0.5 w-8 rounded-full bg-brand/20" />
          <div className="h-0.5 w-4 rounded-full bg-brand/10" />
        </div>

        {subtitle && (
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand to-fuchsia-500 font-black text-base text-white shadow-brand/30 shadow-md">
            {items.length}
          </div>
          <span className="font-semibold text-sm text-zinc-600">
            Core services
            <br />
            <span className="font-normal text-xs text-zinc-500">
              tailored for your business
            </span>
          </span>
        </div>
        {/* right linear gradient border */}
        <div className="absolute top-16 right-0 h-4/5 w-px bg-linear-to-b from-transparent via-brand/15 to-transparent" />
      </div>

      {/* ── RIGHT RADIAL DIAGRAM ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          aria-hidden="true"
          className="absolute inset-0 overflow-visible"
          height="720"
          width="1280"
        >
          <defs>
            <radialGradient cx="35%" cy="30%" id="hubFill" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#5b21b6" />
            </radialGradient>
            <radialGradient cx="50%" cy="50%" id="bg1" r="50%">
              <stop offset="60%" stopColor="rgba(147,51,234,0)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.04)" />
            </radialGradient>
            <radialGradient cx="50%" cy="50%" id="bg2" r="50%">
              <stop offset="60%" stopColor="rgba(147,51,234,0)" />
              <stop offset="100%" stopColor="rgba(147,51,234,0.03)" />
            </radialGradient>

            {/* Per-spoke color gradient from hub to tip */}
            {spokes.map((s, i) => (
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id={`spokeGrad-${i}`}
                key={`lg-${s.title}`}
                x1={HUB_X}
                x2={s.x}
                y1={HUB_Y}
                y2={s.y}
              >
                <stop offset="0%" stopColor={s.color.from} stopOpacity="0.55" />
                <stop offset="100%" stopColor={s.color.to} stopOpacity="0.15" />
              </linearGradient>
            ))}
          </defs>

          {/* Background depth rings */}
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="url(#bg2)"
            r={SPOKE_R + 70}
            stroke="rgba(147,51,234,0.06)"
            strokeWidth="1"
          />
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="none"
            r={SPOKE_R + 52}
            stroke="rgba(147,51,234,0.05)"
            strokeDasharray="2 8"
            strokeWidth="0.75"
          />
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="url(#bg1)"
            r={SPOKE_R}
            stroke="rgba(147,51,234,0.10)"
            strokeWidth="1"
          />

          {/* Blueprint tick marks on outer ring, every 30° */}
          {TICK_DEGREES.map((deg) => {
            const a = (deg * Math.PI) / 180;
            return (
              <line
                key={`tick-${deg}`}
                stroke="rgba(147,51,234,0.22)"
                strokeWidth="1"
                x1={Math.round(HUB_X + (SPOKE_R + 48) * Math.cos(a))}
                x2={Math.round(HUB_X + (SPOKE_R + 57) * Math.cos(a))}
                y1={Math.round(HUB_Y + (SPOKE_R + 48) * Math.sin(a))}
                y2={Math.round(HUB_Y + (SPOKE_R + 57) * Math.sin(a))}
              />
            );
          })}

          {/* Colored gradient spokes */}
          {spokes.map((s, i) => (
            <line
              key={`spoke-${s.title}`}
              stroke={`url(#spokeGrad-${i})`}
              strokeWidth="2"
              x1={HUB_X}
              x2={s.x}
              y1={HUB_Y}
              y2={s.y}
            />
          ))}

          {/* Colored dot where spoke meets hub perimeter */}
          {spokes.map((s) => {
            const rad = Math.atan2(s.y - HUB_Y, s.x - HUB_X);
            return (
              <circle
                cx={Math.round(HUB_X + (HUB_R + 3) * Math.cos(rad))}
                cy={Math.round(HUB_Y + (HUB_R + 3) * Math.sin(rad))}
                fill={s.color.from}
                key={`hub-dot-${s.title}`}
                opacity="0.75"
                r={4.5}
              />
            );
          })}

          {/* Colored dot at spoke tip */}
          {spokes.map((s) => (
            <circle
              cx={s.x}
              cy={s.y}
              fill={s.color.from}
              key={`tip-${s.title}`}
              opacity="0.6"
              r={5}
            />
          ))}

          {/* Connector lines between icon tile and text card */}
          {spokes.map((s, i) => {
            const dir =
              (["up", "right", "right-down", "left-down", "left"] as const)[
                i
              ] ?? "right";
            const ICON_HALF = 28;
            const GAP = 24;
            const lineProps = {
              stroke: s.color.from,
              strokeWidth: "1.5",
              strokeOpacity: "0.55",
              strokeDasharray: "4 3",
            };
            if (dir === "up") {
              return (
                <line
                  key={`conn-${s.title}`}
                  {...lineProps}
                  x1={s.x}
                  x2={s.x}
                  y1={s.y - ICON_HALF}
                  y2={s.y - ICON_HALF - GAP}
                />
              );
            }
            if (dir === "right") {
              return (
                <line
                  key={`conn-${s.title}`}
                  {...lineProps}
                  x1={s.x + ICON_HALF}
                  x2={s.x + ICON_HALF + GAP}
                  y1={s.y}
                  y2={s.y}
                />
              );
            }
            if (dir === "right-down") {
              return (
                <line
                  key={`conn-${s.title}`}
                  {...lineProps}
                  x1={s.x + ICON_HALF}
                  x2={s.x + ICON_HALF + GAP}
                  y1={s.y + 20}
                  y2={s.y + 60}
                />
              );
            }
            if (dir === "left-down") {
              return (
                <line
                  key={`conn-${s.title}`}
                  {...lineProps}
                  x1={s.x + ICON_HALF}
                  x2={s.x - ICON_HALF - GAP}
                  y1={s.y - 30}
                  y2={s.y + 44}
                />
              );
            }
            return (
              <line
                key={`conn-${s.title}`}
                {...lineProps}
                x1={s.x - ICON_HALF}
                x2={s.x - ICON_HALF - GAP}
                y1={s.y}
                y2={s.y}
              />
            );
          })}

          {/* Hub — outer glow → dashed ring → translucent ring → solid fill */}
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="rgba(147,51,234,0.04)"
            r={HUB_R + 22}
            stroke="rgba(147,51,234,0.08)"
            strokeWidth="1.5"
          />
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="rgba(147,51,234,0.06)"
            r={HUB_R + 12}
            stroke="rgba(147,51,234,0.20)"
            strokeDasharray="3 3"
            strokeWidth="1.5"
          />
          <circle
            cx={HUB_X}
            cy={HUB_Y}
            fill="rgba(255,255,255,0.35)"
            r={HUB_R + 2}
            stroke="rgba(168,85,247,0.28)"
            strokeWidth="1"
          />
          <circle cx={HUB_X} cy={HUB_Y} fill="url(#hubFill)" r={HUB_R} />

          {/* Hub center: gear icon (22×22, centered slightly above mid) */}
          {/* <g transform={`translate(${HUB_X - 11},${HUB_Y - 19}) scale(0.917)`} opacity="0.88">
            <path d={HUB_GEAR_PATH} fill="white" fillRule="evenodd" />
          </g> */}
          <text
            fill="white"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="700"
            letterSpacing="1"
            opacity="0.9"
            textAnchor="middle"
            x={HUB_X}
            y={HUB_Y + 8}
          >
            SERVICES
          </text>
        </svg>

        {/* ── Service icon tiles (centered on spoke tip) ───────────────── */}
        {spokes.map((s) => (
          <div
            className="absolute grid size-14 place-items-center rounded-2xl"
            key={`icon-${s.title}`}
            style={{
              left: s.x - 28,
              top: s.y - 28,
              background: `linear-gradient(135deg, ${s.color.from}, ${s.color.to})`,
              boxShadow: `0 6px 18px ${s.color.glow}, 0 2px 4px rgba(0,0,0,0.10)`,
            }}
          >
            <svg
              aria-hidden="true"
              fill="white"
              height="26"
              viewBox="0 0 24 24"
              width="26"
            >
              <path d={s.iconPath} />
            </svg>
          </div>
        ))}

        {/* ── Service text cards (direction based on spoke position) ────── */}
        {spokes.map((s, i) => {
          // 1=top, 2=upper-right, 3=lower-right, 4=lower-left, 5=upper-left
          const dir =
            (["up", "right", "right-down", "left-down", "left"] as const)[i] ??
            "right";
          const W = 150;
          const ICON_HALF = 28; // size-14 = 56px
          const GAP = 24;
          let style: React.CSSProperties;
          if (dir === "up") {
            style = {
              left: s.x - W / 2,
              top: s.y - ICON_HALF - GAP - 120,
              width: W,
            };
          } else if (dir === "right") {
            style = { left: s.x + ICON_HALF + GAP, top: s.y - 36, width: W };
          } else if (dir === "right-down") {
            style = { left: s.x + ICON_HALF + GAP, top: s.y + 8, width: W };
          } else if (dir === "left-down") {
            style = {
              left: s.x - ICON_HALF - GAP - W,
              top: s.y + 8,
              width: W,
            };
          } else {
            style = {
              left: s.x - ICON_HALF - GAP - W,
              top: s.y - 36,
              width: W,
            };
          }
          return (
            <div
              className="absolute rounded-xl border border-zinc-200/80 bg-white px-3 py-2 shadow-md"
              key={`card-${s.title}`}
              style={style}
            >
              <span className="block font-bold text-sm text-zinc-800 leading-tight">
                {s.title}
              </span>
              {s.desc && (
                <span className="mt-0.5 line-clamp-2 block text-xs text-zinc-400 leading-snug">
                  {s.desc}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Page>
  );
}
