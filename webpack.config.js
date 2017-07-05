'use-strict'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const mainJSPath = path.resolve(__dirname, 'js', 'main.js')
const mainCSSPath = path.resolve(__dirname, 'scss', 'screen.scss')
const publicPath = path.resolve(__dirname, 'public')

module.exports = {
    entry: [
      mainJSPath,
      mainCSSPath
    ],
    output: {
      filename: path.join('js','[name].js'),
      path: publicPath,
      publicPath: publicPath
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            loader: 'css-loader?importLoaders=1',
          }),
        },
        {
          test: /\.scss?$/,
          loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
        }
      ]
    },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        open: false,
        proxy: 'localhost:5000'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin({
        filename: path.join('css','screen.css'),
        allChunks: true
      })
    ]
}
