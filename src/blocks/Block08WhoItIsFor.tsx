import { useLang } from '../i18n/LangContext'

interface CardProps {
  title: string
  body: string
  delay: number
}

function WhoCard({ title, body, delay }: CardProps) {
  return (
    <div
      className="b8-card"
      data-b8-animate
      data-delay={delay}
      style={{
        background: 'rgba(255,255,255,0.65)',
        border: '1px solid rgba(140,87,55,0.14)',
        borderTop: '2px solid rgba(140,87,55,0.45)',
        borderRadius: '12px',
        padding: '1.75rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: '0 8px 32px rgba(29,29,29,0.08)',
      }}
    >
      <h3 style={{
        fontFamily: "'Cinzel', Georgia, serif",
        fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
        fontWeight: 700,
        color: '#1D1D1D',
        letterSpacing: '0.02em',
        lineHeight: 1.35,
        margin: 0,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'clamp(0.88rem, 1.8vw, 0.95rem)',
        lineHeight: 1.75,
        color: 'rgba(29,29,29,0.65)',
        margin: 0,
      }}>
        {body}
      </p>
    </div>
  )
}

export function Block08WhoItIsFor() {
  const { t: allT } = useLang()
  const t = allT.block8

  return (
    <section id="block08" style={{ background: '#E6E3DC', position: 'relative' }}>

      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.38" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
      </div>

      <div style={{
        maxWidth: '56rem',
        margin: '0 auto',
        padding: '6rem clamp(1.5rem, 5vw, 3rem)',
      }}>

        <p
          className="b8-animate"
          data-b8-animate
          data-delay={0}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8C5737',
            opacity: 0.80,
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          — VIII —
        </p>

        <h2
          data-b8-animate
          data-delay={0}
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 4.5vw, 2.4rem)',
            color: '#1D1D1D',
            letterSpacing: '0.01em',
            lineHeight: 1.25,
            textAlign: 'center',
            margin: '0 auto 3.5rem',
            maxWidth: '32rem',
          }}
        >
          {t.sectionTitle}
        </h2>

        <div
          data-b8-animate
          data-delay={1}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))',
            gap: '1.25rem',
          }}
        >
          <WhoCard title={t.card1Title} body={t.card1Body} delay={1} />
          <WhoCard title={t.card2Title} body={t.card2Body} delay={2} />
          <WhoCard title={t.card3Title} body={t.card3Body} delay={3} />
        </div>
      </div>
    </section>
  )
}
