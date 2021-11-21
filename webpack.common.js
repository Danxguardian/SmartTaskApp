const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "public", "index.html"),
  filename: "index.html",
  inject: "body",
});

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, "src/index.jsx"),
  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.bundle.js",
  },

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // PATH RESOLVE
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
