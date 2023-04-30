import { expect, test } from '@playwright/test';

const CAT_PICTURE_API = `https://cataas.com`;
const LOCALHOST_URL = 'http://localhost:5173';

test('should show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent).not.toBeNull();
  await expect(imageSrc?.startsWith(CAT_PICTURE_API)).toBeTruthy();
});
