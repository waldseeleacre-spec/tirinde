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
    <section id="block11" style={{ background: '#E6E3DC', position: 'relative' }}>

      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.38" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
      </div>

      <div ref={containerRef} style={{
        maxWidth: '56rem',
        margin: '0 auto',
        padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
      }}>

        <div data-b11-animate data-delay="1" style={{ ...anim, textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#8C5737',
            opacity: 0.80,
            marginBottom: '1rem',
          }}>— XI —</p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 3.5vw, 1.7rem)',
            color: '#1D1D1D',
            letterSpacing: '0.03em',
            lineHeight: 1.35,
          }}>{t.sectionTitle}</h2>
        </div>

        <div data-b11-animate data-delay="2" style={{
          ...anim,
          background: 'rgba(255,255,255,0.70)',
          border: '1px solid rgba(140,87,55,0.18)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(29,29,29,0.10)',
          overflow: 'hidden',
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{
                borderBottom: i < faqs.length - 1
                  ? '1px solid rgba(140,87,55,0.10)'
                  : 'none',
              }}>
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
                    background: isOpen ? 'rgba(140,87,55,0.05)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left' as const,
                    transition: 'background 0.20s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 0 0 0 1px rgba(140,87,55,0.28)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 'clamp(0.92rem, 2.3vw, 1rem)',
                    color: '#1D1D1D',
                    lineHeight: 1.55,
                  }}>{faq.q}</span>

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
                      border: '1px solid rgba(140,87,55,0.32)',
                      color: '#8C5737',
                      fontSize: '1.05rem',
                      fontWeight: 300,
                      lineHeight: 1,
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      userSelect: 'none' as const,
                    }}
                  >+</span>
                </button>

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
                  <div style={{ padding: `0 clamp(1.25rem, 4vw, 2rem) clamp(1.1rem, 3vw, 1.4rem)` }}>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.87rem, 2.1vw, 0.95rem)',
                      lineHeight: 1.88,
                      color: '#1D1D1D',
                      opacity: 0.62,
                      borderLeft: '2px solid rgba(140,87,55,0.28)',
                      paddingLeft: '1rem',
                    }}>{faq.a}</p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
