// ─── Comparison Packages Block — Content config (EN / DE / PT) ───────────────
// Edit only the string values below. Do NOT change the object shape.
// Copy approved and provided by the author — do not auto-correct.
// Price rule (CLAUDE.md): EN/PT → "€39" / "€290" · DE → "39 €" / "290 €"
// ──────────────────────────────────────────────────────────────────────────────

export interface ComparisonCard {
  /** Small uppercase label shown at the top of the card header */
  label: string
  /** Main package name (displayed large in header) */
  packageName: string
  /** Price string — follow price rules: EN/PT "€39", DE "39 €" */
  price: string
  /** Short description shown at the top of the card body */
  description: string
  /** Bulleted list of included items */
  items: string[]
  /** Optional inline note below the items list. Use '' if not needed. */
  itemNote: string
  /** CTA button label */
  button: string
  /** Microcopy line below the button */
  microcopy: string
}

export interface ComparisonContent {
  sectionTitle: string
  sectionSubtitle: string
  card1: ComparisonCard
  card2: ComparisonCard
  /** Short guidance line for card 1 (shown in the footer area) */
  footerLine1: string
  /** Short guidance line for card 2 (shown in the footer area) */
  footerLine2: string
}

export const comparisonContent: Record<'en' | 'de' | 'pt', ComparisonContent> = {

  // ── ENGLISH ──────────────────────────────────────────────────────────────────
  en: {
    sectionTitle: 'CHOOSE YOUR EXPERIENCE',
    sectionSubtitle:
      'Two ways to receive these sacred songs with respect, authenticity, and a direct connection to the indigenous tradition they come from.',
    card1: {
      label: 'ENTRY EXPERIENCE',
      packageName: 'FIRST SPRING',
      price: '€39',
      description:
        'A simple and respectful way to begin connecting with the roots of these sacred songs.',
      items: [
        '6 high-quality WAV audio recordings',
        'Master e-book with lyrics, context, and guidance',
        'Living Pronunciation Guide',
        'Alliance Letter',
        'Listening Ritual',
      ],
      itemNote: '',
      button: 'Receive the First Spring — €39',
      microcopy: 'Immediate access • 60% returns to the village • 30-day guarantee',
    },
    card2: {
      label: 'FULL EXPERIENCE',
      packageName: 'LIVING SPRING',
      price: '€290',
      description:
        'The complete transmission for those who wish to experience the songs in their deepest form and learn directly from Paká.',
      items: [
        'Everything included in the First Spring',
        '8 sacred songs in total',
        'Videos of Paká singing the songs',
        'Videos explaining the meaning and origin of each song',
        'Additional supporting PDFs',
        '2 exclusive online meetings with Paká',
      ],
      itemNote:
        'These meetings are a rare opportunity to ask questions, receive guidance, and deepen your connection with the tradition behind the songs.',
      button: 'Enter the Living Spring — €290',
      microcopy: 'Immediate access • Videos + exclusive meetings • 30-day guarantee',
    },
    footerLine1: 'Not sure where to start? Begin with the First Spring.',
    footerLine2:
      'If you want the deepest and most complete experience, enter the Living Spring.',
  },

  // ── DEUTSCH ──────────────────────────────────────────────────────────────────
  de: {
    sectionTitle: 'WÄHLE DEINE ERFAHRUNG',
    sectionSubtitle:
      'Zwei Wege, diese heiligen Gesänge mit Respekt, Authentizität und direkter Verbindung zur indigenen Tradition zu empfangen, aus der sie stammen.',
    card1: {
      label: 'EINSTIEG',
      packageName: 'ERSTE QUELLE',
      price: '39 €',
      description:
        'Ein einfacher und respektvoller Weg, um mit den Wurzeln dieser heiligen Gesänge in Verbindung zu kommen.',
      items: [
        '6 WAV-Audios in hoher Klangqualität',
        'Master-E-Book mit Texten, Kontext und Anleitung',
        'Leitfaden für die richtige Aussprache',
        'Brief der Allianz',
        'Hör-Ritual',
      ],
      itemNote: '',
      button: 'Erhalte die Erste Quelle — €39',
      microcopy: 'Sofortiger Zugang • 60 % gehen zurück an das Dorf • 30-Tage-Garantie',
    },
    card2: {
      label: 'VOLLSTÄNDIGE ERFAHRUNG',
      packageName: 'LEBENDIGE QUELLE',
      price: '290 €',
      description:
        'Die vollständige Übertragung für alle, die die Gesänge in ihrer tiefsten Form erleben und direkt von Paká lernen möchten.',
      items: [
        'Alles aus der Ersten Quelle',
        'Insgesamt 8 heilige Gesänge',
        'Videos von Paká beim Singen',
        'Videos mit Erklärungen zur Bedeutung und Herkunft jedes Gesangs',
        'Zusätzliche unterstützende PDFs',
        '2 exklusive Online-Treffen mit Paká',
      ],
      itemNote:
        'Diese Treffen sind eine seltene Gelegenheit, Fragen zu stellen, Anleitung zu erhalten und die Verbindung zur Tradition hinter den Gesängen zu vertiefen.',
      button: 'Zur Lebendigen Quelle — €290',
      microcopy: 'Sofortiger Zugang • Videos + exklusive Treffen • 30-Tage-Garantie',
    },
    footerLine1: 'Du bist unsicher, womit du beginnen sollst? Beginne mit der Ersten Quelle.',
    footerLine2:
      'Wenn du die tiefste und vollständigste Erfahrung möchtest, wähle die Lebendige Quelle.',
  },

  // ── PORTUGUÊS ────────────────────────────────────────────────────────────────
  pt: {
    sectionTitle: 'ESCOLHA A SUA EXPERIÊNCIA',
    sectionSubtitle:
      'Duas formas de receber esta transmissão com verdade, respeito e conexão direta com a fonte.',
    card1: {
      label: 'PORTA DE ENTRADA',
      packageName: 'PRIMEIRA NASCENTE',
      price: '€39',
      description: 'Para quem quer começar com raiz, clareza e respeito à fonte.',
      items: [
        '6 áudios WAV em alta fidelidade',
        'E-book mestre com letra, contexto e direção',
        'Guia da Pronúncia Viva',
        'Carta da Aliança',
        'Ritual de Escuta',
      ],
      itemNote: '',
      button: 'Receber a Primeira Nascente — €39',
      microcopy: 'Acesso imediato • 60% retorna à aldeia • Garantia 30 dias',
    },
    card2: {
      label: 'EXPERIÊNCIA PREMIUM',
      packageName: 'NASCENTE VIVA',
      price: '€290',
      description: 'Para quem quer viver a forma mais profunda desta transmissão.',
      items: [
        'Tudo da Primeira Nascente',
        '8 cantos no total',
        'Vídeos com Paká cantando',
        'Vídeos explicando o significado e a origem dos cantos',
        'PDFs extras de apoio',
        '2 encontros online exclusivos com Paká',
      ],
      itemNote: '',
      button: 'Entrar na Nascente Viva — €290',
      microcopy: 'Acesso imediato • Vídeos + encontros exclusivos • Garantia 30 dias',
    },
    footerLine1: 'Não sabe por onde começar? Comece pela Primeira Nascente.',
    footerLine2: 'Quer a forma mais profunda e acompanhada? Entre na Nascente Viva.',
  },
}
