const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("table-of-content-element")
  .withIcon(Icon.TEXT)
  .withLabel("Table of Content Element")
  .withFile(require("./table-of-content-element.twig"))
  .withParts(cx.part.html.withLabel("Text"));
