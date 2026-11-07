import { useCallback, useEffect, useState } from 'react'
import type { SiteLocale } from '../content/types'

const STORAGE_KEY = 'site-locale'

const isSiteLocale = (value: unknown): value is SiteLocale => value === 'ja' || value === 'en'

// localStorage が使えない環境（プライベートモードなど）でも落ちないように try で包む
const readStoredLocale = (): SiteLocale => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isSiteLocale(stored)) return stored
  } catch {
    // 読めなければ既定の日本語にする
  }
  return 'ja'
}

export const useLocale = () => {
  const [locale, setLocale] = useState<SiteLocale>(readStoredLocale)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // 保存できなくても表示には影響しない
    }
  }, [locale])

  const changeLocale = useCallback((next: SiteLocale) => setLocale(next), [])

  return { locale, changeLocale }
}
