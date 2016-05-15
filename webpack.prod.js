var webpack = require('webpack');

var exp = require('./webpack.config.js');

exp.plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
];

module.exports = exp;