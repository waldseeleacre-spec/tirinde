# primeira-semente — CLAUDE PROJECT MEMORY (LOCKED)

## Goal
Build a premium minimalist sales landing page for "Primeira Semente".
Work block-by-block. Ask for approval after each block.

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- Keep dependencies minimal (avoid heavy UI libs).

## COPY FINAL LOCK (EN/DE/PT) — LOCKED 2026-03-04

- All 3 languages (PT, DE, EN) are FINAL, reviewed by native speaker.
- NEVER alter any character, punctuation, spacing, or apostrophe in any language.
- Source of truth files:
  - `docs/copy-pt.md` (Português)
  - `docs/copy-de.md` (Deutsch)
  - `docs/copy-en.md` (English)
- Any future copy change: ONLY with explicit user instruction.
- NO auto-rewrite: spellcheck may only detect typos for human review — never auto-correct copy.
- Use verbatim text in the UI.

## Price Rules (LOCKED)
- Price: always €39 in EN/PT; always "39 €" (space before €) in DE.
- Never convert currency.

## Proper Nouns (LOCKED — identical across all languages, never translated)
- Paká Kamanawa, Rurá Varinawa, Noke Koĩ, Noke Vana.

## Product Name (LOCKED)
- PT: "Primeira Semente"
- EN: "the First Seed" / "The First Seed"
- DE: "den Ersten Samen" / "Der Erste Same" / "Im Ersten Samen"

## Language (LOCKED)
- Default language: EN (English)
- Secondary: DE (Deutsch)
- Third: PT (Português)
- Must have a top language switcher: EN / DE / PT
- Clicking switches ALL page content instantly (client-side)
- Persist language in localStorage (remember user choice)

## Page Structure — 12 Blocks
1. Hero (above the fold)
2. O Nome do Problema / The Hollow Echo
3. A Verdade que Muda Tudo / The Truth That Changes Everything
4. A Oportunidade / The Opportunity
5. Quem Transmite / Who Transmits (Paká & Rurá)
6. O Pacto / The Pact (Reciprocity)
7. O Que Você Recebe / What You Receive (Offer €39)
8. Para Quem É / Who It Is For
9. Como Funciona / How It Works (VOZ Method)
10. Garantia / Guarantee
11. FAQ
12. Fechamento / Closing (Final CTA)

## Visual Palette (LOCKED 2026-03-04)
- Background (dominant): #284C42 (verde escuro / dark forest green)
- Text (primary): #E8E0C9 (creme / warm cream)
- Accent / outline: #5B9C9B (azul-esverdeado / teal)
- Shadow / warm accent: #C8955F (marrom claro / ocre / warm ochre)
- Rules: no extra colors, no invented gradients, no pure black (#000000).

## Logo (LOCKED 2026-03-04)
- Brand name: NII TIRINDE KOĨ
- Wordmark style: premium, with indigenous graphic patterns (chevrons, diamonds) flanking the text
- File: `public/assets/logo-nii-tirinde-koi.svg` (9.3MB — contains embedded PNG raster)
- NOTE: For web performance, a lighter PNG/WebP export will be needed for production.
- Logo colors follow the palette above: cream text on dark green, teal outlines, ochre shadows.
- PLACEMENT: Logo appears ONLY in the Hero (Block 1) — centered. NOT repeated in other blocks.

## Design System (LOCKED 2026-03-04)
- Background: #284C42 dominant — deep forest green throughout entire page.
- Section dividers: indigenous geometric SVG pattern (chevrons + diamonds + X motifs) in teal (#5B9C9B) + ochre (#C8955F). Used as horizontal separators between blocks.
- Typography:
  - Display / section labels: Cinzel (Google Fonts) — uppercase, heavy, ancient carved feel.
  - Body / copy: Inter (Google Fonts) — clean, comfortable.
  - Hero headline: Cinzel Display, large, cream, generous line-height.
- CTA Button: rounded-full, ochre/gold fill (#C8955F), dark text, full-width on mobile.
- Mobile: cards, accordions, image-forward. Desktop: multi-column where appropriate.
- Language switcher: top of page, centered — EN | DE | PT — plain text links, active state in ochre.
- NO text crammed together. Generous vertical rhythm. Ritual pacing.
- Feel: immersive ceremony — each block breathes, has weight, separates with the pattern.

## Images Available (design references)
- Indigenous portrait photos (Paká / Rurá / villagers) — placeholder slots (real photos TBD)
- Mockup cards: book covers, audio album art — placeholder slots
- Video section: iframe placeholder with play button overlay

## Translation Gate (LOCKED — OBRIGATÓRIO)
- A block is only considered "done" when all 3 languages are filled: EN, DE, PT.
- Placeholders of type [EN — TODO], [DE — TODO], [PT — TODO] are FORBIDDEN in rendered blocks.

## Local Review Gate (LOCKED — OBRIGATÓRIO)
- Work strictly ONE BLOCK at a time.
- After finishing a block: STOP and ask for local review.
- Do NOT start the next block until the user replies "OK BLOCO X" or "APPROVE BLOCO X".

## Approval Gate (LOCKED — OBRIGATÓRIO)
- Work strictly ONE BLOCK at a time.
- After implementing 1 block: STOP immediately.
- Do NOT start the next block until explicit approval.

## Pending Items
- [x] Logo (received 2026-03-04)
- [x] Visual palette / colors (received 2026-03-04)
- [ ] Design structure & ideas (awaiting from user)
- [ ] Domain & hosting details
- [ ] SEO meta tags
- [ ] Lightweight logo export (PNG/WebP) for web performance
