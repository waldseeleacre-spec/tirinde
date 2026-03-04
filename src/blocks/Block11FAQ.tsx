// ─── Block 11 — FAQ (Accordion) ──────────────────────────────
// Accordion: single item open at a time; first item open by default
// Accessibility: button + aria-expanded + aria-controls
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

export function Block11FAQ() {
  const { lang } = useLang()
  const t = translations[lang].block11
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b11-animate]')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = Number((e.target as HTMLElement).dataset.delay || 0) * 80
            setTimeout(() => {
              ;(e.target as HTMLElement).style.opacity = '1'
              ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const anim: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.60s ease, transform 0.60s ease',
  }

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
    { q: t.q5, a: t.a5 },
    { q: t.q6, a: t.a6 },
  ]

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section id="block11" style={{ background: '#284C42', position: 'relative' }}>

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

        {/* ── Eyebrow + Title ── */}
        <div
          data-b11-animate
          data-delay="1"
          style={{ ...anim, textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#5B9C9B',
            opacity: 0.70,
            marginBottom: '1rem',
          }}>— XI —</p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 3.5vw, 1.7rem)',
            color: '#E8E0C9',
            letterSpacing: '0.03em',
            lineHeight: 1.35,
          }}>{t.sectionTitle}</h2>
        </div>

        {/* ── FAQ accordion container ── */}
        <div
          data-b11-animate
          data-delay="2"
          style={{
            ...anim,
            background: 'rgba(255,255,255,0.035)',
            border: '1px solid rgba(200,149,95,0.18)',
            borderRadius: '16px',
            boxShadow: '0 4px 32px rgba(0,0,0,0.20)',
            overflow: 'hidden',
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  borderBottom: i < faqs.length - 1
                    ? '1px solid rgba(200,149,95,0.10)'
                    : 'none',
                }}
              >
                {/* ── Question button ── */}
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: 'clamp(1.1rem, 3vw, 1.4rem) clamp(1.25rem, 4vw, 2rem)',
                    background: isOpen ? 'rgba(200,149,95,0.05)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left' as const,
                    transition: 'background 0.20s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(200,149,95,0.28)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Question text */}
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 'clamp(0.92rem, 2.3vw, 1rem)',
                    color: '#E8E0C9',
                    lineHeight: 1.55,
                  }}>{faq.q}</span>

                  {/* Toggle icon: + rotates to × on open */}
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      border: '1px solid rgba(200,149,95,0.32)',
                      color: '#C8955F',
                      fontSize: '1.05rem',
                      fontWeight: 300,
                      lineHeight: 1,
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      userSelect: 'none' as const,
                    }}
                  >+</span>
                </button>

                {/* ── Answer panel ── */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? '480px' : '0px',
                    overflow: 'hidden',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.28s ease, opacity 0.22s ease',
                  }}
                >
                  <div style={{
                    padding: `0 clamp(1.25rem, 4vw, 2rem) clamp(1.1rem, 3vw, 1.4rem)`,
                  }}>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.87rem, 2.1vw, 0.95rem)',
                      lineHeight: 1.88,
                      color: '#E8E0C9',
                      opacity: 0.70,
                      borderLeft: '2px solid rgba(200,149,95,0.28)',
                      paddingLeft: '1rem',
                    }}>{faq.a}</p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* ── Closing dots ── */}
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
