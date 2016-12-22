module.exports = {
    entry: './client/index.js',
    output: {
        path: './dist',
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
}
