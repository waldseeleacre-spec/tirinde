import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

function TopDivider() {
  return (
    <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <span style={{ display: 'block', flex: 1, height: '1px', background: 'rgba(140,87,55,0.22)' }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.40" />
      </svg>
      <span style={{ display: 'block', flex: 1, height: '1px', background: 'rgba(140,87,55,0.22)' }} />
    </div>
  )
}

function IconVoice() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path d="M1 7 C3 3,4 11,6 7 C8 3,9 11,11 7 C13 3,14 11,16 7 C17 5,18 6,19 7"
        stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.75" />
    </svg>
  )
}
function IconAlliance() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <path d="M10 16 C6 12, 2 10, 2 6 C2 3, 4 1, 7 2 C8.5 2.5, 9.5 3.5, 10 4.5 C10.5 3.5, 11.5 2.5, 13 2 C16 1, 18 3, 18 6 C18 10, 14 12, 10 16Z"
        stroke="#8C5737" strokeWidth="1.3" strokeLinejoin="round" fill="none" opacity="0.70" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
      <path d="M9 1 L17 4.5 L17 10 C17 14.5, 13 17.5, 9 19 C5 17.5, 1 14.5, 1 10 L1 4.5 Z"
        stroke="#8C5737" strokeWidth="1.3" strokeLinejoin="round" fill="none" opacity="0.70" />
      <path d="M6 10 L8 12 L12 8" stroke="#8C5737" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.60" />
    </svg>
  )
}

export function Block06Pact() {
  const { lang } = useLang()
  const t = translations[lang].block6

  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b6-animate]')
    if (!els) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = Number((e.target as HTMLElement).dataset.delay || 0) * 110
            setTimeout(() => {
              ;(e.target as HTMLElement).style.opacity = '1'
              ;(e.target as HTMLElement).style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const anim: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(22px)',
    transition: 'opacity 0.65s ease, transform 0.65s ease',
  }

  return (
    <section id="block6" style={{ background: '#DFD3C7', position: 'relative' }}>

      <TopDivider />

      <div ref={containerRef} style={{
        maxWidth: '52rem',
        margin: '0 auto',
        padding: '5.5rem clamp(1.5rem, 5vw, 3rem)',
      }}>

        <div data-b6-animate data-delay="1" style={{ ...anim, textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#8C5737',
            opacity: 0.75,
            marginBottom: '2rem',
          }}>— VI —</p>

          <p style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 5.5vw, 3rem)',
            color: '#1D1D1D',
            lineHeight: 1.25,
            letterSpacing: '0.01em',
            marginBottom: '0.3rem',
          }}>
            {t.statLine1}
          </p>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 400,
            fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)',
            color: '#1D1D1D',
            lineHeight: 1.3,
            opacity: 0.70,
            marginBottom: '1.75rem',
          }}>
            {t.statLine2}
          </p>
          <div aria-hidden="true" style={{
            width: '5rem',
            height: '1px',
            background: 'rgba(140,87,55,0.40)',
            margin: '0 auto',
          }} />
        </div>

        <div data-b6-animate data-delay="1" style={{
          ...anim,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem',
          alignItems: 'stretch',
        }}>
          <div style={{
            background: 'rgba(140,87,55,0.07)',
            border: '1px solid rgba(140,87,55,0.25)',
            borderRadius: '16px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.25rem',
          }}>
            <p aria-hidden="true" style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 900,
              fontSize: 'clamp(4rem, 12vw, 7rem)',
              color: '#435362',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              opacity: 0.90,
            }}>
              60%
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)',
              lineHeight: 1.75,
              color: '#1D1D1D',
              opacity: 0.78,
            }}>
              {t.pctLine}
            </p>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(140,87,55,0.22)',
            boxShadow: '0 8px 40px rgba(29,29,29,0.12)',
            minHeight: '18rem',
          }}>
            <img
              src="/assets/card aldeia.png"
              alt="Noke Koĩ village — aldeia"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '18rem',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
              }}
            />
            <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(to bottom, transparent, rgba(29,29,29,0.35))',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {[
            { icon: <IconVoice />, text: t.item1, delay: '1' },
            { icon: <IconAlliance />, text: t.item2, delay: '2' },
            { icon: <IconShield />, text: t.closingLine2, delay: '3' },
          ].map(({ icon, text, delay }, i) => (
            <div key={i} data-b6-animate data-delay={delay} style={{
              ...anim,
              display: 'flex',
              gap: '1.1rem',
              alignItems: 'flex-start',
              background: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(140,87,55,0.12)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              boxShadow: '0 4px 16px rgba(29,29,29,0.07)',
            }}>
              <span style={{ flexShrink: 0, paddingTop: '3px' }}>{icon}</span>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)',
                lineHeight: 1.80,
                color: '#1D1D1D',
                opacity: 0.78,
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div data-b6-animate data-delay="1" style={{
          ...anim,
          borderLeft: '2px solid rgba(140,87,55,0.60)',
          background: 'rgba(140,87,55,0.06)',
          borderRadius: '0 10px 10px 0',
          padding: '1.5rem 1.75rem',
          maxWidth: '36rem',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            color: '#1D1D1D',
            lineHeight: 1.55,
            letterSpacing: '0.01em',
            marginBottom: '0.35rem',
          }}>
            {t.closingLine1}
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.92rem, 2.3vw, 1.05rem)',
            lineHeight: 1.80,
            color: '#1D1D1D',
            opacity: 0.60,
            fontStyle: 'italic',
          }}>
            {t.closingLine2}
          </p>
        </div>


      </div>
    </section>
  )
}
