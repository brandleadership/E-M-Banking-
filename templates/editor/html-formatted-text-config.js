const {
  EnterMode,
  Feature,
  Format,
  FontSizeUnit,
  cx,
  bsiProperty,
} = require("@bsi-cx/design-build");

module.exports = cx.htmlEditorConfig
  .withIdentifier("extended")
  .withFeatures(
    Feature.BOLD,
    Feature.ITALIC,
    Feature.UNDERLINE,
    Feature.ALIGN_LEFT,
    Feature.ALIGN_CENTER,
    Feature.ALIGN_RIGHT,
    Feature.ALIGN_JUSTIFY,
    Feature.SUBSCRIPT,
    Feature.SUPERSCRIPT,
    Feature.FONT_SIZE,
    Feature.LINE_HEIGHT,
    Feature.TEXT_COLOR,
    Feature.FORMAT_OL,
    Feature.FORMAT_UL,
    Feature.BACKGROUND_COLOR,
    Feature.OUTDENT,
    Feature.INDENT,
    Feature.PARAGRAPH_FORMAT,
    Feature.INSERT_LINK
  )
  .withTextColors("#141e55", "#22338b", "#eeeeee", "#000000")
  .withBackgroundColors(
    "#973436",
    "#000000",
    "#ffffff",
    "#4283bc",
    "#296b4f",
    "#4283bc",
    "#333963"
  )
  .withFormats(Format.P, Format.H2, Format.H1, Format.H3, Format.H4, Format.PRE)
  .withFontSizes(8, 9, 10, 11, 12, 13, 14, 16, 18, 24, 30, 36, 48, 72)
  .withFontSizeUnit(FontSizeUnit.PX)
  .withFontSizeDefault(12)
  .withLineHeights(1.1, 1.15, 1.5, 2)
  .withEnterMode(EnterMode.P);
