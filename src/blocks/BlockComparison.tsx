// ─── Block Comparison — Packages (Entry vs Premium) ──────────────────────────
// Inserted between Block 07 (What You Receive) and Block 08 (Who It Is For)
// Visual: two cards side by side (desktop) / stacked (mobile)
// Palette: #284C42 bg · #E8E0C9 cream · #5B9C9B teal · #C8955F ochre
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react'
import { useLang } from '../i18n/LangContext'
import { comparisonContent } from './blockComparisonContent'
import type { ComparisonCard } from './blockComparisonContent'

// ── Small check icon for entry card items ─────────────────────────────────────
function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="7.5" cy="7.5" r="6.5" stroke="#5B9C9B" strokeWidth="1" opacity="0.55" />
      <polyline
        points="4.5,7.5 6.5,9.8 10.5,5.2"
        fill="none"
        stroke="#C8955F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}

// ── Diamond icon for premium card items ───────────────────────────────────────
function IconDiamond() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <polygon
        points="6.5,1 12,6.5 6.5,12 1,6.5"
        fill="rgba(200,149,95,0.12)"
        stroke="#C8955F"
        strokeWidth="1.1"
        opacity="0.80"
      />
    </svg>
  )
}

// ── Card component ─────────────────────────────────────────────────────────────
function ComparisonPackageCard({ data, isPremium }: { data: ComparisonCard; isPremium: boolean }) {
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: isPremium
          ? '1.5px solid rgba(91,156,155,0.50)'
          : '1px solid rgba(91,156,155,0.22)',
        boxShadow: isPremium
          ? '0 4px 32px rgba(91,156,155,0.10)'
          : '0 2px 16px rgba(0,0,0,0.06)',
      }}
    >
      {/* Premium top accent stripe */}
      {isPremium && (
        <div
          aria-hidden="true"
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, rgba(200,149,95,0.0) 0%, rgba(200,149,95,0.72) 30%, rgba(200,149,95,0.72) 70%, rgba(200,149,95,0.0) 100%)',
          }}
        />
      )}

      {/* ── Header — dark forest green ── */}
      <div
        style={{
          background: '#284C42',
          padding: '1.75rem 1.75rem 3.5rem',
          position: 'relative',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.56rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase' as const,
            color: '#5B9C9B',
            opacity: isPremium ? 1 : 0.80,
            marginBottom: '0.85rem',
          }}
        >
          {data.label}
        </p>

        {/* Package name */}
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.05rem, 2.4vw, 1.30rem)',
            fontWeight: 700,
            color: '#E8E0C9',
            letterSpacing: '0.04em',
            lineHeight: 1.20,
            marginBottom: '1.1rem',
          }}
        >
          {data.packageName}
        </h3>

        {/* Price */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.7rem, 3.8vw, 2.1rem)',
            fontWeight: 700,
            color: '#C8955F',
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}
        >
          {data.price}
        </p>

        {/* ── Chevron transition: cream triangle pointing down into body ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            lineHeight: 0,
            height: '32px',
          }}
        >
          <svg
            viewBox="0 0 400 32"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '32px', display: 'block' }}
          >
            {/* Cream fill — the "valley" chevron */}
            <polygon points="0,0 400,0 200,32" fill="#E8E0C9" />
            {/* Teal outline trace */}
            <polyline
              points="0,0 200,32 400,0"
              fill="none"
              stroke="#5B9C9B"
              strokeWidth="1.2"
              opacity="0.35"
            />
            {/* Ochre inner trace — slightly narrower */}
            <polyline
              points="60,0 200,26 340,0"
              fill="none"
              stroke="#C8955F"
              strokeWidth="0.9"
              opacity="0.30"
            />
          </svg>
        </div>
      </div>

      {/* ── Body — warm cream ── */}
      <div
        style={{
          background: '#E8E0C9',
          padding: '0.5rem 1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Decorative diamond divider */}
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem 0 1.1rem',
          }}
        >
          <svg width="72" height="9" viewBox="0 0 72 9">
            <line x1="0" y1="4.5" x2="28" y2="4.5" stroke="#5B9C9B" strokeWidth="0.8" opacity="0.40" />
            <polygon points="36,0.5 40.5,4.5 36,8.5 31.5,4.5" fill="#C8955F" opacity="0.60" />
            <line x1="44" y1="4.5" x2="72" y2="4.5" stroke="#5B9C9B" strokeWidth="0.8" opacity="0.40" />
          </svg>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.84rem, 2vw, 0.92rem)',
            color: '#284C42',
            lineHeight: 1.78,
            marginBottom: '1.5rem',
            opacity: 0.82,
            textAlign: 'center',
          }}
        >
          {data.description}
        </p>

        {/* Items list */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.70rem',
          }}
        >
          {data.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.60rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.82rem, 1.9vw, 0.89rem)',
                color: '#284C42',
                lineHeight: 1.55,
              }}
            >
              <span style={{ marginTop: '1px' }}>
                {isPremium ? <IconDiamond /> : <IconCheck />}
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Optional item note */}
        {data.itemNote ? (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.77rem',
              color: '#284C42',
              lineHeight: 1.68,
              margin: '0.5rem 0 0.75rem',
              opacity: 0.62,
              fontStyle: 'italic',
              paddingLeft: '1.1rem',
              borderLeft: '2px solid rgba(91,156,155,0.35)',
            }}
          >
            {data.itemNote}
          </p>
        ) : null}

        {/* Spacer pushes CTA to bottom */}
        <div style={{ flex: 1, minHeight: '1rem' }} />

        {/* Thin separator */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'rgba(40,76,66,0.12)',
            margin: '0.75rem 0 1.25rem',
          }}
        />

        {/* CTA Button */}
        <button
          style={{
            width: '100%',
            padding: '1.05rem 1.5rem',
            borderRadius: '9999px',
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: 'clamp(0.76rem, 1.9vw, 0.88rem)',
            letterSpacing: '0.04em',
            color: '#1C3830',
            background: isPremium
              ? 'linear-gradient(135deg, #C8955F 0%, #a07040 100%)'
              : '#C8955F',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 3px 18px rgba(200,149,95,0.22)',
            transition: 'box-shadow 0.25s ease, transform 0.20s ease',
            marginBottom: '0.80rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 5px 28px rgba(200,149,95,0.38)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 3px 18px rgba(200,149,95,0.22)'
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

        {/* Microcopy */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            color: '#284C42',
            opacity: 0.48,
            letterSpacing: '0.03em',
            textAlign: 'center',
            lineHeight: 1.55,
          }}
        >
          {data.microcopy}
        </p>
      </div>
    </div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────
export function BlockComparison() {
  const { lang } = useLang()
  const content = comparisonContent[lang]

  return (
    <section id="block-comparison" style={{ background: '#284C42', position: 'relative' }}>

      {/* ── Top thin divider (same style as Block07) ── */}
      <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(200,149,95,0.18)' }} />
        <svg width="8" height="8" viewBox="0 0 8 8" style={{ margin: '0 10px' }}>
          <polygon points="4,0 8,4 4,8 0,4" fill="none" stroke="#C8955F" strokeWidth="1" opacity="0.38" />
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'rgba(200,149,95,0.18)' }} />
      </div>

      <div
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '5rem clamp(1.5rem, 5vw, 3rem) 5.5rem',
        }}
      >

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>

          {/* Eyebrow marker */}
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.60rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: '#5B9C9B',
              opacity: 0.60,
              marginBottom: '1.25rem',
            }}
          >
            — ✦ —
          </p>

          {/* Section title */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(1.15rem, 2.8vw, 1.60rem)',
              fontWeight: 700,
              color: '#E8E0C9',
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              lineHeight: 1.25,
              marginBottom: '1.1rem',
            }}
          >
            {content.sectionTitle}
          </h2>

          {/* Section subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.90rem, 2.2vw, 1.02rem)',
              color: '#E8E0C9',
              opacity: 0.68,
              maxWidth: '46rem',
              margin: '0 auto',
              lineHeight: 1.82,
            }}
          >
            {content.sectionSubtitle}
          </p>
        </div>

        {/* ── Cards grid: 2 columns desktop / stacked mobile ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '3.5rem',
          }}
        >
          <ComparisonPackageCard data={content.card1} isPremium={false} />
          <ComparisonPackageCard data={content.card2} isPremium={true} />
        </div>

        {/* ── Footer guidance lines ── */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.60rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.87rem, 2vw, 0.97rem)',
              color: '#E8E0C9',
              opacity: 0.70,
              lineHeight: 1.68,
            }}
          >
            {content.footerLine1}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.87rem, 2vw, 0.97rem)',
              color: '#E8E0C9',
              opacity: 0.70,
              lineHeight: 1.68,
            }}
          >
            {content.footerLine2}
          </p>
        </div>

        {/* ── Closing seal dots (matches Block07 style) ── */}
        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            marginTop: '3.5rem',
          }}
        >
          <div style={{ height: '1px', width: '5rem', background: 'rgba(200,149,95,0.18)' }} />
          <div style={{ display: 'flex', gap: '6px' }}>
            {([0.28, 0.45, 0.28] as number[]).map((op, i) => (
              <span
                key={i}
                style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: `rgba(200,149,95,${op})`,
                  display: 'block',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
