import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Page, { type PageProps } from "../layout/Page";
import BrandLogo from "../ui/BrandLogo";
import SlashAccent from "../ui/SlashAccent";
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
        <div className="flex w-1/2 flex-col justify-center pl-16">
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
        <div className="relative flex w-1/2 flex-col items-center justify-center bg-gradient-to-br from-brand-deep via-brand-dark to-brand">
          <SlashAccent className="absolute right-10 top-10" color="bg-white/60" />
          <BrandLogo variant="light" />
          <SmartImage
            src="/images/company-pictures/contact-us.png"
            label="Team Photo"
            className="mt-10 h-72 w-4/5 rounded-tl-3xl rounded-br-3xl shadow-2xl"
          />
          <SlashAccent className="absolute bottom-10 left-10" color="bg-white/60" />
        </div>
      </div>
    </Page>
  );
}
