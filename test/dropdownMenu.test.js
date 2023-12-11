const internetPage = require('../pages/internet.page');
const { expect } = require('chai');

describe('Dropdown menu', function () {
    it('should select option 1',async () => {
       await   browser.url(`${browser.options.baseUrl}/dropdown`);
       await  internetPage.clickDropdownMenu();
       await  internetPage.clickDropdownMenuOption1();
        expect(await internetPage.dropdownMenuOption1.isSelected()).to.be.true;
    });
    it('should select option 2',async  () => {
       await  internetPage.clickDropdownMenu();
       await  internetPage.clickDropdownMenuOption2();
        expect(await internetPage.dropdownMenuOption2.isSelected()).to.be.true;
    });
    
    
});
