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
      className={`flex items-center justify-center rounded-xl border border-zinc-100 bg-white px-4 py-2 shadow-[0_6px_20px_rgba(59,7,100,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(59,7,100,0.12)] ${className}`}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          className="max-h-full w-auto max-w-full object-contain"
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
