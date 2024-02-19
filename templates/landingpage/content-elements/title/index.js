const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("title")
  .withIcon(Icon.HEADING)
  .withLabel("Title")
  .withFile(require("./title.twig"))
  .withParts(
    cx.part.plainText.withLabel("Title"),
    cx.part.plainText.withLabel("Subtitle")
  );
