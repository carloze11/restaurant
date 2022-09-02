const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    pageLoad: './src/pageLoad.js',
    header: './src/header.js',
    menu: './src/menupage.js',
    contact: './src/contact.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Eevees Eateries',
        template: 'template.html',
    }),
    new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};