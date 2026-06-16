import { useImageFallback } from "./use-image-fallback";

/**
 * A logo cell for client / tech / certification grids.
 * Shows the image when available, otherwise a clean text badge.
 */
export default function LogoTile({
  name,
  src,
  className = "",
}: {
  name: string;
  src?: string;
  className?: string;
}) {
  const { failed, ref } = useImageFallback(src);

  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-zinc-100 bg-white px-4 py-2 shadow-lg transition-shadow duration-200 hover:shadow-xl ${className}`}
    >
      {src && !failed ? (
        <img
          alt={name}
          className="h-full w-full object-contain"
          ref={ref}
          src={src}
        />
      ) : (
        <span className="text-center font-semibold text-sm text-zinc-600 leading-snug">
          {name}
        </span>
      )}
    </div>
  );
}
