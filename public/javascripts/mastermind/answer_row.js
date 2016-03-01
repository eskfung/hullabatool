define(['react', 'classnames', 'mastermind/guess'], function (React, classnames, Guess) {
  var AnswerRow = React.createClass({
    displayName: 'AnswerRow',

    render: function () {
      var answer = [],
          rowClasses = classnames({
        'row': true,
        'answer-row': true
      });

      for (var i = 0; i < this.props.answer.length; i++) {
        answer.push(React.createElement(Guess, { key: i, color: this.props.answer[i], unsolved: this.props.unsolved }));
      }

      return React.createElement(
        'div',
        { className: rowClasses, title: 'Answer Row' },
        React.createElement(
          'div',
          { className: 'guess-group' },
          answer
        )
      );
    }
  });

  return AnswerRow;
});