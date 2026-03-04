// ─── Block 09 — HOW IT WORKS (VOZ Method) ────────────────────
// Layout: 2-col desktop (VOZ diagram LEFT | text RIGHT) · stacked mobile
// Assets: VOZ.png (1792×2400 portrait)
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

export function Block09HowItWorks() {
  const { lang } = useLang()
  const t = translations[lang].block9
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b9-animate]')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = Number((e.target as HTMLElement).dataset.delay || 0) * 130
            setTimeout(() => {
              ;(e.target as HTMLElement).style.opacity = '1'
              ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const anim: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.65s ease, transform 0.65s ease',
  }

  // Parse "V — Vibration: text..." → { letter: "V", rest: "Vibration: text..." }
  function parseItem(raw: string) {
    const parts = raw.split(' \u2014 ')
    return { letter: parts[0], rest: parts.slice(1).join(' \u2014 ') }
  }

  const vozItems = [
    { ...parseItem(t.vItem), delay: 2 },
    { ...parseItem(t.oItem), delay: 3 },
    { ...parseItem(t.zItem), delay: 4 },
  ]

  return (
    <section id="block9" style={{ background: '#284C42', position: 'relative' }}>

      {/* ── Top divider ── */}
      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(200,149,95,0.18)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#C8955F" strokeWidth="1" opacity="0.38" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(200,149,95,0.18)' }} />
      </div>

      <div
        ref={containerRef}
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
        }}
      >

        {/* ── Eyebrow + Title ── */}
        <div
          data-b9-animate
          data-delay="1"
          style={{ ...anim, textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#5B9C9B',
            opacity: 0.70,
            marginBottom: '1rem',
          }}>— IX —</p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
            color: '#E8E0C9',
            letterSpacing: '0.02em',
            lineHeight: 1.35,
          }}>{t.title}</h2>
        </div>

        {/* ── 2-col: diagram LEFT | items RIGHT ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
          gap: 'clamp(2rem, 5vw, 3.5rem)',
          alignItems: 'center',
        }}>

          {/* LEFT: VOZ Diagram */}
          <div
            data-b9-animate
            data-delay="1"
            style={{
              ...anim,
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(200,149,95,0.18)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.30)',
              maxWidth: '28rem',
              margin: '0 auto',
              width: '100%',
            }}
          >
            <img
              src="/assets/VOZ.png"
              alt="VOZ Method — Vibração, Origem, Zelo"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>

          {/* RIGHT: V / O / Z items + callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {vozItems.map(({ letter, rest, delay }, i) => (
              <div
                key={i}
                data-b9-animate
                data-delay={String(delay)}
                style={{
                  ...anim,
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Big letter */}
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 900,
                  fontSize: 'clamp(2.2rem, 5vw, 2.8rem)',
                  color: '#C8955F',
                  lineHeight: 1,
                  flexShrink: 0,
                  width: '2.2rem',
                  textAlign: 'center',
                  opacity: 0.90,
                  marginTop: '2px',
                }}>{letter}</span>

                {/* Thin vertical rule */}
                <span style={{
                  width: '1px',
                  alignSelf: 'stretch',
                  background: 'rgba(200,149,95,0.22)',
                  flexShrink: 0,
                  marginTop: '4px',
                }} />

                {/* Text */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                  lineHeight: 1.80,
                  color: '#E8E0C9',
                  opacity: 0.82,
                  paddingTop: '2px',
                }}>{rest}</p>
              </div>
            ))}

            {/* Callout — conclusion */}
            <div
              data-b9-animate
              data-delay="5"
              style={{
                ...anim,
                borderLeft: '2px solid rgba(200,149,95,0.65)',
                paddingLeft: '1.25rem',
                paddingTop: '1.1rem',
                paddingBottom: '1.1rem',
                background: 'rgba(0,0,0,0.13)',
                borderRadius: '0 10px 10px 0',
                marginTop: '0.25rem',
              }}
            >
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 600,
                fontStyle: 'italic' as const,
                fontSize: 'clamp(0.95rem, 2.4vw, 1.1rem)',
                color: '#E8E0C9',
                letterSpacing: '0.01em',
                lineHeight: 1.55,
              }}>{t.callout}</p>
            </div>

          </div>
        </div>

        {/* Closing dots */}
        <div aria-hidden="true" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          marginTop: '3.5rem',
        }}>
          <div style={{ height: '1px', width: '5rem', background: 'rgba(200,149,95,0.18)' }} />
          <div style={{ display: 'flex', gap: '6px' }}>
            {[0.28, 0.45, 0.28].map((op, i) => (
              <span key={i} style={{
                width: '3px', height: '3px', borderRadius: '50%',
                background: `rgba(200,149,95,${op})`, display: 'block',
              }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
