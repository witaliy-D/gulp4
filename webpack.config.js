const webpack = require('webpack'),
      path = require('path');

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
        app: [
            "./js/app.js"
        ],
  },

  output: {
    filename: 'script.min.js',
    path: path.resolve(__dirname, "dist/js"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      Popper: ['popper.js', 'default'],
      svg4everybody: 'svg4everybody',
    })
  ]
};
