import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

function DiamondRule() {
  return (
    <div aria-hidden="true" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '2.5rem 0',
    }}>
      <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.18)' }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.60" />
      </svg>
      <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.18)' }} />
    </div>
  )
}

function IconFeather() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
      {/* Haste central */}
      <line x1="9" y1="20" x2="9" y2="4" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.90" />
      {/* Barba direita */}
      <path d="M9 6 C12 7, 15 9, 16 12" stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" opacity="0.70" />
      <path d="M9 9 C12 10, 14 12, 15 15" stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M9 12 C11 13, 13 15, 13 17" stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" opacity="0.38" />
      {/* Barba esquerda */}
      <path d="M9 6 C6 7, 3 9, 2 12" stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" opacity="0.70" />
      <path d="M9 9 C6 10, 4 12, 3 15" stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M9 12 C7 13, 5 15, 5 17" stroke="#E6E3DC" strokeWidth="1" strokeLinecap="round" opacity="0.38" />
      {/* Ponta */}
      <circle cx="9" cy="3.5" r="1.2" fill="#8C5737" opacity="0.80" />
    </svg>
  )
}

export function Block05Transmitters() {
  const { lang } = useLang()
  const t = translations[lang].block5

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
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, #8a8968 0%, #7A795B 65%)',
        position: 'relative',
      }}
    >
      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(230,227,220,0.14)', width: '100%' }} />

      <div
        ref={containerRef}
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: '5.5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
        }}
      >

        {/* ── Eyebrow + Section label + Lead ── */}
        <div data-b5-animate data-delay="1" style={{ ...animBase, textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8C5737',
            opacity: 0.80,
            marginBottom: '1.5rem',
          }}>— V —</p>

          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.3rem, 3.5vw, 1.9rem)',
            letterSpacing: '0.03em',
            color: '#E6E3DC',
            opacity: 1,
            lineHeight: 1.35,
            marginBottom: '1.5rem',
          }}>
            {t.sectionLabel}
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
            lineHeight: 1.85,
            color: '#E6E3DC',
            opacity: 0.90,
            maxWidth: '34rem',
            margin: '0 auto',
          }}>
            {t.lead}
          </p>
        </div>

        <DiamondRule />

        {/* ── Foto + Citações ── */}
        <div data-b5-animate data-delay="1" style={{
          ...animBase,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
          border: '1px solid rgba(140,87,55,0.28)',
          borderTop: '2px solid #8C5737',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 16px 64px rgba(0,0,0,0.40)',
          marginBottom: '0',
        }}>
          {/* Foto */}
          <div style={{ position: 'relative', minHeight: '26rem' }}>
            <img
              src="/assets/card 5.png"
              alt="Paká Kamanawa — guardian of the Noke Koĩ chants"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '26rem',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
              }}
            />
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '55%',
              background: 'linear-gradient(to bottom, transparent, rgba(29,29,29,0.65))',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Citações — câmara sagrada */}
          <div style={{
            background: 'rgba(0,0,0,0.32)',
            padding: 'clamp(2rem, 4vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0',
          }}>

            {/* ── Citação Paká — protagonista principal ── */}
            <div data-b5-animate data-delay="2" style={{ ...animBase, marginBottom: '2rem' }}>
              {/* Nome com dignidade */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <IconFeather />
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.80rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#E6E3DC',
                  opacity: 1,
                  fontWeight: 700,
                }}>
                  {t.pakaLabel}
                </span>
              </div>

              {/* Citação com abre-aspas decorativo */}
              <div style={{ position: 'relative', paddingLeft: '0.5rem' }}>
                <span aria-hidden="true" style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '4rem',
                  color: '#8C5737',
                  opacity: 0.22,
                  lineHeight: 0.8,
                  display: 'block',
                  marginBottom: '-1rem',
                  userSelect: 'none',
                }}>"</span>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1rem, 2.4vw, 1.1rem)',
                  lineHeight: 1.82,
                  color: '#E6E3DC',
                  opacity: 0.92,
                  fontStyle: 'italic',
                }}>
                  {t.pakaQuote}
                </p>
              </div>
            </div>

            {/* Separador */}
            <div aria-hidden="true" style={{
              height: '1px',
              background: 'rgba(230,227,220,0.14)',
              marginBottom: '2rem',
            }} />

            {/* ── Citação Rurá ── */}
            <div data-b5-animate data-delay="3" style={{ ...animBase }}>
              {/* Nome */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <IconFeather />
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.75rem',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: '#E6E3DC',
                  opacity: 0.88,
                  fontWeight: 600,
                }}>
                  {t.ruraLabel}
                </span>
              </div>

              {/* Citação */}
              <div style={{ position: 'relative', paddingLeft: '0.5rem' }}>
                <span aria-hidden="true" style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '3.2rem',
                  color: '#8C5737',
                  opacity: 0.18,
                  lineHeight: 0.8,
                  display: 'block',
                  marginBottom: '-0.85rem',
                  userSelect: 'none',
                }}>"</span>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.92rem, 2.2vw, 1rem)',
                  lineHeight: 1.82,
                  color: '#E6E3DC',
                  opacity: 0.80,
                  fontStyle: 'italic',
                }}>
                  {t.ruraQuote}
                </p>
              </div>
            </div>

          </div>
        </div>

        <DiamondRule />

        {/* ── Callout ético — após a foto, com cerimônia ── */}
        <div data-b5-animate data-delay="2" style={{
          ...animBase,
          maxWidth: '36rem',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.25)',
          border: '1px solid rgba(230,227,220,0.14)',
          borderRadius: '16px',
          padding: 'clamp(1.75rem, 4vw, 2.25rem)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}>
          {/* Ornamento central */}
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <polygon points="14,2 26,14 14,26 2,14" fill="none" stroke="#8C5737" strokeWidth="1.2" opacity="0.55" />
            <circle cx="14" cy="14" r="3.5" fill="#8C5737" opacity="0.45" />
          </svg>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.98rem, 2.5vw, 1.1rem)',
            lineHeight: 1.88,
            color: '#E6E3DC',
            opacity: 0.88,
            fontStyle: 'italic',
          }}>
            {t.ethicalCallout}
          </p>
        </div>

      </div>

      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(230,227,220,0.14)', width: '100%' }} />
    </section>
  )
}
