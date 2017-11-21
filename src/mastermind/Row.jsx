import { keys, times } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Guess from 'mastermind/Guess';
import Peg from 'mastermind/Peg';
import HintHelper from 'mastermind/HintHelper';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: {},
      hintPegs: {
        black: 0,
        white: 0,
      },
    };
  }

  guessListener = (guessIndex, color) => {
    const prevGuesses = this.state.guesses;
    prevGuesses[guessIndex] = color;
    this.setState({guesses: prevGuesses});
  }

  handleSubmit = () => {
    const hintPegs = this.getHintPegs();
    this.setState({
      hintPegs: hintPegs
    });
    this.props.resolveTurn(this.isGuessCorrect());
  }

  isGuessCorrect = () => {
    const hintHelper = new HintHelper(this.props.answer, this.state.guesses);
    return hintHelper.blackPegs() == this.props.codeLength;
  }

  getHintPegs = () => {
    const hintHelper = new HintHelper(this.props.answer, this.state.guesses);

    return {
      black: hintHelper.blackPegs(),
      white: hintHelper.whitePegs()
    };
  }

  renderHintPegs = () => {
    const pegs = [];
    const remainder = this.props.codeLength - (this.state.hintPegs.black + this.state.hintPegs.white);

    times(this.state.hintPegs.black, function(n) {
      pegs.push(<Peg key={`black-${n}`} color='black' />);
    });

    times(this.state.hintPegs.white, function(n) {
      pegs.push(<Peg key={`white-${n}`} color='white' />);
    });

    times(remainder, function(n) {
      pegs.push(<Peg key={`blank-${n}`} />);
    });

    return pegs;
  }

  renderSubmitButton = () => {
    const buttonClasses = cx({
      'btn': true,
      'hidden': !this.props.currentRow || (keys(this.state.guesses).length != this.props.codeLength)
    });

    return (
      <button className={buttonClasses} onClick={this.handleSubmit}>
        Submit
      </button>
    );
  }

  render() {
    const guesses = [],
      rowClasses = cx({
        'row': true,
        'current-row': this.props.currentRow
      });

    for (let i = 0; i < this.props.codeLength; i++) {
      guesses.push(
        <Guess key={i}
          reactKey={i}
          colorChoices={this.props.colorChoices}
          isActive={this.props.currentRow}
          onClick={this.guessListener}
        />
      );
    }

    return (
      <div className={rowClasses} title={'Row ' + this.props.reactKey}>
        <div className='pegs'>
          <div className='peg-group'>
            {this.renderHintPegs()}
          </div>
          <div className='guess-group'>
            {guesses}
          </div>
        </div>
        {this.renderSubmitButton()}
      </div>
    );
  }
}
