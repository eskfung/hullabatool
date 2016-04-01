var expect = require('chai').expect;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var shallowRenderer = TestUtils.createRenderer();
var Guess = require(__dirname + '/../assets/javascripts/mastermind/guess');
var ColoredPeg = require(__dirname + '/../assets/javascripts/mastermind/colored_peg');

describe('Guess', function() {
  beforeEach(function() {
    shallowRenderer.render(<Guess />);
  });

  it('is a ColoredPeg', function(done) {
    var guessComponent = shallowRenderer.getRenderOutput();
    expect(guessComponent.type).to.equal(ColoredPeg);

    done();
  });
});
