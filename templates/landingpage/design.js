require('./styles/styles.scss');

const {cx, Locale} = require('@bsi-cx/design-build');

module.exports = cx.design
  .withTitle("Landingpage Scaffold")
  .withAuthor("BSI Business Systems Integration AG")
  .withDate("20.05.2022")
  .withPreviewImage(require("./preview.png"))
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN, Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId("content")
      .withLabel("Content")
      .withContentElements(
        require("./content-elements/title"),
         require("./content-elements/table-of-content"),
        require("./content-elements/article"),
         require("./content-elements/article-with-image"),
        require("./content-elements/button-full-width"),
        require("./content-elements/divider"),
        require("./content-elements/social-media"),
        require("./content-elements/contact"),
        require("./content-elements/button")
      ),
    cx.contentElementGroup
      .withGroupId("toc")
      .withLabel("Toc")
      .withContentElements(
        require("./content-elements/table-of-content-element")
      )
  )
  .withDropzones(
    cx.dropzone.withDropzone("content").withAllowedElements(
      require("./content-elements/title"),
       require("./content-elements/table-of-content"),
      require("./content-elements/article"),
      require("./content-elements/article-with-image"),
      require("./content-elements/button-full-width"),
      require("./content-elements/divider"),
      require("./content-elements/social-media"),
      require("./content-elements/contact"),
      require("./content-elements/button")
    ),
   
  );
      
