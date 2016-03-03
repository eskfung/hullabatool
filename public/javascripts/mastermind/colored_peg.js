define(['react', 'classnames'], function (React, classnames) {
  var ColoredPeg = React.createClass({
    displayName: 'ColoredPeg',

    propTypes: {
      classes: React.PropTypes.object,
      onClick: React.PropTypes.func
    },

    handleClick: function (e) {
      if (this.props.onClick) {
        this.props.onClick.call(this, e);
      }
    },

    render: function () {
      var classes = classnames('peg', this.props.classes);

      return React.createElement('div', { className: classes, onClick: this.handleClick });
    }
  });

  return ColoredPeg;
});