/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react');

var Code = React.createClass({

  render: function() {
    var indent;
    var code = this.props.children
      .split('\n')
      .filter((line, idx) => !(idx === 0 && line === ''))
      .map((line) => {
        if (indent === undefined) {
          var m = /^ +/.exec(line);
          indent = m ? m[0].length : 0;
        }
        line = line.substring(indent);
        if (this.props.indent) {
          line = (new Array(this.props.indent + 1).join(' ')) + line;
        }
        return line;
      })
      .join('\n');
    return (
      <pre className="Code">{code}</pre>
    );
  }
});

module.exports = Code;
