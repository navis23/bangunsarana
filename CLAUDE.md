# CLAUDE.md

Guidance for Claude Code sessions working in this repository.

## What this is

**bangunsarana** — the public marketing website for **CV. Sarana Berkah Sejahtera (SBS)**, a construction contractor in Pacet, Mojokerto, Jawa Timur. SBS is the facade-ACP & construction arm of the TGI holding group. Live domain target: **https://bangunsarana.id**.

Purpose: a direct-to-owner sales weapon — credibility + SEO lead generation toward a WhatsApp conversation. Audiences: property developers, instansi/BUMN, government-program contractors, ACP material suppliers (referral channel), private building owners.

## Commands

Package manager is **npm**.

- `npm install` — install deps
- `npm run dev` — dev server on http://localhost:4321
- `npm run build` — static build to `dist/` (this is the CI check — keep it green)
- `npm run preview` — preview the production build

No test or lint script yet.

## Architecture

**Astro 5, fully static** (`output: 'static'`), zero JS by default. Islands only when a page genuinely needs them. GSAP for scroll animation (per-page, lazy). Three.js deferred to a later slice — never block LCP.

- `src/lib/site.ts` — **single source of truth** for company data (name, address, WA number, email, nav). Never hardcode contact data in pages.
- `src/layouts/Base.astro` — the only layout. Owns full SEO head (canonical, OG, JSON-LD `GeneralContractor` on every page; pages can inject extra schema via the `schema` prop), header, footer, skip link.
- `src/styles/global.css` — Tailwind v4 configured **in CSS** via `@theme`. No `tailwind.config.js`. Design tokens + component classes live here.
- `src/pages/` — file-based routes. `trailingSlash: 'never'`.
- Path alias: `~/*` → `src/*`.

**All UI copy is Indonesian.** Operator-natural, not bureaucratic — loanwords operators actually use (ACP, facade, maintenance) stay.

## Design system — "PANEL"

The ACP panel is the unit of composition. Codified in `src/styles/global.css`:

- **Surfaces compose like a facade**: modular panels, visible seams (`gap-px` grids over a `bg-seam` base, hairline borders), sharp corners (`--radius-panel: 2px`).
- **Palette**: `steel-*` (cool aluminum neutrals), `paper`/`ink` surfaces, `seam`/`seam-dark` hairlines, `blueprint` (sparingly). **`safety` orange is the single accent** — reserved for CTAs, live status, key numbers. Don't dilute it.
- **Type**: Archivo Variable for display AND body (one font file; display uses `.display-panel` — wide, black, uppercase). IBM Plex Mono for spec labels (`.label-spec`), codes, metadata.
- Reusable classes: `.panel`, `.panel-dark`, `.btn-safety`, `.btn-ghost`, `.display-panel`, `.label-spec`. Prefer these over reinventing.
- No glassmorphism, no glows, no gradients-as-decoration. Industrial restraint; the project photography provides the richness.

## SEO contract

- Every page: unique `title` + `description`, canonical, OG tags (via `Base.astro` props).
- Service pages are keyword landing pages (jasa pasang ACP, kontraktor facade, dll).
- Project case studies are the compounding SEO asset.
- `@astrojs/sitemap` generates the sitemap; `public/robots.txt` points to it.
- Performance IS SEO here: Lighthouse ≥95, LCP < 2s on mid-range Android.

## Workflow discipline

- **Branch per slice**; bump `package.json` version + add a CHANGELOG entry on every merge.
- **CHANGELOG.md is the handoff**; `HANDOFF.md` carries live session state — read it first when resuming.
- Present findings → discuss → agree → implement. Stop and ask Navis on business decisions (pricing display, client naming, copy claims).
- Don't overdesign — prefer the plain/existing pattern; Navis asks when he wants more polish.
