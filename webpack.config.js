const { resolve } = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/client/components/Main.jsx',
  output: {
    path: resolve('./public'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: resolve('./public'),
    port: 3333
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/templates/index.html',
      path: resolve('./public'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
