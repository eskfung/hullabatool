import React from 'react';
import PropTypes from 'prop-types';
import ColoredPeg from 'mastermind/ColoredPeg';
import cx from 'classnames';

export default class AnswerPeg extends React.Component {
  render() {
    const classes = cx({
      'unsolved': !this.props.gameOver,
      [`colored-peg--${this.props.color}`]: this.props.gameOver,
    });

    return (
      <ColoredPeg classes={classes} />
    );
  }
}

AnswerPeg.propTypes = {
  color: PropTypes.string,
  gameOver: PropTypes.bool,
};
