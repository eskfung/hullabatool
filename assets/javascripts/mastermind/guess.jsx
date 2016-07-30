var React = require('react');
var ColoredPeg = require('./colored_peg.jsx');

var Guess = React.createClass({
  propTypes: {
    colorChoices: React.PropTypes.arrayOf(React.PropTypes.string),
    isActive: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    reactKey: React.PropTypes.number
  },

  _onClick: function () {
    if (this.props.isActive) {
      var nextColor = this.nextColor();
      this.setState({ color: nextColor});
      this.props.onClick(this.props.reactKey, nextColor);
    }
  },

  _classes: function () {
    var classes = {};
    classes['colored-peg--' + this.state.color] = true;
    return classes;
  },

  nextColor: function () {
    var index = this.props.colorChoices.indexOf(this.state.color);
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

module.exports = Guess;
