import { Chip, Cluster, Heading, Section, Stack, Text } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { skills: SiteContent['skills'] }

export const Skills = ({ skills }: Props) => (
  <Section id="skills">
    <Stack gap={1}>
      <Heading>{skills.heading}</Heading>
      <Text as="p">{skills.intro}</Text>
      <Stack as="ul" className="plain-list" gap={1}>
        {skills.groups.map((group) => (
          <li key={group.name}>
            <Stack gap={0.5}>
              <Text as="p" weight="bold">
                {group.name}
              </Text>
              <Cluster as="ul" className="plain-list" gap={0.5}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip color="grey">{item}</Chip>
                  </li>
                ))}
              </Cluster>
            </Stack>
          </li>
        ))}
      </Stack>
    </Stack>
  </Section>
)
