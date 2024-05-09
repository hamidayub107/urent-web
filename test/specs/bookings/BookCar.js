const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Booking = require("../../pageobjects/booking");
const LoginData = require("../../test-data/login-data");

describe("Book Car", () => {
  it("should book a car", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openCarRental();
    await Booking.selectVehicle();
    await Booking.selectTime();
    await Booking.selectPickup();
    await Booking.navigateToCheckout();
    await Booking.navigateToPayment();
    await Booking.payThroughCard();

    await expect(Booking.flashAlert).toHaveTextContaining(
      "Successfully Booked"
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