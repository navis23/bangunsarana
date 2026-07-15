# bangunsarana — Session Handoff

**Last updated:** 2026-07-15 (Shu) — v0.1.1: scaffold + real brand colors (hazard yellow).

## ⚡ TL;DR — where we are

- **v0.1.1 on `claude/shu-memories-workflow-9c1vjv`** — repo reset from the old Nuxt starter to a fresh **Astro 5 + Tailwind v4** scaffold. Build green (`npm run build`).
- **Brand recovered from git history**: the old repo carried the real SBS logo (`src/assets/brand/logo-full.png` + `mark.png`) — interlocked-hex SB monogram, **yellow + black**. Accent corrected from orange to hazard yellow with hard contrast rules (ink-on-yellow only; no yellow text on light).
- This is the **SBS company website** (CV. Sarana Berkah Sejahtera — facade ACP & construction contractor, Mojokerto). Strategic purpose per TGI CEO-workspace docs: a *direct-to-owner sales weapon* — credibility + SEO → WhatsApp lead.
- **Locked decisions (Navis, 2026-07-15):** all clients/projects publicly namable · Indonesian-only v1 · GSAP-only v1 (Three.js deferred to v0.7) · WhatsApp-direct as primary CTA.
- **Design direction locked: "PANEL"** — the ACP panel as design system. Steel neutrals, safety-orange single accent, seam hairlines, Archivo display, Plex Mono spec labels. See CLAUDE.md + `src/styles/global.css`.

## 🎯 Roadmap (slice per version)

1. ~~**v0.1** scaffold~~ ✅
2. **v0.2 — Home**: full PANEL hero, featured projects, trust strip (clients: Dhoho Airport, WIKA, Polda Jatim, Amega Westparc, Graha Kamayangan, Daihatsu, Bernofarm, TNI AL), stats, GSAP scroll assembly.
3. **v0.3 — Layanan**: hub + 4 keyword landing pages (facade-acp, konstruksi-bangunan, dapur-modular-sppg, maintenance-renovasi).
4. **v0.4 — Proyek**: index + case-study template (content collections) + seed 5–7 real projects.
5. **v0.5 — Tentang + Kontak**: story, tim, legalitas (akta 15 Jan 2020, Notaris Indarto), visi-misi; kontak WA-first.
6. **v0.6 — SEO/perf hardening**: schema pass, OG images, Lighthouse ≥95 audit.
7. **v0.7 — Motion polish**: GSAP choreography site-wide; optional Three.js facade hero (lazy island, static fallback).

## 🟡 Needs from Navis (carried)

- **Project photos** (Drive has galleries — need picks per project).
- **Logo vector (AI/SVG)** if it exists — hi-res PNGs recovered from git history are in `src/assets/brand/` and are good enough for now.
- **Confirm primary WA number** — placeholder is `0821-3103-2483` (from penawaran letterhead). See TODO in `src/lib/site.ts`.
- Hosting/deploy target (Vercel assumed, not yet wired).

## 📚 Source-of-truth references (Google Drive)

- **SBS Strategic Workstream — Handoff Document** (doc id `1u0X-n_4ljxQukVgqftYJzvP2lRdVIBC41L0p-IlnN1I`) — business context, portfolio, EBOND channel thesis.
- **compro sbs.pdf** — visi/misi, sejarah, akta.
- Penawaran/invoice docs — letterhead contact data.
- Old VROOM repo (`navis23/vrom-v0.1`) — where the Shu working style comes from; **do not touch it**.

## ⚙️ Conventions (don't relearn)

- Branch per slice · bump `package.json` + CHANGELOG entry every merge · CHANGELOG is the handoff.
- Indonesian copy, operator-natural. `safety` accent reserved. Company data only via `src/lib/site.ts`.
- Present → discuss → agree → implement. Stop & ask on business decisions. Don't overdesign.

## ⚠️ Resume protocol

1. Read this file, then CLAUDE.md.
2. `git log --oneline -5` + `npm run build` to confirm green.
3. Pick the next slice from the roadmap; confirm with Navis if priorities may have shifted.
