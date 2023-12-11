const { expect } = require('chai'); // Importing Chai for assertions
const internetPage = require("../pages/internet.page");

describe("Interacting with elements", function () {
    it("Get text for element", async () => {
        await browser.url('/'); // Use await for browser.url
        const text = await $("//*[@id='page-footer']").getText();
        console.log(text);

        await internetPage.getLiText();
        await internetPage.getSpecificElementText(3);
    });

    it("Is footer Displayed", async () => {
        const isDisplayed = await internetPage.pageFooter.isDisplayed();
        expect(isDisplayed).to.be.true; // Using Chai assertion
        console.log(isDisplayed);
    });

    it("Does the header exist?", async () => {
        const doesExist = await internetPage.pageHeader.isExisting();
        expect(doesExist).to.be.true; // Using Chai assertion
        console.log(doesExist);
    });

    it("Is footer in viewport?", async () => {
        const doesExist = await internetPage.pageFooter.isExisting();
        expect(doesExist).to.be.true; // Using Chai assertion
        console.log(doesExist);
    });

    it("Is Header in viewport", async () => {
        const doesExist = await internetPage.pageHeader.isExisting();
        expect(doesExist).to.be.true; // Using Chai assertion
        console.log(doesExist);
    });

    it("Is subheader enabled?", async () => {
        const isEnabled = await internetPage.subHeading.isEnabled();
        expect(isEnabled).to.be.true; // Using Chai assertion
        console.log(isEnabled);
    });

    it("Click Element", async () => {
        await internetPage.clickOnLink(); // Use await for asynchronous operations
    });
});
