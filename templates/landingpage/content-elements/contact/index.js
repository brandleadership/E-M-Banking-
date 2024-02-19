const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("contact")
  .withIcon(Icon.PHONE)
  .withLabel("Contact")
  .withFile(require("./contact.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Contact Text")
      .withHtmlEditorConfig(
        require("../../../editor/html-formatted-text-config")
      )
  );
