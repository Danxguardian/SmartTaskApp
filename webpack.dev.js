// DEV SERVER ENTRY POINT
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    /* devtool: 'inline-source-map', */
    devServer: {
        contentBase: path.resolve(__dirname, "src/"),
        port: 9999,
        watchContentBase: true,
        open: true

    }
});