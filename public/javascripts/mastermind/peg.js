define(['react', 'classnames'], function (React, classnames) {
  var Peg = React.createClass({
    displayName: 'Peg',

    propTypes: {
      color: React.PropTypes.string
    },

    render: function () {
      var color = this.props.color ? this.props.color : 'blank';
      var classes = classnames('peg', 'peg-' + color);

      return React.createElement('div', { className: classes });
    }
  });

  return Peg;
});