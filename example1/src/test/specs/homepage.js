import Homepage from "../../pages/homepage.pages"

describe('Check herokuapp homepage', () => {
    it('Should have header', () => {
        browser.url('/');
        console.log(Homepage.pageHeader.getText());
    })

    it('Should have sub header', () => {
        console.log(Homepage.subHeading.getText());
    })
})