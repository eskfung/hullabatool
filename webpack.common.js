/* globals __dirname */
module.exports = {
  entry: {
    mastermind: __dirname + '/src/mastermind.js'
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
              presets: ['env', 'stage-3', 'react']
            }
          }
        ]
      }
    ]
  }
};
