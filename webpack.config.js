module.exports = {
  entry: './mastermind.js',
  output: {
    filename: './public/javascripts/mastermind.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
