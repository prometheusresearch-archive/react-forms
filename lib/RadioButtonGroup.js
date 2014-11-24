/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React         = require('react');
var PropTypes     = React.PropTypes;
var emptyFunction = require('./emptyFunction');

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

type option = {value: ?string; name: string};

var RadioButtonGroup = React.createClass({

    propTypes: {
      options: PropTypes.array.isRequired,
      allowEmpty: PropTypes.bool,
      value: PropTypes.string,
      onChange: PropTypes.func
    },

    render(): ?ReactElement {
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

    renderOption(option: option): ?ReactElement {
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

    getDefaultProps() {
      return {onChange: emptyFunction};
    },

    onChange(value: ?string) {
      this.props.onChange(value);
    }
});

module.exports = RadioButtonGroup;
