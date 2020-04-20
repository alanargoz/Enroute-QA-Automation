import { Then } from "cucumber";
import tabAssertion from "../../support/assertions/tabAssertion";
Then(
  /^If tab "(.*)" has a heading and a description "(.*)" is returned$/,
  (tab, boolean) => {
    tabAssertion(tab, boolean);
  }
);
