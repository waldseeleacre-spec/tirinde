import React from 'react'
import { useLang } from '../i18n/LangContext'
import { comparisonContent } from './blockComparisonContent'
import type { ComparisonCard } from './blockComparisonContent'

function IconDot() {
  // Entry — minimalista, discreto
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '3px' }}>
      <circle cx="7" cy="7" r="5.5" stroke="#8C5737" strokeWidth="1" opacity="0.35" />
      <circle cx="7" cy="7" r="2.2" fill="#8C5737" opacity="0.65" />
    </svg>
  )
}

function IconFeatherSmall() {
  // Premium — pena ancestral compacta
  return (
    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
      {/* Haste */}
      <line x1="6.5" y1="17" x2="6.5" y2="2" stroke="#8C5737" strokeWidth="1.3" strokeLinecap="round" opacity="0.90" />
      {/* Barbas direita */}
      <path d="M6.5 4 C9 5, 11 7, 11.5 9.5" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" opacity="0.70" />
      <path d="M6.5 7 C9 8, 10.5 10, 10.5 12" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" opacity="0.50" />
      <path d="M6.5 10 C8 11, 9 12.5, 9 14.5" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" />
      {/* Barbas esquerda */}
      <path d="M6.5 4 C4 5, 2 7, 1.5 9.5" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" opacity="0.70" />
      <path d="M6.5 7 C4 8, 2.5 10, 2.5 12" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" opacity="0.50" />
      <path d="M6.5 10 C5 11, 4 12.5, 4 14.5" stroke="#8C5737" strokeWidth="0.9" strokeLinecap="round" opacity="0.30" />
      {/* Ponta */}
      <circle cx="6.5" cy="2" r="1" fill="#8C5737" opacity="0.85" />
    </svg>
  )
}

function ComparisonPackageCard({ data, isPremium }: { data: ComparisonCard; isPremium: boolean }) {
  return (
    <div style={{
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: isPremium
        ? '1.5px solid rgba(140,87,55,0.55)'
        : '1px solid rgba(230,227,220,0.12)',
      boxShadow: isPremium
        ? '0 12px 48px rgba(140,87,55,0.18), 0 2px 8px rgba(0,0,0,0.20)'
        : '0 4px 24px rgba(0,0,0,0.14)',
      position: 'relative',
    }}>

      {/* Premium top stripe */}
      {isPremium && (
        <div aria-hidden="true" style={{
          height: '4px',
          background: 'linear-gradient(90deg, transparent 0%, #8C5737 30%, #8C5737 70%, transparent 100%)',
        }} />
      )}

      {/* ── Header — charcoal ── */}
      <div style={{
        background: isPremium
          ? 'radial-gradient(ellipse at 50% 0%, rgba(140,87,55,0.12) 0%, #1D1D1D 65%)'
          : 'rgba(29,29,29,0.92)',
        padding: '2rem 2rem 2.5rem',
      }}>

        {/* Label */}
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.48rem',
          letterSpacing: '0.26em',
          textTransform: 'uppercase' as const,
          color: '#8C5737',
          opacity: 0.55,
          marginBottom: '0.75rem',
        }}>
          {data.label}
        </p>

        {/* Package name */}
        <h3 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: isPremium ? 'clamp(0.72rem, 1.5vw, 0.88rem)' : 'clamp(1rem, 2.2vw, 1.20rem)',
          fontWeight: 700,
          color: '#E6E3DC',
          letterSpacing: isPremium ? '0.12em' : '0.04em',
          lineHeight: 1.25,
          marginBottom: '1.75rem',
          opacity: isPremium ? 0.70 : 0.80,
          textTransform: isPremium ? 'uppercase' as const : 'none' as const,
        }}>
          {data.packageName}
        </h3>

        {/* Price — hero treatment */}
        <div style={{ marginBottom: '0.25rem' }}>
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 900,
            fontSize: 'clamp(2.6rem, 6.5vw, 3.8rem)',
            color: isPremium ? '#8C5737' : 'rgba(140,87,55,0.75)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            display: 'block',
          }}>
            {data.price}
          </span>
        </div>

        {/* Thin separator below price */}
        <div aria-hidden="true" style={{
          width: '2.5rem',
          height: '1px',
          background: isPremium ? 'rgba(140,87,55,0.50)' : 'rgba(140,87,55,0.25)',
          marginTop: '1.25rem',
        }} />
      </div>

      {/* ── Body — cream ── */}
      <div style={{
        background: '#E6E3DC',
        padding: '1.75rem 2rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.84rem, 2vw, 0.92rem)',
          color: '#1D1D1D',
          lineHeight: 1.78,
          marginBottom: '1.5rem',
          opacity: 0.75,
          textAlign: 'center',
        }}>
          {data.description}
        </p>

        {/* Items list */}
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: isPremium ? '0.85rem' : '0.70rem',
        }}>
          {data.items.map((item, i) => (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.60rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.82rem, 1.9vw, 0.89rem)',
              color: '#1D1D1D',
              lineHeight: 1.55,
            }}>
              {isPremium ? <IconFeatherSmall /> : <IconDot />}
              {item}
            </li>
          ))}
        </ul>

        {data.itemNote ? (
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.77rem',
            color: '#1D1D1D',
            lineHeight: 1.68,
            margin: '0.5rem 0 0.75rem',
            opacity: 0.55,
            fontStyle: 'italic',
            paddingLeft: '1.1rem',
            borderLeft: '2px solid rgba(140,87,55,0.30)',
          }}>
            {data.itemNote}
          </p>
        ) : null}

        <div style={{ flex: 1, minHeight: '1rem' }} />

        <div aria-hidden="true" style={{
          height: '1px',
          background: 'rgba(29,29,29,0.10)',
          margin: '0.75rem 0 1.25rem',
        }} />

        {/* CTA Button */}
        <button
          style={{
            width: '100%',
            padding: '1.1rem 1.5rem',
            borderRadius: '9999px',
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(0.76rem, 1.9vw, 0.88rem)',
            letterSpacing: '0.05em',
            color: '#E6E3DC',
            background: '#8C5737',
            border: 'none',
            cursor: 'pointer',
            boxShadow: isPremium
              ? '0 4px 24px rgba(140,87,55,0.35)'
              : '0 3px 16px rgba(140,87,55,0.20)',
            transition: 'box-shadow 0.25s ease, transform 0.20s ease',
            marginBottom: '0.80rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 32px rgba(140,87,55,0.48)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = isPremium
              ? '0 4px 24px rgba(140,87,55,0.35)'
              : '0 3px 16px rgba(140,87,55,0.20)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          onClick={() => {
            window.location.href = isPremium
              ? 'https://www.pakakamanawa.com/checkout'
              : 'https://www.pakakamanawa.com/noke-koi'
          }}
        >
          {data.button}
        </button>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.72rem',
          color: '#1D1D1D',
          opacity: 0.42,
          letterSpacing: '0.03em',
          textAlign: 'center',
          lineHeight: 1.55,
        }}>
          {data.microcopy}
        </p>
      </div>
    </div>
  )
}

