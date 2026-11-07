import { DefinitionList, DefinitionListItem, Heading, Section, Stack } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { certifications: SiteContent['certifications'] }

export const Certifications = ({ certifications }: Props) => (
  <Section id="certifications">
    <Stack gap={1}>
      <Heading>{certifications.heading}</Heading>
      <DefinitionList>
        {certifications.items.map((item) => (
          <DefinitionListItem key={item.name} term={item.name}>
            {item.issuer}
          </DefinitionListItem>
        ))}
      </DefinitionList>
    </Stack>
  </Section>
)
