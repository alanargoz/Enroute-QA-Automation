import home from "../../pages/Home.page";
import contact from "../../pages/Contact.page";

export default (page) => {
  switch (page) {
    case "main":
      browser.url(home.url);
      break;
    case "contact":
      browser.url(contact.url);
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};
