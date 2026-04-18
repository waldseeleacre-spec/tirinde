import { useLang } from '../i18n/LangContext'
import type { Lang } from '../i18n/types'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'pt', label: 'PT' },
]

export function LangSwitcher() {
  const { lang, setLang } = useLang()

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
        background: 'rgba(230,227,220,0.10)',
        border: '1px solid rgba(230,227,220,0.18)',
        borderRadius: '9999px',
        padding: '4px',
      }}
      role="navigation"
      aria-label="Language selector"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-current={lang === code ? 'true' : undefined}
          aria-label={`Switch to ${label}`}
          style={{
            padding: '5px 14px',
            borderRadius: '9999px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: lang === code ? 600 : 400,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.20s ease',
            background: lang === code ? '#8C5737' : 'transparent',
            color: lang === code ? '#E6E3DC' : 'rgba(230,227,220,0.75)',
            boxShadow: lang === code ? '0 2px 8px rgba(140,87,55,0.30)' : 'none',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
