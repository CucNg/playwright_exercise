import { Page, Locator} from '@playwright/test';

class InventoryPage {
    private page: Page;
    private products: Locator;
    private cart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator('.inventory_item_description');
        this.cart = page.locator('.shopping_cart_link');
    }
    async searchProductAddCart(productNames: Array<string>) {
        await this.page.waitForLoadState('networkidle');
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            for (const productName of productNames)
                if ((await this.products.nth(i).locator('.inventory_item_name').textContent()) === productName) {
                    await this.products.nth(i).locator('.btn_inventory').click();
                    break;
              }
        }
    }
    async navigateToCart() {
        await this.cart.click();
    }

    async goToDashBoardPage(url: string) {
        await this.page.goto(url);
      }

}

export { InventoryPage };
