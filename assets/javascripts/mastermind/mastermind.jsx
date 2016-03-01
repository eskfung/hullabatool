define([
  'react',
  'mastermind/row',
  'mastermind/answer_row'
], function(React, Row, AnswerRow) {
  var Mastermind = React.createClass({
    getInitialState: function () {
      return {
        guessCount: 10,
        colors: ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'],
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
        rows.push(
          <Row key={i}
            reactKey={rowCount}
            currentRow={rowCount == this.state.currentRow}
            codeLength={this.state.codeLength}
            colors={this.state.colors}
          />
        );
      }

      return (
        <div>
          <AnswerRow answer={this.generateRandomAnswer()} unsolved={this.state.unsolved} />
          {rows}
        </div>
      );
    }
  });

  return Mastermind;
});
