const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("Article-background")
  .withLabel("Background colors")
  .withCssClasses(
    cx.cssClass.withLabel("Grey").withCssClass("grey-bg"),
    cx.cssClass.withLabel("White").withCssClass("white-bg")
  );
