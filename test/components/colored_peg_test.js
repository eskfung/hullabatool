import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ColoredPeg from '../../src/mastermind/colored_peg';

describe('ColoredPeg', function() {
  it('is a div', function(done) {
    const coloredPegWrapper = shallow(<ColoredPeg />);
    expect(coloredPegWrapper.type()).to.equal('div');

    done();
  });

  it('has a peg classname', function(done) {
    const coloredPegWrapper = shallow(<ColoredPeg />);
    expect(coloredPegWrapper.props().className.split(' ').indexOf('peg')).to.not.equal(-1);

    done();
  });

  it('calls its onClick function when clicked', function(done) {
    const spy = sinon.spy();
    const coloredPegWrapper = shallow(<ColoredPeg onClick={spy}/>);
    coloredPegWrapper.simulate('click');
    expect(spy.calledOnce).to.be.true;

    done();
  });
});
