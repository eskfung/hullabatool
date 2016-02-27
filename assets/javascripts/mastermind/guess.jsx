define([
  'react',
  'classnames'
], function(React, classnames) {
  var Guess = React.createClass({
    render: function () {
      var color = this.props.color ? this.props.color : 'blank';
      var classes = classnames('guess', 'guess-' + color)

      return (
        <div className={classes}>
        </div>
      );
    }
  });

  return Guess;
});