export function BlockComparison() {
  const { lang } = useLang()
  const content = comparisonContent[lang]
  // gap between cards needs to accommodate the "or" pill — handled via padding


  return (
    <section id="block-comparison" style={{ background: '#1D1D1D', position: 'relative' }}>

      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#8C5737" strokeWidth="1" opacity="0.38" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(140,87,55,0.18)' }} />
      </div>

      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
      }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.60rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: '#8C5737',
            opacity: 0.65,
            marginBottom: '1.25rem',
          }}>— ✦ —</p>

          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.15rem, 2.8vw, 1.60rem)',
            fontWeight: 700,
            color: '#E6E3DC',
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
            lineHeight: 1.25,
            marginBottom: '1.1rem',
          }}>
            {content.sectionTitle}
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.90rem, 2.2vw, 1.02rem)',
            color: '#E6E3DC',
            opacity: 0.60,
            maxWidth: '46rem',
            margin: '0 auto',
            lineHeight: 1.82,
          }}>
            {content.sectionSubtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
          gap: '0',
          alignItems: 'stretch',
          marginBottom: '3rem',
          position: 'relative',
        }}>
          <ComparisonPackageCard data={content.card1} isPremium={false} />

          {/* Separador "ou" */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{ display: 'block', width: '1px', height: '32px', background: 'rgba(140,87,55,0.25)' }} />
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.58rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8C5737',
              opacity: 0.65,
              background: '#1D1D1D',
              padding: '4px 10px',
              borderRadius: '9999px',
              border: '1px solid rgba(140,87,55,0.25)',
            }}>
              {lang === 'de' ? 'oder' : lang === 'pt' ? 'ou' : 'or'}
            </span>
            <span style={{ display: 'block', width: '1px', height: '32px', background: 'rgba(140,87,55,0.25)' }} />
          </div>

          <ComparisonPackageCard data={content.card2} isPremium={true} />
        </div>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.50rem' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.85rem, 2vw, 0.94rem)',
            color: '#E6E3DC',
            opacity: 0.55,
            lineHeight: 1.68,
          }}>
            {content.footerLine1}
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.85rem, 2vw, 0.94rem)',
            color: '#E6E3DC',
            opacity: 0.55,
            lineHeight: 1.68,
          }}>
            {content.footerLine2}
          </p>
        </div>

      </div>
    </section>
  )
}
