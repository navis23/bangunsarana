# bangunsarana Changelog

Website of CV. Sarana Berkah Sejahtera (SBS) — bangunsarana.id.
Version source of truth: `package.json`. One entry per merged slice.

---

## v0.1.0 — Fresh start: Astro scaffold + PANEL design system

Repo reset: the old Nuxt 3 starter is fully removed; this is now an **Astro 5 static site** with **Tailwind CSS v4** (CSS-first `@theme` config, no tailwind.config).

- **Stack**: Astro 5 (`output: 'static'`, sitemap integration, `trailingSlash: 'never'`), Tailwind v4 via `@tailwindcss/vite`, GSAP installed (unused until v0.2), self-hosted fonts (Archivo Variable + IBM Plex Mono via Fontsource).
- **Design system "PANEL"** in `src/styles/global.css`: ACP-panel composition (seam hairlines, `gap-px` panel grids, 2px corners), steel neutral scale, single `safety` orange accent, `.display-panel` / `.label-spec` / `.btn-safety` / `.btn-ghost` / `.panel` primitives.
- **`src/lib/site.ts`**: single source of truth for company data (address, WA, email, nav) + `waLink()` helper. WA number pending Navis confirmation.
- **`Base.astro` layout**: full SEO head — per-page title/description, canonical, OG, `GeneralContractor` JSON-LD on every page + per-page schema injection prop; skip link; `lang="id"`.
- **Header/Footer**: panel-mark wordmark (2×2 grid, one safety panel), desktop + mobile nav (one tiny inline script), WA CTA; dark steel footer with contact + navigasi.
- **Placeholder home**: hero skeleton with positioning ("Spesialis Facade ACP & Kontraktor Bangunan") + 4-service panel grid. Full home lands in v0.2.
- **Meta**: favicon (panel mark), robots.txt → sitemap, `~/*` path alias, strict TS.

Locked product decisions: Indonesian-only v1 · all clients namable · GSAP-only v1, Three.js deferred · WhatsApp-direct primary CTA.
