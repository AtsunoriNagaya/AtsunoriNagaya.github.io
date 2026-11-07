import { en } from './en'
import { ja } from './ja'
import type { SiteContent, SiteLocale } from './types'

export const content: Record<SiteLocale, SiteContent> = { ja, en }

// smarthr-ui の IntlProvider / LanguageSwitcher が使うロケール名との対応
export const SMARTHR_LOCALE: Record<SiteLocale, 'ja' | 'en-us'> = {
  ja: 'ja',
  en: 'en-us',
}

export const toSiteLocale = (code: string): SiteLocale => (code === 'en-us' ? 'en' : 'ja')
