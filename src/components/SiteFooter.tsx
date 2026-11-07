import { Container, Stack, Text, TextLink } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { footer: SiteContent['footer'] }

export const SiteFooter = ({ footer }: Props) => (
  <footer className="site-footer">
    <Container size="DEFAULT" padding={{ block: 1.5, inline: 1.5, narrowModeInline: 1 }}>
      <Stack gap={0.5}>
        <Text as="p" size="S">
          {footer.builtWith}
        </Text>
        <Text as="p" size="S">
          {footer.creditsLabel}
        </Text>
        <Stack as="ul" className="plain-list" gap={0.25}>
          {footer.credits.map((credit) => (
            <li key={credit.href}>
              <Text size="S">
                <TextLink href={credit.href} size="S">
                  {credit.name}
                </TextLink>{' '}
                {credit.note}
              </Text>
            </li>
          ))}
        </Stack>
        <Text as="p" size="S" color="TEXT_GREY">
          {footer.copyright}
        </Text>
      </Stack>
    </Container>
  </footer>
)
