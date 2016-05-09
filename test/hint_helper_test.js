import { expect } from 'chai';
import HintHelper from '../assets/javascripts/mastermind/hint_helper';

describe('HintHelper', function() {
  describe('#blackPegs', function() {
    it('is the count of keys that have matching values', function(done) {
      expect(new HintHelper({0:'white'}, {0:'red'}).blackPegs()).to.equal(0);
      expect(new HintHelper({0:'red'}, {0:'red'}).blackPegs()).to.equal(1);
      done();
    });
  });

  describe('#whitePegs', function() {
    it('is the count of values that are present in both hashes but whose keys do not match', function(done) {
      expect(new HintHelper({0:'white'}, {0:'red'}).whitePegs()).to.equal(0);
      expect(new HintHelper({0:'white', 1:'red'}, {0:'red', 1:'green'}).whitePegs()).to.equal(1);
      expect(new HintHelper({0:'red', 1:'red', 2:'green'}, {0:'red', 1:'green', 2:'red'}).whitePegs()).to.equal(2);
      done();
    });
  });
});
