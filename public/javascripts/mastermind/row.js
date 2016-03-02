define(['underscore', 'react', 'classnames', 'mastermind/guess', 'mastermind/peg'], function (_, React, classnames, Guess, Peg) {
  var Row = React.createClass({
    displayName: 'Row',

    getInitialState: function () {
      return {
        guesses: {}
      };
    },

    _guessListener: function (guessIndex, color) {
      var prevGuesses = this.state.guesses;
      prevGuesses[guessIndex] = color;
      this.setState({ guesses: prevGuesses });
    },

    _handleSubmit: function () {
      // read guess values
      // compare to answer
      // render pegs
      // notify mastermind listener to advance row by 1
    },

    _renderSubmitButton: function () {
      var buttonClasses = classnames({
        'btn': true,
        'hidden': !this.props.currentRow || _.keys(this.state.guesses).length != this.props.codeLength
      });

      return React.createElement(
        'button',
        { className: buttonClasses, onClick: this._handleSubmit },
        'Submit'
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
        guesses.push(React.createElement(Guess, { key: i,
          reactKey: i,
          colorChoices: this.props.colorChoices,
          isActive: this.props.currentRow,
          onClick: this._guessListener
        }));
        pegs.push(React.createElement(Peg, { key: i }));
      }

      return React.createElement(
        'div',
        { className: rowClasses, title: 'Row ' + this.props.reactKey },
        React.createElement(
          'div',
          { className: 'peg-group' },
          pegs
        ),
        React.createElement(
          'div',
          { className: 'guess-group' },
          guesses
        ),
        this._renderSubmitButton()
      );
    }
  });

  return Row;
});