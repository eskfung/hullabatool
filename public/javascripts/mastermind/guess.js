define(['react', 'classnames'], function (React, classnames) {
  var Guess = React.createClass({
    displayName: 'Guess',

    render: function () {
      var color = this.props.color ? this.props.color : 'blank';
      var classes = classnames('guess', 'guess-' + color);

      return React.createElement('div', { className: classes });
    }
  });

  return Guess;
});