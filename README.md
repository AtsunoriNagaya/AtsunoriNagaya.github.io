# AtsunoriNagaya.github.io

長屋篤典の個人サイト。GitHub Pages で `https://atsunorinagaya.github.io/` に公開しています。

UI には SmartHR Design System の React 実装 [smarthr-ui](https://github.com/kufu/smarthr-ui) を使い、アクセシビリティを優先して作っています。日本語と英語を切り替えられます。

## 構成

- Vite 8 + React 19 + TypeScript
- smarthr-ui（`smarthr-ui/smarthr-ui.css` を読み込み、独自スタイルは `src/styles/site.css` の最小限のみ）
- 文面は `src/content/ja.ts` と `src/content/en.ts` に型付きで持ち、`useLocale` で切り替える
- ESLint（`eslint-plugin-jsx-a11y`）と Playwright + axe-core でアクセシビリティを検査する
- GitHub Actions で build / lint / test を回し、main への push で Pages にデプロイする

## 開発

```bash
pnpm install
pnpm dev          # 開発サーバー
pnpm build        # 型チェック + 本番ビルド（dist/）
pnpm preview      # dist/ をローカル配信（http://localhost:4173）
pnpm lint         # ESLint
pnpm format       # Prettier（確認のみ。書き換えは pnpm format:write）
pnpm test:a11y    # Playwright + axe（初回は pnpm exec playwright install chromium）
```

## smarthr-ui を使うときの注意

README の利用例だけでは動かなかった点を書き残しています。

- `Container` など画面幅で挙動を変えるコンポーネントは `EnvironmentProvider` の内側に置く必要があります。`ThemeProvider` の直下に入れています。
- `PageHeading` は既定で `document.title` を「見出し｜SmartHR（スマートHR）」に書き換えます。`autoPageTitle={false}` で止め、title は `App.tsx` で言語ごとに設定しています。
- `LanguageSwitcher` は濃色の `Header` 向けに白文字が既定です。白背景では `invert` を付けます。トリガーのアクセシブルネームは常に "Language" です。
- `react-intl` は smarthr-ui の peer 依存の範囲（10 系）に固定しています。

## 文面の変更

`src/content/ja.ts` と `src/content/en.ts` を編集します。両方の構造は `src/content/types.ts` で揃えているので、片方だけ項目を増やすと型エラーになります。
