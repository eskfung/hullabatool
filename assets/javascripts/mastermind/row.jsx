define([
  'react',
  'mastermind/guess',
  'mastermind/peg'
], function(React, Guess, Peg) {
  var Row = React.createClass({
    render: function () {
      var guesses = [],
          pegs = [];
      for (var i = 0; i < this.props.codeLength; i++) {
        guesses.push(<Guess />);
        pegs.push(<Peg />)
      }

      return (
        <div className='row' title={'Row ' + this.props.reactKey}>
          <div className='guess-group'>
            {guesses}
          </div>
          <div className='peg-group'>
            {pegs}
          </div>
        </div>
      );
    }
  });

  return Row;
});
