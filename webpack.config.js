const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common'); 

module.exports = (env, configMode) => {    
  console.log(configMode)
  const config = require('./config/webpack.' + configMode.mode); 
  return merge(commonConfig, config); 
};