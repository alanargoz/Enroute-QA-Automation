import assert from "assert";
import contact from "../../pages/Contact.page";

export default () => {
  assert(contact.sendButton.isEnabled() === true, `The button is not enabled`);
};
