const webpack = require('webpack'),
      path = require('path');
	  
const NODE_ENV = process.env.NODE_ENV;	  
const isDebug = NODE_ENV !== 'production';
let mode = "";

if (isDebug){
	mode = 'development' 
}else {
	mode = 'production'
}; 

	
module.exports = {
	mode : mode,
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


