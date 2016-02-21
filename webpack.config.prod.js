/* eslint no-var:0 vars-on-top:0 */
process.env.NODE_ENV = 'production';

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.base');

config.cache = false;
config.devtool = 'source-map';
config.entry = [
  './src/index',
];
config.output.path = path.resolve(__dirname, './dist/');
config.output.filename = 'bundle.js';
config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
]);

module.exports = config;
