define(['react', 'mastermind/row'], function (React, Row) {
  var Mastermind = React.createClass({
    displayName: 'Mastermind',

    render: function () {
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
        )
      );
    }
  });

  return Mastermind;
});