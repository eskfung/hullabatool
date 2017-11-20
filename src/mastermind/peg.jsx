import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.createClass({
  propTypes: {
    color: PropTypes.string
  },

  render: function () {
    const color = this.props.color ? this.props.color : 'blank';
    const classes = classnames('peg', 'peg-' + color);

    return (
      <div className={classes}>
      </div>
    );
  }
});
