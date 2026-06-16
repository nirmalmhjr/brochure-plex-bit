import { company } from "../../data/brochure";
import { useImageFallback } from "./use-image-fallback";

/**
 * Company logo. Drop the real logo at /public/images/brand/logo.png
 * (or logo-white.png for dark backgrounds) and it replaces the text
 * wordmark automatically.
 */
export default function BrandLogo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/images/brand/logo-white.png"
      : "/images/brand/logo.png";
  const { failed, ref } = useImageFallback(src);
  const text = variant === "light" ? "text-white" : "text-brand-dark";
  const sub = variant === "light" ? "text-white/70" : "text-zinc-500";

  if (!failed) {
    return (
      <img
        alt={company.name}
        className={`h-14 w-auto ${className}`}
        ref={ref}
        src={src}
      />
    );
  }

  // Text fallback styled after the Plex Bit wordmark
  return (
    <div className={`leading-none ${className}`}>
      <p className={`font-extrabold text-2xl tracking-widest ${text}`}>
        {company.logoTop}
      </p>
      <p className={`mt-1 font-semibold text-xs tracking-widest ${text}`}>
        {company.logoBottom}
      </p>
      <p
        className={`mt-1.5 font-medium text-xs uppercase tracking-widest ${sub}`}
      >
        {company.tagline}
      </p>
    </div>
  );
}
