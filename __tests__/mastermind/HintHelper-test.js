import HintHelper from 'mastermind/HintHelper';

describe('HintHelper', () => {
  describe('#blackPegs', () => {
    it('is the count of keys that have matching values', () => {
      expect(new HintHelper({0:'white'}, {0:'red'}).blackPegs()).toEqual(0);
      expect(new HintHelper({0:'red'}, {0:'red'}).blackPegs()).toEqual(1);
    });
  });

  describe('#whitePegs', () => {
    it('is the count of values that are present in both hashes but whose keys do not match', () => {
      expect(new HintHelper({0:'white'}, {0:'red'}).whitePegs()).toEqual(0);
      expect(new HintHelper({0:'white', 1:'red'}, {0:'red', 1:'green'}).whitePegs()).toEqual(1);
      expect(new HintHelper({0:'red', 1:'red', 2:'green'}, {0:'red', 1:'green', 2:'red'}).whitePegs()).toEqual(2);
    });
  });
});
