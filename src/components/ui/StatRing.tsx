/** Tricore-style circular stat ring. */
export default function StatRing({
  value,
  label,
  sizePx = 176,
}: {
  value: string;
  label: string;
  sizePx?: number;
}) {
  const fontSize = Math.round(sizePx * 0.215);
  const labelSize = Math.round(sizePx * 0.063);

  return (
    <div className="flex flex-col items-center">
      <div
        className="grid place-items-center rounded-full p-[5px] shadow-[0_12px_40px_rgba(126,34,206,0.18)]"
        style={{
          width: sizePx,
          height: sizePx,
          background:
            "conic-gradient(from 200deg, #7e22ce, #d946ef 55%, #ede9fe 55% 100%)",
        }}
      >
        <div className="grid size-full place-items-center rounded-full bg-white">
          <div className="text-center">
            <p
              className="font-extrabold leading-none text-brand-dark"
              style={{ fontSize }}
            >
              {value}
            </p>
            <p
              className="mx-auto mt-1.5 max-w-[7.5rem] font-semibold uppercase tracking-wide text-zinc-500"
              style={{ fontSize: labelSize }}
            >
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
