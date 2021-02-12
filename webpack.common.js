const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  plugins: [
    HTMLWebpackPluginConfig,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],

};