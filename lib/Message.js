/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React = require('react');
var cx = require('classnames');

var Message = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  render(): ?ReactElement {
    var {className, ...props} = this.props;
    return (
      <span {...props} className={cx('rf-Message', className)}>
        {this.props.children}
      </span>
    );
  }
});

module.exports = Message;
