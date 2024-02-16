const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("social-media")
  .withIcon(Icon.SOCIAL_FOLLOW)
  .withLabel("Social media")
  .withFile(require("./social-media.twig"));
