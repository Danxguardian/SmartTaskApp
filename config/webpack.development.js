const path = require('path');
console.log("configurando development")
module.exports = {
    /* output: {
        filename: '[name].js', //[2]
    }, */
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        port: 9999,
        watchContentBase: true,
        open: true,        
    }
};