var React = require('react');
var classnames = require('classnames');

var Peg = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },

  render: function () {
    var color = this.props.color ? this.props.color : 'blank';
    var classes = classnames('peg', 'peg-' + color);

    return (
      <div className={classes}>
      </div>
    );
  }
});

module.exports = Peg;
