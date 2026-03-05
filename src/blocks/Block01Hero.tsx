import { useLang } from '../i18n/LangContext'
import { LangSwitcher } from '../components/LangSwitcher'
import { CTAButton } from '../components/CTAButton'

export function Block01Hero() {
  const { t } = useLang()
  const { hero } = t

  // Split headline on \n for line breaks
  const headlineLines = hero.headline.split('\n')

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center overflow-x-hidden"
      style={{ background: '#284C42' }}
    >
      {/* ── Background photo ── */}
      {/* object-position: 28% 15% → shifts face LEFT and UP, freeing right/lower area for logo */}
      <img
        src="/assets/hero-desktop.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '60%',          /* photo covers top 60% of section */
          objectFit: 'cover',
          objectPosition: '28% 15%',
          zIndex: 0,
          display: 'block',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* ── Gradient: photo → dark green (smooth fade, bottom 30%) ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '65%',
          background:
            'linear-gradient(to bottom, rgba(40,76,66,0.50) 0%, rgba(40,76,66,0.60) 40%, rgba(40,76,66,0.85) 72%, #284C42 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── All UI content above the overlay ── */}
      <div
        className="relative w-full flex flex-col items-center"
        style={{ zIndex: 2 }}
      >

        {/* ── Language Switcher ── */}
        <div className="w-full pt-6 pb-2 flex justify-center">
          <LangSwitcher />
        </div>

        {/* ── Logo ──
             Pushed down (~22vh) so it lands in the darker lower portion of the photo,
             away from the artist's face. Uses logo-hero.png (188 KB, RGBA) instead of
             the heavy SVG (9 MB).
        */}
        <div
          className="flex justify-center items-center px-6"
          style={{ marginTop: '22vh', marginBottom: '2rem' }}
        >
          <img
            src="/assets/logo-hero.png"
            alt="Nii Tirinde Koĩ"
            style={{
              width: 'clamp(180px, 28vw, 320px)',
              height: 'auto',
            }}
            loading="eager"
            draggable={false}
          />
        </div>

      </div>

      {/* ── Hero Content ── */}
      <div
        className="relative w-full flex flex-col items-center text-center mx-auto"
        style={{
          zIndex: 2,
          maxWidth: '38rem',
          paddingLeft:  'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
          paddingTop: '3rem',
          paddingBottom: '1rem',
        }}
      >
        {/* Headline */}
        <h1
          className="font-display leading-tight text-balance mb-6"
          style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 5.5vw, 3rem)',
            color: '#E8E0C9',
            letterSpacing: '0.01em',
            lineHeight: 1.25,
          }}
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          className="mb-6 leading-relaxed"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            color: '#E8E0C9',
            opacity: 0.85,
            maxWidth: '30rem',
            lineHeight: 1.75,
          }}
        >
          {hero.subheadline}
        </p>

        {/* Transmitters */}
        <p
          className="mb-10"
          style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 400,
            fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
            color: '#5B9C9B',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.6,
          }}
        >
          {hero.transmitters}
        </p>
      </div>

      {/* ── CTA Section ── */}
      <div
        className="relative w-full flex flex-col items-center mx-auto"
        style={{
          zIndex: 2,
          maxWidth: '38rem',
          paddingLeft:  'max(1.5rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
          paddingTop: '2.5rem',
          paddingBottom: '4rem',
        }}
      >
        <CTAButton
          label={hero.ctaButton}
          microcopy={hero.microcopy}
          size="lg"
          href="https://www.pakakamanawa.com/noke-koi"
        />
      </div>

      {/* ── Subtle scroll indicator ── */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(232,224,201,0.4), transparent)' }}
        />
      </div>
    </section>
  )
}
