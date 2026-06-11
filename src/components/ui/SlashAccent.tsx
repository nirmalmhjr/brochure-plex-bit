/** The "////" brand decoration used across the reference brochures. */
export default function SlashAccent({
  className = "",
  color = "bg-brand",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`flex gap-1.5 ${className}`} aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className={`h-4 w-2.5 -skew-x-[28deg] ${color}`} />
      ))}
    </div>
  );
}
