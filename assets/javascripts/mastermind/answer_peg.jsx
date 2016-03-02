define([
  'react',
  'classnames',
  'mastermind/colored_peg'
], function(React, classnames, ColoredPeg) {
  var AnswerPeg = React.createClass({
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
      return (
        <ColoredPeg classes={this._classes()} />
      );
    }
  });

  return AnswerPeg;
});