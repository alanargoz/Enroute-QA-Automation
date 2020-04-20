import { When } from "cucumber";
import verifyPageOpen from "../../support/assertions/verifyPageOpen";
import scrollToSection from "../../support/actions/scrollToSection";

When(/^The page loads I check the title, which should be "(.*)"$/, (title) => {
  verifyPageOpen(title);
});

When(/^I scroll to "(.*)" section$/, (section) => {
  scrollToSection(section);
});
