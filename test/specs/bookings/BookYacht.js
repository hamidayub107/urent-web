const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Booking = require("../../pageobjects/booking");
const LoginData = require("../../test-data/login-data");

describe("Book Yacht", () => {
  it("should book a yacht", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openYachtRental();
    await Booking.selectVehicle();
    await Booking.selectStartTime();
    await Booking.selectEndTime();
    await Booking.navigateToCheckout();
    await Booking.navigateToPayment();
    await Booking.payThroughCard();

    await expect(Booking.flashAlert).toHaveTextContaining(
      "Successfully Booked"
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