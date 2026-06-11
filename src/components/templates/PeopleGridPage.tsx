import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";
import SmartImage from "../ui/SmartImage";

export interface Person {
  name: string;
  role: string;
  image?: string;
  blurb?: string;
}

export interface PeopleGridPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  people: Person[];
}

/**
 * Grid of people cards — core team, international representatives, …
 */
export default function PeopleGridPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  people,
}: PeopleGridPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="flex justify-center gap-10 px-14 pt-10">
        {people.map((person) => (
          <div
            key={person.name}
            className="flex w-72 flex-col items-center rounded-2xl border border-brand/30 bg-white p-6 pb-7 shadow-sm"
          >
            <div className="relative">
              <SmartImage
                src={person.image}
                label="Photo"
                className="size-44 rounded-2xl"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-5 py-1 text-[11px] font-semibold text-white shadow">
                {person.role}
              </span>
            </div>
            <p className="mt-7 text-center text-[20px] font-bold leading-snug text-brand-dark">
              {person.name}
            </p>
            {person.blurb && (
              <p className="mt-3 text-center text-[12px] leading-relaxed text-zinc-500">
                {person.blurb}
              </p>
            )}
          </div>
        ))}
      </div>
    </Page>
  );
}
