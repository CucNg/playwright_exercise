import { test as base } from "@playwright/test";
import { InventoryPage } from './InventoryPage';
import { CartPage } from "./CartPage";
import { CheckoutStepOnePage } from "./CheckoutStepOnePage";
import { CheckoutStepTwoPage } from "./CheckoutStepTwoPage";
import { CheckoutStepCompletePage} from "./CheckoutStepCompletePage";

export const test = base.extend<{ inventoryPage: InventoryPage; cartPage: CartPage; 
    checkoutStepOnePage: CheckoutStepOnePage; checkoutStepTwoPage: CheckoutStepTwoPage ; 
    checkoutStepCompletePage: CheckoutStepCompletePage}>
    ({

        inventoryPage: async ({ page }, use) => {
            await use(new InventoryPage(page));
        },

        cartPage: async ({ page }, use) => {
            await use(new CartPage(page));
        },

        checkoutStepOnePage: async ({ page }, use) => {
            await use(new CheckoutStepOnePage(page));
        },

        checkoutStepTwoPage: async ({ page }, use) => {
            await use(new CheckoutStepTwoPage(page));
        },

        checkoutStepCompletePage: async ({ page }, use) => {
            await use(new CheckoutStepCompletePage(page));
        },
    })


