const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Favourites = require("../../pageobjects/favourites");
const LoginData = require("../../test-data/login-data");

describe("Remove a favourite vehicle", () => {
  it("should add a new favourite vehicle & verify count", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openUserMenu();
    await Home.openFavourites();
    await Favourites.getCount(); //count before remove
    await Favourites.removeFav();
    await Favourites.getCount(); //count after after

    // await expect(Favourites.flashAlert).toHaveTextContaining(
    //  "Vehicle removed successfully from Favourites"
    // );
  });

  it("should logout and verify logout alert message", async () => {
    await Home.openUserMenu();
    await Logout.logoutUser();

    await expect(Logout.flashAlert).toHaveTextContaining(
      "Logout"
    );
  });

});