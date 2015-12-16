/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react');
var Hint      = require('./Hint');
var cx        = require('classnames');

var Label = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    hint: React.PropTypes.string,
    className: React.PropTypes.string
  },

  render(): ?ReactElement {
    var {hint, label, className, ...props} = this.props;
    if (!hint && !label) {
      return null;
    }
    return (
      <label {...props} className={cx(className, 'rf-Label')}>
        <span className="rf-Label__label">{label}</span>
        {hint && <Hint hint={hint} />}
      </label>
    );
  },

  shouldComponentUpdate(nextProps: {label: ?string; hint: ?string; className: ?string}): bool {
    return (
      nextProps.label !== this.props.label ||
      nextProps.hint !== this.props.hint ||
      nextProps.className !== this.props.className
    );
  }
});

module.exports = Label;
