import { test } from "../../fixtures/BasePage";
const data = JSON.parse(JSON.stringify(require("../../utils1/placeOrderTestData.json")));

test.describe('@Exercise_Apply_POM_Fixtures', () => {
  for (const userData of data) {
    test.only(`Test case: Using fixture ${userData.checkoutFirstName}`, async ({
      inventoryPage, cartPage,
      checkoutStepOnePage, checkoutStepTwoPage, checkoutStepCompletePage }) => {

      await inventoryPage.goToDashBoardPage(userData.url);
      await inventoryPage.searchProductAddCart(userData.productNames);
      await inventoryPage.navigateToCart();
      await cartPage.VerifyProductIsDisplayed(userData.productNames);
      await cartPage.Checkout();
      await checkoutStepOnePage.fillCheckoutInformation(userData.checkoutFirstName, userData.checkoutLastName, userData.checkoutZipcode);
      await checkoutStepOnePage.continueClick();
      await checkoutStepTwoPage.calculateTotalPrice();
      await checkoutStepTwoPage.verifyTotalPriceDisplay();
      await checkoutStepTwoPage.finishButtonClick();
      await checkoutStepCompletePage.verifyMessage();

    });
  }
})








