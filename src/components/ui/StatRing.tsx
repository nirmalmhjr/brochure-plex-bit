/** Tricore-style circular stat ring. */
export default function StatRing({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="grid size-44 place-items-center rounded-full p-[5px] shadow-[0_12px_40px_rgba(126,34,206,0.18)]"
        style={{
          background:
            "conic-gradient(from 200deg, #7e22ce, #d946ef 55%, #ede9fe 55% 100%)",
        }}
      >
        <div className="grid size-full place-items-center rounded-full bg-white">
          <div className="text-center">
            <p className="text-[38px] font-extrabold leading-none text-brand-dark">
              {value}
            </p>
            <p className="mx-auto mt-1.5 max-w-32 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
