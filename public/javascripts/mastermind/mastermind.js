define(['react', 'mastermind/row'], function (React, Row) {
  var Mastermind = React.createClass({
    displayName: 'Mastermind',

    getInitialState: function () {
      return {
        guessCount: 10,
        colors: ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'],
        codeLength: 4,
        currentRow: 1
      };
    },

    render: function () {
      var rows = [];
      for (var i = 0; i < this.state.guessCount; i++) {
        var rowCount = this.state.guessCount - i;
        rows.push(React.createElement(Row, { key: i,
          reactKey: rowCount,
          currentRow: rowCount == this.state.currentRow,
          codeLength: this.state.codeLength,
          colors: this.state.colors
        }));
      }

      return React.createElement(
        'div',
        null,
        rows
      );
    }
  });

  return Mastermind;
});