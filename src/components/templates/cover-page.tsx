import { company } from "../../data/brochure";
import Page, { type PageProps } from "../layout/page";
import BrandLogo from "../ui/brand-logo";
import SlashAccent from "../ui/slash-accent";
import SmartImage from "../ui/smart-image";

export interface CoverPageProps extends Pick<PageProps, "pageNumber"> {
  image?: string;
  imageLabel?: string;
  subtitle?: string;
  title?: string;
}

export default function CoverPage({
  title = "Company Profile",
  subtitle = company.tagline,
  image = "/images/company-pictures/company-profile.png",
  imageLabel = "Cover Photo",
}: CoverPageProps) {
  return (
    <Page showAccent={false} showFooter={false}>
      {/* top black band */}
      <div className="absolute inset-x-0 top-0 h-14 bg-ink" />
      <div className="absolute top-0 right-64 h-14 w-40 -skew-x-[30deg] bg-brand" />

      <div className="relative flex h-full">
        {/* Left: title block */}
        <div className="flex w-[46%] flex-col pt-28 pl-16">
          <h1 className="font-extrabold text-[78px] text-ink leading-[1.04] tracking-tight">
            {title.split(" ").map((word) => (
              <span className="block" key={word}>
                {word}
              </span>
            ))}
          </h1>

          <div className="mt-8 -ml-16 w-[420px] rounded-r-2xl bg-brand py-6 pr-8 pl-16">
            <p className="font-semibold text-[22px] text-white leading-snug">
              “{subtitle}”
            </p>
          </div>

          <SlashAccent className="mt-8" />

          <div className="mt-auto mb-12 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-brand text-lg text-white">
              🌐
            </span>
            <div className="leading-tight">
              <p className="font-semibold text-[11px] text-zinc-400 uppercase tracking-widest">
                Website
              </p>
              <p className="font-semibold text-[15px] text-brand-dark">
                {company.website}
              </p>
            </div>
          </div>
        </div>

        {/* Right: logo + photo */}
        <div className="flex w-[54%] flex-col items-end pt-24 pr-14">
          <BrandLogo variant="dark" />
          <SmartImage
            className="mt-10 h-[420px] w-full rounded-tl-[80px] rounded-br-[80px] shadow-xl"
            label={imageLabel}
            src={image}
          />
        </div>
      </div>

      {/* bottom black band */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-ink" />
      <div className="absolute bottom-0 left-40 h-10 w-32 -skew-x-[30deg] bg-brand" />
    </Page>
  );
}
