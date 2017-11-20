import _ from 'lodash';
import React from 'react';
import Row from './row.jsx';
import AnswerRow from './answer_row.jsx';

export default React.createClass({
  getInitialState: function () {
    return {
      guessCount: 10,
      colorChoices: ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'],
      codeLength: 4,
      allowDuplicates: true,
      currentRow: 1,
      gameOver: false,
      won: false
    };
  },

  componentWillMount: function () {
    this.setState({answer: this.generateRandomAnswer()});
  },

  generateRandomAnswer: function () {
    let answerArray;
    if (this.state.allowDuplicates) {
      answerArray = _.times(this.state.codeLength, function() { return _.sample(this.state.colorChoices);}.bind(this));
    } else {
      answerArray = _.sampleSize(this.state.colorChoices, this.state.codeLength);
    }

    // convert array to object
    return _.reduce(answerArray, function(obj, value, index) {
      obj[index] = value;
      return obj;
    }, {});
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
    let message;
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
    );
  },

  render: function () {
    const rows = [];
    for (let i = 0; i < this.state.guessCount; i++) {
      const rowCount = this.state.guessCount - i;
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
      <div className='mastermind'>
        {this.renderEndgameMessage()}
        <AnswerRow answer={this.state.answer} gameOver={this.state.gameOver} />
        {rows}
        <pre className='debugger' style={{display:'none'}}>
          {JSON.stringify(this.state)}
        </pre>
      </div>
    );
  }
});
