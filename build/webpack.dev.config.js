const merge = require("webpack-merge");
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.base.config");
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],
  devtool: "#@cheap-module-eval-source-map",
  devServer: {
    port: 4000,
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: {
      warnings: true,
      errors: true
    }
  }
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
