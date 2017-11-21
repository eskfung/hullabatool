import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Peg extends React.Component {
  render() {
    const classes = cx({
      'peg': true,
      [`peg-${this.props.color}`]: this.props.color,
      'peg-blank': !this.props.color,
    });

    return (
      <div className={classes} />
    );
  }
}

Peg.propTypes = {
  color: PropTypes.string,
};
