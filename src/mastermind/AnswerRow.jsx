import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnswerPeg from 'mastermind/AnswerPeg';

export default React.createClass({
  propTypes: {
    answer: PropTypes.objectOf(PropTypes.string),
    gameOver: PropTypes.bool
  },

  render: function () {
    const answer = _.map(this.props.answer, function(color, index) {
      return <AnswerPeg key={index} color={color} gameOver={this.props.gameOver} />;
    }.bind(this));

    const rowClasses = classnames({
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
