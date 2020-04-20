class Home {
  get url() {
    return "/";
  }
  get tabContent() {
    return $(".tabs-content");
  }
  get offerSection() {
    return $(".tab-select");
  }
  returnTab(tab) {
    switch (tab) {
      case "QA & Testing":
        return $("//a[@href='#qa-and-testing']");
        break;
      case "Software Development":
        return $("//a[@href='#software-development']");
        break;
      case "Inventory Management":
        return $("//a[@href='#inventory-management']");
        break;
      case "Data Management":
        return $("//a[@href='#data-management']");
        break;
      case "Application Maintenance":
        return $("//a[@href='#application-maintenance']");
        break;
      default:
        return `The ${tab} is not on the website`;
        break;
    }
  }
  returnContent(tab) {
    switch (tab) {
      case "QA & Testing":
        return $("div#qa-and-testing > p:nth-of-type(2)");
        break;
      case "Software Development":
        return $("div#software-development > p:nth-of-type(2)");
        break;
      case "Inventory Management":
        return $("div#inventory-managemet > p:nth-of-type(2)");
        break;
      case "Data Management":
        return $("div#data-management > p:nth-of-type(2)");
        break;
      case "Application Maintenance":
        return $("div#application-maintenance > p:nth-of-type(2)");
        break;
      default:
        return `The ${tab} is not on the website`;
        break;
    }
  }
}

module.exports = new Home();
