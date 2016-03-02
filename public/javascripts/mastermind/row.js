define(['react', 'classnames', 'mastermind/guess', 'mastermind/peg'], function (React, classnames, Guess, Peg) {
  var Row = React.createClass({
    displayName: 'Row',

    getInitialState: function () {
      return {
        readyToGuess: false
      };
    },

    render: function () {
      var guesses = [],
          pegs = [],
          rowClasses = classnames({
        'row': true,
        'current-row': this.props.currentRow
      });
      buttonClasses = classnames({
        'btn': true,
        'hidden': !this.state.readyToGuess
      });

      for (var i = 0; i < this.props.codeLength; i++) {
        guesses.push(React.createElement(Guess, { key: i,
          colorChoices: this.props.colorChoices,
          isActive: this.props.currentRow
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
        React.createElement(
          'button',
          { className: buttonClasses },
          'Submit?'
        )
      );
    }
  });

  return Row;
});