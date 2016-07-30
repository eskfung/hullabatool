var React = require('react');
var ColoredPeg = require('./colored_peg.jsx');

var AnswerPeg = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    gameOver: React.PropTypes.bool
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
