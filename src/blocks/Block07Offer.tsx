// ─── Block 07 — WHAT YOU RECEIVE (€39 Offer) ────────────────
// Design: premium offer block — "cofre aberto", vitrine editorial
// Layout: 2-col desktop (visual LEFT | items+CTA RIGHT) · stacked mobile
// Assets: 002.png (price visual), 003.png (leaf seal), 004.png (circle seal), 005.png (guarantee seal)
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

// ── Icons for items ───────────────────────────────────────────
function IconWave() {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
      <path d="M1 7 C3 2,5 12,7 7 C9 2,11 12,13 7 C15 2,17 12,19 7 C20 5,21 6,22 7"
        stroke="#C8955F" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.80" />
    </svg>
  )
}
function IconBook() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="16" height="18" rx="2" stroke="#C8955F" strokeWidth="1.2" opacity="0.75" />
      <line x1="5" y1="6" x2="13" y2="6" stroke="#C8955F" strokeWidth="1" opacity="0.5" />
      <line x1="5" y1="9.5" x2="13" y2="9.5" stroke="#C8955F" strokeWidth="1" opacity="0.5" />
      <line x1="5" y1="13" x2="10" y2="13" stroke="#C8955F" strokeWidth="1" opacity="0.5" />
      <rect x="1" y="1" width="3" height="18" rx="1" fill="rgba(200,149,95,0.12)" />
    </svg>
  )
}
function IconMic() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
      <rect x="4" y="1" width="8" height="11" rx="4" stroke="#5B9C9B" strokeWidth="1.2" opacity="0.75" />
      <path d="M1 10 C1 15, 15 15, 15 10" stroke="#5B9C9B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65" />
      <line x1="8" y1="15" x2="8" y2="19" stroke="#5B9C9B" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
      <line x1="5" y1="19" x2="11" y2="19" stroke="#5B9C9B" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}
function IconScroll() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
      <path d="M4 1 H14 C15.1 1 16 1.9 16 3 V17 C16 18.1 15.1 19 14 19 H4 C2.9 19 2 18.1 2 17 V3 C2 1.9 2.9 1 4 1 Z" stroke="#5B9C9B" strokeWidth="1.2" opacity="0.70" />
      <path d="M2 3 C2 1.9 2.9 1 4 1 C5.1 1 6 1.9 6 3 V17 C6 18.1 5.1 19 4 19 C2.9 19 2 18.1 2 17 Z" stroke="#5B9C9B" strokeWidth="1.2" fill="rgba(91,156,155,0.06)" opacity="0.70" />
      <line x1="8" y1="7" x2="14" y2="7" stroke="#5B9C9B" strokeWidth="1" opacity="0.50" />
      <line x1="8" y1="10" x2="14" y2="10" stroke="#5B9C9B" strokeWidth="1" opacity="0.50" />
      <line x1="8" y1="13" x2="12" y2="13" stroke="#5B9C9B" strokeWidth="1" opacity="0.50" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
      <path d="M8 19 C8 19, 1 13, 1 7 C1 3.7 4.1 1 8 1 C11.9 1 15 3.7 15 7 C15 13 8 19 8 19 Z"
        stroke="#5B9C9B" strokeWidth="1.2" fill="none" opacity="0.70" />
      <line x1="8" y1="19" x2="8" y2="7" stroke="#5B9C9B" strokeWidth="1" strokeLinecap="round" opacity="0.50" />
      <line x1="8" y1="10" x2="12" y2="7" stroke="#5B9C9B" strokeWidth="0.9" strokeLinecap="round" opacity="0.40" />
      <line x1="8" y1="13" x2="4" y2="10" stroke="#5B9C9B" strokeWidth="0.9" strokeLinecap="round" opacity="0.40" />
    </svg>
  )
}

