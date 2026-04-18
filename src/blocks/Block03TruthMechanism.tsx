import { useEffect, useRef, type ReactElement } from 'react'
import { useLang } from '../i18n/LangContext'

function DiamondRule() {
  return (
    <div aria-hidden="true" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '2.5rem 0',
    }}>
      <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.15)' }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.55" />
      </svg>
      <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.15)' }} />
    </div>
  )
}

// Icons cream (#E6E3DC) — visíveis sobre fundo ardósia
function IconWave() {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" fill="none" aria-hidden="true">
      {/* Onda principal — espessa e visível */}
      <path d="M2 16 C5 8, 8 24, 11 16 C14 8, 17 24, 20 16 C23 8, 26 24, 29 16 C32 8, 35 24, 38 16 C40 12, 41 14, 42 16"
        stroke="#E6E3DC" strokeWidth="2" strokeLinecap="round" fill="none" opacity="1" />
      {/* Eco sutil abaixo */}
      <path d="M6 22 C8 18, 10 26, 12 22 C14 18, 16 26, 18 22 C20 18, 22 26, 24 22"
        stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.40" />
    </svg>
  )
}

function IconMist() {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" fill="none" aria-hidden="true">
      {/* 3 linhas de névoa — decrescentes */}
      <line x1="4"  y1="10" x2="40" y2="10" stroke="#E6E3DC" strokeWidth="2"   strokeLinecap="round" opacity="1" />
      <line x1="8"  y1="17" x2="36" y2="17" stroke="#E6E3DC" strokeWidth="1.5" strokeLinecap="round" opacity="0.60" />
      <line x1="13" y1="24" x2="31" y2="24" stroke="#E6E3DC" strokeWidth="1"   strokeLinecap="round" opacity="0.30" />
      {/* Ponto de origem */}
      <circle cx="4" cy="10" r="2" fill="#8C5737" opacity="0.70" />
    </svg>
  )
}

function IconBrokenLink() {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" fill="none" aria-hidden="true">
      {/* Elo esquerdo */}
      <path d="M6 16 H13 M7 10 C4 10, 2 12.5, 2 16 C2 19.5, 4 22, 7 22 H14 C16 22, 18 20.5, 18 19"
        stroke="#E6E3DC" strokeWidth="2" strokeLinecap="round" opacity="1" />
      {/* Elo direito */}
      <path d="M38 16 H31 M37 22 C40 22, 42 19.5, 42 16 C42 12.5, 40 10, 37 10 H30 C28 10, 26 11.5, 26 13"
        stroke="#E6E3DC" strokeWidth="2" strokeLinecap="round" opacity="1" />
      {/* Quebra central — tracejado terracota */}
      <line x1="19" y1="16" x2="25" y2="16"
        stroke="#8C5737" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" opacity="0.85" />
    </svg>
  )
}

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
                  color: '#E6E3DC',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(140,87,55,0.55)',
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

const ICONS = [<IconWave />, <IconMist />, <IconBrokenLink />]

export function Block03TruthMechanism() {
  const { t } = useLang()
  const { block3 } = t
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} style={{ background: 'radial-gradient(ellipse at 50% 15%, #4e6070 0%, #435362 65%)', position: 'relative' }}>

      {/* Linha superior */}
      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(230,227,220,0.12)', width: '100%' }} />

      <div style={{
        maxWidth: '52rem',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
      }}>

        {/* ── Eyebrow ── */}
        <p data-animate data-delay="1" style={{
          textAlign: 'center',
          fontFamily: 'Cinzel, serif',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#8C5737',
          opacity: 0.80,
          marginBottom: '2rem',
        }}>— III —</p>

        {/* ── (A) Thesis ── */}
        <div data-animate data-delay="2" style={{ textAlign: 'center', marginBottom: '0' }}>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4.5vw, 2.4rem)',
            color: '#E6E3DC',
            lineHeight: 1.3,
            letterSpacing: '0.01em',
            maxWidth: '38rem',
            margin: '0 auto',
          }}>
            {block3.thesis}
          </h2>
        </div>

        <DiamondRule />

        {/* ── (B) Definition card — tom-sobre-tom elevado ── */}
        <div data-animate data-delay="3" style={{
          maxWidth: '36rem',
          margin: '0 auto 0',
          padding: 'clamp(1.75rem, 4vw, 2.25rem)',
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(230,227,220,0.18)',
          borderTop: '2px solid #8C5737',
          borderRadius: '16px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.30), inset 0 1px 0 rgba(230,227,220,0.08)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 1.85,
            color: '#E6E3DC',
            opacity: 0.88,
            marginBottom: '0.75rem',
          }}>
            {block3.defLine1}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 1.85,
            color: '#E6E3DC',
            opacity: 0.75,
          }}>
            {highlightKeywords(block3.defLine2, [block3.kw1, block3.kw2, block3.kw3])}
          </p>
        </div>

        <DiamondRule />

        {/* ── (C) 3 consequence cards ── */}
        <div data-animate data-delay="1" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
          gap: '1rem',
          marginBottom: '0',
        }}>
          {cards.map(({ sentence, icon }, i) => (
            <div key={i} style={{
              position: 'relative',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(230,227,220,0.13)',
              borderTop: '2px solid #8C5737',
              borderRadius: '0 0 14px 14px',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(140,87,55,0.10)',
            }}>
              {/* Número de ordem — marca d'água */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                top: '0.75rem',
                right: '1rem',
                fontFamily: 'Cinzel, serif',
                fontWeight: 900,
                fontSize: '3.5rem',
                color: '#E6E3DC',
                opacity: 0.04,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>{i + 1}</div>

              {/* Icon — cream, grande e visível */}
              <div>{icon}</div>

              {/* Label "When" */}
              <p style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8C5737',
                opacity: 0.85,
              }}>
                {block3.whenLabel}
              </p>

              {/* Sentence */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.90rem, 2vw, 1rem)',
                lineHeight: 1.78,
                color: '#E6E3DC',
                opacity: 0.85,
              }}>
                {sentence}
              </p>
            </div>
          ))}
        </div>

        <DiamondRule />

        {/* ── (D) Closing callout ── */}
        <div data-animate data-delay="2" style={{
          maxWidth: '34rem',
          margin: '0 auto',
          padding: 'clamp(1.75rem, 4vw, 2.25rem)',
          background: 'rgba(140,87,55,0.18)',
          border: '1px solid rgba(140,87,55,0.45)',
          borderRadius: '14px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(140,87,55,0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          {/* Ornamento topo */}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke="#8C5737" strokeWidth="1.2" opacity="0.60" />
            <circle cx="12" cy="12" r="3" fill="#8C5737" opacity="0.50" />
          </svg>

          <p style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
            color: '#E6E3DC',
            lineHeight: 1.4,
            letterSpacing: '0.01em',
          }}>
            {block3.close1}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 2.4vw, 1.08rem)',
            lineHeight: 1.78,
            color: '#E6E3DC',
            opacity: 0.68,
          }}>
            {block3.close2}
          </p>
        </div>

      </div>

      {/* Linha inferior */}
      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(230,227,220,0.12)', width: '100%' }} />

    </section>
  )
}
