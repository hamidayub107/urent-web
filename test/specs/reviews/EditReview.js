const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Trips = require("../../pageobjects/trips");
const Reviews = require("../../pageobjects/reviews");
const LoginData = require("../../test-data/login-data");
const ReviewData = require("../../test-data/review-data");

describe("Booking Actions", () => {
  it("should cancel booking from renter", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openUserMenu();
    await Home.openTrips();
    await Trips.openAllTrips();
    await Reviews.openEditReview();
    await Reviews.setTripRating();
    await Reviews.setTripReview(ReviewData.trip_review);
    await Reviews.setHostRating();
    await Reviews.setHostReview(ReviewData.host_review);
    await Reviews.submit();

    await expect(Reviews.flashAlert).toHaveTextContaining(
      "Review submitted successfully"
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