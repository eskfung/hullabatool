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

    componentWillMount: function () {
      this.setState({ answer: this.generateRandomAnswer() });
    },

    generateRandomAnswer: function () {
      return _.sample(this.state.colorChoices, this.state.codeLength);
    },

    resolveTurn: function (gameWon) {
      if (gameWon || this.state.currentRow >= this.state.guessCount) {
        this.setState({ unsolved: false, currentRow: this.state.guessCount + 1 });
      }
      this.setState({ currentRow: ++this.state.currentRow });
    },

    render: function () {
      var rows = [];
      for (var i = 0; i < this.state.guessCount; i++) {
        var rowCount = this.state.guessCount - i;
        rows.push(React.createElement(Row, { key: i,
          reactKey: rowCount,
          currentRow: rowCount == this.state.currentRow,
          codeLength: this.state.codeLength,
          colorChoices: this.state.colorChoices,
          answer: this.state.answer,
          resolveTurn: this.resolveTurn
        }));
      }

      return React.createElement(
        'div',
        null,
        React.createElement(AnswerRow, { answer: this.state.answer, unsolved: this.state.unsolved }),
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