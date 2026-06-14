import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Page, { type PageProps } from "../layout/Page";
import SmartImage from "../ui/SmartImage";
import { company } from "../../data/brochure";

export type ContactMapPageProps = Pick<PageProps, "pageNumber">;

const rows = [
  { icon: Phone, label: "Phone", value: company.phone },
  { icon: Mail, label: "Email", value: company.email },
  { icon: MapPin, label: "Office", value: company.address },
  { icon: Globe, label: "Website", value: company.website },
];

/**
 * Alternate contact page that mirrors the legacy deck (PDF p.29):
 * contact details on the left with dotted separators, and a Nepal map
 * on the right with a location pin + address callout over Kathmandu.
 *
 * Kept separate from {@link ContactPage} so the brand-panel design is intact.
 */
export default function ContactMapPage() {
  return (
    <Page showFooter={false} showAccent={false}>
      <div className="flex h-full items-center">
        {/* Left: contact details */}
        <div className="w-2/5 pl-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-brand-dark">
            Contact Us
          </h2>

          <div className="mt-10 space-y-2">
            {rows.map((row) => (
              <div key={row.label}>
                <div className="flex items-center gap-4 py-1">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <row.icon size={20} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-base font-semibold text-ink">{row.label}</p>
                    <p className="text-sm font-medium text-zinc-500">{row.value}</p>
                  </div>
                </div>
                <div className="ml-16 border-b border-dotted border-zinc-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Nepal map with location pin + callout */}
        <div className="relative h-full w-3/5">
          <SmartImage
            src="/images/map/nepal-map.png"
            label="Nepal Map"
            className="h-full w-full"
            imgClassName="h-full w-full object-contain"
          />

          {/* Pin + connector + callout, anchored over Kathmandu */}
          <div className="absolute left-2/3 top-3/5">
            {/* Address callout */}
            <div className="absolute -top-40 left-8 w-56 -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-lg">
              <p className="text-sm font-medium leading-snug text-ink">
                {company.address}
              </p>
            </div>

            {/* Dotted connector from callout down to the pin */}
            <div className="absolute -top-24 -left-0.5 h-24 -translate-x-1/2 border-l-2 border-dotted border-brand" />

            {/* Location pin */}
            <MapPin
              size={40}
              className="-translate-x-1/2 top-10 size-10 fill-brand text-white drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
