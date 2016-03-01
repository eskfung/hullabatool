define([
  'react',
  'classnames'
], function(React, classnames) {
  var Guess = React.createClass({
    render: function () {
      var classes = {
        'guess': true,
        'guess-unsolved': this.props.unsolved
      };

      if (!this.props.unsolved) {
        var color = this.props.color ? this.props.color : 'blank';
        classes['guess-' + color] = true;
      }

      return (
        <div className={classnames(classes)}>
        </div>
      );
    }
  });

  return Guess;
});
