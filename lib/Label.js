/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react/addons');
var Hint      = require('./Hint');
var cx        = React.addons.classSet;

var Label = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    hint: React.PropTypes.string,
    className: React.PropTypes.string
  },

  render(): ?ReactElement {
    var {hint, label, className} = this.props;
    if (!hint && !label) {
      return null;
    }
    return (
      <label className={cx(className, 'rf-Label')}>
        {label}
        {hint && <Hint hint={hint} />}
      </label>
    );
  },

  shouldComponentUpdate(nextProps: {label: ?string; hint: ?string; className: ?string}): bool {
    return (
      nextProps.label !== this.props.label &&
      nextProps.hint !== this.props.hint &&
      nextProps.className !== this.props.className
    );
  }
});

module.exports = Label;
