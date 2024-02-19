const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("article")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withLabel("Article Block")
  .withFile(require("./article.twig"))
  .withStyleConfigs(
    require("../../../editor/styles/article-block"),

  )
  .withParts(
    cx.part.plainText.withLabel("Title"),
    cx.part.plainText.withLabel("Subtitle"),
    cx.part.formattedText.withLabel("Formatted Text")
      .withHtmlEditorConfig(
                require('../../../editor/html-formatted-text-config')
            ),
    cx.part.link.withLabel("Button Link")
  )
  .withDropzones(
    cx.dropzone.withDropzone("button").withAllowedElements(require("../button"))
  );
