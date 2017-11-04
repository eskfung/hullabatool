import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import AnswerPeg from '../../assets/javascripts/mastermind/answer_peg';
import ColoredPeg from '../../assets/javascripts/mastermind/colored_peg';

describe('AnswerPeg', function() {
  it('is a ColoredPeg', function(done) {
    const answerPegWrapper = shallow(<AnswerPeg />);
    expect(answerPegWrapper.type()).to.equal(ColoredPeg);

    done();
  });

  describe('when the game is not over', function() {
    it('passes the unsolved class prop to its ColoredPeg', function(done) {
      const answerPegWrapper = shallow(<AnswerPeg gameOver={false} />);
      const coloredPeg = answerPegWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['unsolved']).to.be.true;
      done();
    });
  });

  describe('when the game is over', function() {
    it('does not pass the unsolved class prop to its ColoredPeg', function(done) {
      const answerPegWrapper = shallow(<AnswerPeg gameOver={true} />);
      const coloredPeg = answerPegWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['unsolved']).to.be.false;
      done();
    });

    it('passes classes indicating the color of the peg', function(done) {
      const answerPegWrapper = shallow(<AnswerPeg gameOver={true} color={'foo'} />);
      const coloredPeg = answerPegWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['colored-peg--foo']).to.be.true;
      done();
    });
  });
});
