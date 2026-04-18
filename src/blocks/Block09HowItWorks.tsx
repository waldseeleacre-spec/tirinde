import { useEffect, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { translations } from '../i18n/translations'

export function Block09HowItWorks() {
  const { lang } = useLang()
  const t = translations[lang].block9
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>('[data-b9-animate]')
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

  function parseItem(raw: string) {
    const parts = raw.split(' \u2014 ')
    return { letter: parts[0], rest: parts.slice(1).join(' \u2014 ') }
  }

  const vozItems = [
    { ...parseItem(t.vItem), delay: 2 },
    { ...parseItem(t.oItem), delay: 3 },
    { ...parseItem(t.zItem), delay: 4 },
  ]

  return (
    <section id="block9" style={{ background: '#1D1D1D', position: 'relative' }}>

      {/* Divider topo */}
      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.08)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.45" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.08)' }} />
      </div>

      <div
        ref={containerRef}
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
        }}
      >

        {/* Eyebrow + Title */}
        <div data-b9-animate data-delay="1" style={{ ...anim, textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#8C5737',
            opacity: 0.75,
            marginBottom: '1rem',
          }}>— IX —</p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
            color: '#E6E3DC',
            letterSpacing: '0.02em',
            lineHeight: 1.35,
          }}>{t.title}</h2>
          <div aria-hidden="true" style={{
            width: '3rem', height: '1px',
            background: 'rgba(140,87,55,0.40)',
            margin: '1.5rem auto 0',
          }} />
        </div>

        {/* 2-col: imagem VOZ | itens */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}>

          {/* Imagem VOZ — com glow e sombra profunda */}
          <div data-b9-animate data-delay="1" style={{
            ...anim,
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(140,87,55,0.22)',
            borderTop: '2px solid #8C5737',
            boxShadow: '0 20px 80px rgba(0,0,0,0.60), 0 0 40px rgba(140,87,55,0.08)',
            maxWidth: '28rem',
            margin: '0 auto',
            width: '100%',
          }}>
            <img
              src="/assets/VOZ.png"
              alt="VOZ Method — Vibração, Origem, Zelo"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>

          {/* V / O / Z + callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {vozItems.map(({ letter, rest, delay }, i) => (
              <div
                key={i}
                data-b9-animate
                data-delay={String(delay)}
                style={{
                  ...anim,
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(230,227,220,0.07)',
                  borderLeft: '2px solid rgba(140,87,55,0.45)',
                  borderRadius: '0 12px 12px 0',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.20)',
                }}
              >
                {/* Letra — badge */}
                <div style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.8rem',
                  height: '2.8rem',
                  background: 'rgba(140,87,55,0.10)',
                  border: '1px solid rgba(140,87,55,0.28)',
                  borderRadius: '8px',
                }}>
                  <span style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 900,
                    fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
                    color: '#8C5737',
                    lineHeight: 1,
                    opacity: 1,
                  }}>{letter}</span>
                </div>

                {/* Texto */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.90rem, 2.2vw, 1rem)',
                  lineHeight: 1.80,
                  color: '#E6E3DC',
                  opacity: 0.82,
                  paddingTop: '0.45rem',
                }}>{rest}</p>
              </div>
            ))}

            {/* Callout — conclusão */}
            <div
              data-b9-animate
              data-delay="5"
              style={{
                ...anim,
                background: 'rgba(140,87,55,0.10)',
                border: '1px solid rgba(140,87,55,0.30)',
                borderRadius: '12px',
                padding: '1.5rem 1.75rem',
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                boxShadow: '0 4px 24px rgba(140,87,55,0.08)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polygon points="9,1 17,9 9,17 1,9" fill="none" stroke="#8C5737" strokeWidth="1.1" opacity="0.60" />
                <circle cx="9" cy="9" r="2.5" fill="#8C5737" opacity="0.45" />
              </svg>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 600,
                fontStyle: 'italic' as const,
                fontSize: 'clamp(0.92rem, 2.3vw, 1.05rem)',
                color: '#E6E3DC',
                letterSpacing: '0.01em',
                lineHeight: 1.58,
                opacity: 0.90,
              }}>{t.callout}</p>
            </div>

          </div>
        </div>

      </div>

      {/* Divider fundo */}
      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.08)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.45" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(230,227,220,0.08)' }} />
      </div>

    </section>
  )
}
