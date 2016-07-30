var React = require('react');
var classnames = require('classnames');

var ColoredPeg = React.createClass({
  propTypes: {
    classes: React.PropTypes.object,
    onClick: React.PropTypes.func
  },

  handleClick: function(e) {
    if (this.props.onClick) {
      return this.props.onClick.call(this, e);
    }
  },

  render: function () {
    var classes = classnames('peg', this.props.classes);

    return (
      <div className={classes} onClick={this.handleClick}>
      </div>
    );
  }
});

module.exports = ColoredPeg;
