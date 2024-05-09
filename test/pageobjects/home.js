class Home {

    get btnConfirmRcc () {
        return $('#rcc-confirm-button');
    }

    get userIcon () {
        return $('#menu_popup')
    }

    get menuSigupLogin () {
        return $('#signup_login')
    }

    get menuProfile () {
        return $('li=Profile')
    }

    get menuCarRental () {
        return $('a=Car Rental')
    }

    get menuYachtRental () {
        return $('a=Yacht Rental')
    }

    get menuTrips () {
        return $('li=Trips');
    }

    get menuGarage () {
        return $('li=Garage');
    }

    get menuFavourites () {
        return $('li=Favorites');
    }

    async openURL () {
        browser.url('/');
        browser.maximizeWindow();
    }

    async confirmRCC() {
        await this.btnConfirmRcc.waitForDisplayed();
        await this.btnConfirmRcc.click();
        browser.dismissAlert();
    }

    async openUserMenu() {
        await this.userIcon.waitForDisplayed();
        await this.userIcon.click();
    }

    async openForm () {
        await this.menuSigupLogin.waitForDisplayed();
        await this.menuSigupLogin.click();
    }

    async openCarRental () {
        await this.menuCarRental.waitForDisplayed();
        await this.menuCarRental.click();
    }

    async openYachtRental () {
        await this.menuYachtRental.waitForDisplayed();
        await this.menuYachtRental.click();
    }

    async openGarage () {
        await this.menuGarage.waitForDisplayed();
        await this.menuGarage.click();
    }

    async openTrips () {
        await this.menuTrips.waitForDisplayed();
        await this.menuTrips.click();
    }

    async openProfile () {
        await this.menuProfile.waitForDisplayed();
        await this.menuProfile.click();
    }

    async openFavourites () {
        await this.menuFavourites.waitForDisplayed();
        await this.menuFavourites.click();
    }

}

module.exports = new Home();
