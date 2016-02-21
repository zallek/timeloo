/* eslint no-var:0 */

var path = require('path');
var webpack = require('webpack');
var packageJson = require('./package.json');

var examplePath = path.resolve(__dirname, './example');
var srcPath = path.resolve(__dirname, './src');
var npmPath = path.resolve(__dirname, './node_modules');


var autoprefixerConfig = {
  browsers: [
    'Firefox > 27',
    'Chrome > 20',
    'Explorer > 9',
    'Safari > 6',
    'Opera > 11.5',
    'iOS > 6.1',
  ],
};

var config = {
  output: {
    library: 'PagerankDistribution',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js'],
    root: [srcPath, npmPath],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev'),
      },
      __VERSION__: JSON.stringify(packageJson.version),
    }),
    new webpack.ProvidePlugin({
      d3: 'd3',
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [srcPath, examplePath],
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer?' + JSON.stringify(autoprefixerConfig)],
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [srcPath, examplePath],
      },
    ],
  },
};

module.exports = config;
