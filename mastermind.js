var React = require('react');
var ReactDOM = require('react-dom');
var Mastermind = require('./assets/javascripts/mastermind/mastermind.jsx');

ReactDOM.render(
  React.createElement(Mastermind, null),
  document.getElementById('canvas')
);
