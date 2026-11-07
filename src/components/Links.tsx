import { Heading, Section, Stack, TextLink } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { links: SiteContent['links'] }

export const Links = ({ links }: Props) => (
  <Section id="links">
    <Stack gap={1}>
      <Heading>{links.heading}</Heading>
      <Stack as="ul" className="plain-list" gap={0.5}>
        {links.items.map((item) => (
          <li key={item.href}>
            <TextLink href={item.href}>{item.label}</TextLink>
          </li>
        ))}
      </Stack>
    </Stack>
  </Section>
)
