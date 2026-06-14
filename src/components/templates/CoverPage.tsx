import Page, { type PageProps } from "../layout/Page";
import BrandLogo from "../ui/BrandLogo";
import SlashAccent from "../ui/SlashAccent";
import SmartImage from "../ui/SmartImage";
import { company } from "../../data/brochure";

export interface CoverPageProps extends Pick<PageProps, "pageNumber"> {
  title?: string;
  subtitle?: string;
  image?: string;
  imageLabel?: string;
}

export default function CoverPage({
  title = "Company Profile",
  subtitle = company.tagline,
  image = "/images/company-pictures/company-profile.png",
  imageLabel = "Cover Photo",
}: CoverPageProps) {
  return (
    <Page showFooter={false} showAccent={false}>
      {/* top black band */}
      <div className="absolute inset-x-0 top-0 h-14 bg-ink" />
      <div className="absolute right-64 top-0 h-14 w-40 -skew-x-[30deg] bg-brand" />

      <div className="relative flex h-full">
        {/* Left: title block */}
        <div className="flex w-[46%] flex-col pl-16 pt-28">
          <h1 className="text-[78px] font-extrabold leading-[1.04] tracking-tight text-ink">
            {title.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h1>

          <div className="mt-8 -ml-16 w-[420px] rounded-r-2xl bg-brand py-6 pl-16 pr-8">
            <p className="text-[22px] font-semibold leading-snug text-white">
              “{subtitle}”
            </p>
          </div>

          <SlashAccent className="mt-8" />

          <div className="mt-auto mb-12 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-brand text-lg text-white">
              🌐
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                Website
              </p>
              <p className="text-[15px] font-semibold text-brand-dark">
                {company.website}
              </p>
            </div>
          </div>
        </div>

        {/* Right: logo + photo */}
        <div className="flex w-[54%] flex-col items-end pr-14 pt-24">
          <BrandLogo variant="dark" />
          <SmartImage
            src={image}
            label={imageLabel}
            className="mt-10 h-[420px] w-full rounded-tl-[80px] rounded-br-[80px] shadow-xl"
          />
        </div>
      </div>

      {/* bottom black band */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-ink" />
      <div className="absolute bottom-0 left-40 h-10 w-32 -skew-x-[30deg] bg-brand" />
    </Page>
  );
}
