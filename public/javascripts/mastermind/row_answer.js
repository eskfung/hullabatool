define(['react', 'mastermind/peg'], function (React, Peg) {
  var RowAnswer = React.createClass({
    displayName: 'RowAnswer',

    render: function () {
      var answers = [];
      this.props.answers.forEach(function (answer, index) {
        console.log(answer);
        console.log(index);
        answers.push(React.createElement(Peg, { key: index, color: answer }));
      });
      return React.createElement(
        'div',
        null,
        answers
      );
    }
  });

  return RowAnswer;
});