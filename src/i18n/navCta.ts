// ─── Navigation CTA — scroll to package comparison block ─────────────────────
// Used by Hero (Block01), Offer (Block07) and Closing (Block12).
// These CTAs no longer go to checkout directly — they scroll to #block-comparison.
// Copy approved by author 2026-03-08.
// ─────────────────────────────────────────────────────────────────────────────

import type { Lang } from './types'

/** Label for CTAs that scroll the user down to the comparison packages section */
export const navCtaLabel: Record<Lang, string> = {
  en: 'Choose Your Experience',
  de: 'Wähle Deine Erfahrung',
  pt: 'Escolha Sua Experiência',
}

/** Smooth-scroll helper — scrolls to the packages comparison block */
export function scrollToComparison(): void {
  const el = document.getElementById('block-comparison')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
