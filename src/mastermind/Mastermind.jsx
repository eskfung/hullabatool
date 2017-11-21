import { times, sample, sampleSize, reduce } from 'lodash';
import React from 'react';
import Row from 'mastermind/Row';
import AnswerRow from 'mastermind/AnswerRow';

const COLOR_CHOICES = ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'];

export default class Mastermind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessCount: 10,
      colorChoices: COLOR_CHOICES,
      codeLength: 4,
      allowDuplicates: true,
      currentRow: 1,
      gameOver: false,
      won: false,
    };
  }

  componentDidMount() {
    this.setState({ answer: this.generateRandomAnswer() });
  }

  generateRandomAnswer = () => {
    let answerArray;
    if (this.state.allowDuplicates) {
      answerArray = times(
        this.state.codeLength,
        () => sample(this.state.colorChoices)
      );
    } else {
      answerArray = sampleSize(
        this.state.colorChoices,
        this.state.codeLength
      );
    }

    // convert array to object
    return reduce(answerArray, (obj, value, index) => {
      obj[index] = value;
      return obj;
    }, {});
  }

  resolveTurn = (gameWon) => {
    if (gameWon) {
      this.setState({ won: true, gameOver: true });
    }

    if (this.state.currentRow >= this.state.guessCount) {
      this.setState({ gameOver: true });
    }

    this.setState({ currentRow: this.state.currentRow + 1 });
  }

  renderEndgameMessage = () => {
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
  }

  render() {
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
      </div>
    );
  }
}
