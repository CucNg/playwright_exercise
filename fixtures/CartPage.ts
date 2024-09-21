import { Page, Locator, expect } from '@playwright/test';


class CartPage {
    private page: Page;
    private products: Locator;
    private productsText: Locator;
    private cart: Locator;
    private orders: Locator;
    private checkout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator('.inventory_item_desc').first();
        this.productsText = page.locator('.inventory_item_name');
        this.cart = page.locator('.shopping_cart_link');
        this.checkout = page.locator("#checkout");
    }

    async VerifyProductIsDisplayed(productNames: Array<string>) { 
        await this.products.waitFor();
        for (const productName of productNames) {
            const bool = await this.getProductLocator(productName).isVisible();
            expect(bool).toBeTruthy();
        }
    }

    async Checkout() {
        await this.checkout.click();
    }

    getProductLocator(productName: string) {
        return this.page.locator(`.inventory_item_name:has-text("${productName}")`);
    }
}


export { CartPage };
