var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            },
            {
               test: /\.html$/,
               loader: 'raw-loader'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './app')]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.scss', '.html'],
        root: [path.resolve(__dirname, './app')]
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
          index: '/index.html'
        }
    }
}