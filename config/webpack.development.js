const path = require("path");
console.log("config development");
module.exports = {
  /* output: {
        filename: '[name].js', //[2]
    }, */
  mode: "development",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    port: 9999,
    open: true,
    hot: true,
    
  },
};
