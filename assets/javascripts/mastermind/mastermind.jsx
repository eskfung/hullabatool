define([
  'react',
  'mastermind/row'
], function(React, Row) {
  var Mastermind = React.createClass({
    render: function () {
      return (
        <div>
          <h1>Hello, world!</h1>
          <table>
            <Row />
          </table>
        </div>
      );
    }
  });

  return Mastermind;
});
