import { map } from "lodash";
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import AnswerPeg from "mastermind/AnswerPeg";

export default class AnswerRow extends React.Component {
  render() {
    const answer = map(this.props.answer, (color, index) => (
      <AnswerPeg
        key={index}
        color={color}
        gameOver={this.props.gameOver} />
    ));

    const rowClasses = cx("row", "answer-row");

    return (
      <div className={rowClasses} title="Answer Row">
        <div className="pegs">
          {answer}
        </div>
      </div>
    );
  }
}

AnswerRow.propTypes = {
  answer: PropTypes.objectOf(PropTypes.string),
  gameOver: PropTypes.bool,
};
