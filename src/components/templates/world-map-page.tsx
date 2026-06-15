import Page, { type PageProps } from "../layout/page";
import PageHeader from "../layout/page-header";

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
        <PageHeader highlight="Development Office" title="Our Head Office &" />

        <div className="mt-6 flex flex-1 items-center justify-center">
          <img
            alt="Global office locations"
            className="h-full w-full object-contain"
            src="/images/map/worlmap-map-with-location.png"
          />
        </div>
      </div>
    </Page>
  );
}
