import { devOffices } from "../../data/brochure";
import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

export type WorldMapPageProps = Pick<PageProps, "pageNumber">;

type Direction = "left" | "right" | "down";

/**
 * Where each office pin sits on the map (top/left as a % of the map
 * container) and which way its address label points. `dir` lets a
 * label spread into open map space — left, right, or below the pin —
 * connected by a dotted line so nearby pins never crowd each other.
 */
const markers: Record<string, { top: string; left: string; dir: Direction }> = {
  "Netherlands Head Office": { top: "38%", left: "47%", dir: "left" },
  "Nepal Development Office": { top: "50%", left: "68%", dir: "right" },
  "India Development Office": { top: "56%", left: "65.5%", dir: "down" },
};

/** Address label: bold office name above a muted multi-line address. */
function Label({
  name,
  address,
  align,
}: {
  name: string;
  address: string;
  align: "left" | "right" | "center";
}) {
  const ALIGN_CLASS: Record<"left" | "right" | "center", string> = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  const alignClass = ALIGN_CLASS[align];
  return (
    <div
      className={`w-65 rounded-2xl border-2 border-zinc-200 bg-tranparent p-3 shadow-xs ${alignClass} `}
    >
      <p className="font-bold text-base text-ink">{name}</p>
      <p className="mt-0.5 text-sm text-zinc-500 leading-snug">{address}</p>
    </div>
  );
}

/**
 * World map page showing all global office locations as pins, each with
 * an address label connected by a dotted line over a faint world map.
 */
export default function WorldMapPage({ pageNumber }: WorldMapPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full flex-col px-14 pt-8 pb-6">
        <PageHeader highlight={devOffices.highlight} title={devOffices.title} />

        <div className="relative mt-6 flex-1">
          {/* Faint world map background */}
          <img
            alt="World map"
            className="absolute inset-0 h-full w-full object-contain opacity-70"
            src="/images/map/worldmap.png"
          />

          {/* Office pins + dotted-line address labels */}
          {devOffices.offices.map((office) => {
            const marker = markers[office.name];
            if (!marker) {
              return null;
            }
            return (
              <div
                className="absolute -translate-x-1/2 -translate-y-full"
                key={office.name}
                style={{ top: marker.top, left: marker.left }}
              >
                {/* Label to the LEFT: text, then dotted line into the pin */}
                {marker.dir === "left" && (
                  <div className="absolute top-1/2 right-full flex -translate-y-1/2 items-center gap-2 pr-1">
                    <Label
                      address={office.address}
                      align="right"
                      name={office.name}
                    />
                    <div className="w-14 border-zinc-400 border-t-2 border-dotted" />
                  </div>
                )}

                {/* Label to the RIGHT: dotted line out of the pin, then text */}
                {marker.dir === "right" && (
                  <div className="absolute top-1/2 left-full flex -translate-y-1/2 items-center gap-2 pl-1">
                    <div className="w-14 border-zinc-400 border-t-2 border-dotted" />
                    <Label
                      address={office.address}
                      align="left"
                      name={office.name}
                    />
                  </div>
                )}

                {/* Label BELOW: dotted line down from the pin, then text */}
                {marker.dir === "down" && (
                  <div className="absolute top-full left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 pt-1">
                    <div className="h-12 border-zinc-400 border-l-2 border-dotted" />
                    <Label
                      address={office.address}
                      align="center"
                      name={office.name}
                    />
                  </div>
                )}

                <img
                  alt={`${office.name} pin`}
                  className="h-9 w-7 drop-shadow-md"
                  src="/images/map/map-pin.png"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
}
