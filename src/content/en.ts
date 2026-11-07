import type { SiteContent } from './types'

export const en: SiteContent = {
  meta: {
    title: 'Atsunori Nagaya',
    description:
      'Personal site of Atsunori Nagaya: AI/LLM development and project management for manufacturing, tech stack, and research.',
  },
  nav: {
    skipToContent: 'Skip to main content',
    siteName: 'Atsunori Nagaya',
    items: [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'works', label: 'Works' },
      { id: 'research', label: 'Research' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'links', label: 'Links' },
    ],
  },
  hero: {
    name: 'Atsunori Nagaya',
    romanized: '長屋篤典',
    title: 'AI/LLM engineer and project manager for manufacturing',
    lead: 'I build RAG-based chatbots from proof of concept through production and operations. Working mainly with Python, TypeScript and AWS, I also own the effort estimates and architecture reviews that make a project hold together.',
    github: { label: 'View my GitHub profile', href: 'https://github.com/AtsunoriNagaya' },
    linkedin: {
      label: 'View my LinkedIn profile',
      href: 'https://www.linkedin.com/in/%E7%AF%A4%E5%85%B8-%E9%95%B7%E5%B1%8B-877a9b354/',
    },
  },
  about: {
    heading: 'About',
    paragraphs: [
      'I have worked for about two years in AI and LLM development, mostly for manufacturing clients. My core work is RAG-based chatbots, which I have taken from PoC design through production and operations.',
      'Recently I also act as project manager. I prepare effort estimates backed by person-month breakdowns and review AWS architectures designed for closed networks, with a focus on catching the problems that would otherwise surface only after go-live. I avoid promises I cannot keep and agree on deadlines and scope instead.',
      'Internally, I build Slack bots and other tooling that keeps the development team running.',
    ],
  },
  skills: {
    heading: 'Skills',
    intro: 'Only technologies I have actually used in client work or personal projects are listed.',
    groups: [
      {
        name: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS / SCSS', 'LaTeX'],
      },
      {
        name: 'Frontend',
        items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'React Hook Form'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'Hono', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis'],
      },
      {
        name: 'AI / LLM',
        items: [
          'OpenAI API',
          'Anthropic Claude API',
          'Google Gemini',
          'Azure OpenAI',
          'Amazon Bedrock',
          'Vercel AI SDK',
          'LangChain',
          'RAG (ChromaDB, Upstash Vector, pgvector)',
        ],
      },
      {
        name: 'Cloud / Infrastructure',
        items: [
          'AWS (ECS Fargate, Lambda, DynamoDB, S3, SQS, CloudFront)',
          'Azure',
          'Vercel',
          'Firebase',
          'Google Cloud',
          'Cloudflare Workers',
          'Terraform',
          'GitHub Actions',
        ],
      },
      {
        name: 'Machine learning / Data',
        items: ['scikit-learn', 'CatBoost', 'Jupyter', 'NumPy'],
      },
      {
        name: 'Tools',
        items: [
          'Git / GitHub',
          'VS Code',
          'pnpm',
          'uv',
          'Jest',
          'ESLint',
          'Prettier',
          'draw.io',
          'Claude Code',
        ],
      },
    ],
  },
  works: {
    heading: 'Works',
    items: [
      {
        name: 'swim_training_app',
        summary:
          'A web app that drafts practice menus for a swim team with AI. Enter the load, duration and notes to get a menu, with retrieval over past menus (RAG), automatic trimming to fit the time budget, and PDF / CSV export.',
        stack: ['Next.js', 'TypeScript', 'Vercel AI SDK', 'RAG'],
        repo: {
          label: 'swim_training_app repository on GitHub',
          href: 'https://github.com/AtsunoriNagaya/swim_training_app',
        },
        demo: {
          label: 'Open the swim_training_app demo',
          href: 'https://swim-training-app.vercel.app/',
        },
      },
      {
        name: 'AI-journal',
        summary:
          'A tool that generates a week of diary entries with an LLM while keeping each day consistent with the days before it. A persona file drives the content, and it runs from the CLI or a small web UI.',
        stack: ['Python', 'FastAPI', 'LangChain', 'uv'],
        repo: {
          label: 'AI-journal repository on GitHub',
          href: 'https://github.com/AtsunoriNagaya/AI-journal',
        },
      },
    ],
  },
  research: {
    heading: 'Research',
    affiliation:
      'Yamamoto Lab, School of Data Science, Nagoya City University (fourth-year undergraduate)',
    themeLabel: 'Research theme',
    theme: 'Designing AI agents that speak up for opinions people hesitate to voice',
    paragraphs: [
      'I study group discussions in which people talk together with several AI participants, looking for ways to help those who have an opinion but hesitate to say it.',
    ],
    lab: { label: 'Yamamoto Lab, Nagoya City University', href: 'https://www.ymmt3-lab.org/' },
  },
  certifications: {
    heading: 'Certifications',
    items: [
      {
        name: 'Fundamental Information Technology Engineer Examination',
        issuer: 'IPA (Information-technology Promotion Agency, Japan)',
      },
      {
        name: 'Japan Statistical Society Certificate, Grade 2',
        issuer: 'Japan Statistical Society',
      },
      {
        name: 'JDLA Deep Learning for GENERAL (G Certificate)',
        issuer: 'Japan Deep Learning Association',
      },
    ],
  },
  links: {
    heading: 'Links',
    items: [
      { label: 'GitHub (AtsunoriNagaya)', href: 'https://github.com/AtsunoriNagaya' },
      {
        label: 'LinkedIn (Atsunori Nagaya)',
        href: 'https://www.linkedin.com/in/%E7%AF%A4%E5%85%B8-%E9%95%B7%E5%B1%8B-877a9b354/',
      },
      { label: 'Yamamoto Lab, Nagoya City University', href: 'https://www.ymmt3-lab.org/' },
    ],
  },
  footer: {
    copyright: '© 2026 Atsunori Nagaya',
    builtWith: 'Built with smarthr-ui and hosted on GitHub Pages.',
    creditsLabel: 'Libraries and licenses',
    credits: [
      {
        name: 'smarthr-ui',
        href: 'https://github.com/kufu/smarthr-ui/blob/master/LICENSE',
        note: 'MIT License, Copyright 2018 SmartHR',
      },
      {
        name: 'Font Awesome Free',
        href: 'https://fontawesome.com/license/free',
        note: 'icons (via react-icons), CC BY 4.0',
      },
    ],
  },
}
