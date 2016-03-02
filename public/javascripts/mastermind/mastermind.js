define(['react', 'mastermind/row', 'mastermind/answer_row'], function (React, Row, AnswerRow) {
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
      // pick codeLength times from this.state.colors randomly and return
      return ['red', 'green', 'blue', 'yellow'];
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
        rows
      );
    }
  });

  return Mastermind;
});