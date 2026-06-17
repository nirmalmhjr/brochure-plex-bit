import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/brochure";
import Page, { type PageProps } from "../layout/page";
import SmartImage from "../ui/smart-image";

export type ContactPageProps = Pick<PageProps, "pageNumber">;

const rows = [
  { icon: Phone, label: "Phone", value: company.phone },
  { icon: Mail, label: "Email", value: company.email },
  { icon: MapPin, label: "Office", value: company.address },
  { icon: Globe, label: "Website", value: company.website },
];

export default function ContactPage() {
  return (
    <Page showAccent={false} showFooter={false}>
      <div className="flex h-full">
        {/* Left: contact details */}
        <div className="flex w-2/5 flex-col justify-center pl-16">
          <div className="mb-3 h-1.5 w-16 rounded-full bg-brand" />
          <h2 className="font-extrabold text-5xl text-ink leading-tight tracking-tight">
            Get In Touch
            <br />
            <span className="bg-linear-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent print:text-brand">
              With Us
            </span>
          </h2>

          <div className="mt-8 space-y-5">
            {rows.map((row) => (
              <div className="flex items-center gap-4" key={row.label}>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <row.icon size={20} />
                </span>
                <div className="leading-tight">
                  <p className="font-bold text-xs text-zinc-400 uppercase tracking-wide">
                    {row.label}
                  </p>
                  <p className="font-semibold text-ink text-sm">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 inline-flex w-fit rounded-2xl bg-linear-to-br from-brand-deep/80 via-brand/90 to-fuchsia-500 px-8 py-4">
            <p className="font-semibold text-white text-xl italic">
              “{company.tagline}”
            </p>
          </div>
        </div>

        {/* Right: Nepal map with location pin + callout */}
        <div className="relative h-full w-3/5">
          <SmartImage
            className="h-full w-full"
            imgClassName="h-full w-full object-contain -ml-12"
            label="Nepal Map"
            src="/images/map/nepal-map.png"
          />

          <div className="absolute top-[55%] left-[64%]">
            <div className="absolute -top-38 left-8 w-56 -translate-x-40 rounded-2xl bg-white px-5 py-3 text-center drop-shadow-xl">
              <p className="font-medium text-ink text-sm leading-snug">
                {company.address}
              </p>
            </div>

            {/* Dotted connector from callout down to the pin */}
            <div className="absolute -top-22 -left-0.5 h-22 -translate-x-16 border-brand border-l-2 border-dotted" />

            {/* Location pin */}
            <img
              alt="Map pin"
              className="top-10 h-8 w-6 -translate-x-20 fill-brand text-white drop-shadow-md"
              src="/images/map/map-pin.png"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
