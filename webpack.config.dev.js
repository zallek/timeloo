/* eslint no-var:0 */

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.devtool = 'cheap-module-eval-source-map';
config.cache = true;
config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './example/index.js',
];
config.output.path = path.resolve(__dirname, './');
config.output.publicPath = '/';
config.output.filename = 'bundle.js';

config.plugins = config.plugins.concat(
  new HtmlWebpackPlugin({
    template: 'example/index.html',
    inject: 'body',
    filename: 'index.html',
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

module.exports = config;
