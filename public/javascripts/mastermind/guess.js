define(['react', 'classnames', 'mastermind/colored_peg'], function (React, classnames, ColoredPeg) {
  var Guess = React.createClass({
    displayName: 'Guess',

    _onClick: function () {
      this.setState({ color: this._nextColor() });
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
      return React.createElement(ColoredPeg, { classes: this._classes(), onClick: this._onClick });
    }
  });

  return Guess;
});