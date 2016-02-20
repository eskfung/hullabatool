define(['react'], function (React) {
  var Row = React.createClass({
    displayName: 'Row',

    render: function () {
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          '1'
        ),
        React.createElement(
          'td',
          null,
          '2'
        ),
        React.createElement(
          'td',
          null,
          '3'
        ),
        React.createElement(
          'td',
          null,
          '4'
        )
      );
    }
  });

  return Row;
});