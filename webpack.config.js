module.exports = {
  entry: {
    mastermind: __dirname + '/assets/javascripts/mastermind.js'
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: '[name].js'
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
