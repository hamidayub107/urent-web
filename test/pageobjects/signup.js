class Signup {

    get optSignup () {
        return $('#signUp');
    }

    get inputFirstName () {
        return $('[name="firstName"]');
    }

    get inputLastName () {
        return $('[name="lastName"]');
    }

    get inputPhoneNumber () {
        return $('input[type="tel"]');
    }
    
    get inputEmailAddress () {
        return $('input[type="email"]');
    }

    get inputPassword () {
        return $('input[placeholder="Password"]');
    }

    get ddCountry () {
        return $('div=Which country do you live in?');
    }

    get ddCity () {
        return $('div=In which city would you like to rent?');
    }

    get checkTC () {
        return $('input[id="html1"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get successPopup () {
        return $('#dialog');
    }

    async openSignupForm () {
        await this.optSignup.click();
    }

    async setFirstName (firstname) {
        await this.inputFirstName.setValue(firstname);
    }

    async setLastName (lastname) {
        await this.inputLastName.setValue(lastname);
    }

    async setPhoneNumber (phonenumber) {
        await this.inputPhoneNumber.setValue(phonenumber);
    }

    async setEmailAddress (emailaddress) {
        await this.inputEmailAddress.setValue(emailaddress);
    }

    async setPassword (password) {
        await this.inputPassword.setValue(password);
    }

    async selectCountry () {
        await this.ddCountry.click();
        await browser.keys("\uE007");
    }

    async selectCity () {
        await this.ddCity.click();
        await browser.keys('Down arrow');
        await browser.keys('Down arrow');
        await browser.keys('Down arrow');
        await browser.keys("\uE007");
    }

    async selectTerms () {
        await browser.addCommand(
            "jsClick",
            function() {
              browser.execute(function(element) {
                element.click();
              }, this);
            },
            true,
          );
        await this.checkTC.jsClick();
    }

    async submit () {
        await this.btnSubmit.click();
    }

}

module.exports = new Signup();
