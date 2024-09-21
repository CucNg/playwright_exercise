/*
import { Browser, chromium, Page } from "@playwright/test";
import path from 'path';
const data = require("../utils1/placeOrderTestData.json");

async function globalSetup() {
  console.log("Performing global setup...");

  const browser: Browser = await chromium.launch({
    headless: true,
  });

  for (const userData of data) {
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    console.log(`Logging in with ${userData.username}...`);


    await page.goto("https://www.saucedemo.com/");


    await page.getByPlaceholder('Username').type(userData.username);
    await page.getByPlaceholder('Password').type(userData.password);
    await page.locator("[value='Login']").click();


    await page.waitForLoadState('networkidle');
    console.log(`Logging success`);


    const storagePath = path.resolve(__dirname, `./auth.json`);
    await context.storageState({ path: storagePath });
   
    

  }
  await browser.close();

}

export default globalSetup;
*/