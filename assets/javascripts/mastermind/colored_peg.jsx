define([
  'react',
  'classnames'
], function(React, classnames) {
  var ColoredPeg = React.createClass({
    propTypes: {
      onClick: React.PropTypes.func
    },

    handleClick: function(e) {
      if (this.props.onClick) {
        this.props.onClick.call(this, e);
      }
    },

    render: function () {
      var classes = classnames('peg', this.props.classes)

      return (
        <div className={classes} onClick={this.handleClick}>
        </div>
      );
    }
  });

  return ColoredPeg;
});
