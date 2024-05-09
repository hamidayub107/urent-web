const Home = require("../../pageobjects/home");
const Login = require("../../pageobjects/login");
const Logout = require("../../pageobjects/logout");
const Card = require("../../pageobjects/card");
const LoginData = require("../../test-data/login-data");
const CardData = require("../../test-data/card-data");

describe("Add card", () => {
  it("should add a new credit card & verify success message", async () => {
    await Home.openURL();
    await Home.confirmRCC();
    await Home.openUserMenu();
    await Home.openForm();
    await Login.loginUser(LoginData.usr_renter, LoginData.password);
    await Home.openUserMenu();
    await Home.openProfile();
    await Card.openCreditCard();
    await Card.openAddCard();
    await Card.setCardHolderName(CardData.card_holder_name);
    await Card.switchFrame();
    await Card.setCardNumber(CardData.card_number);
    await Card.setExpiry(CardData.card_expiry);
    await Card.setCvc(CardData.card_cvc);
    await Card.addAndPay();

    await expect(Card.flashAlert).toHaveTextContaining(
      "Payment method has been added successfully!"
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