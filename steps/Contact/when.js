import { When } from "cucumber";
import contact from "../../pages/Contact.page";

When(
  /^I fill the "(.*)", "(.*)","(.*)" and "(.*)" fields no problems are shown$/,
  (name, email, subject, message) => {
    contact.fillContactUs(name, email, subject, message);
  }
);
