define(['underscore', 'react', 'mastermind/row', 'mastermind/answer_row'], function (_, React, Row, AnswerRow) {
  var Mastermind = React.createClass({
    displayName: 'Mastermind',

    getInitialState: function () {
      return {
        guessCount: 10,
        colorChoices: ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'],
        codeLength: 4,
        currentRow: 1,
        unsolved: true
      };
    },

    generateRandomAnswer: function () {
      return _.sample(this.state.colorChoices, this.state.codeLength);
    },

    render: function () {
      var rows = [];
      for (var i = 0; i < this.state.guessCount; i++) {
        var rowCount = this.state.guessCount - i;
        rows.push(React.createElement(Row, { key: i,
          reactKey: rowCount,
          currentRow: rowCount == this.state.currentRow,
          codeLength: this.state.codeLength,
          colorChoices: this.state.colorChoices
        }));
      }

      return React.createElement(
        'div',
        null,
        React.createElement(AnswerRow, { answer: this.generateRandomAnswer(), unsolved: this.state.unsolved }),
        rows,
        React.createElement(
          'pre',
          { className: 'debugger' },
          JSON.stringify(this.state)
        )
      );
    }
  });

  return Mastermind;
});