import React from 'react';
import ReactDOM from 'react-dom';
import Mastermind from './mastermind/mastermind.jsx';

ReactDOM.render(
  React.createElement(Mastermind, null),
  document.getElementById('canvas')
);
