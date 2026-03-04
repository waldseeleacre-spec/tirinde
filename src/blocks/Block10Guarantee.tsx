// ─── Block 10 — GUARANTEE (Risk Reversal) ────────────────────
// Layout: premium guarantee panel — glass card with shield icon
// Shield: inline SVG, NO text (language-neutral)
// Highlights: 30 days / 100% / no questions / risk is zero — via <strong> in translations
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

// ── Shield icon — geometry only, no text ─────────────────────
function ShieldIcon() {
  return (
    <svg
      width="56"
      height="64"
      viewBox="0 0 56 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M28 3 L52 12 L52 32 C52 46 41 57 28 61 C15 57 4 46 4 32 L4 12 Z"
        stroke="#C8955F"
        strokeWidth="1.5"
        fill="rgba(200,149,95,0.06)"
        opacity="0.80"
      />
      {/* Inner shield outline */}
      <path
        d="M28 9 L46 16.5 L46 31 C46 42 38 51 28 55 C18 51 10 42 10 31 L10 16.5 Z"
        stroke="rgba(200,149,95,0.28)"
        strokeWidth="1"
        fill="none"
      />
      {/* Checkmark */}
      <path
        d="M19 33 L25 39 L38 26"
        stroke="#C8955F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}

export function Block10Guarantee() {
  const { lang } = useLang()
  const t = translations[lang].block10
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b10-animate]')
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

  return (
    <section id="block10" style={{ background: '#284C42', position: 'relative' }}>

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
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
        }}
      >

        {/* ── Eyebrow ── */}
        <div
          data-b10-animate
          data-delay="1"
          style={{ ...anim, textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#5B9C9B',
            opacity: 0.70,
          }}>— X —</p>
        </div>

        {/* ── Main guarantee card ── */}
        <div
          data-b10-animate
          data-delay="2"
          style={{
            ...anim,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(200,149,95,0.20)',
            borderRadius: '20px',
            boxShadow: '0 8px 56px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)',
            padding: 'clamp(2rem, 5vw, 3rem)',
          }}
        >

          {/* Card inner: icon top-center on mobile, flex row on desktop */}
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            gap: '2rem',
          }}>

            {/* Shield icon */}
            <div
              data-b10-animate
              data-delay="3"
              style={{
                ...anim,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ShieldIcon />
            </div>

            {/* Text content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '1.25rem',
              width: '100%',
            }}>

              {/* Guarantee title */}
              <div
                data-b10-animate
                data-delay="3"
                style={{ ...anim, textAlign: 'center' }}
              >
                <h2 style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 3vw, 1.45rem)',
                  color: '#E8E0C9',
                  letterSpacing: '0.015em',
                  lineHeight: 1.40,
                }}>{t.title}</h2>
              </div>

              {/* Thin separator */}
              <div aria-hidden="true" style={{
                height: '1px',
                background: 'rgba(200,149,95,0.15)',
                margin: '0.25rem 0',
              }} />

              {/* Body 1 — short statement */}
              <p
                data-b10-animate
                data-delay="4"
                style={{
                  ...anim,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                  lineHeight: 1.75,
                  color: '#E8E0C9',
                  opacity: 0.78,
                  textAlign: 'center',
                }}
              >{t.body1}</p>

              {/* Body 2 — guarantee detail with highlights */}
              <p
                data-b10-animate
                data-delay="4"
                style={{
                  ...anim,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.88rem, 2.1vw, 0.98rem)',
                  lineHeight: 1.85,
                  color: '#E8E0C9',
                  opacity: 0.75,
                }}
                dangerouslySetInnerHTML={{ __html: t.body2 }}
              />

              {/* Footer separator */}
              <div aria-hidden="true" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '0.25rem 0',
              }}>
                <span style={{ flex: 1, height: '1px', background: 'rgba(200,149,95,0.15)' }} />
                <svg width="6" height="6" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" r="2" fill="none" stroke="#C8955F" strokeWidth="0.8" opacity="0.35" />
                </svg>
                <span style={{ flex: 1, height: '1px', background: 'rgba(200,149,95,0.15)' }} />
              </div>

              {/* Footer 1 */}
              <p
                data-b10-animate
                data-delay="5"
                style={{
                  ...anim,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.82rem, 2vw, 0.90rem)',
                  lineHeight: 1.70,
                  color: '#E8E0C9',
                  opacity: 0.55,
                  textAlign: 'center',
                }}
              >{t.footer1}</p>

              {/* Footer 2 — highlighted */}
              <p
                data-b10-animate
                data-delay="5"
                style={{
                  ...anim,
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
                  lineHeight: 1.65,
                  color: '#E8E0C9',
                  letterSpacing: '0.01em',
                  textAlign: 'center',
                }}
                dangerouslySetInnerHTML={{ __html: t.footer2 }}
              />

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
