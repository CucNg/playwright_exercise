import { Page, Locator, expect } from '@playwright/test';


class CheckoutStepCompletePage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async verifyMessage() {
        await this.page.waitForLoadState('networkidle');
        const expectedText = "Thank you for your order!";
        const isVisible = await this.page.locator(`text="${expectedText}"`).isVisible();
        expect(isVisible).toBeTruthy();
    }
}
export { CheckoutStepCompletePage};