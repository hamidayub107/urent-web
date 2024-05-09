class Logout {
    
    get menuLogout () {
        return $('li=Logout')
    }

    get flashAlert() {
        return $('#snackbar')
    }

    async logoutUser () {
        await this.menuLogout.click();
    }
}

module.exports = new Logout();
