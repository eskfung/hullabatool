var _ = require('lodash');
var React = require('react');
var PropTypes = require('prop-types');
var classnames = require('classnames');
var AnswerPeg = require('./answer_peg.jsx');

var AnswerRow = React.createClass({
  propTypes: {
    answer: PropTypes.objectOf(PropTypes.string),
    gameOver: PropTypes.bool
  },

  render: function () {
    var answer = _.map(this.props.answer, function(color, index) {
      return <AnswerPeg key={index} color={color} gameOver={this.props.gameOver} />;
    }.bind(this));

    var rowClasses = classnames({
      'row': true,
      'answer-row': true
    });

    return (
      <div className={rowClasses} title={'Answer Row'}>
        <div className='pegs'>
          {answer}
        </div>
      </div>
    );
  }
});

module.exports = AnswerRow;
