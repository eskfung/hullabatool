define(['react', 'mastermind/row', 'mastermind/row_answer'], function (React, Row, RowAnswer) {
  var Mastermind = React.createClass({
    displayName: 'Mastermind',

    render: function () {
      var ANSWERS = ['red', 'red', 'blue', 'white', 'black', undefined];
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        React.createElement(
          'table',
          null,
          React.createElement(Row, null)
        ),
        React.createElement(RowAnswer, { answers: ANSWERS })
      );
    }
  });

  return Mastermind;
});