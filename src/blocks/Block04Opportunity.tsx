import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'

// Ícones ancestrais — 40×40, terracota, visíveis
function IconMessage() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Pena / palavra carregada */}
      <path d="M20 6 C28 6, 34 10, 34 18 C34 24, 30 28, 24 30 L20 34 L18 28 C12 26, 8 22, 8 18 C8 10, 12 6, 20 6Z"
        stroke="#8C5737" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.75" />
      <path d="M14 18 H26" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <path d="M14 22 H22" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.35" />
      <circle cx="20" cy="14" r="1.5" fill="#8C5737" opacity="0.80" />
    </svg>
  )
}

function IconSilence() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Espiral para dentro — silêncio / clareza interior */}
      <path d="M20 20 C20 17, 17 15, 14 16 C11 17, 10 20, 11 23 C12 26, 15 28, 19 27 C23 26, 26 23, 26 19 C26 14, 22 10, 17 10 C12 10, 8 14, 8 19"
        stroke="#8C5737" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.80" />
      <circle cx="20" cy="20" r="2.5" fill="#8C5737" opacity="0.85" />
      {/* Arcos externos de quietude */}
      <path d="M30 14 C33 17, 33 23, 30 26" stroke="#8C5737" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M33 11 C37 15, 37 25, 33 29" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.18" />
    </svg>
  )
}

function IconClarity() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Sol ancestral — clareza / luz */}
      <circle cx="20" cy="20" r="5" fill="#8C5737" opacity="0.80" />
      <circle cx="20" cy="20" r="9" stroke="#8C5737" strokeWidth="1.2" fill="none" opacity="0.35" />
      {/* 8 raios cardinais + diagonais */}
      <line x1="20" y1="4"  x2="20" y2="9"  stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.80" />
      <line x1="20" y1="31" x2="20" y2="36" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.80" />
      <line x1="4"  y1="20" x2="9"  y2="20" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.80" />
      <line x1="31" y1="20" x2="36" y2="20" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.80" />
      <line x1="8"  y1="8"  x2="12" y2="12" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.50" />
      <line x1="28" y1="28" x2="32" y2="32" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.50" />
      <line x1="32" y1="8"  x2="28" y2="12" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.50" />
      <line x1="12" y1="28" x2="8"  y2="32" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.50" />
    </svg>
  )
}

function DiamondRule() {
  return (
    <div aria-hidden="true" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '2.5rem 0',
    }}>
      <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.22)' }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.50" />
      </svg>
      <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.22)' }} />
    </div>
  )
}

function renderLines(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
  ))
}

export function Block04Opportunity() {
  const { t } = useLang()
  const { block4 } = t
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

  const changes = [
    { text: block4.change1, icon: <IconMessage /> },
    { text: block4.change2, icon: <IconSilence /> },
    { text: block4.change3, icon: <IconClarity /> },
  ]

  return (
    <section ref={sectionRef} style={{ background: '#E6E3DC', position: 'relative' }}>

      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(140,87,55,0.20)', width: '100%' }} />

      <div style={{
        maxWidth: '52rem',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
      }}>

        {/* Eyebrow */}
        <p data-animate data-delay="1" style={{
          textAlign: 'center',
          fontFamily: 'Cinzel, serif',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#8C5737',
          opacity: 0.8,
          marginBottom: '2rem',
        }}>— IV —</p>

        {/* Headline */}
        <div data-animate data-delay="2" style={{ textAlign: 'center', marginBottom: '0' }}>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 5vw, 2.8rem)',
            color: '#1D1D1D',
            lineHeight: 1.25,
            letterSpacing: '0.01em',
            marginBottom: '0.4rem',
          }}>
            {block4.headlineLine1}
          </h2>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 400,
            fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
            color: '#1D1D1D',
            lineHeight: 1.3,
            opacity: 0.65,
          }}>
            {block4.headlineLine2}
          </h2>
        </div>

        <DiamondRule />

        {/* Card foto + texto */}
        <div data-animate data-delay="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
          gap: '0',
          border: '1px solid rgba(140,87,55,0.20)',
          borderTop: '2px solid #8C5737',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '0',
          boxShadow: '0 12px 56px rgba(29,29,29,0.13)',
        }}>
          <div style={{ position: 'relative', minHeight: '18rem' }}>
            <img
              src="/assets/card paka.png"
              alt="Paká Kamanawa and Rurá Varinawa"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '18rem',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '40%',
              background: 'linear-gradient(to bottom, transparent, rgba(29,29,29,0.40))',
              pointerEvents: 'none',
            }} />
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.80)',
            padding: 'clamp(1.75rem, 4vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.25rem',
          }}>
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.58rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#8C5737',
              opacity: 0.85,
            }}>
              Paká Kamanawa · Rurá Varinawa
            </p>
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#1D1D1D',
              lineHeight: 1.5,
            }}>
              {block4.viveLine1}
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.88rem, 2vw, 0.98rem)',
              lineHeight: 1.82,
              color: '#1D1D1D',
              opacity: 0.60,
            }}>
              {block4.viveLine2}
            </p>
            <div aria-hidden="true" style={{
              width: '3rem', height: '1px',
              background: 'rgba(140,87,55,0.35)',
            }} />
          </div>
        </div>

        <DiamondRule />

        {/* Callout "It is a simple and direct transmission" */}
        <div data-animate data-delay="1" style={{
          background: 'rgba(140,87,55,0.08)',
          border: '1px solid rgba(140,87,55,0.22)',
          borderLeft: '3px solid #8C5737',
          borderRadius: '0 12px 12px 0',
          padding: '1.75rem 2rem',
          marginBottom: '0',
          maxWidth: '36rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 4px 24px rgba(140,87,55,0.08)',
        }}>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(0.95rem, 2.4vw, 1.1rem)',
            color: '#1D1D1D',
            lineHeight: 1.65,
            opacity: 0.90,
          }}>
            {block4.notLine1}<br />
            {block4.notLine2}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.90rem, 2.2vw, 1rem)',
            lineHeight: 1.82,
            color: '#1D1D1D',
            opacity: 0.68,
            marginTop: '0.75rem',
          }}>
            {block4.isLine}
          </p>
        </div>

        <DiamondRule />

        {/* What changes */}
        <div data-animate data-delay="1" style={{ marginBottom: '1rem' }}>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2.6vw, 1.3rem)',
            color: '#1D1D1D',
            textAlign: 'center',
            letterSpacing: '0.02em',
            marginBottom: '2rem',
          }}>
            {block4.whatChangesQ}
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '38rem',
            margin: '0 auto',
          }}>
            {changes.map(({ text, icon }, i) => (
              <div
                key={i}
                data-animate
                data-delay={String(i + 2)}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.70)',
                  border: '1px solid rgba(140,87,55,0.12)',
                  borderTop: '2px solid #8C5737',
                  borderRadius: '0 0 12px 12px',
                  padding: '1.5rem 1.5rem',
                  boxShadow: '0 6px 24px rgba(29,29,29,0.08)',
                }}
              >
                <div style={{ flexShrink: 0, paddingTop: '2px' }}>{icon}</div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.92rem, 2.2vw, 1rem)',
                  lineHeight: 1.82,
                  color: '#1D1D1D',
                  opacity: 0.78,
                }}>
                  {renderLines(text)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(140,87,55,0.20)', width: '100%' }} />

    </section>
  )
}
