/* eslint no-console:0, no-var:0, prefer-arrow-callback:0 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(3000, '0.0.0.0', function serverStarted(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
