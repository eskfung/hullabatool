import React from 'react';
import PropTypes from 'prop-types';
import ColoredPeg from 'mastermind/ColoredPeg';
import cx from 'classnames';

export default class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blank',
    };
  }

  onClick = () => {
    if (this.props.isActive) {
      const nextColor = this.nextColor();
      this.setState({ color: nextColor});
      this.props.onClick(this.props.reactKey, nextColor);
    }
  }

  nextColor = () => {
    let index = this.props.colorChoices.indexOf(this.state.color);
    index++;

    if (index == this.props.colorChoices.length) {
      index = 0;
    }

    return this.props.colorChoices[index];
  }

  render() {
    const classes = cx(`colored-peg--${this.state.color}`);
    return (
      <ColoredPeg classes={classes} onClick={this.onClick}/>
    );
  }

}

Guess.propTypes = {
  colorChoices: PropTypes.arrayOf(PropTypes.string),
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  reactKey: PropTypes.number,
};
