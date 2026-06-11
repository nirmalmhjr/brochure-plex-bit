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

## Project structure

```
src/
  data/
    brochure.ts            ← ALL content lives here (text, people, logos, projects…)
  components/
    layout/
      Page.tsx             ← fixed 1280×720 page shell (footer, page number, accent)
      PageHeader.tsx       ← accent bar + two-tone section heading
    templates/             ← page designs; reused with different props
      CoverPage.tsx          IntroPage.tsx          IconCardGridPage.tsx
      PeopleGridPage.tsx     TimelinePage.tsx       LogoGridPage.tsx
      CategoryLogoPage.tsx   ChecklistPage.tsx      StatsPage.tsx
      ProjectHighlightPage.tsx  CaseStudyPage.tsx
      OfficesPage.tsx        ContactPage.tsx
    ui/                    ← small reusable pieces
      BrandLogo, SmartImage, LogoTile, StatRing, SlashAccent
  App.tsx                  ← the deck: ordered list of pages (numbering is automatic)
public/
  images/
    brand/  team/  clients/  tech/  projects/  offices/
```

## Editing the brochure

- **Change content** → edit `src/data/brochure.ts` only.
- **Add / remove / reorder pages** → edit the `pages` array in `src/App.tsx`.
  Page numbers are assigned automatically from array order.
- **Add images** → drop files into `public/images/<folder>/` using the paths
  already referenced in `brochure.ts` (e.g. `public/images/brand/logo.png`,
  `public/images/team/james-adamson.jpg`). Missing images render clean
  placeholders, so the brochure always exports without broken images.
- **Change brand colors / fonts** → `@theme` block in `src/index.css`.
- **Change page size** → `--page-w` / `--page-h` and the `@page` rule in
  `src/index.css` (keep them in sync).

Each template is content-agnostic: the same `IconCardGridPage` powers Services,
Why Choose Us, Vision & Mission, and Industries — just pass different props.
