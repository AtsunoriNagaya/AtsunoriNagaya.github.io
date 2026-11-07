export type SiteLocale = 'ja' | 'en'

export type LinkItem = {
  label: string
  href: string
}

export type SkillGroup = {
  name: string
  items: string[]
}

export type WorkItem = {
  name: string
  summary: string
  stack: string[]
  repo: LinkItem
  demo?: LinkItem
}

export type CertificationItem = {
  name: string
  issuer: string
}

export type SiteContent = {
  meta: {
    title: string
    description: string
  }
  nav: {
    skipToContent: string
    siteName: string
    items: { id: string; label: string }[]
  }
  hero: {
    name: string
    romanized: string
    title: string
    lead: string
    github: LinkItem
    linkedin: LinkItem
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  skills: {
    heading: string
    intro: string
    groups: SkillGroup[]
  }
  works: {
    heading: string
    items: WorkItem[]
  }
  research: {
    heading: string
    affiliation: string
    themeLabel: string
    theme: string
    paragraphs: string[]
    lab: LinkItem
  }
  certifications: {
    heading: string
    items: CertificationItem[]
  }
  links: {
    heading: string
    items: LinkItem[]
  }
  footer: {
    copyright: string
    builtWith: string
    creditsLabel: string
    credits: CreditItem[]
  }
}

// 使用しているライブラリのライセンス表示（MIT の表示条件を満たすため）
export type CreditItem = {
  name: string
  href: string
  note: string
}
