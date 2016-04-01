var React = require('react');
var Mastermind = require('./assets/javascripts/mastermind/mastermind.jsx');

React.render(
  React.createElement(Mastermind, null),
  document.getElementById('canvas')
);
