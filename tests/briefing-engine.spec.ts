import { test, expect } from '@playwright/test'

test.describe('AI Briefing Engine hero', () => {
  test('canvas initializes without console errors', async ({ page }) => {
    test.setTimeout(60_000)
    const errors: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
      console.log(`[console:${msg.type()}]`, msg.text())
    })

    page.on('response', (response) => {
      if (response.status() >= 400) {
        console.log('[response]', response.status(), response.url())
      }
    })

    await page.goto('/briefing-engine', { waitUntil: 'domcontentloaded' })

    const markup = await page.content()
    console.log('Page snapshot:', markup.slice(0, 800))
    console.log('Resolved URL:', page.url())
    console.log('Contains hero label?', markup.includes('Hero section'))

    const heroSectionSelector = 'section[aria-label="Hero section"]'
    await page.waitForTimeout(5_000)
    const bodyMarkup = await page.evaluate(() => document.body.innerHTML)
    console.log('Body snapshot contains hero?', bodyMarkup.includes('Hero section'))
    await page.waitForSelector(heroSectionSelector, { state: 'visible', timeout: 60_000 })
    const heroSection = page.locator(heroSectionSelector)
    await expect(heroSection).toHaveCount(1)

    const heroHtml = await heroSection.innerHTML()
    console.log('Hero HTML snippet:', heroHtml.slice(0, 500))

    const canvas = heroSection.locator('canvas')
    await expect(canvas).toHaveCount(1)
    await expect(canvas).toBeVisible()

    await page.waitForFunction(() => window.__particleHeroStatus === 'running', null, {
      timeout: 10_000,
    })

    expect(errors, `Console errors detected: ${errors.join('\n')}`).toHaveLength(0)
  })
})
