import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Large desktop (1920x1080)', width: 1920, height: 1080 },
  { name: 'Desktop (1440x900)', width: 1440, height: 900 },
  { name: 'Tablet landscape (1024x768)', width: 1024, height: 768 },
  { name: 'Tablet portrait (768x1024)', width: 768, height: 1024 },
  { name: 'Mobile (390x844)', width: 390, height: 844 },
  { name: 'Small mobile (375x812)', width: 375, height: 812 },
  { name: 'Narrow mobile (320x568)', width: 320, height: 568 },
];

test.describe('Back to Top Button - Accessibility & Core Functionality', () => {
  test('has accessible name, semantic button role, and cannot receive focus when hidden', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const btn = page.locator('.back-to-top');

    // Button exists in DOM with semantic button role and aria-label
    await expect(btn).toHaveCount(1);
    await expect(btn).toHaveAttribute('type', 'button');
    await expect(btn).toHaveAttribute('aria-label', 'Back to top');

    // Initially at top (scrollY = 0), button must be hidden, aria-hidden, and not focusable
    await expect(btn).not.toBeVisible();
    await expect(btn).toHaveAttribute('aria-hidden', 'true');
    await expect(btn).toHaveAttribute('tabindex', '-1');

    // Scroll past threshold (650px)
    await page.evaluate(() => window.scrollTo(0, 650));

    // Button should now be visible and accessible
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAccessibleName('Back to top');
    await expect(btn).toHaveAttribute('aria-hidden', 'false');
    await expect(btn).toHaveAttribute('tabindex', '0');

    // Test keyboard focus
    await btn.focus();
    await expect(btn).toBeFocused();

    // Verify focus indicator outline
    const outline = await btn.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        outlineStyle: style.outlineStyle,
        outlineWidth: style.outlineWidth,
      };
    });
    expect(outline.outlineStyle).not.toBe('none');
  });

  test('respects prefers-reduced-motion: reduce', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const btn = page.locator('.back-to-top');

    await page.evaluate(() => window.scrollTo(0, 800));
    await expect(btn).toBeVisible();

    // Check transitionProperty is none under reduced motion
    const transitionProperty = await btn.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return style.transitionProperty;
    });
    expect(transitionProperty).toBe('none');
  });
});

for (const vp of viewports) {
  test.describe(`Back to Top Button - ${vp.name}`, () => {
    test(`handles scroll appearance, smooth scroll to top, positioning, and no overflow at ${vp.width}x${vp.height}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'domcontentloaded' });

      const btn = page.locator('.back-to-top');

      // 1. Initial State: Hidden at the top
      await expect(btn).not.toBeVisible();
      await expect(btn).toHaveAttribute('tabindex', '-1');
      await expect(btn).toHaveAttribute('aria-hidden', 'true');

      const initialScrollY = await page.evaluate(() => window.scrollY);
      expect(initialScrollY).toBe(0);

      // 2. Scroll past threshold (approx 650px)
      await page.evaluate(() => window.scrollTo(0, 650));

      // Verify button becomes visible and interactive
      await expect(btn).toBeVisible();
      await expect(btn).toHaveClass(/is-visible/);
      await expect(btn).toHaveAttribute('tabindex', '0');
      await expect(btn).toHaveAttribute('aria-hidden', 'false');
      await expect(btn).toHaveAccessibleName('Back to top');

      // 3. Verify positioning remains strictly inside the viewport
      const viewportWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const viewportHeight = await page.evaluate(() => document.documentElement.clientHeight);
      const btnBox = await btn.boundingBox();
      expect(btnBox).not.toBeNull();

      expect(btnBox!.x).toBeGreaterThan(0);
      expect(btnBox!.y).toBeGreaterThan(0);
      expect(btnBox!.x + btnBox!.width).toBeLessThanOrEqual(viewportWidth);
      expect(btnBox!.y + btnBox!.height).toBeLessThanOrEqual(viewportHeight);

      // Touch target size validation (min 44px)
      expect(btnBox!.width).toBeGreaterThanOrEqual(44);
      expect(btnBox!.height).toBeGreaterThanOrEqual(44);

      // 4. Verify no horizontal page overflow
      const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(documentWidth).toBeLessThanOrEqual(viewportWidth + 1);

      // 5. Click the button to return to top
      await btn.click();

      // Wait for smooth scroll to finish and settle at top
      await page.waitForFunction(() => window.scrollY < 10, { timeout: 6000 });
      await page.waitForTimeout(600);

      const finalScrollY = await page.evaluate(() => window.scrollY);
      expect(finalScrollY).toBeLessThanOrEqual(5);

      // 6. Verify button disappears after returning to the top
      await expect(btn).not.toBeVisible();
      await expect(btn).toHaveAttribute('tabindex', '-1');
      await expect(btn).toHaveAttribute('aria-hidden', 'true');

      // 7. Check for critical console errors
      const criticalErrors = consoleErrors.filter(
        (err) => !err.includes('favicon') && !err.includes('fontshare')
      );
      expect(criticalErrors.length).toBe(0);
    });
  });
}
