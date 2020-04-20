import { Then } from "cucumber";
import verifyButton from "../../support/assertions/verifyEnabled";

Then("I verify the send button is enabled", () => {
  verifyButton();
});
