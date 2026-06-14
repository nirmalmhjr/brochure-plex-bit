import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Page, { type PageProps } from "../layout/Page";
// import BrandLogo from "../ui/BrandLogo";
// import SlashAccent from "../ui/SlashAccent";
import SmartImage from "../ui/SmartImage";
import { company } from "../../data/brochure";

export type ContactPageProps = Pick<PageProps, "pageNumber">;

const rows = [
  { icon: Phone, label: "Phone", value: company.phone },
  { icon: Mail, label: "Email", value: company.email },
  { icon: MapPin, label: "Office", value: company.address },
  { icon: Globe, label: "Website", value: company.website },
];

/**
 * Closing / contact page. Accepts (and ignores) pageNumber so it can sit
 * in the auto-numbered deck without showing a number.
 */
export default function ContactPage() {
  return (
    <Page showFooter={false} showAccent={false}>
      <div className="flex h-full">
        {/* Left: contact details */}
        <div className="flex w-[40%] flex-col justify-center pl-16">
          <div className="mb-3 h-1.5 w-16 rounded-full bg-brand" />
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-ink">
            Get In Touch
            <br />
            <span className="bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">With Us</span>
          </h2>

          <div className="mt-8 space-y-5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <row.icon size={20} />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
                    {row.label}
                  </p>
                  <p className="text-sm font-semibold text-ink">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 inline-flex w-fit rounded-2xl bg-gradient-to-br from-brand-deep/80 via-brand/90 to-fuchsia-500  px-8 py-4">
            <p className="text-xl font-semibold italic text-white ">
              “{company.tagline}”
            </p>
          </div>
        </div>

        {/* Right: brand panel */}
        {/* <div className="relative flex w-1/2 flex-col items-center justify-center bg-gradient-to-br from-brand-deep via-brand-dark to-brand">
          <SlashAccent className="absolute right-10 top-10" color="bg-white/60" />
          <BrandLogo variant="light" />
          <SmartImage
            src="/images/company-pictures/contact-us.png"
            label="Team Photo"
            className="mt-10 h-72 w-4/5 rounded-tl-3xl rounded-br-3xl shadow-2xl"
          />
          <SlashAccent className="absolute bottom-10 left-10" color="bg-white/60" />
        </div> */}
          {/* Right: Nepal map with location pin + callout */}
        <div className="relative h-full w-[60%] ">
          <SmartImage
            src="/images/map/nepal-map.png"
            label="Nepal Map"
            className="h-full w-full"
            imgClassName="h-full w-full object-contain -ml-12"
          />

          {/* Pin + connector + callout, anchored over Kathmandu */}
          <div className="absolute left-[64%] top-[55%] ">
            {/* Address callout */}
            <div className="absolute -top-38 left-8 w-56 -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <p className="text-sm font-medium leading-snug text-ink">
                {company.address}
              </p>
            </div>

            {/* Dotted connector from callout down to the pin */}
            <div className="absolute -top-22 -left-0.5 h-22 -translate-x-3 border-l-2 border-dotted border-brand" />

            {/* Location pin */}
            {/* <MapPin
              size={40}
              className="-translate-x-1/2 top-10 size-8 fill-brand text-white drop-shadow-md"
            /> */}
            <img src="/images/map/map-pin.png" alt="Map pin" className="-translate-x-7 top-10 w-8 fill-brand text-white drop-shadow-md" />
          </div>
        </div>
      </div>
    </Page>
  );
}
