const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("article-with-image")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withLabel("Article Block with Image")
  .withFile(require("./article-with-image.twig"))
  .withStyleConfigs(require("../../../editor/styles/article-block"))
  .withParts(
    cx.part.plainText.withLabel("Title"),
    cx.part.plainText.withLabel("Subtitle"),
    cx.part.formattedText.withLabel("Formatted Text")
    .withHtmlEditorConfig(
    require('../../../editor/html-formatted-text-config')
    ),
    cx.part.link.withLabel("Button Link"),
    cx.part.image.withLabel("Article Image")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("buttons")
      .withAllowedElements(require("../button"))
  );