export function Block07Offer() {
  const { lang } = useLang()
  const t = translations[lang].block7

  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b7-animate]')
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
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const anim: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.60s ease, transform 0.60s ease',
  }

  // ── Item card configs ────────────────────────────────────────
  const mainItems = [
    { icon: <IconWave />, title: t.item1Title, desc: t.item1Desc, isMain: true },
    { icon: <IconBook />, title: t.item2Title, desc: t.item2Desc, isMain: true },
  ]
  const bonusItems = [
    { icon: <IconMic />, title: t.item3Title, desc: t.item3Desc },
    { icon: <IconScroll />, title: t.item4Title, desc: t.item4Desc },
    { icon: <IconLeaf />, title: t.item5Title, desc: t.item5Desc },
  ]

  const cardBase: React.CSSProperties = {
    borderRadius: '12px',
    padding: '1.4rem 1.5rem',
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    transition: 'border-color 0.2s',
  }
  const mainCardStyle: React.CSSProperties = {
    ...cardBase,
    background: 'rgba(200,149,95,0.07)',
    border: '1px solid rgba(200,149,95,0.28)',
  }
  const bonusCardStyle: React.CSSProperties = {
    ...cardBase,
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid rgba(91,156,155,0.18)',
  }

  return (
    <section id="block7" style={{ background: '#284C42', position: 'relative' }}>

      {/* ── Top thin divider ── */}
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

        {/* Eyebrow */}
        <div data-b7-animate data-delay="1" style={{ ...anim, textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#5B9C9B',
            opacity: 0.70,
            marginBottom: '1.25rem',
          }}>— VII —</p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 2.3vw, 1.1rem)',
            color: '#E8E0C9',
            opacity: 0.75,
            letterSpacing: '0.03em',
          }}>
            {t.intro}
          </p>
        </div>

        {/* ── Main 2-column vitrine ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>


          {/* ── RIGHT: Items + CTA ─────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Main items 1–2 */}
            {mainItems.map((item, i) => (
              <div
                key={i}
                data-b7-animate
                data-delay={String(i + 2)}
                style={{ ...anim, ...mainCardStyle }}
              >
                <span style={{ flexShrink: 0, paddingTop: '3px' }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(0.82rem, 1.9vw, 0.95rem)',
                    color: '#E8E0C9',
                    letterSpacing: '0.01em',
                    lineHeight: 1.45,
                    marginBottom: '0.55rem',
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    lineHeight: 1.80,
                    color: '#E8E0C9',
                    opacity: 0.72,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Separator between main and bonus */}
            <div aria-hidden="true" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.25rem 0',
            }}>
              <span style={{ flex: 1, height: '1px', background: 'rgba(91,156,155,0.20)' }} />
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.55rem',
                letterSpacing: '0.20em',
                textTransform: 'uppercase' as const,
                color: '#5B9C9B',
                opacity: 0.55,
              }}>+</span>
              <span style={{ flex: 1, height: '1px', background: 'rgba(91,156,155,0.20)' }} />
            </div>

            {/* Bonus items 3–5 */}
            {bonusItems.map((item, i) => (
              <div
                key={i}
                data-b7-animate
                data-delay={String(i + 4)}
                style={{ ...anim, ...bonusCardStyle }}
              >
                <span style={{ flexShrink: 0, paddingTop: '3px' }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 600,
                    fontSize: 'clamp(0.78rem, 1.8vw, 0.88rem)',
                    color: '#E8E0C9',
                    letterSpacing: '0.01em',
                    lineHeight: 1.45,
                    marginBottom: '0.45rem',
                    opacity: 0.88,
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.82rem, 1.9vw, 0.90rem)',
                    lineHeight: 1.78,
                    color: '#E8E0C9',
                    opacity: 0.65,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div
              data-b7-animate
              data-delay="7"
              style={{ ...anim, marginTop: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '0.75rem' }}
            >
              <button
                style={{
                  width: '100%',
                  padding: '1.1rem 2rem',
                  borderRadius: '9999px',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.9rem, 2.3vw, 1.05rem)',
                  letterSpacing: '0.04em',
                  color: '#1C3830',
                  background: 'linear-gradient(135deg, #C8955F 0%, #a07040 100%)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 28px rgba(200,149,95,0.28)',
                  transition: 'box-shadow 0.25s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 36px rgba(200,149,95,0.42)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 28px rgba(200,149,95,0.28)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {t.ctaButton}
              </button>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                color: '#E8E0C9',
                opacity: 0.55,
                letterSpacing: '0.04em',
                textAlign: 'center',
              }}>
                {t.microcopy}
              </p>
            </div>

          </div>
        </div>

        {/* Closing seal row */}
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
              <span key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: `rgba(200,149,95,${op})`, display: 'block' }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
