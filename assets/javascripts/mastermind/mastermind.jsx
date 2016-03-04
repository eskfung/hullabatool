define([
  'underscore',
  'react',
  'mastermind/row',
  'mastermind/answer_row'
], function(_, React, Row, AnswerRow) {
  var Mastermind = React.createClass({
    getInitialState: function () {
      return {
        guessCount: 10,
        colorChoices: ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'],
        codeLength: 4,
        currentRow: 1,
        gameOver: false,
        won: false
      };
    },

    componentWillMount: function () {
      this.setState({answer: this.generateRandomAnswer()});
    },

    generateRandomAnswer: function () {
      return _.sample(this.state.colorChoices, this.state.codeLength);
    },

    resolveTurn: function (gameWon) {
      if (gameWon) {
        this.setState({won: true, gameOver: true});
      }

      if (this.state.currentRow >= this.state.guessCount) {
        this.setState({gameOver: true});
      }

      this.setState({currentRow: this.state.currentRow + 1});
    },

    renderEndgameMessage: function () {
      var message;
      if (this.state.gameOver) {
        if (this.state.won) {
          message = "You won!";
        } else {
          message = "Sorry, you lost!";
        }
      }
      return(
        <p>
          {message}
        </p>
      )
    },

    render: function () {
      var rows = [];
      for (var i = 0; i < this.state.guessCount; i++) {
        var rowCount = this.state.guessCount - i;
        rows.push(
          <Row key={i}
            reactKey={rowCount}
            currentRow={!this.state.gameOver && rowCount == this.state.currentRow}
            codeLength={this.state.codeLength}
            colorChoices={this.state.colorChoices}
            answer={this.state.answer}
            resolveTurn={this.resolveTurn}
          />
        );
      }

      return (
        <div>
          {this.renderEndgameMessage()}
          <AnswerRow answer={this.state.answer} gameOver={this.state.gameOver} />
          {rows}
          <pre className='debugger'>
            {JSON.stringify(this.state)}
          </pre>
        </div>
      );
    }
  });

  return Mastermind;
});
