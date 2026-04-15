import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

async function warmLazyImages(page: import('@playwright/test').Page) {
  await page.evaluate(async () => {
    document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((image) => {
      image.loading = 'eager'
    })
    const step = Math.max(500, window.innerHeight * 0.75)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((resolve) => window.setTimeout(resolve, 80))
    }
    await Promise.all(
      Array.from(document.images).map((image) =>
        image.complete && image.naturalWidth > 0
          ? Promise.resolve()
          : new Promise((resolve) => {
              image.addEventListener('load', resolve, { once: true })
              image.addEventListener('error', resolve, { once: true })
            }),
      ),
    )
    window.scrollTo(0, 0)
  })
}

test.describe('Clearaway homepage preview', () => {
  test('core content, layout and accessibility pass', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/asbestos removal/i)
    await expect(page.getByRole('link', { name: /get a quote/i }).first()).toBeVisible()
    await expect(page.getByText('020 8941 4433').first()).toBeVisible()
    await expect(page.getByText('info@clearawayservicesltd.co.uk').first()).toBeVisible()

    const hero = page.getByTestId('hero')
    const heroImage = hero.locator('img').first()
    await expect(heroImage).toBeVisible()
    const heroBox = await hero.boundingBox()
    const imageBox = await heroImage.boundingBox()
    expect(heroBox?.height).toBeGreaterThan(650)
    expect(imageBox?.width).toBeGreaterThanOrEqual(1280)
    expect(imageBox?.height).toBeGreaterThanOrEqual(heroBox?.height ?? 0)

    const copyBox = await page.getByTestId('hero-copy').boundingBox()
    const formBox = await page.getByTestId('hero-form').boundingBox()
    expect(copyBox && formBox && copyBox.x < formBox.x).toBeTruthy()

    const navbar = page.getByTestId('site-navbar')
    await expect(navbar).toHaveAttribute('data-scrolled', 'false')
    await page.evaluate(() => window.scrollTo(0, 900))
    await expect(navbar).toHaveAttribute('data-scrolled', 'true')

    for (const label of ['Services', 'Process', 'Proof', 'About', 'FAQ', 'Contact']) {
      await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: label }).click()
      await expect(page.locator(`#${label.toLowerCase()}`)).toBeInViewport()
    }

    await expect(page.locator('footer')).toBeVisible()
    await expect(page.locator('#faq')).toBeInViewport()

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
    expect(overflow).toBe(false)

    const bottomCta = page.getByTestId('bottom-cta')
    await expect(bottomCta).toBeVisible()
    await expect(bottomCta).toHaveCSS('opacity', '1')

    const whatsapp = page.getByTestId('whatsapp-button')
    await expect(whatsapp).toBeVisible()
    await expect(whatsapp).toHaveAttribute('aria-label', 'Contact us on WhatsApp')
    const waBox = await whatsapp.boundingBox()
    const ctaBox = await bottomCta.boundingBox()
    expect(waBox && ctaBox && waBox.y + waBox.height <= ctaBox.y).toBeTruthy()

    const carousel = page.getByTestId('testimonial-carousel')
    await expect(carousel).toBeVisible()
    const firstQuote = await carousel.locator('blockquote').textContent()
    await carousel.getByRole('button', { name: 'Next testimonial' }).click()
    await expect(carousel.locator('blockquote')).not.toHaveText(firstQuote ?? '')
    await carousel.getByRole('button', { name: 'Previous testimonial' }).click()

    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations).toEqual([])
  })

  test('mobile layout, sticky CTA and screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    const heroCopy = page.getByTestId('hero-copy')
    await expect(heroCopy).toBeVisible()
    await expect(heroCopy).toHaveCSS('text-align', 'center')

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
    expect(overflow).toBe(false)

    const bottomCta = page.getByTestId('bottom-cta')
    await expect(bottomCta).toHaveCSS('opacity', '0')
    await page.evaluate(() => window.scrollTo(0, document.getElementById('hero-section')!.offsetHeight + 120))
    await expect(bottomCta).toHaveCSS('opacity', '1')
    await expect(page.getByTestId('whatsapp-button')).toBeVisible()

    await warmLazyImages(page)
    await page.screenshot({ path: 'tests/screenshots/preview-390-iphone14.png', fullPage: true })
  })

  test('desktop screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto('/')
    await warmLazyImages(page)
    await page.screenshot({ path: 'tests/screenshots/preview-1280-laptop.png', fullPage: true })

    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.goto('/')
    await warmLazyImages(page)
    await page.screenshot({ path: 'tests/screenshots/preview-1440-desktop.png', fullPage: true })
  })
})
