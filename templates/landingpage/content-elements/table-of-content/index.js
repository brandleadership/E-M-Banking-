const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("table-of-content")
  .withIcon(Icon.LIST)
  .withLabel("Table of Content")
  .withFile(require("./table-of-content.twig"))
  .withParts(cx.part.plainText.withLabel("Text"))
  .withDropzones(
    cx.dropzone
      .withDropzone("toc1")
      .withAllowedElements(
        require("../table-of-content-element")
      )
  );
