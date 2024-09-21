import { Page, Locator,BrowserContext, Browser } from '@playwright/test';

class LoginPage {
    private page: Page;
    private btnSignIn: Locator;
    private username: Locator;
    private password: Locator;


    constructor(page: Page) {
        this.page = page;
        this.btnSignIn = page.locator("[value='Login']");
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
    }

    async goTo() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async validLogin(username: string, password: string) {
        await this.username.type(username);
        await this.password.type(password);
        await this.btnSignIn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async storageAuth(context: BrowserContext, pathString: string) {
        await this.page.waitForLoadState('networkidle');
        await context.storageState({ path: pathString });
      }
    
      async closeBrowser(browser: Browser) {
        await browser.close();
      }
}


export { LoginPage };