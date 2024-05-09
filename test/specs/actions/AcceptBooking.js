const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Trips = require("../../pageobjects/trips");
const LoginData = require("../../test-data/logindata");


describe("Booking Actions", () => {

  it("should reject booking from host", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_host, LoginData.password);
    await Home.openUserMenu();
    await Home.openTrips();
    await Trips.pendingAccept();

    await expect(Trips.flashAlert).toHaveTextContaining(
      "Booking Approved"
    );
  });

  it.skip("should logout and verify logout alert message", async () => {
    await Home.openUserMenu();
    await Logout.logoutUser();

    await expect(Logout.flashAlert).toHaveTextContaining(
      "Logout"
    );
  });

});