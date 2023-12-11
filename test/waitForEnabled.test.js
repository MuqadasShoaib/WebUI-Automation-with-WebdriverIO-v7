const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');

describe("Wait For Enabled", function () {


    
    it('should wait for the input field to be enabled',async () => {
       await browser.url('https://the-internet.herokuapp.com/dynamic_controls');
       await LoginPage.enableButton.waitForDisplayed();
       await LoginPage.enableButton.click();
       await LoginPage.inputEnabledField.waitForDisplayed({ timeout: 4000 });
        expect(await LoginPage.inputEnabledField).not.toBeDisabled();
        expect(await LoginPage.enableButton).toHaveAttributeContaining('autocomplete','off')
        expect(await LoginPage.pageFooter).toHaveHrefContaining('element')
        
    })

    it('should wait for the input field to be disabled', () => {
        LoginPage.enableButton.waitForDisplayed();
        LoginPage.enableButton.click();
        LoginPage.inputEnabledField.waitForDisplayed({ timeout: 4000, reverse: true });
        expect(LoginPage.inputEnabledField).toBeDisabled();
    })
})


