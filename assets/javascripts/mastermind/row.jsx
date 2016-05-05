var _ = require('lodash');
var React = require('react');
var classnames = require('classnames');
var Guess = require('./guess.jsx');
var Peg = require('./peg.jsx');
var HintHelper = require('./hint_helper.js');

var Row = React.createClass({
  propTypes: {
    answer: React.PropTypes.objectOf(React.PropTypes.string),
    codeLength: React.PropTypes.number,
    colorChoices: React.PropTypes.arrayOf(React.PropTypes.string),
    currentRow: React.PropTypes.bool,
    reactKey: React.PropTypes.number,
    resolveTurn: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      guesses: {},
      hintPegs: {
        black: 0,
        white: 0
      }
    }
  },

  _guessListener: function(guessIndex, color) {
    var prevGuesses = this.state.guesses;
    prevGuesses[guessIndex] = color;
    this.setState({guesses: prevGuesses});
  },

  _handleSubmit: function() {
    var hintPegs = this.getHintPegs();
    this.setState({
      hintPegs: hintPegs
    });
    this.props.resolveTurn(this.isGuessCorrect(hintPegs));
  },

  isGuessCorrect: function(hintPegs) {
    var hintHelper = new HintHelper(this.props.answer, this.state.guesses);
    return hintHelper.blackPegs() == this.props.codeLength;
  },

  getHintPegs: function() {
    var hintHelper = new HintHelper(this.props.answer, this.state.guesses);

    return {
      black: hintHelper.blackPegs(),
      white: hintHelper.whitePegs()
    }
  },

  _renderHintPegs: function () {
    var pegs = [];
    var remainder = this.props.codeLength - (this.state.hintPegs.black + this.state.hintPegs.white);

    _.times(this.state.hintPegs.black, function(n) {
      pegs.push(<Peg key={'black-' + n} color='black' />)
    })

    _.times(this.state.hintPegs.white, function(n) {
      pegs.push(<Peg key={'white-' + n} color='white' />)
    })

    _.times(remainder, function(n) {
      pegs.push(<Peg key={'blank-' + n} />)
    })

    return pegs;
  },

  _renderSubmitButton: function() {
    var buttonClasses = classnames({
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
    var guesses = [],
        rowClasses = classnames({
          'row': true,
          'current-row': this.props.currentRow
        });

    for (var i = 0; i < this.props.codeLength; i++) {
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
        <div className='peg-group'>
          {this._renderHintPegs()}
        </div>
        <div className='guess-group'>
          {guesses}
        </div>
        {this._renderSubmitButton()}
      </div>
    );
  }
});

module.exports = Row;
