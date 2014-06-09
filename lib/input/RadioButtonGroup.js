/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

function renderEmptyOption(props, onChange) {
  return (
    <div
        className="rf-RadioButtonGroup__button"
        key="">
      <label
        className="rf-RadioButtonGroup__label">
        <input
          checked={props.checked}
          className="rf-RadioButtonGroup__radio"
          type="radio"
          name={props.name}
          onChange={onChange.bind(null, null)}
          value="" />
        <span className="rf-RadioButtonGroup__caption">
          none
        </span>
      </label>
    </div>
  );
}

var RadioButtonGroup = React.createClass({

    propTypes: {
      options: React.PropTypes.array.isRequired,
      allowEmpty: React.PropTypes.bool,
      value: React.PropTypes.string,
      onChange: React.PropTypes.func
    },

    render: function() {
      var options = this.props.options.map(this.renderOption);

      if (this.props.allowEmpty) {
        options.unshift(renderEmptyOption({
            name: this._rootNodeID,
            checked: !this.props.value
        }, this.onChange));
      }

      return (
        <div className="rf-RadioButtonGroup">
          {options}
        </div>
      );
    },

    renderOption: function(option) {
      var name = this._rootNodeID;
      var checked = this.props.value ?
          this.props.value === option.value :
          false;
      return (
        <div
          className="rf-RadioButtonGroup__button"
          key={option.value}>
          <label
            className="rf-RadioButtonGroup__label">
            <input
              checked={checked}
              className="rf-RadioButtonGroup__radio"
              type="radio"
              name={name}
              onChange={this.onChange.bind(null, option.value)}
              value={option.value} />
            <span className="rf-RadioButtonGroup__caption">
              {option.name}
            </span>
          </label>
        </div>
      );
    },

    onChange: function(value) {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
});

module.exports = RadioButtonGroup;
