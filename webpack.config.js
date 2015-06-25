module.exports = {
  entry: './src/index.js',
  output: {
    library: 'ReactForms',
    libraryTarget: 'commonjs2',
    filename: 'react-forms.js',
    path: './lib'
  },
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
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
  },
  node: {
    console: 'mock'
  }
};
