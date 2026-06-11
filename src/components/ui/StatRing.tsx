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
        className="grid size-44 place-items-center rounded-full p-2"
        style={{
          background:
            "conic-gradient(from 220deg, #581c87 0% 40%, #7e22ce 40% 75%, #d8b4fe 75% 100%)",
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
