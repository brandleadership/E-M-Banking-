const path = require("path");

const {
  BuildConfig,
  WebpackConfigBuilder,
  Version,
  DesignType,
  ModuleConfig,
} = require("@bsi-cx/design-build");


const landingpageBuildConfig = new BuildConfig()
  .withName("EM Banking")
  .withVersion("1.0.0")
  .withDesignType(DesignType.LANDINGPAGE)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, "templates", "landingpage"))
  .withPropertiesFilePath("properties.js")
  .withModulesRootPath("modules")
  .withModules(new ModuleConfig().withName("main").withPath("main.js"))
  .withAdditionalFilesToCopy(
    {
      from: path.resolve(__dirname, "resources", "img"), 
      to: "static/img",
    },
    {
      from: path.resolve(__dirname, "templates", "landingpage", "preview.png"),
      to: "static/preview.png",
    }
  );;

module.exports = WebpackConfigBuilder.fromConfigs(
  landingpageBuildConfig
    .clone()
    .withName("MO-CIH_html_overview-LP-EN-cx-22.0")
    .withPropertiesFilePath("properties.js")
);


