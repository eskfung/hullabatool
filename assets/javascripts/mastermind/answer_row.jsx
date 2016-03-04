define([
  'react',
  'classnames',
  'mastermind/answer_peg'
], function(React, classnames, AnswerPeg) {
  var AnswerRow = React.createClass({
    propTypes: {
      answer: React.PropTypes.arrayOf(React.PropTypes.string),
      gameOver: React.PropTypes.bool
    },

    render: function () {
      var answer = [],
          rowClasses = classnames({
            'row': true,
            'answer-row': true
          });

      for (var i = 0; i < this.props.answer.length; i++) {
        answer.push(<AnswerPeg key={i} color={this.props.answer[i]} gameOver={this.props.gameOver} />);
      }

      return (
        <div className={rowClasses} title={'Answer Row'}>
          {answer}
        </div>
      );
    }
  });

  return AnswerRow;
});
