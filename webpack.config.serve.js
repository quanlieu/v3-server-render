const path = require('path');

module.exports = {
  entry: './src/app/index',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'], exclude: /node_modules/}
    ]
  }
}