const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

const StyleLintPlugin = require("stylelint-webpack-plugin");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new StyleLintPlugin({
      files: "**/*.s?(a|c)ss",
      syntax: "scss"
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
