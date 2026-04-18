import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

function ShieldIcon() {
  return (
    <svg width="76" height="88" viewBox="0 0 56 64" fill="none" aria-hidden="true">
      <path
        d="M28 3 L52 12 L52 32 C52 46 41 57 28 61 C15 57 4 46 4 32 L4 12 Z"
        stroke="#8C5737"
        strokeWidth="1.4"
        fill="rgba(140,87,55,0.10)"
        opacity="0.90"
      />
      <path
        d="M28 9 L46 16.5 L46 31 C46 42 38 51 28 55 C18 51 10 42 10 31 L10 16.5 Z"
        stroke="rgba(140,87,55,0.38)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M19 33 L25 39 L38 26"
        stroke="#8C5737"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.90"
      />
    </svg>
  )
}

function SealBadge({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.25rem',
      background: 'rgba(140,87,55,0.07)',
      border: '1px solid rgba(140,87,55,0.22)',
      borderRadius: '12px',
      padding: '0.9rem 1.5rem',
      minWidth: '8rem',
    }}>
      <span style={{
        fontFamily: "'Cinzel', serif",
        fontWeight: 900,
        fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
        color: '#8C5737',
        lineHeight: 1,
        letterSpacing: '-0.01em',
      }}>{value}</span>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.70rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: '#1D1D1D',
        opacity: 0.55,
      }}>{label}</span>
    </div>
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

  const sealLabels = {
    en: { days: '30 days', refund: '100% refund' },
    de: { days: '30 Tage', refund: '100% zurück' },
    pt: { days: '30 dias', refund: '100% devolvido' },
  }
  const seals = sealLabels[lang] ?? sealLabels.en

  return (
    <section id="block10" style={{ background: '#DFD3C7', position: 'relative' }}>

      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.38" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
      </div>

      <div ref={containerRef} style={{
        maxWidth: '48rem',
        margin: '0 auto',
        padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
      }}>

        {/* Eyebrow */}
        <div data-b10-animate data-delay="1" style={{ ...anim, textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#8C5737',
            opacity: 0.80,
          }}>— X —</p>
        </div>

        {/* Card principal */}
        <div data-b10-animate data-delay="2" style={{
          ...anim,
          background: 'rgba(255,255,255,0.78)',
          border: '1px solid rgba(140,87,55,0.18)',
          borderTop: '3px solid #8C5737',
          borderRadius: '20px',
          boxShadow: '0 12px 64px rgba(29,29,29,0.14)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          gap: '2rem',
        }}>

          {/* Escudo com glow radial */}
          <div data-b10-animate data-delay="3" style={{
            ...anim,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(140,87,55,0.12) 0%, rgba(140,87,55,0.03) 60%, transparent 100%)',
          }}>
            <ShieldIcon />
          </div>

          {/* Título */}
          <div data-b10-animate data-delay="3" style={{ ...anim, textAlign: 'center' }}>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.05rem, 3vw, 1.45rem)',
              color: '#1D1D1D',
              letterSpacing: '0.015em',
              lineHeight: 1.40,
            }}>{t.title}</h2>
          </div>

          {/* Selos — 30 dias + 100% */}
          <div data-b10-animate data-delay="3" style={{
            ...anim,
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap' as const,
          }}>
            <SealBadge value="30" label={seals.days} />
            <SealBadge value="100%" label={seals.refund} />
          </div>

          {/* Separador */}
          <div aria-hidden="true" style={{ height: '1px', background: 'rgba(140,87,55,0.15)', width: '100%' }} />

          {/* Body 1 */}
          <p data-b10-animate data-delay="4" style={{
            ...anim,
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.92rem, 2.2vw, 1.02rem)',
            lineHeight: 1.82,
            color: '#1D1D1D',
            opacity: 0.75,
            textAlign: 'center',
          }}>{t.body1}</p>

          {/* Body 2 */}
          <p data-b10-animate data-delay="4" style={{
            ...anim,
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.88rem, 2.1vw, 0.98rem)',
            lineHeight: 1.88,
            color: '#1D1D1D',
            opacity: 0.70,
            textAlign: 'center',
          }}
          dangerouslySetInnerHTML={{ __html: t.body2 }}
          />

          {/* Separador com ponto */}
          <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
            <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
            <svg width="6" height="6" viewBox="0 0 6 6">
              <circle cx="3" cy="3" r="2" fill="#8C5737" opacity="0.40" />
            </svg>
            <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
          </div>

          {/* Pacto da aldeia — callout distinto */}
          <div data-b10-animate data-delay="5" style={{
            ...anim,
            borderLeft: '3px solid #8C5737',
            background: 'rgba(140,87,55,0.06)',
            borderRadius: '0 10px 10px 0',
            padding: '1rem 1.5rem',
            width: '100%',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.84rem, 2vw, 0.92rem)',
              lineHeight: 1.75,
              color: '#1D1D1D',
              opacity: 0.72,
              fontStyle: 'italic',
            }}>{t.footer1}</p>
          </div>

          {/* Fecho de vendas — máximo destaque */}
          <p data-b10-animate data-delay="5" style={{
            ...anim,
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.05rem, 2.8vw, 1.4rem)',
            lineHeight: 1.45,
            color: '#1D1D1D',
            letterSpacing: '0.01em',
            textAlign: 'center',
            opacity: 1,
          }}
          dangerouslySetInnerHTML={{ __html: t.footer2 }}
          />

        </div>

      </div>
    </section>
  )
}
