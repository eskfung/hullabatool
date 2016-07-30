var _ = require('lodash');

// answers {0: 'white', 1: 'black'}
// guesses {0: 'red', 1: 'blue'}
var HintHelper = function (answers, guesses) {
  this.answers = answers;
  this.guesses = guesses;

  this._nonExactAnswerPegs = function() {
    return _.omitBy(this.answers, function(value, key) {
      return this.guesses[key] == value;
    }.bind(this));
  };

  this._nonExactGuessPegs = function() {
    return _.omitBy(this.guesses, function(value, key) {
      return this.answers[key] == value;
    }.bind(this));
  };

  this.blackPegs = function() {
    return _.size(this.answers) - _.size(this._nonExactAnswerPegs());
  };

  this.whitePegs = function() {
    var whitePegs = 0,
      answerRemainder = this._nonExactAnswerPegs();

    _.each(this._nonExactGuessPegs(), function(guess) {
      var foundColorIndex = _.findKey(answerRemainder, function(answer) {
        return answer == guess;
      });

      if (foundColorIndex) {
        answerRemainder = _.omit(answerRemainder, foundColorIndex);
        whitePegs++;
      }
    }.bind(this));

    return whitePegs;
  };
};

module.exports = HintHelper;
