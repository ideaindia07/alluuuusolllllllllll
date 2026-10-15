import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Large desktop (1920x1080)', width: 1920, height: 1080, isTwoColumn: true },
  { name: 'Desktop (1440x900)', width: 1440, height: 900, isTwoColumn: true },
  { name: 'Tablet landscape (1024x768)', width: 1024, height: 768, isTwoColumn: true },
  { name: 'Tablet portrait (768x1024)', width: 768, height: 1024, isTwoColumn: true },
  { name: 'Mobile (390x844)', width: 390, height: 844, isTwoColumn: false },
  { name: 'Small mobile (375x812)', width: 375, height: 812, isTwoColumn: false },
  { name: 'Narrow mobile (320x568)', width: 320, height: 568, isTwoColumn: false },
];

const expectedServices = [
  { num: '01', title: 'Branding' },
  { num: '02', title: 'Brand Consultation & Strategy' },
  { num: '03', title: 'Expert Social Media' },
  { num: '04', title: 'Website Design & Development' },
  { num: '05', title: 'Performance Marketing Agency' },
  { num: '06', title: 'Brand Photoshoots' },
];

for (const vp of viewports) {
  test.describe(`Service Grid Layout - ${vp.name}`, () => {
    test(`verifies 50/50 responsive layout, card alignment, and no overflow at ${vp.width}x${vp.height}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/', { waitUntil: 'domcontentloaded' });

      // Locate grid and cards
      const grid = page.locator('.services-grid');
      await expect(grid).toBeVisible();

      const cards = page.locator('.services-grid .service-card');
      await expect(cards).toHaveCount(6);

      // Scroll each card into view to trigger viewport animations, then wait for transitions to settle
      for (let i = 0; i < 6; i++) {
        await cards.nth(i).scrollIntoViewIfNeeded();
      }
      await page.waitForTimeout(1000);

      // 1. Verify content, ordering, and explore link for each card
      for (let i = 0; i < 6; i++) {
        const card = cards.nth(i);
        await expect(card).toContainText(expectedServices[i].num);
        await expect(card).toContainText(expectedServices[i].title);
        await expect(card).toContainText('Explore');
      }

      // 2. Check no horizontal overflow on the page
      const viewportWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(documentWidth).toBeLessThanOrEqual(viewportWidth + 1);

      // 3. Get bounding dimensions
      const gridBox = await grid.boundingBox();
      expect(gridBox).not.toBeNull();

      const dimensions = await cards.evaluateAll((elements) =>
        elements.map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            right: rect.right,
            bottom: rect.bottom,
          };
        })
      );

      // 4. Ensure no card extends outside the grid container
      for (let i = 0; i < 6; i++) {
        const card = dimensions[i];
        expect(card.x).toBeGreaterThanOrEqual(gridBox!.x - 1.5);
        expect(card.right).toBeLessThanOrEqual(gridBox!.x + gridBox!.width + 1.5);
      }

      if (vp.isTwoColumn) {
        // Desktop & Tablet (>= 768px): Exactly 3 rows of 2 equal-width cards (50% / 50%)
        // Row 1: Cards 0 and 1
        // Row 2: Cards 2 and 3
        // Row 3: Cards 4 and 5
        let prevRowGap: number | null = null;
        for (let row = 0; row < 3; row++) {
          const leftCard = dimensions[row * 2];
          const rightCard = dimensions[row * 2 + 1];

          // Same horizontal baseline (Y position) within 1.5px subpixel rounding
          expect(Math.abs(leftCard.y - rightCard.y)).toBeLessThanOrEqual(1.5);

          // Equal 50/50 width within 1.5px subpixel tolerance
          expect(Math.abs(leftCard.width - rightCard.width)).toBeLessThanOrEqual(1.5);

          // Left card is on left, right card is on right
          expect(leftCard.x).toBeLessThan(rightCard.x);

          // Gap between columns in the same row
          const colGap = rightCard.x - leftCard.right;
          expect(colGap).toBeGreaterThan(0);

          if (row > 0) {
            const prevRowCard = dimensions[(row - 1) * 2];
            const rowGap = leftCard.y - prevRowCard.bottom;
            expect(rowGap).toBeGreaterThan(0);
            if (prevRowGap !== null) {
              // Consistent vertical row gap within 1.5px
              expect(Math.abs(rowGap - prevRowGap)).toBeLessThanOrEqual(1.5);
            }
            prevRowGap = rowGap;
          }
        }

        // Left column cards align along X; Right column cards align along Right
        expect(Math.abs(dimensions[0].x - dimensions[2].x)).toBeLessThanOrEqual(1.5);
        expect(Math.abs(dimensions[0].x - dimensions[4].x)).toBeLessThanOrEqual(1.5);
        expect(Math.abs(dimensions[1].right - dimensions[3].right)).toBeLessThanOrEqual(1.5);
        expect(Math.abs(dimensions[1].right - dimensions[5].right)).toBeLessThanOrEqual(1.5);
      } else {
        // Mobile viewports (< 768px): Single column stacked layout
        let prevGap: number | null = null;
        for (let i = 0; i < 6; i++) {
          // Each card spans the full width of the grid container
          expect(Math.abs(dimensions[i].width - gridBox!.width)).toBeLessThanOrEqual(2);
          if (i > 0) {
            const gap = dimensions[i].y - dimensions[i - 1].bottom;
            expect(gap).toBeGreaterThan(0);
            if (prevGap !== null) {
              expect(Math.abs(gap - prevGap)).toBeLessThanOrEqual(1.5);
            }
            prevGap = gap;
          }
        }
      }

      // 5. Verify inner elements (arrow icon, explore label, background numbers) remain inside cards
      const cardIntegrity = await page.locator('.services-grid .service-card').evaluateAll((cards) => {
        return cards.map((card) => {
          const cardRect = card.getBoundingClientRect();
          const arrow = card.querySelector('svg');
          const arrowRect = arrow ? arrow.getBoundingClientRect() : null;
          const heading = card.querySelector('h3');
          const headingRect = heading ? heading.getBoundingClientRect() : null;
          const desc = card.querySelector('p');
          const descRect = desc ? desc.getBoundingClientRect() : null;

          return {
            arrowInside: arrowRect
              ? arrowRect.left >= cardRect.left - 1 && arrowRect.right <= cardRect.right + 1
              : true,
            headingInside: headingRect
              ? headingRect.left >= cardRect.left - 1 && headingRect.right <= cardRect.right + 1
              : true,
            descInside: descRect
              ? descRect.left >= cardRect.left - 1 && descRect.right <= cardRect.right + 1
              : true,
          };
        });
      });

      for (const item of cardIntegrity) {
        expect(item.arrowInside).toBe(true);
        expect(item.headingInside).toBe(true);
        expect(item.descInside).toBe(true);
      }

      // 6. Check console errors (filter non-app noise)
      const criticalErrors = consoleErrors.filter(
        (err) => !err.includes('favicon') && !err.includes('fontshare')
      );
      expect(criticalErrors.length).toBe(0);
    });
  });
}
