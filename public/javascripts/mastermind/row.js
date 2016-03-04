define(['underscore', 'react', 'classnames', 'mastermind/guess', 'mastermind/peg'], function (_, React, classnames, Guess, Peg) {
  var Row = React.createClass({
    displayName: 'Row',

    propTypes: {
      answer: React.PropTypes.arrayOf(React.PropTypes.string),
      codeLength: React.PropTypes.number,
      colorChoices: React.PropTypes.arrayOf(React.PropTypes.string),
      currentRow: React.PropTypes.bool,
      reactKey: React.PropTypes.number,
      resolveTurn: React.PropTypes.func
    },

    getInitialState: function () {
      return {
        guesses: {},
        hintPegs: {
          black: 0,
          white: 0
        }
      };
    },

    _guessListener: function (guessIndex, color) {
      var prevGuesses = this.state.guesses;
      prevGuesses[guessIndex] = color;
      this.setState({ guesses: prevGuesses });
    },

    _handleSubmit: function () {
      var hintPegs = this.getHintPegs();
      this.setState({
        hintPegs: hintPegs
      });
      this.props.resolveTurn(this.isGuessCorrect(hintPegs));
    },

    isGuessCorrect: function (hintPegs) {
      return hintPegs.black == this.props.codeLength;
    },

    getHintPegs: function () {
      // Convert answer array into object
      var answerObj = _.reduce(this.props.answer, function (obj, value, index) {
        obj[index] = value;
        return obj;
      }, {});

      // Get the black pegs
      var answerRemainder = _.omit(answerObj, function (value, key, object) {
        return this.state.guesses[key] == value;
      }.bind(this));

      var guessRemainder = _.omit(this.state.guesses, function (value, key, object) {
        return answerObj[key] == value;
      }.bind(this));

      var blackPegs = this.props.answer.length - _.values(answerRemainder).length;

      // Get the white pegs
      var whitePegs = 0;
      _.each(guessRemainder, function (guess) {
        var foundColorIndex = _.findKey(answerRemainder, function (answer) {
          return answer == guess;
        });

        if (foundColorIndex) {
          answerRemainder = _.omit(answerRemainder, foundColorIndex);
          whitePegs++;
        }
      });

      return {
        black: blackPegs,
        white: whitePegs
      };
    },

    _renderHintPegs: function () {
      var pegs = [];
      var remainder = this.props.codeLength - (this.state.hintPegs.black + this.state.hintPegs.white);

      _.times(this.state.hintPegs.black, function (n) {
        pegs.push(React.createElement(Peg, { key: 'black-' + n, color: 'black' }));
      });

      _.times(this.state.hintPegs.white, function (n) {
        pegs.push(React.createElement(Peg, { key: 'white-' + n, color: 'white' }));
      });

      _.times(remainder, function (n) {
        pegs.push(React.createElement(Peg, { key: 'blank-' + n }));
      });

      return pegs;
    },

    _renderSubmitButton: function () {
      var buttonClasses = classnames({
        'btn': true,
        'hidden': !this.props.currentRow || _.keys(this.state.guesses).length != this.props.codeLength
      });

      return React.createElement(
        'button',
        { className: buttonClasses, onClick: this._handleSubmit },
        'Submit'
      );
    },

    render: function () {
      var guesses = [],
          rowClasses = classnames({
        'row': true,
        'current-row': this.props.currentRow
      });

      for (var i = 0; i < this.props.codeLength; i++) {
        guesses.push(React.createElement(Guess, { key: i,
          reactKey: i,
          colorChoices: this.props.colorChoices,
          isActive: this.props.currentRow,
          onClick: this._guessListener
        }));
      }

      return React.createElement(
        'div',
        { className: rowClasses, title: 'Row ' + this.props.reactKey },
        React.createElement(
          'div',
          { className: 'peg-group' },
          this._renderHintPegs()
        ),
        React.createElement(
          'div',
          { className: 'guess-group' },
          guesses
        ),
        this._renderSubmitButton()
      );
    }
  });

  return Row;
});