import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Guess from '../../assets/javascripts/mastermind/guess';
import ColoredPeg from '../../assets/javascripts/mastermind/colored_peg';

describe('Guess', function() {
  it('is a ColoredPeg', function(done) {
    var guessWrapper = shallow(<Guess />);
    expect(guessWrapper.type()).to.equal(ColoredPeg);
    expect(guessWrapper.find(ColoredPeg)).to.have.length(1);
    done();
  });

  it('has an initial color state of "blank"', function(done) {
    var guessWrapper = shallow(<Guess />);
    expect(guessWrapper.state('color')).to.equal('blank');
    done();
  });

  it('passes the colored-peg--blank class prop to its ColoredPeg', function(done) {
    var guessWrapper = shallow(<Guess />);
    var coloredPeg = guessWrapper.find(ColoredPeg);
    expect(coloredPeg.prop('classes')['colored-peg--blank']).to.be.true;
    done();
  });

  describe('when the color state changes', function() {
    it('passes the colored-peg--{color} class prop to its ColoredPeg', function(done) {
      var guessWrapper = shallow(<Guess />);
      guessWrapper.setState({'color':'lavender'});

      var coloredPeg = guessWrapper.find(ColoredPeg);
      expect(coloredPeg.prop('classes')['colored-peg--lavender']).to.be.true;
      done();
    });
  });

  describe('when Guess is active', function() {
    it('calls the onClick prop function with the react key and next color', function(done) {
      var spy = sinon.spy();
      var reactKey = 1;
      var guessWrapper = shallow(<Guess
        reactKey={reactKey}
        isActive={true}
        colorChoices={['red']}
        onClick={spy}
      />);
      var nextColor = guessWrapper.instance().nextColor();
      guessWrapper.simulate('click');

      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(reactKey, nextColor)).to.be.true;
      done();
    });

    it('sets the state to the next color', function(done) {
      var spy = sinon.spy();
      var guessWrapper = shallow(<Guess
        reactKey={1}
        isActive={true}
        colorChoices={['red']}
        onClick={spy}
      />);
      var nextColor = guessWrapper.instance().nextColor();
      guessWrapper.simulate('click');

      expect(guessWrapper.state().color).to.equal(nextColor);
      done();
    });
  });

  describe('when Guess is inactive', function() {
    it('does not call the onClick prop function', function(done) {
      var spy = sinon.spy();
      var guessWrapper = shallow(<Guess
        isActive={false}
        onClick={spy}
      />);
      guessWrapper.simulate('click');

      expect(spy.called).to.be.false;
      done();
    });
  });

  describe('#nextColor', function() {
    describe('when the current state color is not in the color choices', function() {
      it('is the first color', function(done) {
        var guessWrapper = shallow(<Guess colorChoices={['red', 'blue', 'green']}/>);
        guessWrapper.setState({'color':'lavender'});
        expect(guessWrapper.instance().nextColor()).to.equal('red');
        done();
      });
    });

    describe('when the current state color is in the color choices', function() {
      it('is the next color in order', function(done) {
        var guessWrapper = shallow(<Guess colorChoices={['red', 'blue', 'green']}/>);
        guessWrapper.setState({'color':'red'});
        expect(guessWrapper.instance().nextColor()).to.equal('blue');
        done();
      });
    });

    describe('when the current state color is the last of the color choices', function() {
      it('is the first color', function(done) {
        var guessWrapper = shallow(<Guess colorChoices={['red', 'blue', 'green']}/>);
        guessWrapper.setState({'color':'green'});
        expect(guessWrapper.instance().nextColor()).to.equal('red');
        done();
      });
    });
  });
});
