import { useState } from "react";
import { company } from "../../data/brochure";

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
  const [failed, setFailed] = useState(false);
  const src =
    variant === "light" ? "/images/brand/logo-white.png" : "/images/brand/logo.png";
  const text = variant === "light" ? "text-white" : "text-brand-dark";
  const sub = variant === "light" ? "text-white/70" : "text-zinc-500";

  if (!failed) {
    return (
      <img
        src={src}
        alt={company.name}
        className={`h-14 w-auto ${className}`}
        onError={() => setFailed(true)}
      />
    );
  }

  // Text fallback styled after the Plex Bit wordmark
  return (
    <div className={`leading-none ${className}`}>
      <p className={`text-[26px] font-extrabold tracking-[0.18em] ${text}`}>
        {company.logoTop}
      </p>
      <p className={`mt-1 text-[12px] font-semibold tracking-[0.42em] ${text}`}>
        {company.logoBottom}
      </p>
      <p className={`mt-1.5 text-[8px] font-medium uppercase tracking-[0.14em] ${sub}`}>
        {company.tagline}
      </p>
    </div>
  );
}
