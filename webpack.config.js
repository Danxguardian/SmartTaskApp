const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});



module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, 'src/index.jsx'),
  watch: true,
  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },

  
  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(gif|svg|jpg|png|mp4|webp)$/,
        loader: "file-loader",
        
        options: {
          name: "[path]/[name].[ext]",
          context: "src"
      },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }, 
   
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },


  plugins: [
    HTMLWebpackPluginConfig,   
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    port: 9999,
    watchContentBase: true,
    open: true,
  } 
};