import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";
import SmartImage from "../ui/smart-image";

export interface Person {
  blurb?: string;
  image?: string;
  name: string;
  role: string;
}

export interface PeopleGridPageProps extends Pick<PageProps, "pageNumber"> {
  highlight?: string;
  people: Person[];
  subtitle?: string;
  title: string;
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
      <PageHeader highlight={highlight} subtitle={subtitle} title={title} />

      <div className="flex justify-center gap-10 px-14 pt-10">
        {people.map((person) => (
          <div
            className="flex w-72 flex-col items-center rounded-2xl border border-brand/30 bg-white p-6 pb-7 shadow-sm"
            key={person.name}
          >
            <div className="relative">
              <SmartImage
                className="size-44 rounded-2xl"
                label="Photo"
                src={person.image}
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-5 py-1 font-semibold text-white text-xs shadow">
                {person.role}
              </span>
            </div>
            <p className="mt-7 text-center font-bold text-brand-dark text-xl leading-snug">
              {person.name}
            </p>
            {person.blurb && (
              <p className="mt-3 text-center text-xs text-zinc-500 leading-relaxed">
                {person.blurb}
              </p>
            )}
          </div>
        ))}
      </div>
    </Page>
  );
}
