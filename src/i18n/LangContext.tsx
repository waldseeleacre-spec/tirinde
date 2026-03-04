import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Lang, Translations } from './types'
import { translations } from './translations'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextValue | null>(null)

const STORAGE_KEY = 'ntk-lang'
const VALID_LANGS: Lang[] = ['en', 'de', 'pt']

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && VALID_LANGS.includes(stored)) return stored
  } catch {
    // localStorage unavailable
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
    // Update html lang attribute for accessibility
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
