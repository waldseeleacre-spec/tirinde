import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { TribalPatternMajor } from '../components/TribalPattern'

// ── Ornamental separator (diamond + dots) ──────────────────
function OrnaSep() {
  return (
    <div
      className="flex items-center justify-center gap-2 my-6"
      aria-hidden="true"
    >
      <span style={{ width: 24, height: 1, background: 'rgba(200,149,95,0.35)', display: 'block' }} />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polygon points="5,0 10,5 5,10 0,5" fill="none" stroke="#C8955F" strokeWidth="1" opacity="0.5" />
      </svg>
      <span style={{ width: 24, height: 1, background: 'rgba(200,149,95,0.35)', display: 'block' }} />
    </div>
  )
}

// ── Card icon — sound waves ────────────────────────────────
function IconWaves() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <path d="M1 8 C3 4, 5 12, 7 8 C9 4, 11 12, 13 8 C15 4, 17 12, 19 8 C20 6, 21 7, 22 8"
        stroke="#5B9C9B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  )
}

// ── Card icon — words / speech ─────────────────────────────
function IconWords() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="12" rx="3" stroke="#5B9C9B" strokeWidth="1.2" opacity="0.7" />
      <path d="M7 17 L10 13 L13 17" stroke="#5B9C9B" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
      <line x1="5" y1="5" x2="15" y2="5" stroke="#5B9C9B" strokeWidth="1" opacity="0.5" />
      <line x1="5" y1="8" x2="12" y2="8" stroke="#5B9C9B" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

// ── Main component ─────────────────────────────────────────
export function Block02HollowEcho() {
  const { t } = useLang()
  const { block2 } = t
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
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('[data-animate]') ?? []
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [t]) // re-run on lang change so newly-rendered elements get observed

  // Helpers for multi-line strings
  const renderLines = (text: string) =>
    text.split('\n').map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      style={{ background: '#284C42', position: 'relative' }}
    >
      {/* ── Top tribal divider ── */}
      <TribalPatternMajor className="w-full" />

      {/* ── Content container ── */}
      <div
        style={{
          maxWidth: '42rem',
          margin: '0 auto',
          paddingTop: '5rem',
          paddingBottom: '5rem',
          paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
        }}
      >

        {/* ── (A) Block title ── */}
        <div data-animate data-delay="1" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {/* Eyebrow label */}
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#5B9C9B',
            marginBottom: '1rem',
            opacity: 0.8,
          }}>
            — II —
          </p>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.35rem, 4vw, 2rem)',
            color: '#E8E0C9',
            lineHeight: 1.3,
            letterSpacing: '0.01em',
            textShadow: '0 2px 24px rgba(40,76,66,0.8)',
          }}>
            {block2.title}
          </h2>
        </div>

        {/* ── (B) Lead — bigger, atmospheric ── */}
        <div
          data-animate
          data-delay="2"
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)',
            lineHeight: 1.85,
            color: '#E8E0C9',
            opacity: 0.9,
            maxWidth: '34rem',
            margin: '0 auto',
          }}>
            {renderLines(block2.lead)}
          </p>
        </div>

        <OrnaSep />

        {/* ── Transition phrase ── */}
        <div data-animate data-delay="1" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            color: '#E8E0C9',
            opacity: 0.55,
            letterSpacing: '0.02em',
          }}>
            {block2.transition}
          </p>
        </div>

        {/* ── Doubt badge ── */}
        <div
          data-animate
          data-delay="2"
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
            fontWeight: 700,
            color: '#E8E0C9',
            lineHeight: 1.4,
            fontStyle: 'italic',
            opacity: 0.9,
          }}>
            {block2.doubt}
          </p>
        </div>

        {/* ── Answer callout bar ── */}
        <div
          data-animate
          data-delay="3"
          style={{
            background: 'rgba(200,149,95,0.08)',
            border: '1px solid rgba(200,149,95,0.30)',
            borderRadius: '10px',
            padding: '1.4rem 2rem',
            textAlign: 'center',
            marginBottom: '3.5rem',
          }}
        >
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(1rem, 2.8vw, 1.25rem)',
            fontWeight: 700,
            color: '#C8955F',
            lineHeight: 1.5,
            letterSpacing: '0.02em',
          }}>
            {renderLines(block2.answer)}
          </p>
        </div>

        {/* ── (C) Cards — 1 col mobile / 2 col desktop ── */}
        <div
          data-animate
          data-delay="1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 17rem), 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {/* Card 1 — Spiritual marketplace */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(200,149,95,0.18)',
            borderRadius: '12px',
            padding: '1.75rem 1.5rem',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <IconWaves />
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
              lineHeight: 1.8,
              color: '#E8E0C9',
              opacity: 0.82,
            }}>
              {block2.card1}
            </p>
          </div>

          {/* Card 2 — You sing words */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(200,149,95,0.18)',
            borderRadius: '12px',
            padding: '1.75rem 1.5rem',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <IconWords />
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
              lineHeight: 1.8,
              color: '#E8E0C9',
              opacity: 0.82,
            }}>
              {renderLines(block2.card2)}
            </p>
          </div>
        </div>

        <OrnaSep />

        {/* ── (D) Callout — "Not connection. Repetition." ── */}
        <div
          data-animate
          data-delay="2"
          style={{
            textAlign: 'center',
            padding: '2.5rem 1rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Minimal open-quote mark */}
          <div aria-hidden="true" style={{
            fontFamily: 'Georgia, serif',
            fontSize: '3rem',
            lineHeight: 1,
            color: '#5B9C9B',
            opacity: 0.35,
            marginBottom: '0.5rem',
            userSelect: 'none',
          }}>
            "
          </div>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(1.2rem, 3.5vw, 1.65rem)',
            fontWeight: 700,
            color: '#E8E0C9',
            lineHeight: 1.45,
            letterSpacing: '0.02em',
          }}>
            {renderLines(block2.callout)}
          </p>
        </div>

        {/* ── (E) Final quote — golden border ── */}
        <div
          data-animate
          data-delay="3"
          style={{
            borderTop: '1px solid rgba(200,149,95,0.30)',
            borderBottom: '1px solid rgba(200,149,95,0.30)',
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2.4vw, 1.05rem)',
            lineHeight: 1.75,
            color: '#E8E0C9',
            opacity: 0.75,
          }}>
            {renderLines(block2.quote)}
          </p>
        </div>

      </div>

      {/* ── Bottom tribal divider ── */}
      <TribalPatternMajor className="w-full" />
    </section>
  )
}
