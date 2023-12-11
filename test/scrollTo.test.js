internetPage = require('../pages/internet.page')
const { expect } = require('chai');

describe('Scroll to Element', function () {
    it('should scroll to the footer', async () => {
        await browser.url('/');
        await internetPage.pageHeader.waitForDisplayed();
        await internetPage.scrollToPageFooter();
        expect(await internetPage.pageFooter.isDisplayedInViewport()).to.equal(true);
        browser.pause(5000)
    });

    it('should scroll into view',async () => {
        await  browser.url('/')
        await internetPage.pageFooter.scrollIntoView()
        expect(await internetPage.pageFooter.isDisplayedInViewport()).to.equal(true);
         browser.pause(5000)
    })
});
