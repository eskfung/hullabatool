module.exports = {
  entry: {
    mastermind: __dirname + '/assets/javascripts/mastermind.js',
    love_letter: __dirname + '/assets/javascripts/love_letter.js',
    love_letter_player: __dirname + '/assets/javascripts/love_letter_player.js'
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
