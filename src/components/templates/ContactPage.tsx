import Page, { type PageProps } from "../layout/Page";
import BrandLogo from "../ui/BrandLogo";
import SlashAccent from "../ui/SlashAccent";
import SmartImage from "../ui/SmartImage";
import { company } from "../../data/brochure";

export type ContactPageProps = Pick<PageProps, "pageNumber">;

const rows = [
  { icon: "📞", label: "Phone", value: company.phone },
  { icon: "✉️", label: "Email", value: company.email },
  { icon: "📍", label: "Office", value: company.address },
  { icon: "🌐", label: "Website", value: company.website },
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
        <div className="flex w-[52%] flex-col justify-center pl-16">
          <div className="mb-3 h-1.5 w-16 rounded-full bg-brand" />
          <h2 className="text-[46px] font-extrabold leading-[1.1] tracking-tight text-ink">
            Please Get In
            <br />
            Touch <span className="bg-gradient-to-r from-brand-dark via-brand to-fuchsia-500 bg-clip-text text-transparent">With Us</span>
          </h2>

          <div className="mt-8 space-y-5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-lg text-white">
                  {row.icon}
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-zinc-400">
                    {row.label}
                  </p>
                  <p className="text-[15px] font-semibold text-ink">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 inline-flex w-fit rounded-2xl bg-ink px-8 py-4">
            <p className="text-[17px] font-semibold italic text-white">
              “{company.tagline}”
            </p>
          </div>
        </div>

        {/* Right: brand panel */}
        <div className="relative flex w-[48%] flex-col items-center justify-center bg-gradient-to-br from-brand-deep via-brand-dark to-brand">
          <SlashAccent className="absolute right-10 top-10" color="bg-white/60" />
          <BrandLogo variant="light" />
          <SmartImage
            src="/images/brand/contact.jpg"
            label="Team Photo"
            className="mt-10 h-72 w-[78%] rounded-tl-[60px] rounded-br-[60px] shadow-2xl"
          />
          <SlashAccent className="absolute bottom-10 left-10" color="bg-white/60" />
        </div>
      </div>
    </Page>
  );
}
