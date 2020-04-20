import assert from "assert";

export default (title) => {
  assert(
    browser.getTitle() === title,
    `The title of the site is not the same as ${title}`
  );
};
