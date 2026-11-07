import type { SiteContent } from './types'

export const ja: SiteContent = {
  meta: {
    title: '長屋篤典 | Atsunori Nagaya',
    description:
      '長屋篤典の個人サイト。製造業向けの AI/LLM 開発と PM、技術スタック、研究テーマを紹介します。',
  },
  nav: {
    skipToContent: '本文へ移動',
    siteName: '長屋篤典',
    items: [
      { id: 'about', label: '自己紹介' },
      { id: 'skills', label: '技術スタック' },
      { id: 'works', label: '制作物' },
      { id: 'research', label: '研究' },
      { id: 'certifications', label: '資格' },
      { id: 'links', label: 'リンク' },
    ],
  },
  hero: {
    name: '長屋篤典',
    romanized: 'Atsunori Nagaya',
    title: '製造業向け AI/LLM エンジニア・プロジェクトマネージャー',
    lead: 'RAG を使ったチャットボットを、PoC から本開発、運用まで担当しています。Python、TypeScript、AWS を軸に、工数見積と構成レビューまで含めて案件を成立させる仕事をしています。',
    github: { label: 'GitHub のプロフィールを見る', href: 'https://github.com/AtsunoriNagaya' },
    linkedin: {
      label: 'LinkedIn のプロフィールを見る',
      href: 'https://www.linkedin.com/in/%E7%AF%A4%E5%85%B8-%E9%95%B7%E5%B1%8B-877a9b354/',
    },
  },
  about: {
    heading: '自己紹介',
    paragraphs: [
      '製造業を中心とした AI/LLM の領域で、約 2 年働いています。中心は RAG を使ったチャットボットの開発で、PoC の設計から本開発、運用までを担当してきました。',
      '最近はプロジェクトマネージャーも兼ねています。人月の粒度で根拠を示す工数見積や、閉域網を前提にした AWS 構成のレビューを担当し、運用に入ってから詰まる点を先に潰すようにしています。守れない約束はせず、期限と範囲で合意をつくることを大事にしています。',
      '社内では Slack bot の内製など、開発組織の仕組みづくりにも取り組んでいます。',
    ],
  },
  skills: {
    heading: '技術スタック',
    intro: '実際の案件や個人開発で使ったものだけを載せています。',
    groups: [
      {
        name: '言語',
        items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS / SCSS', 'LaTeX'],
      },
      {
        name: 'フロントエンド',
        items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'React Hook Form'],
      },
      {
        name: 'バックエンド',
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
          'RAG（ChromaDB、Upstash Vector、pgvector）',
        ],
      },
      {
        name: 'クラウド / インフラ',
        items: [
          'AWS（ECS Fargate、Lambda、DynamoDB、S3、SQS、CloudFront）',
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
        name: '機械学習 / データ',
        items: ['scikit-learn', 'CatBoost', 'Jupyter', 'NumPy'],
      },
      {
        name: 'ツール',
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
    heading: '制作物',
    items: [
      {
        name: 'swim_training_app',
        summary:
          '水泳部の練習メニューを AI で作る Web アプリです。負荷、所要時間、特記事項を入れるとメニューの案を作り、過去のメニューを参照する RAG、指定時間に収める自動調整、PDF と CSV の出力に対応しています。',
        stack: ['Next.js', 'TypeScript', 'Vercel AI SDK', 'RAG'],
        repo: {
          label: 'swim_training_app のリポジトリ（GitHub）',
          href: 'https://github.com/AtsunoriNagaya/swim_training_app',
        },
        demo: {
          label: 'swim_training_app のデモを開く',
          href: 'https://swim-training-app.vercel.app/',
        },
      },
      {
        name: 'AI-journal',
        summary:
          '1 週間分の日記を、前日までの内容と矛盾しないように LLM で生成するツールです。人物設定のファイルをもとに 1 日ずつ書き進め、CLI と小さな Web UI から使えます。',
        stack: ['Python', 'FastAPI', 'LangChain', 'uv'],
        repo: {
          label: 'AI-journal のリポジトリ（GitHub）',
          href: 'https://github.com/AtsunoriNagaya/AI-journal',
        },
      },
    ],
  },
  research: {
    heading: '研究',
    affiliation: '名古屋市立大学 データサイエンス学部 山本祐輔研究室（学部 4 年）',
    themeLabel: '研究テーマ',
    theme: '言い出しにくい発言を代弁する AI エージェント設計',
    paragraphs: [
      '人と複数の AI が参加するグループでの話し合いを対象に、意見はあっても言い出しにくい人が発言しやすくなる方法を研究しています。',
    ],
    lab: { label: '名古屋市立大学 山本祐輔研究室', href: 'https://www.ymmt3-lab.org/' },
  },
  certifications: {
    heading: '資格',
    items: [
      { name: '基本情報技術者', issuer: 'IPA（情報処理推進機構）' },
      { name: '統計検定 2 級', issuer: '日本統計学会' },
      { name: 'G 検定', issuer: 'JDLA（日本ディープラーニング協会）' },
    ],
  },
  links: {
    heading: 'リンク',
    items: [
      { label: 'GitHub（AtsunoriNagaya）', href: 'https://github.com/AtsunoriNagaya' },
      {
        label: 'LinkedIn（長屋篤典）',
        href: 'https://www.linkedin.com/in/%E7%AF%A4%E5%85%B8-%E9%95%B7%E5%B1%8B-877a9b354/',
      },
      { label: '名古屋市立大学 山本祐輔研究室', href: 'https://www.ymmt3-lab.org/' },
    ],
  },
  footer: {
    copyright: '© 2026 Atsunori Nagaya',
    builtWith: 'このサイトは smarthr-ui で作り、GitHub Pages で公開しています。',
  },
}
