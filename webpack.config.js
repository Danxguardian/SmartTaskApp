const path = require('path');

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

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',
  target: 'web', //<= Activar hot reload
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
        test: /\.(gif|svg|jpg|png|mp4)$/,
        loader: "file-loader",
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

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },


  plugins: [HTMLWebpackPluginConfig],
  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    port: 9999,
    watchContentBase: true,
    open: true

  }
};