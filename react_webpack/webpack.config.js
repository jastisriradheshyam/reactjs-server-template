'use strict';

// Requiring web pack plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Configuring Webpack plugins
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin({
  patterns: [
    {from: `${__dirname}/public/assets`, to: 'public', noErrorOnMissing: false}
  ]
});

// Try the environment variable, otherwise use root
const port = process.env.PORT || 8082;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          'style-loader','css-loader'
        ]
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    publicPath: "/",
    filename: 'build.js'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    CopyWebpackPluginConfig
  ],
  devServer: {
    host: 'localhost',
    port: port,
    contentBase: './build',
    hot: true,
    historyApiFallback: true
  }
};
