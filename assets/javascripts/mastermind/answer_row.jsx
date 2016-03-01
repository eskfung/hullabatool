define([
  'react',
  'classnames',
  'mastermind/guess'
], function(React, classnames, Guess) {
  var AnswerRow = React.createClass({
    render: function () {
      var answer = [],
          rowClasses = classnames({
            'row': true,
            'answer-row': true
          });

      for (var i = 0; i < this.props.answer.length; i++) {
        answer.push(<Guess key={i} color={this.props.answer[i]} unsolved={this.props.unsolved} />);
      }

      return (
        <div className={rowClasses} title={'Answer Row'}>
          <div className='guess-group'>
            {answer}
          </div>
        </div>
      );
    }
  });

  return AnswerRow;
});
