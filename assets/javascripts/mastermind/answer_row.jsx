var _ = require('lodash');
var React = require('react');
var classnames = require('classnames');
var AnswerPeg = require('./answer_peg.jsx');

var AnswerRow = React.createClass({
  propTypes: {
    answer: React.PropTypes.objectOf(React.PropTypes.string),
    gameOver: React.PropTypes.bool
  },

  render: function () {
    var answer = _.map(this.props.answer, function(color, index) {
      return <AnswerPeg key={index} color={color} gameOver={this.props.gameOver} />
    }.bind(this));

    var rowClasses = classnames({
      'row': true,
      'answer-row': true
    });

    return (
      <div className={rowClasses} title={'Answer Row'}>
        {answer}
      </div>
    );
  }
});

module.exports = AnswerRow;
