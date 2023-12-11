internetPage = require('../pages/internet.page')
const { expect } = require('chai');

describe('Wait For Exist', function () {
    it('should wait until the delete button exists', async () => {
        await browser.url(`${browser.options.baseUrl}/add_remove_elements/`);
        await internetPage.clickExampleButton();
        await internetPage.deleteButton(1).waitForExist();
        expect(await internetPage.deleteButton(1).isExisting()).to.be.true;
        browser.pause(2000);
    });

    it('should wait for the delete button to not exist', async () => {
        await internetPage.clickDeleteButton(1);
        await internetPage.deleteButton(1).waitForExist({ timeout: 500, reverse: true });
        expect(await internetPage.deleteButton(1).isExisting()).to.be.false;
        browser.pause(2000);
    });
});
