import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

// WCAG 2.2 AA までのルールと axe のベストプラクティスで検査する
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']

const expectNoAxeViolations = async (page: Page) => {
  const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze()
  const summary = results.violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    nodes: v.nodes.map((n) => n.target.join(' ')),
  }))
  expect(summary, JSON.stringify(summary, null, 2)).toEqual([])
}

const expectHeadingStructure = async (page: Page) => {
  await expect(page.locator('h1')).toHaveCount(1)
  // About / Skills / Works / Research / Certifications / Links の 6 セクション
  await expect(page.locator('main h2')).toHaveCount(6)
  // Works の各カードは h3（Section の中の Article なので自動で 1 段下がる）
  await expect(page.locator('main h3')).toHaveCount(2)
}

test.describe('Japanese (default)', () => {
  test('renders in Japanese with no axe violations', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja')
    await expect(page).toHaveTitle(/長屋篤典/)
    await expectHeadingStructure(page)
    await expectNoAxeViolations(page)
  })

  test('skip link is the first focusable element and moves focus to main', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    const skipLink = page.locator('a.skip-link')
    await expect(skipLink).toBeFocused()
    await expect(skipLink).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(page.locator('main#main')).toBeFocused()
  })
})

// smarthr-ui の LanguageSwitcher はトリガーのアクセシブルネームが常に "Language"
const switchToEnglish = async (page: Page) => {
  await page.getByRole('button', { name: 'Language' }).click()
  await page.getByRole('button', { name: 'English' }).click()
}

test.describe('English', () => {
  test('switching language updates lang, title and content with no axe violations', async ({
    page,
  }) => {
    await page.goto('/')
    await switchToEnglish(page)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page).toHaveTitle('Atsunori Nagaya')
    await expect(page.locator('h1')).toHaveText('Atsunori Nagaya')
    await expectHeadingStructure(page)
    await expectNoAxeViolations(page)
  })

  test('language choice is kept after reload', async ({ page }) => {
    await page.goto('/')
    await switchToEnglish(page)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })
})
