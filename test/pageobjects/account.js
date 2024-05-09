class Account {
    get inputFirstName () {
        return $('#firstName');
    }

    get inputLastName () {
        return $('#lastName');
    }

    get btnSave () {
        return $('button=Save');
    }

    get flashAlert () {
        return $('div[class="notification-container--top-right"]');
    }

    async setFirstName (fname) {
        await this.inputFirstName.waitForDisplayed();
        await this.inputFirstName.clearValue();
        await this.inputFirstName.setValue(fname);
    }

    async setLastName (lname) {
        await this.inputLastName.waitForDisplayed();
        await this.inputLastName.clearValue();
        await this.inputLastName.setValue(lname);
    }

    async submit () {
        await this.btnSave.waitForClickable();
        await this.btnSave.click();
    }
}

module.exports = new Account();