define([
  'react'
], function(React) {
  var Row = React.createClass({
    render: function () {
      return (
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
      );
    }
  });

  return Row;
});
