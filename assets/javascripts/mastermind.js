var React = require('react');
var ReactDOM = require('react-dom');
var Mastermind = require('./mastermind/mastermind.jsx');

ReactDOM.render(
  React.createElement(Mastermind, null),
  document.getElementById('canvas')
);
