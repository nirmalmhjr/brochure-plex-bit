import { useState } from "react";
import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

export interface RecognitionItem {
  name: string;
  src?: string;
}

export interface RecognitionPageProps extends Pick<PageProps, "pageNumber"> {
  title: string;
  highlight?: string;
  subtitle?: string;
  logos: RecognitionItem[];
  columns?: 2 | 3 | 4;
}

const colClass = { 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4" } as const;

function RecognitionBadge({ name, src }: RecognitionItem) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          className="h-36 w-auto max-w-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-brand/10">
          <span className="text-center text-sm font-semibold leading-snug text-brand">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function RecognitionPage({
  pageNumber,
  title,
  highlight,
  subtitle,
  logos,
  columns = 3,
}: RecognitionPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <PageHeader title={title} highlight={highlight} subtitle={subtitle} />

      <div className="px-14 pt-14">
        <div className={`grid ${colClass[columns]} gap-6`}>
          {logos.map((item) => (
            <RecognitionBadge key={item.name} name={item.name} src={item.src} />
          ))}
        </div>
      </div>
    </Page>
  );
}
