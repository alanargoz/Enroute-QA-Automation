import home from "../../pages/Home.page";

export default (section) => {
  switch (section) {
    case "What we offer":
      home.offerSection.scrollIntoView();
      break;
    default:
      return `The section does not exist`;
  }
};
