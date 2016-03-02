define([
  'react',
  'classnames',
  'mastermind/colored_peg'
], function(React, classnames, ColoredPeg) {
  var Guess = React.createClass({
    _onClick: function () {
      if (this.props.isActive) {
        this.setState({ color: this._nextColor()});
      }
    },

    _classes: function () {
      return 'colored-peg--' + this.state.color;
    },

    _nextColor: function () {
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

  return Guess;
});
