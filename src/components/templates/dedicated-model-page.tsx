import type { ReactElement } from "react";
import Page, { type PageProps } from "../layout/page";
import {
  ChatIcon,
  ClockIcon,
  DollarCircleIcon,
  ExpandIcon,
  PeopleIcon,
  ShieldIcon,
} from "../ui/icons";
import type { ChecklistItem } from "./checklist-page";

const ITEM_ICONS: Record<string, ReactElement> = {
  "Cost-Efficient": <DollarCircleIcon />,
  "Direct Communication": <ChatIcon />,
  "Secure & Reliable": <ShieldIcon />,
  Flexible: <ExpandIcon />,
  "Timely Delivery": <ClockIcon />,
  Availability: <PeopleIcon />,
};

const ACCENT_COLORS = [
  {
    bg: "bg-violet-500",
    ring: "ring-violet-400/40",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    bg: "bg-fuchsia-500",
    ring: "ring-fuchsia-400/40",
    glow: "rgba(217,70,239,0.2)",
  },
  {
    bg: "bg-purple-600",
    ring: "ring-purple-400/40",
    glow: "rgba(147,51,234,0.2)",
  },
  {
    bg: "bg-indigo-500",
    ring: "ring-indigo-400/40",
    glow: "rgba(99,102,241,0.2)",
  },
  {
    bg: "bg-violet-600",
    ring: "ring-violet-500/40",
    glow: "rgba(124,58,237,0.2)",
  },
  { bg: "bg-pink-500", ring: "ring-pink-400/40", glow: "rgba(236,72,153,0.2)" },
];

interface DedicatedModelPageProps extends Pick<PageProps, "pageNumber"> {
  highlight: string;
  intro: string;
  items: ChecklistItem[];
  title: string;
}

export default function DedicatedModelPage({
  pageNumber,
  title,
  highlight,
  intro,
  items,
}: DedicatedModelPageProps) {
  return (
    <Page pageNumber={pageNumber} showAccent={false}>
      <div className="flex h-full">
        {/* ── Left panel — diagonal cut ── */}
        <div
          className="z-10 shrink-0"
          style={{
            width: "40%",
            filter: "drop-shadow(6px 0 18px rgba(59,7,100,0.4))",
          }}
        >
          <div
            className="relative flex h-full flex-col justify-between bg-brand-deep px-10 py-12"
            style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
          >
            <div className="pointer-events-none absolute -top-14 -right-10 size-52 rounded-full bg-brand/40" />
            <div className="pointer-events-none absolute -bottom-16 -left-8 size-56 rounded-full bg-fuchsia-500/20" />
            <div className="pointer-events-none absolute right-16 bottom-36 size-24 rounded-full bg-fuchsia-400/10" />

            <div className="relative z-10 pr-24">
              <div className="mb-3 h-1 w-10 rounded-full bg-fuchsia-400" />
              <h1 className="font-black text-3xl text-white leading-tight">
                {title}
                <br />
                <span className="bg-linear-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent print:text-fuchsia-200">
                  {highlight}
                </span>
              </h1>
              <p className="mt-4 text-purple-200/90 text-sm leading-relaxed">
                {intro}
              </p>
            </div>

            <div className="relative z-10 pr-24">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="font-semibold text-purple-300 text-xs uppercase tracking-widest">
                  Engagement Model
                </p>
                <p className="mt-2 font-black text-2xl text-white leading-tight">
                  Monthly
                  <br />
                  <span className="text-fuchsia-300">Dedicated</span> Team
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-400/15 px-3 py-1 font-semibold text-green-300 text-xs ring-1 ring-green-400/30">
                    ✓ Save up to 70%
                  </span>
                  <span className="rounded-full bg-fuchsia-400/15 px-3 py-1 font-semibold text-fuchsia-300 text-xs ring-1 ring-fuchsia-400/30">
                    Custom Teams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right panel — 2×3 icon card grid ── */}
        <div className="relative flex flex-1 flex-col justify-center bg-linear-to-br from-white to-brand-soft/30 py-10 pr-10 pl-10">
          <div className="pointer-events-none absolute -right-16 -bottom-16 size-64 rounded-full bg-brand/5" />

          <div className="grid grid-cols-2 gap-4">
            {items.slice(0, 6).map((item, i) => {
              const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
              const icon = ITEM_ICONS[item.title];
              return (
                <div
                  className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 drop-shadow-lg"
                  key={item.title}
                >
                  <span
                    className={`mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl ${accent.bg} text-white ring-2 ${accent.ring}`}
                    style={{ boxShadow: `0 4px 14px ${accent.glow}` }}
                  >
                    {icon ?? (
                      <span className="font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm leading-snug">
                      {item.title}
                    </p>
                    {item.desc && (
                      <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
