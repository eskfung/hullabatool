import React from 'react';
import { shallow } from 'enzyme';
import AnswerPeg from 'mastermind/AnswerPeg';
import ColoredPeg from 'mastermind/ColoredPeg';

describe('AnswerPeg', () => {
  it('is a ColoredPeg', () => {
    const answerPegWrapper = shallow(<AnswerPeg />);
    expect(answerPegWrapper.type()).toEqual(ColoredPeg);
  });

  describe('when the game is not over', () => {
    it('passes the unsolved class prop to its ColoredPeg', () => {
      const answerPegWrapper = shallow(<AnswerPeg gameOver={false} />);
      const coloredPeg = answerPegWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['unsolved']).toEqual(true);
    });
  });

  describe('when the game is over', () => {
    it('does not pass the unsolved class prop to its ColoredPeg', () => {
      const answerPegWrapper = shallow(<AnswerPeg gameOver={true} />);
      const coloredPeg = answerPegWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['unsolved']).toEqual(false);
    });

    it('passes classes indicating the color of the peg', () => {
      const answerPegWrapper = shallow(<AnswerPeg gameOver={true} color={'foo'} />);
      const coloredPeg = answerPegWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['colored-peg--foo']).toEqual(true);
    });
  });
});
