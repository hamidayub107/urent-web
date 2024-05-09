const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Garage = require("../../pageobjects/garage");
const LoginData = require("../../test-data/login-data");

describe("Add Vehicle", () => {
  it("should add a new car", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_host, LoginData.password);
    await Home.openUserMenu();
    await Home.openGarage();
    await Garage.openAddVehicle();
    await Garage.selectCars();
    await Garage.imgUpload();
    await Garage.imgUpload();
    await Garage.moveNext();

    await expect(Home.menuProfile).toBeExisting();
  });

  it("should logout and verify logout alert message", async () => {
    await Home.openUserMenu();
    await Logout.logoutUser();

    await expect(Logout.flashAlert).toHaveTextContaining(
      "Logout"
    );
  });

});