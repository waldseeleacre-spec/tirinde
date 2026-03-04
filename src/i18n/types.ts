export type Lang = 'en' | 'de' | 'pt'

export interface HeroTranslations {
  headline: string
  subheadline: string
  transmitters: string
  ctaButton: string
  microcopy: string
}

export interface Block2Translations {
  title: string
  lead: string
  transition: string
  doubt: string
  answer: string
  card1: string
  card2: string
  callout: string
  quote: string
}

export interface Block3Translations {
  thesis: string        // (A) headline statement
  defLine1: string      // (B) definition line 1
  defLine2: string      // (B) definition line 2 — contains kw1/kw2/kw3
  kw1: string           // keyword "origin/origem/Ursprung" — for highlight
  kw2: string           // keyword "permission/permissão/Erlaubnis"
  kw3: string           // keyword "direction/direção/Richtung"
  when1: string         // (C) card 1 — full sentence
  when2: string         // (C) card 2 — full sentence
  when3: string         // (C) card 3 — full sentence
  whenLabel: string     // "When" / "Wenn" / "Quando"
  close1: string        // (D) "You did not fail."
  close2: string        // (D) "You simply never had access to the spring."
}

export interface Block4Translations {
  headlineLine1: string   // "The spring exists."
  headlineLine2: string   // "And now you can drink directly from it."
  viveLine1: string       // "Paká and Rurá did not 'study'… They live them."
  viveLine2: string       // "They learned from the elders…"
  notLine1: string        // "The First Seed is not a music course."
  notLine2: string        // "Not a generic spiritual workshop."
  isLine: string          // "It is a simple and direct transmission — …"
  whatChangesQ: string    // "What changes when you learn this way?"
  change1: string         // item 1
  change2: string         // item 2
  change3: string         // item 3 (multi-line)
}

export interface Block5Translations {
  sectionLabel: string      // "Who is opening this portal" / "Wer dieses Tor öffnet" / "Quem está abrindo este portal"
  lead: string              // "Paká Kamanawa and Rurá Varinawa are living guardians…"
  ethicalCallout: string    // "They carry permission and responsibility…"
  pakaLabel: string         // "Paká says:" / "Worte von Paká:" / "Fala do Paká:"
  pakaQuote: string         // the full quote
  ruraLabel: string         // "Rurá says:" / "Worte von Rurá:" / "Fala da Rurá:"
  ruraQuote: string         // the full quote
}

export interface Block6Translations {
  statLine1: string     // "This is not a purchase." / "Aqui não é compra."
  statLine2: string     // "It is reciprocity." / "É reciprocidade."
  pctLine: string       // "60% of the value returns directly to the Noke Koĩ village."
  item1: string         // "You receive the medicine of the voice."
  item2: string         // "The village receives strength to resist…"
  closingLine1: string  // "This is what we call a mutual healing alliance:"
  closingLine2: string  // "You learn in truth — and the source is strengthened."
}

export interface Block7Translations {
  intro: string           // "Inside The First Seed (€39), you receive:"
  item1Title: string      // "The Voices of the Spring — 6 High-Fidelity WAV Audios"
  item1Desc: string       // description
  item2Title: string      // "The Book of Prayers — Master E-book…"
  item2Desc: string
  item3Title: string      // "Bonus: Living Pronunciation Guide…"
  item3Desc: string
  item4Title: string      // "Bonus: Letter of Alliance…"
  item4Desc: string
  item5Title: string      // "Bonus: Listening Ritual…"
  item5Desc: string
  ctaButton: string       // same as hero CTA
  microcopy: string       // same as hero microcopy
}

export interface Block8Translations {
  sectionTitle: string   // "Who this is for" / "Für wen ist es?" / "Para quem é"
  card1Title: string
  card1Body: string
  card2Title: string
  card2Body: string
  card3Title: string
  card3Body: string
}

export interface Block9Translations {
  title: string     // "The VOZ Method (simple, deep, practical)"
  vItem: string     // "V — Vibration: First you listen…"
  oItem: string     // "O — Origin: Then you understand…"
  zItem: string     // "Z — Zeal: Then you practice…"
  callout: string   // "You leave the echo and enter transmission."
}

export interface Block10Translations {
  title: string     // "Clear Spring Guarantee — feel the difference or we refund you"
  body1: string     // "Access the audios and guides. Practice."
  body2: string     // guarantee body (HTML with <strong> highlights on 30 days / 100% / No questions)
  footer1: string   // "The village return pact will be honored regardless."
  footer2: string   // "Your risk is zero. Our commitment is total." (HTML with <strong>)
}

export interface Block11Translations {
  sectionTitle: string  // "FAQ" / "Häufige Fragen" / "FAQ"
  q1: string; a1: string  // remote?
  q2: string; a2: string  // pronounce?
  q3: string; a3: string  // circles?
  q4: string; a4: string  // receive material?
  q5: string; a5: string  // why WAV?
  q6: string; a6: string  // don't like it?
}

export interface Block12Translations {
  line1: string   // "While the spiritual marketplace delivers..."
  line2: string   // "here you receive the spring."
  ctaButton: string
  microcopy: string
}

export interface Translations {
  hero: HeroTranslations
  block2: Block2Translations
  block3: Block3Translations
  block4: Block4Translations
  block5: Block5Translations
  block6: Block6Translations
  block7: Block7Translations
  block8: Block8Translations
  block9: Block9Translations
  block10: Block10Translations
  block11: Block11Translations
  block12: Block12Translations
  langSwitcher: { en: string; de: string; pt: string }
}
