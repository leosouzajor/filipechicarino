# Phase 4 source reference — Blog + five articles

This package was extracted directly from the original Hostinger Horizons export for filipechicarino.com.br.

## Purpose
Use these files as the authoritative source for Phase 4 of the migration. Do not rewrite, summarize, modernize, or invent content.

## Routes to implement

- `/blog` — source: `original-source/BlogPage.jsx`
- `/blog/empresas-precisam-enxergar-alem-do-cracha` — source: `original-source/Article1.jsx`
- `/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria` — source: `original-source/Article2.jsx`
- `/blog/a-clickzacao-da-vida` — source: `original-source/Article3.jsx`
- `/blog/a-reuniao-fantasma-voce-esta-presente-ou-apenas-conectado` — source: `original-source/Article4.jsx`
- `/blog/a-engenharia-do-prejuizo` — source: `original-source/Article5.jsx`

## Supporting references

- `original-source/BlogSection.jsx` — the original homepage blog cards. The approved homepage must not be visually changed; use this only to cross-check metadata consistency.
- `original-source/PullQuote.jsx` — original pull-quote styling used in articles.
- `original-source/index.css` — original visual/CSS reference.
- `original-source/App.jsx` — original route mapping/reference only. Do NOT restore React Router architecture; adapt routes to the existing TanStack Start/Lovable project.

## Asset rule

The current Lovable project already internalized the original Hostinger assets and the four Unsplash article covers during Phase 1. Reuse the existing local/CDN references from the current project (for example through `src/lib/assets.ts`) rather than restoring Hostinger CDN or external Unsplash dependencies.

The original source files still contain the historical URLs only so you can identify which asset belongs where.

## Fidelity rules

- Preserve every article title, subtitle, date, read time, author label, paragraph, heading, strong emphasis, pull quote, link label, and section order exactly as in the source.
- Preserve `/blog` card order exactly: newest first as in `BlogPage.jsx`.
- Preserve the original article route slugs exactly.
- Preserve the approved Header, Footer, fonts, colors, spacing system and responsive foundation already implemented in Phases 1–3.
- Do not refactor article copy into summaries.
- Do not introduce a CMS, backend, database, Markdown pipeline, or dynamic content system in this phase.
- Do not add new SEO enhancements in Phase 4 beyond preserving the original title and description per route. Full SEO enhancements belong to Phase 5.
- Do not change `/`, `/quem-sou`, `/solucoes`, or `/contato` except if a strictly necessary shared fix is required; if so, verify no visual regression on any approved route.

## Required verification

After implementation, test all six Phase 4 routes on desktop (1280px) and mobile (390px), check console/runtime errors, verify all article links/back links, images, and metadata, and re-check all previously approved routes for regressions. Then STOP for approval before Phase 5.
