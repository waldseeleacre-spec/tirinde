import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'

// ── Change-item icons ──────────────────────────────────────

function IconMessage() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 4h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6l-4 3V5a1 1 0 0 1 1-1z"
        stroke="#C8955F" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

function IconSilence() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="#C8955F" strokeWidth="1.2" opacity="0.7" />
      <circle cx="10" cy="10" r="3" stroke="#C8955F" strokeWidth="1.2" opacity="0.5" />
      <circle cx="10" cy="10" r="0.8" fill="#C8955F" opacity="0.7" />
    </svg>
  )
}

function IconClarity() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="10" y1="2" x2="10" y2="5" stroke="#C8955F" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
      <line x1="10" y1="15" x2="10" y2="18" stroke="#C8955F" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
      <line x1="2" y1="10" x2="5" y2="10" stroke="#C8955F" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
      <line x1="15" y1="10" x2="18" y2="10" stroke="#C8955F" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
      <circle cx="10" cy="10" r="3.5" stroke="#C8955F" strokeWidth="1.2" opacity="0.8"/>
    </svg>
  )
}

// ── Helper ──────────────────────────────────────────────────
function renderLines(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
  ))
}

// ── Main component ─────────────────────────────────────────
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
    <section ref={sectionRef} style={{ background: '#284C42', position: 'relative' }}>
      <div style={{
        maxWidth: '52rem',
        margin: '0 auto',
        paddingTop:    '6rem',
        paddingBottom: '6rem',
        paddingLeft:  'max(1.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
      }}>

        {/* ── Eyebrow ── */}
        <p data-animate data-delay="1" style={{
          textAlign: 'center',
          fontFamily: 'Cinzel, serif',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#5B9C9B',
          opacity: 0.75,
          marginBottom: '2rem',
        }}>
          — IV —
        </p>

        {/* ── (A) Headline / Statement ── */}
        <div data-animate data-delay="2" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 5vw, 2.8rem)',
            color: '#E8E0C9',
            lineHeight: 1.25,
            letterSpacing: '0.01em',
            marginBottom: '0.4rem',
            textShadow: '0 0 40px rgba(232,224,201,0.12)',
          }}>
            {block4.headlineLine1}
          </h2>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 400,
            fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
            color: '#E8E0C9',
            lineHeight: 1.3,
            opacity: 0.8,
          }}>
            {block4.headlineLine2}
          </h2>
          {/* Thin golden separator */}
          <div aria-hidden="true" style={{
            width: '4rem', height: '1px',
            background: 'rgba(200,149,95,0.45)',
            margin: '1.75rem auto 0',
          }} />
        </div>

        {/* ── (B) Vivência — text above photo card ── */}
        <div data-animate data-delay="1" style={{
          maxWidth: '36rem',
          margin: '0 auto 2rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.98rem, 2.4vw, 1.1rem)',
            lineHeight: 1.85,
            color: '#E8E0C9',
            opacity: 0.85,
            marginBottom: '0.75rem',
          }}>
            {block4.viveLine1}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.98rem, 2.4vw, 1.1rem)',
            lineHeight: 1.85,
            color: '#E8E0C9',
            opacity: 0.70,
          }}>
            {block4.viveLine2}
          </p>
        </div>

        {/* ── Photo card — Paká + Rurá ── */}
        <div
          data-animate
          data-delay="2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
            gap: '0',
            border: '1px solid rgba(200,149,95,0.22)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '3.5rem',
            boxShadow: '0 8px 48px rgba(0,0,0,0.35)',
          }}
        >
          {/* Photo side */}
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
            {/* Subtle overlay at bottom of photo */}
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '40%',
              background: 'linear-gradient(to bottom, transparent, rgba(40,76,66,0.55))',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Text side */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            padding: '2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.25rem',
          }}>
            {/* Teal label */}
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#5B9C9B',
              opacity: 0.75,
            }}>
              Paká Kamanawa · Rurá Varinawa
            </p>
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#E8E0C9',
              lineHeight: 1.45,
            }}>
              {block4.viveLine1}
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.88rem, 2vw, 0.98rem)',
              lineHeight: 1.8,
              color: '#E8E0C9',
              opacity: 0.70,
            }}>
              {block4.viveLine2}
            </p>
            {/* Thin gold line at bottom */}
            <div aria-hidden="true" style={{
              width: '3rem', height: '1px',
              background: 'rgba(200,149,95,0.35)',
              marginTop: '0.5rem',
            }} />
          </div>
        </div>

        {/* ── (C) NOT callout — left golden border ── */}
        <div data-animate data-delay="1" style={{
          borderLeft: '2px solid rgba(200,149,95,0.55)',
          background: 'rgba(0,0,0,0.12)',
          borderRadius: '0 10px 10px 0',
          padding: '1.5rem 1.75rem',
          marginBottom: '1.75rem',
          maxWidth: '34rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(0.95rem, 2.4vw, 1.1rem)',
            color: '#E8E0C9',
            lineHeight: 1.6,
            opacity: 0.9,
          }}>
            {block4.notLine1}<br />
            {block4.notLine2}
          </p>
        </div>

        {/* ── (D) IS line — bridge ── */}
        <div data-animate data-delay="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
          marginBottom: '4rem',
          maxWidth: '40rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 1.85,
            color: '#E8E0C9',
            opacity: 0.85,
          }}>
            {block4.isLine}
          </p>
          {/* Abstract wave divider — desktop only */}
          <div aria-hidden="true" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.25,
          }}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path d="M5 20 C15 8, 25 32, 35 20 C45 8, 55 32, 65 20 C70 14, 74 17, 78 20"
                stroke="#5B9C9B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* ── (E) What changes — 3 items ── */}
        <div data-animate data-delay="1" style={{ marginBottom: '1rem' }}>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2.6vw, 1.3rem)',
            color: '#E8E0C9',
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
            maxWidth: '36rem',
            margin: '0 auto',
          }}>
            {changes.map(({ text, icon }, i) => (
              <div
                key={i}
                data-animate
                data-delay={String(i + 2)}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.035)',
                  border: '1px solid rgba(232,224,201,0.08)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.4rem',
                }}
              >
                <div style={{ flexShrink: 0, paddingTop: '2px' }}>{icon}</div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.92rem, 2.2vw, 1rem)',
                  lineHeight: 1.8,
                  color: '#E8E0C9',
                  opacity: 0.82,
                }}>
                  {renderLines(text)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
