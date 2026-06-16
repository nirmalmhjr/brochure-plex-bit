const SLASH_KEYS = ["slash-a", "slash-b", "slash-c", "slash-d"] as const;

/** The "////" brand decoration used across the reference brochures. */
export default function SlashAccent({
  className = "",
  color = "bg-brand",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden className={`flex gap-1.5 ${className}`}>
      {SLASH_KEYS.map((key) => (
        <span className={`h-4 w-2.5 -skew-x-12 ${color}`} key={key} />
      ))}
    </div>
  );
}
