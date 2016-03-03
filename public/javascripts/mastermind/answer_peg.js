define(['react', 'classnames', 'mastermind/colored_peg'], function (React, classnames, ColoredPeg) {
  var AnswerPeg = React.createClass({
    displayName: 'AnswerPeg',

    propTypes: {
      color: React.PropTypes.string,
      unsolved: React.PropTypes.bool
    },

    _classes: function () {
      var classes = {
        'unsolved': this.props.unsolved
      };

      if (!this.props.unsolved) {
        classes['colored-peg--' + this.props.color] = true;
      }

      return classes;
    },

    render: function () {
      return React.createElement(ColoredPeg, { classes: this._classes() });
    }
  });

  return AnswerPeg;
});