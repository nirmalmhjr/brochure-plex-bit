import { useState } from "react";

export interface SmartImageProps {
  src?: string;
  alt?: string;
  /** Text shown on the placeholder when the image is missing. */
  label?: string;
  className?: string;
  imgClassName?: string;
}

/**
 * Renders the image if the file exists in /public, otherwise a clean
 * branded placeholder block. Lets you scaffold the brochure first and
 * drop real images in later without touching code.
 */
export default function SmartImage({
  src,
  alt = "",
  label = "Image",
  className = "",
  imgClassName = "h-full w-full object-cover",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={src} alt={alt} className={imgClassName} onError={() => setFailed(true)} />
      </div>
    );
  }

  return (
    <div
      className={`grid place-items-center bg-gradient-to-br from-brand-soft via-zinc-100 to-zinc-200 ${className}`}
    >
      <div className="text-center">
        <p className="text-2xl opacity-40">🖼️</p>
        <p className="px-3 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          {label}
        </p>
      </div>
    </div>
  );
}
