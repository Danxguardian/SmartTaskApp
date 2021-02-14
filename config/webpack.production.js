('clean-webpack-plugin');
console.log("configurando production")
module.exports = {
   mode: 'production',
   output: {
      filename: 'main.bundle.js'
   },
   plugins: [],
};