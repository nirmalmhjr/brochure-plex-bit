import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company";
import Page, { type PageProps } from "../layout/page";
import SmartImage from "../ui/smart-image";

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
    <Page showAccent={false} showFooter={false}>
      <div className="flex h-full items-center">
        {/* Left: contact details */}
        <div className="w-2/5 pl-16">
          <h2 className="font-extrabold text-5xl text-brand-dark tracking-tight">
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
                    <p className="font-semibold text-base text-ink">
                      {row.label}
                    </p>
                    <p className="font-medium text-sm text-zinc-500">
                      {row.value}
                    </p>
                  </div>
                </div>
                <div className="ml-16 border-zinc-300 border-b border-dotted" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Nepal map with location pin + callout */}
        <div className="relative h-full w-3/5">
          <SmartImage
            className="h-full w-full"
            imgClassName="h-full w-full object-contain"
            label="Nepal Map"
            src="/images/map/nepal-map.png"
          />

          {/* Pin + connector + callout, anchored over Kathmandu */}
          <div className="absolute top-3/5 left-2/3">
            {/* Address callout */}
            <div className="absolute -top-40 left-8 w-56 -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-lg">
              <p className="font-medium text-ink text-sm leading-snug">
                {company.address}
              </p>
            </div>

            {/* Dotted connector from callout down to the pin */}
            <div className="absolute -top-24 -left-0.5 h-24 -translate-x-1/2 border-brand border-l-2 border-dotted" />

            {/* Location pin */}
            <MapPin
              className="top-10 size-10 -translate-x-1/2 fill-brand text-white drop-shadow-md"
              size={40}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
