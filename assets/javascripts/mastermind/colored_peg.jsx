import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.createClass({
  propTypes: {
    classes: PropTypes.object,
    onClick: PropTypes.func
  },

  handleClick: function(e) {
    if (this.props.onClick) {
      return this.props.onClick.call(this, e);
    }
  },

  render: function () {
    const classes = classnames('peg', this.props.classes);

    return (
      <div className={classes} onClick={this.handleClick}>
      </div>
    );
  }
});
