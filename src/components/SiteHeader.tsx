import { Cluster, Container, LanguageSwitcher, Nav, Text, TextLink } from 'smarthr-ui'
import { SMARTHR_LOCALE, toSiteLocale } from '../content'
import type { SiteContent, SiteLocale } from '../content/types'

type Props = {
  nav: SiteContent['nav']
  locale: SiteLocale
  onChangeLocale: (next: SiteLocale) => void
}

const LOCALE_LABELS = { ja: '日本語', 'en-us': 'English' } as const

export const SiteHeader = ({ nav, locale, onChangeLocale }: Props) => (
  <header className="site-header">
    <Container size="DEFAULT" padding={{ block: 0.75, inline: 1.5, narrowModeInline: 1 }}>
      <Cluster align="center" justify="space-between" gap={{ column: 1.5, row: 0.75 }}>
        <Text as="span" weight="bold" size="L">
          {nav.siteName}
        </Text>
        <Cluster align="center" gap={{ column: 1.5, row: 0.75 }}>
          <Nav aria-label={nav.siteName}>
            <Cluster as="ul" className="plain-list" gap={{ column: 1, row: 0.5 }}>
              {nav.items.map((item) => (
                <li key={item.id}>
                  <TextLink href={`#${item.id}`}>{item.label}</TextLink>
                </li>
              ))}
            </Cluster>
          </Nav>
          {/* 既定は濃色ヘッダー向けの白文字なので、白背景では invert で黒文字にする */}
          <LanguageSwitcher
            invert
            localeMap={LOCALE_LABELS}
            locale={SMARTHR_LOCALE[locale]}
            onLanguageSelect={(code) => onChangeLocale(toSiteLocale(code))}
          />
        </Cluster>
      </Cluster>
    </Container>
  </header>
)
