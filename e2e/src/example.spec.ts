import { expect, test } from '@playwright/test';

test('can load', async ({ page }) => {
    await page.goto('/');

    const element = page.getByText('AngularTemplate');

    await expect(page).toHaveTitle(/AngularTemplate/);
    await expect(element.innerText()).resolves.toEqual('AngularTemplateApp works!');
});
