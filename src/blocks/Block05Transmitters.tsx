// ─── Block 05 — WHO TRANSMITS (Paká & Rurá) ─────────────────
// Design: premium, human, ethical, ceremonial
// 4 moments: (A) header+lead · (B) ethical callout · (C) photo+quotes card · (D) closing seal
// Photo: public/assets/card 5.png
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

// ── Minimal divider: line + diamond ──────────────────────────
function OrnaDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '0',
      }}
    >
      <span style={{ display: 'block', width: '40px', height: '1px', background: 'rgba(200,149,95,0.30)' }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#C8955F" strokeWidth="1" opacity="0.45" />
      </svg>
      <span style={{ display: 'block', width: '40px', height: '1px', background: 'rgba(200,149,95,0.30)' }} />
    </div>
  )
}

// ── Minimal wave icon for quotes ─────────────────────────────
function IconVoice({ color = '#5B9C9B', opacity = 0.6 }: { color?: string; opacity?: number }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true" style={{ opacity }}>
      <path
        d="M1 6 C3 2,4 10,6 6 C8 2,9 10,11 6 C13 2,14 10,16 6 C16.5 5,17 5.5,18 6"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Block05Transmitters() {
  const { lang } = useLang()
  const t = translations[lang].block5

  // Scroll-reveal
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b5-animate]')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = Number((e.target as HTMLElement).dataset.delay || 0) * 100
            setTimeout(() => {
              ;(e.target as HTMLElement).style.opacity = '1'
              ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const animBase: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(22px)',
    transition: 'opacity 0.65s ease, transform 0.65s ease',
  }

  return (
    <section
      id="block5"
      style={{ background: '#284C42', position: 'relative' }}
    >
      {/* ── Top divider (continuation from B4) ── */}
      <div style={{ padding: '0 0 0', opacity: 0.6 }}>
        <div style={{ height: '1px', background: 'rgba(200,149,95,0.20)', width: '100%' }} />
      </div>

      <div
        ref={containerRef}
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: '5.5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
        }}
      >

        {/* ── (A) Eyebrow + Section label + Lead ────────────── */}
        <div
          data-b5-animate
          data-delay="1"
          style={{ ...animBase, textAlign: 'center', marginBottom: '3rem' }}
        >
          {/* Eyebrow numeral */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#5B9C9B',
              opacity: 0.75,
              marginBottom: '1.5rem',
            }}
          >
            — V —
          </p>

          {/* Section label — editorial small caps feel */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
              letterSpacing: '0.30em',
              textTransform: 'uppercase',
              color: '#C8955F',
              opacity: 0.80,
              marginBottom: '1.5rem',
            }}
          >
            {t.sectionLabel}
          </p>

          {/* Lead — living guardians sentence */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
              lineHeight: 1.85,
              color: '#E8E0C9',
              opacity: 0.90,
              maxWidth: '34rem',
              margin: '0 auto',
            }}
          >
            {t.lead}
          </p>
        </div>

        <OrnaDivider />

        {/* ── (B) Ethical authority callout ─────────────────── */}
        <div
          data-b5-animate
          data-delay="2"
          style={{
            ...animBase,
            margin: '2.5rem auto 3rem',
            maxWidth: '34rem',
            borderLeft: '2px solid rgba(200,149,95,0.65)',
            background: 'rgba(0,0,0,0.10)',
            borderRadius: '0 10px 10px 0',
            padding: '1.5rem 1.75rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              lineHeight: 1.85,
              color: '#E8E0C9',
              opacity: 0.88,
              fontStyle: 'italic',
            }}
          >
            {t.ethicalCallout}
          </p>
        </div>

        {/* ── (C) Main card: Photo + Quotes ─────────────────── */}
        <div
          data-b5-animate
          data-delay="1"
          style={{
            ...animBase,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
            border: '1px solid rgba(200,149,95,0.22)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(0,0,0,0.30)',
            marginBottom: '3.5rem',
          }}
        >
          {/* Photo side */}
          <div style={{ position: 'relative', minHeight: '20rem' }}>
            <img
              src="/assets/card 5.png"
              alt="Paká Kamanawa — guardian of the Noke Koĩ chants"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '20rem',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
              }}
            />
            {/* Subtle gradient overlay at bottom */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '45%',
                background: 'linear-gradient(to bottom, transparent, rgba(40,76,66,0.55))',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Quotes side */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {/* Paká quote */}
            <div
              data-b5-animate
              data-delay="2"
              style={{ ...animBase }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <IconVoice />
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#5B9C9B',
                    opacity: 0.75,
                  }}
                >
                  {t.pakaLabel}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)',
                  lineHeight: 1.80,
                  color: '#E8E0C9',
                  opacity: 0.88,
                  fontStyle: 'italic',
                }}
              >
                {t.pakaQuote}
              </p>
            </div>

            {/* Thin separator between quotes */}
            <div
              aria-hidden="true"
              style={{ height: '1px', background: 'rgba(200,149,95,0.20)', width: '100%' }}
            />

            {/* Rurá quote */}
            <div
              data-b5-animate
              data-delay="3"
              style={{ ...animBase }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <IconVoice />
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#5B9C9B',
                    opacity: 0.75,
                  }}
                >
                  {t.ruraLabel}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)',
                  lineHeight: 1.80,
                  color: '#E8E0C9',
                  opacity: 0.88,
                  fontStyle: 'italic',
                }}
              >
                {t.ruraQuote}
              </p>
            </div>
          </div>
        </div>

        {/* ── (D) Closing editorial seal ─────────────────────── */}
        <div
          data-b5-animate
          data-delay="1"
          style={{
            ...animBase,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            paddingBottom: '1rem',
          }}
          aria-hidden="true"
        >
          <div style={{ height: '1px', width: '5rem', background: 'rgba(200,149,95,0.20)' }} />
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(200,149,95,0.30)', display: 'block' }} />
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(200,149,95,0.50)', display: 'block' }} />
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(200,149,95,0.30)', display: 'block' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
