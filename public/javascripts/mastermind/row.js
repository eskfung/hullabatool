define(['react', 'mastermind/guess', 'mastermind/peg'], function (React, Guess, Peg) {
  var Row = React.createClass({
    displayName: 'Row',

    render: function () {
      var guesses = [],
          pegs = [];
      for (var i = 0; i < this.props.codeLength; i++) {
        guesses.push(React.createElement(Guess, null));
        pegs.push(React.createElement(Peg, null));
      }

      return React.createElement(
        'div',
        { className: 'row', title: 'Row ' + this.props.reactKey },
        React.createElement(
          'div',
          { className: 'guess-group' },
          guesses
        ),
        React.createElement(
          'div',
          { className: 'peg-group' },
          pegs
        )
      );
    }
  });

  return Row;
});