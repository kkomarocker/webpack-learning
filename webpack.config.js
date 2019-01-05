const webpack = require("webpack");
const path = require("path");
const MiniCssExtract = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/main.js"
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: [/\.sass$/, /\.scss$/],
        use: [
          {
            loader: MiniCssExtract.loader
          },
          "css-loader"
        ]
      },

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  optimization: {
    minimize: false
  },

  // need to use mini-css-extract-plugin to extract css when webpack v4 is in play.
  plugins: [new MiniCssExtract("[name].css")]
};

if (process.env.NODE_ENV === "production") {
  module.exports.optimization.minimize = true;
}
