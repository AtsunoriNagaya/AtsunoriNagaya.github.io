import { Heading, Section, Stack, Text } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { about: SiteContent['about'] }

export const About = ({ about }: Props) => (
  <Section id="about">
    <Stack gap={1}>
      <Heading>{about.heading}</Heading>
      {about.paragraphs.map((paragraph) => (
        <Text as="p" key={paragraph}>
          {paragraph}
        </Text>
      ))}
    </Stack>
  </Section>
)
