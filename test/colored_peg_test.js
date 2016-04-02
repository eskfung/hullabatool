var expect = require('chai').expect;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var shallowRenderer = TestUtils.createRenderer();
var ColoredPeg = require(__dirname + '/../assets/javascripts/mastermind/colored_peg');

describe('ColoredPeg', function() {
  beforeEach(function() {
    shallowRenderer.render(<ColoredPeg />);
  });

  it('is a div', function(done) {
    var coloredPegComponent = shallowRenderer.getRenderOutput();
    expect(coloredPegComponent.type).to.equal('div');

    done();
  });

  it('has a peg classname', function(done) {
    var coloredPegComponent = shallowRenderer.getRenderOutput();
    expect(coloredPegComponent.props.className.split(' ').indexOf('peg')).to.not.equal(-1);

    done();
  });

  it('has an onClick function', function(done) {
    shallowRenderer.render(<ColoredPeg onClick={function() {return false;}}/>);
    var coloredPegComponent = shallowRenderer.getRenderOutput();

    expect(coloredPegComponent.props.onClick()).to.be.false;

    done();
  });
});
