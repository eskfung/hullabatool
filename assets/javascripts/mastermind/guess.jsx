import React from 'react';
import PropTypes from 'prop-types';
import ColoredPeg from './colored_peg.jsx';

export default React.createClass({
  propTypes: {
    colorChoices: PropTypes.arrayOf(PropTypes.string),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    reactKey: PropTypes.number
  },

  _onClick: function () {
    if (this.props.isActive) {
      const nextColor = this.nextColor();
      this.setState({ color: nextColor});
      this.props.onClick(this.props.reactKey, nextColor);
    }
  },

  _classes: function () {
    const classes = {};
    classes['colored-peg--' + this.state.color] = true;
    return classes;
  },

  nextColor: function () {
    let index = this.props.colorChoices.indexOf(this.state.color);
    index++;

    if (index == this.props.colorChoices.length) {
      index = 0;
    }

    return this.props.colorChoices[index];
  },

  getInitialState: function () {
    return {
      color: 'blank'
    };
  },

  render: function () {
    return (
      <ColoredPeg classes={this._classes()} onClick={this._onClick}/>
    );
  }
});
