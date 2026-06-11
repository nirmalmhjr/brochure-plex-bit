import { useState } from "react";

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
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm ${className}`}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          className="max-h-12 w-auto object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-center text-[13px] font-semibold leading-snug text-zinc-600">
          {name}
        </span>
      )}
    </div>
  );
}
