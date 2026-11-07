import { AnchorButton, Cluster, PageHeading, Stack, Text } from 'smarthr-ui'
import type { SiteContent } from '../content/types'

type Props = { hero: SiteContent['hero'] }

export const Hero = ({ hero }: Props) => (
  <Stack gap={1}>
    {/* 既定では title を「見出し｜SmartHR（スマートHR）」に書き換えるため無効化し、title は App 側で管理する */}
    <PageHeading autoPageTitle={false}>{hero.name}</PageHeading>
    <Text as="p" size="L" color="TEXT_GREY">
      {hero.romanized}
    </Text>
    <Text as="p" weight="bold" size="M">
      {hero.title}
    </Text>
    <Text as="p">{hero.lead}</Text>
    <Cluster gap={0.75}>
      <AnchorButton href={hero.github.href} variant="secondary">
        {hero.github.label}
      </AnchorButton>
      <AnchorButton href={hero.linkedin.href} variant="secondary">
        {hero.linkedin.label}
      </AnchorButton>
    </Cluster>
  </Stack>
)
