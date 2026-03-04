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
      className="flex items-center justify-center gap-0"
      role="navigation"
      aria-label="Language selector"
    >
      {LANGS.map(({ code, label }, i) => (
        <span key={code} className="flex items-center">
          <button
            onClick={() => setLang(code)}
            aria-current={lang === code ? 'true' : undefined}
            aria-label={`Switch to ${label}`}
            className={[
              'px-3 py-1 text-xs tracking-[0.18em] font-medium transition-all duration-200',
              'font-body uppercase',
              lang === code
                ? 'text-[#C8955F]'
                : 'text-[#E8E0C9] opacity-50 hover:opacity-80 hover:text-[#E8E0C9]',
            ].join(' ')}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {label}
          </button>
          {i < LANGS.length - 1 && (
            <span className="text-[#C8955F] opacity-30 text-xs select-none">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
