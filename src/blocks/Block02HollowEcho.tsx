import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'

function DiamondRule() {
  return (
    <div aria-hidden="true" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      margin: '2rem 0',
    }}>
      <span style={{ display: 'block', flex: 1, height: '1px', background: 'rgba(140,87,55,0.22)' }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.50" />
      </svg>
      <span style={{ display: 'block', flex: 1, height: '1px', background: 'rgba(140,87,55,0.22)' }} />
    </div>
  )
}

function IconChant() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Centro sólido */}
      <circle cx="24" cy="24" r="4" fill="#8C5737" opacity="0.90" />
      {/* Anel intermédio */}
      <circle cx="24" cy="24" r="9" stroke="#8C5737" strokeWidth="1.5" fill="none" opacity="0.55" />
      {/* Anel externo */}
      <circle cx="24" cy="24" r="16" stroke="#8C5737" strokeWidth="1" fill="none" opacity="0.25" />
      {/* 8 raios solares */}
      <line x1="24" y1="4"  x2="24" y2="11" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
      <line x1="24" y1="37" x2="24" y2="44" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
      <line x1="4"  y1="24" x2="11" y2="24" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
      <line x1="37" y1="24" x2="44" y2="24" stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
      <line x1="9.4"  y1="9.4"  x2="14.4" y2="14.4" stroke="#8C5737" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <line x1="33.6" y1="33.6" x2="38.6" y2="38.6" stroke="#8C5737" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <line x1="38.6" y1="9.4"  x2="33.6" y2="14.4" stroke="#8C5737" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <line x1="14.4" y1="33.6" x2="9.4"  y2="38.6" stroke="#8C5737" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

function IconVoice() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Espiral de voz — concha crescente */}
      <path
        d="M24 24 C24 20, 20 17, 16 18 C12 19, 10 23, 11 27 C12 31, 16 34, 21 33 C26 32, 30 28, 30 23 C30 17, 26 12, 20 11 C14 10, 9 14, 8 20"
        stroke="#8C5737" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.85"
      />
      {/* Ondas de som emanando */}
      <path d="M33 18 C36 21, 36 27, 33 30" stroke="#8C5737" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />
      <path d="M37 14 C42 19, 42 29, 37 34" stroke="#8C5737" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.30" />
      {/* Ponto central */}
      <circle cx="24" cy="24" r="2.5" fill="#8C5737" opacity="0.80" />
    </svg>
  )
}

export function Block02HollowEcho() {
  const { t } = useLang()
  const { block2 } = t
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

  const renderLines = (text: string) =>
    text.split('\n').map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ))

  return (
    <section ref={sectionRef} style={{ background: '#DFD3C7', position: 'relative' }}>

      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(140,87,55,0.22)', width: '100%' }} />

      <div style={{
        maxWidth: '42rem',
        margin: '0 auto',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
      }}>

        {/* ── Eyebrow — fora do card ── */}
        <div data-animate data-delay="1" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.60rem',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: '#8C5737',
            opacity: 0.70,
          }}>— II —</p>
        </div>

        {/* ── CARD principal ── */}
        <div data-animate data-delay="1" style={{
          position: 'relative',
          background: 'rgba(255,255,255,0.74)',
          border: '1px solid rgba(140,87,55,0.14)',
          borderTop: '3px solid #8C5737',
          borderRadius: '20px',
          boxShadow: '0 16px 64px rgba(29,29,29,0.13), 0 2px 10px rgba(140,87,55,0.09)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          overflow: 'hidden',
        }}>

          {/* Marca d'água "II" */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '-0.5rem',
            right: '1.5rem',
            fontFamily: 'Cinzel, serif',
            fontWeight: 900,
            fontSize: '9rem',
            color: '#8C5737',
            opacity: 0.04,
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}>II</div>

          {/* Título + Lead */}
          <div style={{ textAlign: 'center', marginBottom: '0.5rem', position: 'relative' }}>
            <h2 style={{
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: 'clamp(1.35rem, 4vw, 1.9rem)',
              color: '#1D1D1D',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
              marginBottom: '1.5rem',
            }}>
              {block2.title}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2.6vw, 1.12rem)',
              lineHeight: 1.9,
              color: '#1D1D1D',
              opacity: 0.68,
              maxWidth: '32rem',
              margin: '0 auto',
            }}>
              {renderLines(block2.lead)}
            </p>
          </div>

          <DiamondRule />

          {/* Transition */}
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.78rem, 1.8vw, 0.86rem)',
              color: '#1D1D1D',
              opacity: 0.38,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {block2.transition}
            </p>
          </div>

          {/* Doubt */}
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.5rem, 4.2vw, 2.1rem)',
              fontWeight: 700,
              color: '#1D1D1D',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
            }}>
              {block2.doubt}
            </p>
          </div>

          {/* Answer */}
          <div style={{
            borderLeft: '3px solid #8C5737',
            paddingLeft: '1.5rem',
            marginBottom: '2.5rem',
            maxWidth: '28rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
          }}>
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)',
              fontWeight: 700,
              color: '#8C5737',
              lineHeight: 1.6,
              letterSpacing: '0.02em',
            }}>
              {renderLines(block2.answer)}
            </p>
          </div>

          <DiamondRule />

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))',
            gap: '1rem',
            marginBottom: '0.5rem',
          }}>
            <div style={{
              background: 'rgba(223,211,199,0.50)',
              border: '1px solid rgba(140,87,55,0.12)',
              borderTop: '2px solid #8C5737',
              borderRadius: '0 0 12px 12px',
              padding: '1.5rem 1.4rem',
            }}>
              <div style={{ marginBottom: '1rem' }}><IconChant /></div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.87rem, 2vw, 0.96rem)',
                lineHeight: 1.85,
                color: '#1D1D1D',
                opacity: 0.70,
              }}>
                {block2.card1}
              </p>
            </div>

            <div style={{
              background: 'rgba(223,211,199,0.50)',
              border: '1px solid rgba(140,87,55,0.12)',
              borderTop: '2px solid #8C5737',
              borderRadius: '0 0 12px 12px',
              padding: '1.5rem 1.4rem',
            }}>
              <div style={{ marginBottom: '1rem' }}><IconVoice /></div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.87rem, 2vw, 0.96rem)',
                lineHeight: 1.85,
                color: '#1D1D1D',
                opacity: 0.70,
              }}>
                {renderLines(block2.card2)}
              </p>
            </div>
          </div>

          <DiamondRule />

          {/* Callout */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 700,
              color: '#1D1D1D',
              lineHeight: 1.45,
              letterSpacing: '0.015em',
            }}>
              {renderLines(block2.callout)}
            </p>
          </div>

          {/* Quote */}
          <div style={{
            borderLeft: '2px solid rgba(140,87,55,0.35)',
            paddingLeft: '1.5rem',
            maxWidth: '32rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic',
              fontSize: 'clamp(0.87rem, 2.2vw, 0.98rem)',
              lineHeight: 1.82,
              color: '#1D1D1D',
              opacity: 0.50,
            }}>
              {renderLines(block2.quote)}
            </p>
          </div>

        </div>
        {/* ── fim do card ── */}

      </div>

      <div aria-hidden="true" style={{ height: '1px', background: 'rgba(140,87,55,0.22)', width: '100%' }} />

    </section>
  )
}
