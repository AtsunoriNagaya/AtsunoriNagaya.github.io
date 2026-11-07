import { Article, Chip, Cluster, Heading, Panel, Section, Stack, Text, TextLink } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { works: SiteContent['works'] }

export const Works = ({ works }: Props) => (
  <Section id="works">
    <Stack gap={1}>
      <Heading>{works.heading}</Heading>
      <Stack as="ul" className="plain-list" gap={1}>
        {works.items.map((item) => (
          <li key={item.name}>
            <Panel padding={1.5}>
              <Article>
                <Stack gap={0.75}>
                  <Heading>{item.name}</Heading>
                  <Text as="p">{item.summary}</Text>
                  <Cluster as="ul" className="plain-list" gap={0.5}>
                    {item.stack.map((tech) => (
                      <li key={tech}>
                        <Chip color="blue">{tech}</Chip>
                      </li>
                    ))}
                  </Cluster>
                  <Cluster as="ul" className="plain-list" gap={{ column: 1.5, row: 0.5 }}>
                    <li>
                      <TextLink href={item.repo.href}>{item.repo.label}</TextLink>
                    </li>
                    {item.demo && (
                      <li>
                        <TextLink href={item.demo.href}>{item.demo.label}</TextLink>
                      </li>
                    )}
                  </Cluster>
                </Stack>
              </Article>
            </Panel>
          </li>
        ))}
      </Stack>
    </Stack>
  </Section>
)
