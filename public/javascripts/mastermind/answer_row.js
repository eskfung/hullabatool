define(['react', 'classnames', 'mastermind/answer_peg'], function (React, classnames, AnswerPeg) {
  var AnswerRow = React.createClass({
    displayName: 'AnswerRow',

    render: function () {
      var answer = [],
          rowClasses = classnames({
        'row': true,
        'answer-row': true
      });

      for (var i = 0; i < this.props.answer.length; i++) {
        answer.push(React.createElement(AnswerPeg, { key: i, color: this.props.answer[i], unsolved: this.props.unsolved }));
      }

      return React.createElement(
        'div',
        { className: rowClasses, title: 'Answer Row' },
        answer
      );
    }
  });

  return AnswerRow;
});