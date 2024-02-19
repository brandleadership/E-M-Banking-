const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button")
  .withIcon(Icon.HEADING)
  .withLabel("Button")
  .withFile(require("./button.twig"))
  .withParts(
    cx.part.link.withLabel("Button Link"),
   
  );
