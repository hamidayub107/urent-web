const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Account = require("../../pageobjects/account");
const LoginData = require("../../test-data/login-data");
const UserData = require("../../test-data/user-data");

describe("Edit profile", () => {
  it("should edit user profile & verify success message", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openUserMenu();
    await Home.openProfile();
    await Account.setFirstName(UserData.first_name);
    await Account.setLastName(UserData.last_name);
    await Account.submit();

    await expect(Account.flashAlert).toHaveTextContaining(
      "Profile Updated"
    );
  });

  it("should logout and verify logout alert message", async () => {
    await Home.openUserMenu();
    await Logout.logoutUser();

    await expect(Logout.flashAlert).toHaveTextContaining(
      "Logout"
    );
  });

});