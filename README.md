# Plex Bit Infosystems — PDF Brochure Generator

A local React + Tailwind v4 tool that renders the company brochure as fixed-size
landscape pages (1280×720, same ratio as the reference brochures) and exports a
pixel-perfect PDF straight from the browser.

## Usage

```bash
pnpm install
pnpm dev          # open http://localhost:5173
```

Export to PDF: click the **🖨️ Print / Save as PDF** button (or `File → Print`),
choose **Save as PDF**, and make sure margins are **None** / default — the
`@page` rule already sets the exact page size, so every `.page` section becomes
exactly one PDF page.

## Scripts

```bash
pnpm dev          # start the Vite dev server
pnpm build        # type-check (tsc -b) + production build to dist/
pnpm preview      # preview the production build
pnpm lint:check   # check formatting / lint (ultracite / biome)
pnpm lint:fix     # auto-fix lint + sort Tailwind classes
```

## Project structure

```
src/
  data/
    brochure.ts            ← ALL content lives here (text, people, logos, projects…)
  components/
    layout/
      page.tsx             ← fixed 1280×720 page shell (brand accents)
      page-header.tsx      ← accent bar + two-tone section heading
    templates/             ← page designs; reused with different props
      cover-page.tsx           intro-page.tsx           icon-card-grid-page.tsx
      vision-mission-page.tsx  timeline-page.tsx        logo-grid-page.tsx
      category-logo-page.tsx   databases-page.tsx       stats-page.tsx
      case-study-detail-page.tsx  project-showcase-page.tsx
      offices-page.tsx         world-map-page.tsx       contact-page.tsx
      … (see the folder for the full list)
    ui/                    ← small reusable pieces
      brand-logo.tsx  smart-image.tsx  logo-tile.tsx  stat-ring.tsx
      slash-accent.tsx  icons.tsx  use-image-fallback.ts
  app.tsx                  ← the deck: ordered list of pages (numbering is automatic)
  index.css                ← Tailwind import, brand @theme tokens, page geometry
public/
  images/                  ← brochure assets, grouped by section
    clients/  case-studies/  projects/  technology-stack/  databases/
    certifications/  api-integration/  offices/  recognition/  company-pictures/
    icons/  map/
```

## Editing the brochure

- **Change content** → edit `src/data/brochure.ts` only.
- **Add / remove / reorder pages** → edit the `pages` array in `src/app.tsx`.
  Page numbers are assigned automatically from array order.
- **Add images** → drop files into `public/images/<section>/` using the paths
  referenced in `brochure.ts`. Missing images render clean placeholders, so the
  brochure always exports without broken images.
- **Change brand colors / fonts** → the `@theme` block in `src/index.css`.
- **Change page size** → `--page-w` / `--page-h` and the `@page` rule in
  `src/index.css` (keep them in sync).

Each template is content-agnostic: the same `IconCardGridPage` powers Services,
Why Choose Us, Vision & Mission, and Industries — just pass different props.

> Some template files (e.g. `people-grid-page`, `recognition-page`,
> `checklist-page`, `case-study-page`, `project-pair-page`) are alternate layouts
> kept on hand but not currently wired into the deck.
