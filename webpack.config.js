const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  devServer: {
    host: 'localhost',
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
