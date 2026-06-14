import Page, { type PageProps } from "../layout/Page";
import PageHeader from "../layout/PageHeader";

export type WorldMapPageProps = Pick<PageProps, "pageNumber">;

/**
 * World map page showing all global office locations.
 * The map image already contains pins and callouts for
 * Netherlands, Turkey, Nepal, and India offices.
 */
export default function WorldMapPage({ pageNumber }: WorldMapPageProps) {
  return (
    <Page pageNumber={pageNumber}>
      <div className="flex h-full flex-col px-14 pt-8 pb-6">
        <PageHeader title="Our Head Office &" highlight="Development Office" />

        <div className="mt-6 flex flex-1 items-center justify-center">
          <img
            src="/images/map/worlmap-map-with-location.png"
            alt="Global office locations"
            className="max-h-full w-full object-contain"
          />
        </div>
      </div>
    </Page>
  );
}
