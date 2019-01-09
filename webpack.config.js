const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const inProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    app: ["./src/main.js", "./css/main.scss"]
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].js"
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(jpe?g|png|gif|svg|ttf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]"
        }
      }
    ]
  },

  optimization: {
    minimize: false
  },

  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: __dirname,
      verbose: true,
      dry: false,
      watch: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })
  ]
};

if (inProduction) {
  module.exports.optimization.minimize = true;
}
