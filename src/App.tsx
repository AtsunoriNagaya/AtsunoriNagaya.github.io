import { useEffect } from 'react'
import {
  Container,
  EnvironmentProvider,
  IntlProvider,
  Stack,
  ThemeProvider,
  createTheme,
} from 'smarthr-ui'
import 'smarthr-ui/smarthr-ui.css'
import './styles/site.css'
import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Hero } from './components/Hero'
import { Links } from './components/Links'
import { Research } from './components/Research'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
import { SMARTHR_LOCALE, content } from './content'
import { useLocale } from './hooks/useLocale'

const theme = createTheme()

export const App = () => {
  const { locale, changeLocale } = useLocale()
  const t = content[locale]

  // 言語切替に合わせて html の lang、title、description を同期する（支援技術の読み上げ言語が変わる）
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])

  return (
    <IntlProvider locale={SMARTHR_LOCALE[locale]} availableLocales={['ja', 'en-us']}>
      <ThemeProvider theme={theme}>
        {/* Container などが画面幅の判定に EnvironmentProvider を必要とする（README の例には無い前提） */}
        <EnvironmentProvider>
          <a className="skip-link" href="#main">
            {t.nav.skipToContent}
          </a>
          <SiteHeader nav={t.nav} locale={locale} onChangeLocale={changeLocale} />
          <main id="main" tabIndex={-1}>
            <Container size="DEFAULT" padding={{ block: 2, inline: 1.5, narrowModeInline: 1 }}>
              <Stack gap={3}>
                <Hero hero={t.hero} />
                <About about={t.about} />
                <Skills skills={t.skills} />
                <Works works={t.works} />
                <Research research={t.research} />
                <Certifications certifications={t.certifications} />
                <Links links={t.links} />
              </Stack>
            </Container>
          </main>
          <SiteFooter footer={t.footer} />
        </EnvironmentProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}
