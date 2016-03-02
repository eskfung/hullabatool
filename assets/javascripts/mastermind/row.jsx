define([
  'react',
  'classnames',
  'mastermind/guess',
  'mastermind/peg'
], function(React, classnames, Guess, Peg) {
  var Row = React.createClass({
    getInitialState: function() {
      return {
        readyToGuess: false
      }
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
        guesses.push(
          <Guess key={i}
            colorChoices={this.props.colorChoices}
            isActive={this.props.currentRow}
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
          <button className={buttonClasses}>Submit?</button>
        </div>
      );
    }
  });

  return Row;
});
