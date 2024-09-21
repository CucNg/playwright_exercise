import { Page, Locator, expect } from '@playwright/test';
class CheckoutStepTwoPage {
    private page: Page;
    private getQuantities: Locator;
    private getPrices: Locator;
    private totalPriceDisplay: Locator;
    private btnFinish: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getQuantities = page.locator('.cart_quantity');
        this.getPrices = page.locator('.item_pricebar');
        this.totalPriceDisplay = page.locator('.summary_total_label');
        this.btnFinish = page.locator('#finish');
    }

   async calculateTotalPrice() {
        const countQuantity = await this.getQuantities.count();
        let totalPrice = 0;
        for (let i = 0; i < countQuantity; ++i) {
            const quantityValue = await this.getQuantities.nth(i).textContent();
            const unitPriceValue = await this.getPrices.nth(i).textContent();
            
            if (quantityValue && unitPriceValue) {
                const quantity = parseFloat(quantityValue.trim());
                const unitPrice = parseFloat(unitPriceValue.trim().replace('$', ''));
                
                if (!isNaN(quantity) && !isNaN(unitPrice)) {
                    totalPrice += quantity * unitPrice;
                }
            }
        }
        const tax = totalPrice * 0.08;
        totalPrice += tax;
        return parseFloat(totalPrice.toFixed(2)); 
    }

    async verifyTotalPriceDisplay() {

        let totalDisplay = await this.totalPriceDisplay.textContent();
        
        if (totalDisplay) {
            totalDisplay = totalDisplay.trim().replace(/[^\d.]/g, '');        
            const totalPriceCalculated = await this.calculateTotalPrice();          
            const tolerance = 0.01;
            const isPriceCorrect = Math.abs(parseFloat(totalDisplay) - totalPriceCalculated) < tolerance;
            expect(isPriceCorrect).toBeTruthy();
        } else {
            throw new Error('Total price display is not present on the page.');
        }
    }

    async finishButtonClick(): Promise<void> {
        await this.btnFinish.click();
    }
}

export { CheckoutStepTwoPage };