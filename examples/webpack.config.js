const webpack = require('webpack');
const path = require('path');

const src = path.join(__dirname, '..', 'src');

module.exports = {
  devtool: 'source-map',

  entry: {
    'main': [
      path.join(__dirname, 'src/main.js'),
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/js/',
    filename: '[name].js',
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        include: [src, path.join(__dirname, './src'),
          path.join(__dirname, '../dist')],
        loaders: ['babel'],
      },
      { test: /\.css$/, loader: 'style!css?sourceMap' },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.(png|svg|eot|ttf|woff|woff2)$/, loaders: ['null'] },
    ],
  },

  resolve: {
    alias: {
      'react-forms$': src,
    },
  },

  devServer: {
    publicPath: '/js/',
    historyApiFallback: true,
    quiet: true,
  },

};
