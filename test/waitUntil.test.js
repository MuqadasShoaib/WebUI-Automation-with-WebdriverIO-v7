const internetPage = require('../pages/internet.page');
const { expect } = require('chai');

describe('WaitUntil', function () {
    it('should wait until the button text changes to Add', async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        await internetPage.clickPageButton();

        await browser.waitUntil(async () => {
            const buttonText = await internetPage.pageButton.getText();
            console.log('Current button text:', buttonText); // Add this line for debugging
            return buttonText === 'Add';
        }, { timeout: 10000, timeoutMsg: 'Expect button text to change' });

        expect(await internetPage.pageButton.getText()).to.equal('Add');
    });

    it('should wait until the button text changes to Remove', async () => {
        await internetPage.clickPageButton();

        await browser.waitUntil(async () => {
            const buttonText = await internetPage.pageButton.getText();
            console.log('Current button text:', buttonText); // Add this line for debugging
            return buttonText === 'Remove';
        }, { timeout: 10000, timeoutMsg: 'Expect button text to change' });

        expect(await internetPage.pageButton.getText()).to.equal('Remove');
    });
});
