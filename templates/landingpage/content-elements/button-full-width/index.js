const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button-full-width")
  .withIcon(Icon.MEGAPHONE)
  .withLabel("Link List")
  .withFile(require("./button-full-width.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
