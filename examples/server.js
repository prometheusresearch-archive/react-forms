/* eslint-disable no-console */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
}).listen(4000, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at 0.0.0.0:4000');
});
