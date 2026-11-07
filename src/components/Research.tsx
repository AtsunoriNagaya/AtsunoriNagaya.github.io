import {
  DefinitionList,
  DefinitionListItem,
  Heading,
  Section,
  Stack,
  Text,
  TextLink,
} from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { research: SiteContent['research'] }

export const Research = ({ research }: Props) => (
  <Section id="research">
    <Stack gap={1}>
      <Heading>{research.heading}</Heading>
      <Text as="p">{research.affiliation}</Text>
      <DefinitionList>
        <DefinitionListItem term={research.themeLabel}>{research.theme}</DefinitionListItem>
      </DefinitionList>
      {research.paragraphs.map((paragraph) => (
        <Text as="p" key={paragraph}>
          {paragraph}
        </Text>
      ))}
      <Text as="p">
        <TextLink href={research.lab.href}>{research.lab.label}</TextLink>
      </Text>
    </Stack>
  </Section>
)
