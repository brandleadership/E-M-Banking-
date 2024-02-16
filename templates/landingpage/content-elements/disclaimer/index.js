const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("disclaimer")
  .withIcon(Icon.TEXT)
  .withLabel("Disclaimer")
  .withFile(require("./disclaimer.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Disclaimer Text")
      .withHtmlEditorConfig(
        require("../../../editor/html-formatted-text-config")
      )
  );
