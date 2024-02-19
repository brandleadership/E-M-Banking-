const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("divider")
  .withIcon(Icon.DIVIDER)
  .withLabel("Divider")
  .withFile(require("./divider.twig"))
  .withStyleConfigs(require("../../../editor/styles/article-block"));

