import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class ColoredPeg extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    return this.props.onClick && this.props.onClick.call(this, event);
  }

  render() {
    const classes = cx('peg', this.props.classes);

    return (
      <div className={classes} onClick={this.handleClick} />
    );
  }
}

ColoredPeg.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func,
};
