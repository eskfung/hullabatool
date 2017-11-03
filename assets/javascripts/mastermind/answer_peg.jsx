var React = require('react');
var PropTypes = require('prop-types');
var ColoredPeg = require('./colored_peg.jsx');

var AnswerPeg = React.createClass({
  propTypes: {
    color: PropTypes.string,
    gameOver: PropTypes.bool
  },

  _classes: function () {
    var classes = {
      'unsolved': !this.props.gameOver
    };

    if (this.props.gameOver) {
      classes['colored-peg--' + this.props.color] = true;
    }

    return classes;
  },

  render: function () {
    return (
      <ColoredPeg classes={this._classes()} />
    );
  }
});

module.exports = AnswerPeg;
