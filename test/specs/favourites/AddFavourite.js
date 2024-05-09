const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Favourites = require("../../pageobjects/favourites");
const LoginData = require("../../test-data/login-data");

describe("Add a favourite vehicle and verify count", () => {
  it("should add a new favourite vehicle & verify count", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openUserMenu();
    await Home.openFavourites();
    await Favourites.getCount(); //count before add
    await Home.openCarRental();
    await Favourites.addFav();
    await Home.openUserMenu();
    await Home.openFavourites(); 
    await Favourites.getCount(); //count after add

    // await expect(Favourites.flashAlert).toHaveTextContaining(
    //  "Vehicle added successfully in Favourites"
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