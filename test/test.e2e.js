const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
      it('should login with valid credentials', async () => {
         await LoginPage.open();
   
         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
         await expect(SecurePage.flashAlert).to.exist;
         await expect(await SecurePage.flashAlert.getText()).to.equal('You logged into a secure area!\nx');
      });
   //  it('should login with valid credentials (using expect)', async () => {
   //      await LoginPage.open();
   //      await LoginPage.login('tomsmith', 'SuperSecretPassword!');

   //      // Using @wdio/expect-webdriverio for WebDriverIO assertions
   //      await expect(SecurePage.flashAlert).toBeDisplayed();
   //      await expect(SecurePage.flashAlert).toHaveTextContaining('you logged into a secure area!');
   //      await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure', 'URL should match');
   //  });
});
