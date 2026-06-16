import { useImageFallback } from "./use-image-fallback";

export interface SmartImageProps {
  alt?: string;
  className?: string;
  imgClassName?: string;
  /** Text shown on the placeholder when the image is missing. */
  label?: string;
  src?: string;
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
  const { failed, ref } = useImageFallback(src);

  if (src && !failed) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img alt={alt} className={imgClassName} ref={ref} src={src} />
      </div>
    );
  }

  return (
    <div
      className={`grid place-items-center bg-linear-to-br from-brand-soft via-zinc-100 to-zinc-200 ${className}`}
    >
      <div className="text-center">
        <p className="text-2xl opacity-40">🖼️</p>
        <p className="px-3 font-medium text-xs text-zinc-400 uppercase tracking-wider">
          {label}
        </p>
      </div>
    </div>
  );
}
