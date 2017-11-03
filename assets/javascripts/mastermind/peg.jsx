var React = require('react');
var PropTypes = require('prop-types');
var classnames = require('classnames');

var Peg = React.createClass({
  propTypes: {
    color: PropTypes.string
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
