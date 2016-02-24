define([
  'react',
  'mastermind/row',
  'mastermind/row_answer'
], function(React, Row, RowAnswer) {
  var Mastermind = React.createClass({
    render: function () {
      var ANSWERS=['red','red','blue', 'white', 'black', undefined];
      return (
        <div>
          <h1>Hello, world!</h1>
          <table>
            <Row />
          </table>
          <RowAnswer answers={ANSWERS} />
        </div>
      );
    }
  });

  return Mastermind;
});
