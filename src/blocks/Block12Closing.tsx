import { useLang } from '../i18n/LangContext'
import { navCtaLabel, scrollToComparison } from '../i18n/navCta'

export function Block12Closing() {
  const { t: allT, lang } = useLang()
  const t = allT.block12

  return (
    <section
      id="block12"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 1.5rem',
      }}
    >
      {/* ── Background image ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/amazonia.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: 'scale(1.04)',
          filter: 'blur(1px)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* ── Overlay 1: deep forest green ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(28, 54, 44, 0.72)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* ── Overlay 2: radial gradient (vinheta edges) ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(28,54,44,0.10) 0%, rgba(10,28,20,0.70) 100%)',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* ── Grain texture ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.4,
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div
        className="b12-content"
        data-b12-animate
        style={{
          position: 'relative',
          zIndex: 4,
          maxWidth: '680px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
        }}
      >
        {/* ── Manifesto lines ── */}
        <p
          className="b12-line1"
          data-b12-animate
          data-delay="0"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: 'clamp(1.05rem, 2.8vw, 1.35rem)',
            fontWeight: 400,
            color: 'rgba(230,227,220,0.75)',
            letterSpacing: '0.03em',
            lineHeight: 1.65,
            marginBottom: '0.55rem',
          }}
        >
          {t.line1}
        </p>

        <p
          className="b12-line2"
          data-b12-animate
          data-delay="150"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: 'clamp(1.6rem, 4.5vw, 2.6rem)',
            fontWeight: 700,
            color: '#E6E3DC',
            letterSpacing: '0.02em',
            lineHeight: 1.25,
            marginBottom: '3.5rem',
          }}
        >
          {t.line2}
        </p>

        {/* ── CTA Button ── */}
        <div
          className="b12-cta-wrap"
          data-b12-animate
          data-delay="320"
          style={{ width: '100%', maxWidth: '480px' }}
        >
          <button
            className="b12-cta-btn"
            style={{
              display: 'block',
              width: '100%',
              padding: '1.1rem 2rem',
              background: '#8C5737',
              border: '1px solid rgba(230,227,220,0.30)',
              borderRadius: '9999px',
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
              fontWeight: 700,
              color: '#E6E3DC',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow:
                '0 0 28px rgba(140,87,55,0.28), 0 4px 18px rgba(0,0,0,0.35)',
              transition: 'box-shadow 0.25s ease, transform 0.18s ease',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 48px rgba(140,87,55,0.50), 0 6px 24px rgba(0,0,0,0.40)'
              ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 28px rgba(140,87,55,0.28), 0 4px 18px rgba(0,0,0,0.35)'
              ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
            }}
            onClick={scrollToComparison}
          >
            {navCtaLabel[lang]}
          </button>

          {/* ── Microcopy ── */}
          <p
            className="b12-microcopy"
            style={{
              marginTop: '1rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(230,227,220,0.55)',
              letterSpacing: '0.04em',
              lineHeight: 1.5,
            }}
          >
            {t.microcopy}
          </p>
        </div>

        {/* ── Decorative separator ── */}
        <div
          data-b12-animate
          data-delay="480"
          style={{
            marginTop: '4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            opacity: 0.35,
          }}
          aria-hidden="true"
        >
          <div style={{ width: '48px', height: '1px', background: '#8C5737' }} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z"
              fill="#8C5737"
              opacity="0.8"
            />
          </svg>
          <div style={{ width: '48px', height: '1px', background: '#8C5737' }} />
        </div>
      </div>
    </section>
  )
}
