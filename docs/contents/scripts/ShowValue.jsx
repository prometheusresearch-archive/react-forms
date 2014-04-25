/**
 * @jsx React.DOM
 */

(function() {

var cx               = React.addons.classSet;
var cloneWithProps   = React.addons.cloneWithProps;

window.ShowValue = React.createClass({

  propTypes: {
    children: React.PropTypes.component.isRequired,
    onUpdate: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      value: this.props.children.props.value,
      validation: this.props.children.props.validation,
      deserializedValue: this.props.children.props.deserializedValue ||
        this.props.children.props.value,
      showDebugInfo: true
    };
  },

  onChange: function(value, validation, deserializedValue) {
    this.setState({
      value: value,
      validation: validation,
      deserializedValue: deserializedValue
    });
  },

  toggleDebugInfo: function() {
    this.setState({showDebugInfo: !this.state.showDebugInfo});
  },

  render: function() {
    var props = {
      value: this.state.value,
      validation: this.state.validation,
      deserializedValue: this.state.deserializedValue
    };

    if (this.props.onUpdate) {
      props.onUpdate = this.onChange;
    } else {
      props.onChange = this.onChange;
    }

    var horizontal = this.props.horizontal;

    return this.transferPropsTo(
      <div className={cx({ShowValue: true, row: horizontal})}>
        <div className={cx({ShowValueComponent: true, 'col-md-6': horizontal})}>
          <p className="text">Component:</p>
          {cloneWithProps(this.props.children, props)}
        </div>
        <div className={cx({ShowValueValue: true, 'col-md-6': horizontal})}>
          <div className="ShowDebugInfoToggle">
            <label>
              <input
                type="checkbox"
                checked={this.state.showDebugInfo}
                onChange={this.toggleDebugInfo} /> Show debug info
            </label>
          </div>
          <p className="text">Value:</p>
          <pre className="value">
            {this.state.value === undefined ?
              'null' :
              JSON.stringify(this.state.value, undefined, 2)}
          </pre>
          {this.state.showDebugInfo &&
            <div className="DebugInfo">
              <p className="text">DeserializedValue:</p>
              <pre className="value">
                {this.state.deserializedValue === undefined ?
                  'null' :
                  JSON.stringify(this.state.deserializedValue, undefined, 2)}
              </pre>
              <p className="text">Validation:</p>
              <pre className="value">
                {this.state.validation === undefined ?
                  'null' :
                  JSON.stringify(this.state.validation, undefined, 2)}
              </pre>
            </div>}
        </div>
      </div>
    );
  }
});

})();
