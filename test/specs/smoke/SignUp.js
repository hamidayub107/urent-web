const Home = require("../../pageobjects/home");
const Signup = require("../../pageobjects/signup");
const UserData = require("../../test-data/user-data");

describe("Sign Up", () => {
  it("should register user", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Signup.openSignupForm();
    await Signup.setFirstName(UserData.first_name);
    await Signup.setLastName(UserData.last_name);
    await Signup.setPhoneNumber(UserData.phone_number);
    await Signup.setEmailAddress(UserData.email);
    await Signup.setPassword(UserData.password);
    await Signup.selectCountry();
    await Signup.selectCity();
    await Signup.selectTerms();
    // await Signup.verifyCaptcha();
    await Signup.submit();

    await expect(Signup.successPopup).toHaveTextContaining(
      "Congrats Its time for U to Rent  "
    );
  });

});