class Contact {
  get url() {
    return "contact/";
  }
  get nameField() {
    return $("input[name='your-name']");
  }
  get emailField() {
    return $("input[name='your-email']");
  }
  get subjectField() {
    return $("input[name='your-subject']");
  }
  get messageField() {
    return $("textarea[name='your-message']");
  }
  get sendButton() {
    return $("input[value='Send']");
  }

  /**
   *
   * @param {String} name name for test
   * @param {String} email email for test
   * @param {String} subject subject for test
   * @param {String} message any string message for test
   */
  fillContactUs(name, email, subject, message) {
    this.nameField.setValue(name);
    this.emailField.setValue(email);
    this.subjectField.setValue(subject);
    this.messageField.setValue(message);
  }
}

module.exports = new Contact();
