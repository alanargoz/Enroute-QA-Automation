import assert from "assert";
import home from "../../pages/Home.page";

export default (tab, boolean) => {
  home.returnTab(tab).click();
  let content = assert(home.tabContent.getHTML(false) !== null);
  assert(content === boolean, `Unexpected ${content} in the tab ${tab}`);
};
