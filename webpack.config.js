module.exports = {
  entry: {
    mastermind: __dirname + '/assets/javascripts/mastermind.js'
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    ]
  }
};
