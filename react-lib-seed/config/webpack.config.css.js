const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require('./paths');

const extractSass = new ExtractTextPlugin({
    filename: "ams-style.css"
});
module.exports = {
    // In production, we only want to load the polyfills and the app code.
    entry: [paths.appStyle],
    output: {
      path: path.join(__dirname, '../build/css'),
      filename: 'ams-style.css',
      publicPath: '/build/css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
          })
      }]
    },
    plugins: [
        extractSass
    ]
  }