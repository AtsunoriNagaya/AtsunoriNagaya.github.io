import { Container, Stack, Text } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { footer: SiteContent['footer'] }

export const SiteFooter = ({ footer }: Props) => (
  <footer className="site-footer">
    <Container size="DEFAULT" padding={{ block: 1.5, inline: 1.5, narrowModeInline: 1 }}>
      <Stack gap={0.5}>
        <Text as="p" size="S">
          {footer.builtWith}
        </Text>
        <Text as="p" size="S" color="TEXT_GREY">
          {footer.copyright}
        </Text>
      </Stack>
    </Container>
  </footer>
)
