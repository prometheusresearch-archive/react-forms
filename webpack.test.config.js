module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {stage: 0}
      }
    ]
  },
  webtest: {
    entry: ['./src/__tests__/*-test.js']
  },
  node: {
    console: 'mock'
  }
};
