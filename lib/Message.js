/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;

var Message = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  render(): any {
    var {className, ...props} = this.props;
    return (
      <span {...props} className={cx('rf-Message', className)}>
        {this.props.children}
      </span>
    );
  }
});

module.exports = Message;
