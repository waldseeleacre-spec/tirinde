import { useEffect, useRef, type ReactElement } from 'react'
import { useLang } from '../i18n/LangContext'

// ── Inline SVG icons — minimal, 20×20 ─────────────────────

function IconWave() {   // pronunciation / sound
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
      <path d="M2 9 C4 5, 6 13, 8 9 C10 5, 12 13, 14 9 C16 5, 18 13, 20 9 C21 7, 22 8, 23 9"
        stroke="#5B9C9B" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function IconMist() {   // meaning / intention / fog
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
      <line x1="3"  y1="6"  x2="21" y2="6"  stroke="#5B9C9B" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
      <line x1="5"  y1="10" x2="19" y2="10" stroke="#5B9C9B" strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
      <line x1="7"  y1="14" x2="17" y2="14" stroke="#5B9C9B" strokeWidth="1.3" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}

function IconBrokenLink() {  // lineage / broken
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
      <path d="M4 9 H8 M5 5 C3 5, 1 7, 1 9 C1 11, 3 13, 5 13 H9 C10 13, 11 12, 11 11"
        stroke="#5B9C9B" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
      <path d="M20 9 H16 M19 13 C21 13, 23 11, 23 9 C23 7, 21 5, 19 5 H15 C14 5, 13 6, 13 7"
        stroke="#5B9C9B" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
      <line x1="11" y1="9" x2="13" y2="9" stroke="#C8955F" strokeWidth="1.3"
        strokeLinecap="round" strokeDasharray="1.5 2" opacity="0.6" />
    </svg>
  )
}

// ── Highlight keywords inside a string → returns JSX ──────
function highlightKeywords(text: string, keywords: string[]) {
  let parts: (string | ReactElement)[] = [text]
  keywords.forEach((kw, idx) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== 'string') return [part]
      const segments = part.split(kw)
      return segments.flatMap((seg, i) =>
        i < segments.length - 1
          ? [
              seg,
              <span
                key={`${kw}-${idx}-${i}`}
                style={{
                  fontWeight: 600,
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(200,149,95,0.45)',
                  textUnderlineOffset: '3px',
                  textDecorationThickness: '1px',
                }}
              >
                {kw}
              </span>,
            ]
          : [seg]
      )
    })
  })
  return <>{parts}</>
}

// ── Card data shape ────────────────────────────────────────
const ICONS = [<IconWave />, <IconMist />, <IconBrokenLink />]

// ── Main component ─────────────────────────────────────────
export function Block03TruthMechanism() {
  const { t } = useLang()
  const { block3 } = t
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.10, rootMargin: '0px 0px -48px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('[data-animate]') ?? []
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [t])

  const cards = [
    { sentence: block3.when1, icon: ICONS[0] },
    { sentence: block3.when2, icon: ICONS[1] },
    { sentence: block3.when3, icon: ICONS[2] },
  ]

  return (
    <section
      ref={sectionRef}
      style={{ background: '#284C42', position: 'relative' }}
    >
      <div
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          paddingTop:    '6rem',
          paddingBottom: '6rem',
          paddingLeft:  'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
        }}
      >

        {/* ── Section eyebrow ── */}
        <p
          data-animate
          data-delay="1"
          style={{
            textAlign: 'center',
            fontFamily: 'Cinzel, serif',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#5B9C9B',
            opacity: 0.75,
            marginBottom: '2rem',
          }}
        >
          — III —
        </p>

        {/* ── (A) Thesis statement ── */}
        <div
          data-animate
          data-delay="2"
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h2
            style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 4.5vw, 2.4rem)',
              color: '#E8E0C9',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
              maxWidth: '38rem',
              margin: '0 auto',
            }}
          >
            {block3.thesis}
          </h2>
          {/* Thin golden line below */}
          <div
            aria-hidden="true"
            style={{
              width: '4rem',
              height: '1px',
              background: 'rgba(200,149,95,0.45)',
              margin: '1.75rem auto 0',
            }}
          />
        </div>

        {/* ── (B) Definition card ── */}
        <div
          data-animate
          data-delay="3"
          style={{
            maxWidth: '34rem',
            margin: '3rem auto',
            padding: '2rem 2.25rem',
            background: 'rgba(255,255,255,0.035)',
            border: '1px solid rgba(232,224,201,0.10)',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.85,
              color: '#E8E0C9',
              opacity: 0.85,
              marginBottom: '0.6rem',
            }}
          >
            {block3.defLine1}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 1.85,
              color: '#E8E0C9',
              opacity: 0.85,
            }}
          >
            {highlightKeywords(block3.defLine2, [block3.kw1, block3.kw2, block3.kw3])}
          </p>
        </div>

        {/* ── (C) Tríade — 3 consequence cards ── */}
        <div
          data-animate
          data-delay="1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          {cards.map(({ sentence, icon }, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(232,224,201,0.10)',
                borderRadius: '12px',
                padding: '1.5rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              {/* Icon */}
              <div>{icon}</div>
              {/* Label */}
              <p
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.20em',
                  textTransform: 'uppercase',
                  color: '#5B9C9B',
                  opacity: 0.7,
                }}
              >
                {block3.whenLabel}
              </p>
              {/* Full sentence */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.88rem, 2vw, 0.97rem)',
                  lineHeight: 1.75,
                  color: '#E8E0C9',
                  opacity: 0.80,
                }}
              >
                {sentence}
              </p>
            </div>
          ))}
        </div>

        {/* ── (D) Closing callout ── */}
        <div
          data-animate
          data-delay="2"
          style={{
            maxWidth: '32rem',
            margin: '0 auto',
            padding: '2.25rem 2rem',
            background: 'rgba(200,149,95,0.06)',
            border: '1px solid rgba(200,149,95,0.22)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            textAlign: 'center',
          }}
        >
          {/* Golden dot */}
          <div
            aria-hidden="true"
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#C8955F',
              opacity: 0.55,
              marginBottom: '0.25rem',
            }}
          />
          <p
            style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
              color: '#E8E0C9',
              lineHeight: 1.4,
              letterSpacing: '0.01em',
            }}
          >
            {block3.close1}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.95rem, 2.4vw, 1.1rem)',
              lineHeight: 1.75,
              color: '#E8E0C9',
              opacity: 0.75,
            }}
          >
            {block3.close2}
          </p>
        </div>

      </div>
    </section>
  )
}
