define([
  'react',
  'mastermind/peg'
], function(React, Peg) {
  var RowAnswer = React.createClass({
    render: function () {
      var answers = [];
      this.props.answers.forEach(function(answer, index) {
        answers.push(<Peg key={index} color={answer} />);
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
