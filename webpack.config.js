const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        pageLoad: './src/pageload.js',
        header: './src/header.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}