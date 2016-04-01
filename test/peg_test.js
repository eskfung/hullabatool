var expect = require('chai').expect;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var shallowRenderer = TestUtils.createRenderer();
var Peg = require(__dirname + '/../assets/javascripts/mastermind/peg');

describe('Peg', function() {
  beforeEach(function() {
    shallowRenderer.render(<Peg />);
  });

  it('is a div', function(done) {
    var pegComponent = shallowRenderer.getRenderOutput();
    expect(pegComponent.type).to.equal('div');

    done();
  });

  it('has a peg classname', function(done) {
    var pegComponent = shallowRenderer.getRenderOutput();
    expect(pegComponent.props.className.split(' ').indexOf('peg')).to.not.equal(-1);

    done();
  });

  context('without a color', function() {
    it('has a peg-blank classname', function(done) {
      var pegComponent = shallowRenderer.getRenderOutput();
      expect(pegComponent.props.className.split(' ').indexOf('peg-blank')).to.not.equal(-1);

      done();
    });
  });

  context('with a color passed in as a prop', function() {
    it('has a peg- classname matching the color prop', function(done) {
      shallowRenderer.render(<Peg color='lavender'/>);
      var pegComponent = shallowRenderer.getRenderOutput();
      expect(pegComponent.props.className.split(' ').indexOf('peg-lavender')).to.not.equal(-1);

      done();
    });
  });
});
