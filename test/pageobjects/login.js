class Login {

    get inputEmail () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnLogin () {
        return $('button=Login');
    }

    async loginUser (username, password) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}

module.exports = new Login();
