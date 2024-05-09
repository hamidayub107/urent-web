const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const LoginData = require("../../test-data/login-data");

describe("My Login application", () => {
  it("should login renter with valid credentials", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openUserMenu();

    await expect(Home.menuProfile).toBeExisting();
  });

  it("should logout renter and verify logout alert message", async () => {
    await Home.openUserMenu();
    await Logout.logoutUser();

    await expect(Logout.flashAlert).toHaveTextContaining(
      "Logout"
    );
  });

});