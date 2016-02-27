define([
  'react',
  'mastermind/row',
  'mastermind/row_answer'
], function(React, Row, RowAnswer) {
  var Mastermind = React.createClass({
    render: function () {
      var GUESS_COUNT = 10;
      var COLORS = ['red', 'green', 'blue', 'yellow', 'brown', 'orange', 'black', 'white'];
      var CODE_LENGTH = 4;

      var rows = [];
      for (var i = 0; i < GUESS_COUNT; i++) {
        rows.push(
          <Row key={i}
            reactKey={GUESS_COUNT - i}
            codeLength={CODE_LENGTH}
            colors={COLORS}
          />
        );
      }

      return (
        <div>
          {rows}
        </div>
      );
    }
  });

  return Mastermind;
});
