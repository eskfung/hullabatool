define([
  'react',
  'mastermind/peg'
], function(React, Peg) {
  var RowAnswer = React.createClass({
    render: function () {
      var answers = [];
      this.props.answers.forEach(function(answer) {
        answers.push(<Peg color={answer} />);
      });
      return (
        <div>
          {answers}
        </div>
      );
    }
  });

  return RowAnswer;
});
