const { expect } = require('chai');
internetPage = require('../pages/internet.page')

describe("Drag and Drop", function () {
    it.skip('should drag column A to column B', async () => {
       await browser.url(`${browser.options.baseUrl}/drag_and_drop`)
       await internetPage.dragColumnAToColumnB()
       await browser.pause(3000)
       const text = await internetPage.columnBHeader.getText();
       expect(text).to.equal("A");
    })

    it('Should drag and drop', async () => {
       await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
       await internetPage.dragDraggableToDroppable()
       const text = await internetPage.droppableParagraph.getText();
       expect(text).to.equal('Drop here'); // Corrected expectation
    })
});
