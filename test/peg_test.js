import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Peg from '../assets/javascripts/mastermind/peg';

describe('Peg', function() {
  it('is a div', function(done) {
    var pegWrapper = shallow(<Peg />);
    expect(pegWrapper.type()).to.equal('div');

    done();
  });

  it('has a peg classname', function(done) {
    var pegWrapper = shallow(<Peg />);
    expect(pegWrapper.props().className.split(' ').indexOf('peg')).to.not.equal(-1);

    done();
  });

  context('without a color', function() {
    it('has a peg-blank classname', function(done) {
      var pegWrapper = shallow(<Peg />);
      expect(pegWrapper.props().className.split(' ').indexOf('peg-blank')).to.not.equal(-1);

      done();
    });
  });

  context('with a color passed in as a prop', function() {
    it('has a peg- classname matching the color prop', function(done) {
      var pegWrapper = shallow(<Peg color='lavender'/>);
      expect(pegWrapper.props().className.split(' ').indexOf('peg-lavender')).to.not.equal(-1);

      done();
    });
  });
});
