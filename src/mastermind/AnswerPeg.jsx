import React from 'react';
import PropTypes from 'prop-types';
import ColoredPeg from 'mastermind/ColoredPeg';

export default React.createClass({
  propTypes: {
    color: PropTypes.string,
    gameOver: PropTypes.bool
  },

  _classes: function () {
    const classes = {
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
