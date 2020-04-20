import { Given } from "cucumber";
import goToURL from "../../support/actions/goToURL";

Given(/^I land on the "(main|contact)" page$/, (page) => {
  goToURL(page);
});
