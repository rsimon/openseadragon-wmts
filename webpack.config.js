const path = require('path');
const fs = require('fs');

const APP_DIR = fs.realpathSync(process.cwd());

const resolveAppPath = relativePath => path.resolve(APP_DIR, relativePath);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: resolveAppPath('src'),
  output: {
    filename: 'openseadragon-wmts.min.js',
    library: ['OpenSeadragon', 'WMTS'],
    libraryTarget: 'umd',
    libraryExport: 'default',
    pathinfo: true
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [ new TerserPlugin() ]
  },
  resolve: {
    extensions: ['.js' ]
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: { 
          loader: 'babel-loader' ,
          options: {
            "presets": [
              "@babel/preset-env"
            ],
            "plugins": [
              [
                "@babel/plugin-proposal-class-properties"
              ]
            ]
          }
        }
      }
    ]
  },  
  devServer: {
    contentBase: resolveAppPath('public'),
    compress: true,
    hot: true,
    host: process.env.HOST || 'localhost',
    port: 3000,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: resolveAppPath('public/index.html')
    })
  ]

}