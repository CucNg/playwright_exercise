import { LoginPage } from "../fixtures/LoginPage";
import { Browser, chromium, Page, test } from "@playwright/test";
const data = JSON.parse(JSON.stringify(require("../utils1/placeOrderTestData.json")));

test("Dependencies setup", async () => {
  console.log("Performing dependencies setup....");

  const browser: Browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  const authPath = "./auth.json";
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.validLogin("standard_user", "secret_sauce");
  await loginPage.storageAuth(context, authPath);
  await context.close();
  await browser.close();
});
