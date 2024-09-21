import { Page, Locator } from "@playwright/test";

class CheckoutStepOnePage {
  private page: Page;
  private firstName: Locator;
  private lastName: Locator;
  private zipCode: Locator;
  private btnContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.zipCode = page.getByPlaceholder("Zip/Postal Code");
    this.btnContinue = page.locator("#continue");
  }
  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    zipCode: string
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);

  }
  async continueClick() {
    await this.btnContinue.click();
  }
}

export { CheckoutStepOnePage };
