define([
  'underscore',
  'react',
  'classnames',
  'mastermind/guess',
  'mastermind/peg'
], function(_, React, classnames, Guess, Peg) {
  var Row = React.createClass({
    propTypes: {
      codeLength: React.PropTypes.number,
      colorChoices: React.PropTypes.arrayOf(React.PropTypes.string),
      currentRow: React.PropTypes.bool,
      reactKey: React.PropTypes.number
    },

    getInitialState: function() {
      return {
        guesses: {}
      }
    },

    _guessListener: function(guessIndex, color) {
      var prevGuesses = this.state.guesses;
      prevGuesses[guessIndex] = color;
      this.setState({guesses: prevGuesses});
    },

    _handleSubmit: function() {
      // read guess values
      // compare to answer
      // render pegs
      // notify mastermind listener to advance row by 1
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
          pegs = [],
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
        pegs.push(<Peg key={i} />)
      }

      return (
        <div className={rowClasses} title={'Row ' + this.props.reactKey}>
          <div className='peg-group'>
            {pegs}
          </div>
          <div className='guess-group'>
            {guesses}
          </div>
          {this._renderSubmitButton()}
        </div>
      );
    }
  });

  return Row;
});
