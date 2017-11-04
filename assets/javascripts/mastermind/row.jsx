import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Guess from './guess.jsx';
import Peg from './peg.jsx';
import HintHelper from './hint_helper.js';

export default React.createClass({
  propTypes: {
    answer: PropTypes.objectOf(PropTypes.string),
    codeLength: PropTypes.number,
    colorChoices: PropTypes.arrayOf(PropTypes.string),
    currentRow: PropTypes.bool,
    reactKey: PropTypes.number,
    resolveTurn: PropTypes.func
  },

  getInitialState: function() {
    return {
      guesses: {},
      hintPegs: {
        black: 0,
        white: 0
      }
    };
  },

  _guessListener: function(guessIndex, color) {
    const prevGuesses = this.state.guesses;
    prevGuesses[guessIndex] = color;
    this.setState({guesses: prevGuesses});
  },

  _handleSubmit: function() {
    const hintPegs = this.getHintPegs();
    this.setState({
      hintPegs: hintPegs
    });
    this.props.resolveTurn(this.isGuessCorrect());
  },

  isGuessCorrect: function() {
    const hintHelper = new HintHelper(this.props.answer, this.state.guesses);
    return hintHelper.blackPegs() == this.props.codeLength;
  },

  getHintPegs: function() {
    const hintHelper = new HintHelper(this.props.answer, this.state.guesses);

    return {
      black: hintHelper.blackPegs(),
      white: hintHelper.whitePegs()
    };
  },

  _renderHintPegs: function () {
    const pegs = [];
    const remainder = this.props.codeLength - (this.state.hintPegs.black + this.state.hintPegs.white);

    _.times(this.state.hintPegs.black, function(n) {
      pegs.push(<Peg key={'black-' + n} color='black' />);
    });

    _.times(this.state.hintPegs.white, function(n) {
      pegs.push(<Peg key={'white-' + n} color='white' />);
    });

    _.times(remainder, function(n) {
      pegs.push(<Peg key={'blank-' + n} />);
    });

    return pegs;
  },

  _renderSubmitButton: function() {
    const buttonClasses = classnames({
      'btn': true,
      'hidden': !this.props.currentRow || (_.keys(this.state.guesses).length != this.props.codeLength)
    });

    return (
      <button className={buttonClasses} onClick={this._handleSubmit}>
        Submit
      </button>
    );
  },

  render: function () {
    const guesses = [],
      rowClasses = classnames({
        'row': true,
        'current-row': this.props.currentRow
      });

    for (let i = 0; i < this.props.codeLength; i++) {
      guesses.push(
        <Guess key={i}
          reactKey={i}
          colorChoices={this.props.colorChoices}
          isActive={this.props.currentRow}
          onClick={this._guessListener}
        />
      );
    }

    return (
      <div className={rowClasses} title={'Row ' + this.props.reactKey}>
        <div className='pegs'>
          <div className='peg-group'>
            {this._renderHintPegs()}
          </div>
          <div className='guess-group'>
            {guesses}
          </div>
        </div>
        {this._renderSubmitButton()}
      </div>
    );
  }
});
